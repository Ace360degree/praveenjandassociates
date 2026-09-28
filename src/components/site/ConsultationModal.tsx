import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface ConsultationModalProps {
  children: React.ReactNode;
  defaultService?: string;
  title?: string;
  description?: string;
}

export function ConsultationModal({
  children,
  defaultService = "TDS / TCS",
  title = "Get a Callback within 24 Hours",
  description = "Tell us what you need — our CA team will reach out.",
}: ConsultationModalProps) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: defaultService,
    message: "",
  });
  const WA = "918169887643";

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px] p-6 bg-white z-50">
        <h3 className="font-display text-xl font-bold text-ink">{title}</h3>
        <p className="text-sm text-muted-foreground mt-1">{description}</p>
        <form
          className="mt-5 space-y-3"
          onSubmit={(e) => {
            e.preventDefault();
            const msg = `Hi, I need CA assistance.%0AName: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email}%0AService: ${form.service}%0AMessage: ${form.message}`;
            window.open(`https://wa.me/${WA}?text=${msg}`, "_blank");
            setOpen(false);
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
            className="w-full rounded-lg bg-brand text-white font-semibold py-3 shadow-lg shadow-brand/30 hover:bg-brand/90 transition-all flex items-center justify-center gap-2"
          >
            Request Callback <ArrowRight className="h-4 w-4" />
          </button>
          <p className="text-xs text-muted-foreground text-center">No spam. 100% confidential.</p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
