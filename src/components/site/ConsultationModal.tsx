import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface ConsultationModalProps {
  children: React.ReactNode;
  defaultService?: string;
  title?: string;
  description?: string;
}

import { submitLead } from "@/services/leadService";

export function ConsultationModal({
  children,
  defaultService = "TDS / TCS",
  title = "Get a Callback within 24 Hours",
  description = "Tell us what you need — our CA team will reach out.",
}: ConsultationModalProps) {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: defaultService,
    message: "",
  });

  return (
    <Dialog open={open} onOpenChange={(val) => {
      setOpen(val);
      if (!val) { setTimeout(() => { setErrorMsg(""); }, 300); }
    }}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px] p-6 bg-white z-50">
        <>
          <h3 className="font-display text-xl font-bold text-ink">{title}</h3>
          <p className="text-sm text-muted-foreground mt-1">{description}</p>

          {errorMsg && <div className="mt-3 p-3 bg-red-50 text-red-600 text-sm rounded-lg border border-red-100">{errorMsg}</div>}

          <form
            className="mt-5 space-y-3"
            onSubmit={async (e) => {
              e.preventDefault();
              setIsSubmitting(true);
              setErrorMsg("");

              const res = await submitLead({
                name: form.name,
                phone: form.phone,
                email: form.email,
                serviceName: form.service,
                message: form.message,
                sourceType: "popup",
                formName: "Callback Popup",
                ctaLocation: "Header/Global"
              });

              setIsSubmitting(false);
              if (res.success) {
                setOpen(false);
                navigate({ to: "/thankyou" });
              } else {
                setErrorMsg(res.message || "Failed to submit. Please try again.");
              }
            }}
          >
            <input
              required
              maxLength={100}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Full Name"
              className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand/30 text-ink"
            />
            <input
              required
              type="tel"
              maxLength={15}
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              placeholder="Phone Number"
              className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand/30 text-ink"
            />
            <input
              required
              type="email"
              maxLength={255}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="Email"
              className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand/30 text-ink"
            />
            <select
              required
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
              className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand/30 bg-white text-ink"
            >
              <option value="">Service Required</option>
              <option value="Income Tax / ITR">Income Tax / ITR</option>
              <option value="GST">GST</option>
              <option value="TDS / TCS">TDS / TCS</option>
              <option value="MCA / ROC">MCA / ROC</option>
              <option value="Accounting & Audit">Accounting & Audit</option>
              <option value="Registrations">Registrations</option>
              <option value="Bank Loan Documentation">Bank Loan Documentation</option>
              <option value="Compliance Package">Compliance Package</option>
              <option value="CA Consultation">CA Consultation</option>
              <option value="Other">Other</option>
            </select>
            <textarea
              maxLength={1000}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Message (optional)"
              rows={3}
              className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand/30 text-ink"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-lg bg-brand text-white font-semibold py-3 shadow-lg shadow-brand/30 hover:bg-brand/90 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Request Callback"} {!isSubmitting && <ArrowRight className="h-4 w-4" />}
            </button>
            <p className="text-xs text-muted-foreground text-center">No spam. 100% confidential.</p>
          </form>
        </>
      </DialogContent>
    </Dialog>
  );
}
