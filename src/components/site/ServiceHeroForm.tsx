import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";
import { submitLead } from "@/services/leadService";

interface ServiceHeroFormProps {
    title?: string;
    subtitle?: string;
    serviceName: string;
    ctaText?: string;
    formName?: string;
    ctaLocation?: string;
    pattern?: "A" | "B";
}

export function ServiceHeroForm({
    title = "Talk to a CA — free callback",
    subtitle = "Share details, our CA will connect within 30 mins.",
    serviceName,
    ctaText = "Request Callback",
    formName = "Service Hero Form",
    ctaLocation = "Hero Section",
    pattern = "A"
}: ServiceHeroFormProps) {
    const [form, setForm] = useState({ name: "", phone: "", email: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();
    const [errorMsg, setErrorMsg] = useState("");

    const containerClass = pattern === "B"
        ? "rounded-3xl border bg-white p-6 shadow-xl lg:p-8"
        : "bg-white rounded-2xl shadow-xl border p-4 sm:p-6 lg:p-8 min-w-0 max-w-full overflow-hidden box-border";

    return (
        <div id="lead" className={containerClass}>
            {pattern === "B" ? (
                <div className="mb-3 flex items-center justify-between">
                    <h2 className="font-display text-xl font-bold text-ink">{title}</h2>
                    <span className="rounded-full bg-primary/10 px-2 py-1 text-xs font-semibold text-brand">
                        Free
                    </span>
                </div>
            ) : (
                <h3 className="font-display text-xl font-bold text-ink">{title}</h3>
            )}

            <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>

            <form
                className={pattern === "B" ? "mt-5 grid gap-3" : "mt-5 space-y-3"}
                onSubmit={async (e) => {
                    e.preventDefault();
                    setIsSubmitting(true);
                    setErrorMsg("");

                    const res = await submitLead({
                        name: form.name,
                        phone: form.phone,
                        email: form.email,
                        serviceName,
                        sourceType: "inline",
                        formName,
                        ctaLocation,
                    });

                    setIsSubmitting(false);

                    if (res.success) {
                        navigate({ to: "/thankyou" });
                    } else {
                        setErrorMsg(res.message || "Failed to submit. Please try again.");
                    }
                }}
            >
                {errorMsg && (
                    <div className="p-3 bg-red-50 border border-red-100 text-red-600 text-sm rounded-lg">
                        {errorMsg}
                    </div>
                )}
                <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Full Name"
                    className={pattern === "B" ? "h-11 rounded-xl border border-border px-4 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" : "w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand/30 text-ink"}
                />
                <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="Mobile Number"
                    className={pattern === "B" ? "h-11 rounded-xl border border-border px-4 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" : "w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand/30 text-ink"}
                />
                <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="Email"
                    className={pattern === "B" ? "h-11 rounded-xl border border-border px-4 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" : "w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand/30 text-ink"}
                />
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={pattern === "B" ? "inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-brand font-semibold text-white shadow-lg shadow-brand/30 transition-all hover:bg-brand/90 disabled:opacity-70 disabled:cursor-not-allowed" : "w-full rounded-lg bg-brand text-white font-semibold py-3 shadow-lg shadow-brand/30 hover:bg-brand/90 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"}
                >
                    {isSubmitting ? "Submitting..." : ctaText} {!isSubmitting && <ArrowRight className="h-4 w-4" />}
                </button>
                <p className={pattern === "B" ? "text-center text-xs text-muted-foreground" : "text-xs text-muted-foreground text-center"}>No spam. 100% confidential.</p>
            </form>
        </div>
    );
}
