import { useEffect, useRef, useState } from "react";
import { Phone, Menu, X, ChevronDown, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { CONSULTATION_SERVICES } from "@/data/consultationServices";
import { COMPLIANCE_BUNDLES } from "@/data/compliancePackages";
import { HEADER_MENU } from "@/data/navigationMenu";
import logo from "@/assets/logo.png";

/* ─── Consultation pop-up form ──────────────────────────────────────────── */
function ConsultationModal({ children }: { children: React.ReactNode }) {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });
  const WA = "918169887643";
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px] p-6">
        <h3 className="font-display text-xl font-bold text-ink">Get a Callback within 24 Hours</h3>
        <p className="text-sm text-muted-foreground mt-1">Tell us what you need — our CA team will reach out.</p>
        <form
          className="mt-5 space-y-3"
          onSubmit={(e) => {
            e.preventDefault();
            const msg = `Hi, I need CA assistance.%0AName: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email}%0AService: ${form.service}%0AMessage: ${form.message}`;
            window.open(`https://wa.me/${WA}?text=${msg}`, "_blank");
          }}
        >
          <input required maxLength={100} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Full Name" className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand/30" />
          <input required type="tel" maxLength={15} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="Phone Number" className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand/30" />
          <input required type="email" maxLength={255} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Email" className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand/30" />
          <select required value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand/30 bg-white">
            <option value="">Service Required</option>
            <option>Income Tax / ITR</option>
            <option>GST</option>
            <option>TDS / TCS</option>
            <option>MCA / ROC</option>
            <option>Accounting &amp; Audit</option>
            <option>Registrations</option>
            <option>Bank Loan Documentation</option>
            <option>Compliance Package</option>
            <option>CA Consultation</option>
            <option>Other</option>
          </select>
          <textarea maxLength={1000} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Message (optional)" rows={3} className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand/30" />
          <button type="submit" className="w-full rounded-lg bg-brand text-white font-semibold py-3 shadow-lg shadow-brand/30 hover:bg-brand/90 transition-all flex items-center justify-center gap-2">
            Request Callback <ArrowRight className="h-4 w-4" />
          </button>
          <p className="text-xs text-muted-foreground text-center">No spam. 100% confidential.</p>
        </form>
      </DialogContent>
    </Dialog>
  );
}

