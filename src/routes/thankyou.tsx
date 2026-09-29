import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer, FloatingWhatsApp } from "@/components/site/Footer";

export const Route = createFileRoute("/thankyou")({
    head: () => ({
        meta: [
            { title: "Thank You | Praveen J & Associates" },
            { name: "robots", content: "noindex, nofollow" },
        ],
    }),
    component: ThankYouPage,
});

function ThankYouPage() {
    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <Header />
            <main className="flex-1 flex items-center justify-center py-20 px-4">
                <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-border max-w-lg w-full text-center">
                    <div className="mx-auto mb-6 h-20 w-20 rounded-full bg-emerald-100 flex items-center justify-center shadow-inner">
                        <CheckCircle2 className="h-10 w-10 text-emerald-600" />
                    </div>

                    <h1 className="font-display text-3xl font-bold text-ink mb-4">
                        Thank You!
                    </h1>

                    <p className="text-lg text-ink font-medium mb-2">
                        Your enquiry has been submitted successfully.
                    </p>

                    <p className="text-sm text-muted-foreground mb-10 leading-relaxed md:px-6">
                        Our CA team will review your requirement and get in touch with you shortly.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            to="/"
                            className="w-full sm:w-auto h-12 px-8 flex items-center justify-center rounded-xl bg-brand font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5"
                        >
                            Back to Home
                        </Link>
                        <Link
                            to="/our-full-packages-services"
                            className="w-full sm:w-auto h-12 px-8 flex items-center justify-center rounded-xl bg-muted text-ink font-semibold transition-colors hover:bg-muted/80"
                        >
                            Explore Our Services <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
            <FloatingWhatsApp />
        </div>
    );
}