/* ─── Desktop mega-flyout item ──────────────────────────────────────────── */
function DesktopMenuItem({ entry }: { entry: typeof HEADER_MENU[0] }) {
  const [activeGroup, setActiveGroup] = useState<number | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimer = () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveGroup(null), 150);
  };

  return (
    <div
      className="relative group"
      onMouseLeave={handleMouseLeave}
      onMouseEnter={clearTimer}
    >
      <Link
        to={entry.href as any}
        className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-brand rounded-md transition-colors inline-flex items-center gap-1"
      >
        {entry.title} <ChevronDown className="h-3.5 w-3.5" />
      </Link>

      {/* Level-2 dropdown */}
      <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50"
        style={{ width: "260px" }}
      >
        <div className="bg-background border rounded-xl shadow-lg overflow-visible">
          {/* "All …" link */}
          <Link
            to={entry.href as any}
            className="block px-4 py-2.5 text-sm font-semibold text-brand hover:bg-brand-light border-b"
          >
            All {entry.title} Services →
          </Link>

          {/* Groups */}
          {entry.groups.map((group, gi) => (
            <div
              key={gi}
              className="relative"
              onMouseEnter={() => { clearTimer(); setActiveGroup(gi); }}
            >
              <Link
                to={group.href as any}
                className={`flex items-center justify-between px-4 py-2.5 text-sm text-foreground/80 hover:bg-muted hover:text-brand transition-colors ${activeGroup === gi ? "bg-muted text-brand" : ""}`}
              >
                <span>{group.title}</span>
                {group.items.length > 0 && <ChevronRight className="h-3.5 w-3.5 shrink-0" />}
              </Link>

              {/* Level-3 flyout */}
              {group.items.length > 0 && activeGroup === gi && (
                <div
                  className="absolute left-full top-0 ml-1 z-50"
                  style={{ width: "230px" }}
                  onMouseEnter={() => { clearTimer(); setActiveGroup(gi); }}
                >
                  <div className="bg-background border rounded-xl shadow-lg overflow-hidden">
                    {group.items.map((item, ii) => (
                      <Link
                        key={ii}
                        to={item.href as any}
                        className="block px-4 py-2 text-sm text-foreground/80 hover:bg-muted hover:text-brand transition-colors"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Mobile accordion item ─────────────────────────────────────────────── */
function MobileMenuItem({
  entry,
  onClose,
}: {
  entry: typeof HEADER_MENU[0];
  onClose: () => void;
}) {
  const [open, setOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<number | null>(null);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="w-full py-2.5 text-sm font-medium border-b flex items-center justify-between"
      >
        {entry.title}
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="pl-3 border-b">
          <Link
            to={entry.href as any}
            onClick={onClose}
            className="block py-2 text-sm font-semibold text-brand"
          >
            All {entry.title} Services
          </Link>

          {entry.groups.map((group, gi) => (
            <div key={gi}>
              <button
                onClick={() => setOpenGroup(openGroup === gi ? null : gi)}
                className="w-full py-2 text-sm flex items-center justify-between text-foreground/80"
              >
                <Link
                  to={group.href as any}
                  onClick={onClose}
                  className="hover:text-brand flex-1 text-left"
                >
                  {group.title}
                </Link>
                {group.items.length > 0 && (
                  <ChevronDown className={`h-3.5 w-3.5 ml-1 transition-transform shrink-0 ${openGroup === gi ? "rotate-180" : ""}`} />
                )}
              </button>

              {group.items.length > 0 && openGroup === gi && (
                <div className="pl-3 pb-1">
                  {group.items.map((item, ii) => (
                    <Link
                      key={ii}
                      to={item.href as any}
                      onClick={onClose}
                      className="block py-1.5 text-xs text-muted-foreground hover:text-brand"
                    >
                      • {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── Main Header ───────────────────────────────────────────────────────── */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [consultOpen, setConsultOpen] = useState(false);
  const [compOpen, setCompOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? "bg-background/90 backdrop-blur-md shadow-card py-2" : "bg-background/70 backdrop-blur-sm py-3"
        }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 shrink-0">
          <img src={logo} alt="Praveen J & Associates" className={`transition-all ${scrolled ? "h-9" : "h-11"}`} />
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-0.5 flex-wrap">
          {HEADER_MENU.map((entry) => (
            <DesktopMenuItem key={entry.title} entry={entry} />
          ))}

          {/* Consultation dropdown (existing) */}
          <div className="relative group">
            <Link
              to="/consultation"
              className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-brand rounded-md transition-colors inline-flex items-center gap-1"
            >
              Consultation <ChevronDown className="h-3.5 w-3.5" />
            </Link>
            <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all w-72 z-50">
              <div className="bg-background border rounded-xl shadow-lg overflow-hidden">
                <Link to="/consultation" className="block px-4 py-2.5 text-sm font-semibold text-brand hover:bg-brand-light border-b">
                  All Consultation Services →
                </Link>
                {CONSULTATION_SERVICES.map((s) => (
                  <Link key={s.slug} to="/consultation/$slug" params={{ slug: s.slug }} className="block px-4 py-2 text-sm text-foreground/80 hover:bg-muted hover:text-brand transition-colors">
                    {s.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Compliance dropdown (existing) */}
          <div className="relative group">
            <Link
              to="/compliance"
              className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-brand rounded-md transition-colors inline-flex items-center gap-1"
            >
              Compliance <ChevronDown className="h-3.5 w-3.5" />
            </Link>
            <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all w-72 z-50">
              <div className="bg-background border rounded-xl shadow-lg overflow-hidden">
                <Link to="/compliance" className="block px-4 py-2.5 text-sm font-semibold text-brand hover:bg-brand-light border-b">
                  All Compliance Bundles →
                </Link>
                {COMPLIANCE_BUNDLES.map((s) => (
                  <Link key={s.slug} to="/compliance/$slug" params={{ slug: s.slug }} className="block px-4 py-2 text-sm text-foreground/80 hover:bg-muted hover:text-brand transition-colors">
                    {s.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* CTA area */}
        <div className="flex items-center gap-2">
          <a href="tel:+918169887643" className="hidden sm:flex h-10 w-10 items-center justify-center rounded-full bg-brand-light hover:bg-primary/10 transition">
            <Phone className="h-4 w-4 text-brand" />
          </a>
          <ConsultationModal>
            <button className="hidden md:inline-flex h-10 items-center rounded-full bg-gradient-red px-5 text-sm font-semibold text-white shadow-soft hover:shadow-lg hover:-translate-y-0.5 transition-all cursor-pointer">
              Book Consultation
            </button>
          </ConsultationModal>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden h-10 w-10 inline-flex items-center justify-center rounded-md hover:bg-muted"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t bg-background max-h-[80vh] overflow-y-auto">
          <div className="container mx-auto px-4 py-3 flex flex-col">
            {HEADER_MENU.map((entry) => (
              <MobileMenuItem key={entry.title} entry={entry} onClose={() => setMobileOpen(false)} />
            ))}

            {/* Consultation mobile */}
            <button
              onClick={() => setConsultOpen(!consultOpen)}
              className="py-2.5 text-sm font-medium border-b flex items-center justify-between"
            >
              Consultation <ChevronDown className={`h-4 w-4 transition-transform ${consultOpen ? "rotate-180" : ""}`} />
            </button>
            {consultOpen && (
              <div className="pl-3 border-b">
                <Link to="/consultation" onClick={() => setMobileOpen(false)} className="block py-2 text-sm font-semibold text-brand">All Consultation Services</Link>
                {CONSULTATION_SERVICES.map((s) => (
                  <Link key={s.slug} to="/consultation/$slug" params={{ slug: s.slug }} onClick={() => setMobileOpen(false)} className="block py-2 text-sm text-foreground/80">
                    {s.title}
                  </Link>
                ))}
              </div>
            )}

            {/* Compliance mobile */}
            <button
              onClick={() => setCompOpen(!compOpen)}
              className="py-2.5 text-sm font-medium border-b flex items-center justify-between"
            >
              Compliance <ChevronDown className={`h-4 w-4 transition-transform ${compOpen ? "rotate-180" : ""}`} />
            </button>
            {compOpen && (
              <div className="pl-3 border-b">
                <Link to="/compliance" onClick={() => setMobileOpen(false)} className="block py-2 text-sm font-semibold text-brand">All Compliance Bundles</Link>
                {COMPLIANCE_BUNDLES.map((s) => (
                  <Link key={s.slug} to="/compliance/$slug" params={{ slug: s.slug }} onClick={() => setMobileOpen(false)} className="block py-2 text-sm text-foreground/80">
                    {s.title}
                  </Link>
                ))}
              </div>
            )}

            <ConsultationModal>
              <button onClick={() => setMobileOpen(false)} className="mt-3 w-full inline-flex h-11 items-center justify-center rounded-full bg-gradient-red px-5 text-sm font-semibold text-white cursor-pointer">
                Book Consultation
              </button>
            </ConsultationModal>
          </div>
        </div>
      )}
    </header>
  );
}
