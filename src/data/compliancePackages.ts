export type CompliancePackage = {
  name: string;
  tagline: string;
  includes: string[];
  bestFor: string;
};

export type ComplianceBundle = {
  slug: string;
  entity: string; // short name for nav
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroLead: string;
  about: string[];
  packages: CompliancePackage[];
  problems: string[];
  whoFor: string[];
  faqs: { q: string; a: string }[];
  keywords: string[];
  whyChoose?: string[];
  help?: string[];
  steps?: string[];
  trust?: string[];
  moreTitle?: string;
  more?: string[];
};

export const COMPLIANCE_BUNDLES: ComplianceBundle[] = [
  {
    slug: "proprietorship",
    entity: "Proprietorship",
    title: "Proprietorship Packages",
    h1: "Proprietorship Packages in India - Tax, GST & Compliance Services",
    metaTitle: "Proprietorship Packages in India | Tax, GST & Compliance Services",
    metaDescription: "Affordable proprietorship packages in India with expert CA support for GST registration, GST returns, ITR filing, accounting and advisory.",
    heroHeadline: "Simple & Affordable Compliance for Your Proprietorship Business",
    heroLead: "Manage your GST, income tax, and accounting easily with expert CA support.",
    about: [
      "A proprietorship business has simpler compliance requirements but still needs proper tax filing, GST returns, and financial management.",
      "Our packages include income tax filing, GST registration & returns, basic accounting and advisory support.",
    ],
    packages: [
      { name: "Basic Tax Package", tagline: "Freelancers and individuals", bestFor: "Best for freelancers and individuals", includes: ["Income Tax Return (ITR) filing", "Basic tax advisory", "Compliance reminders"] },
      { name: "GST Package", tagline: "Small businesses with GST", bestFor: "Ideal for small businesses with GST", includes: ["GST registration", "Monthly/quarterly GST returns", "GST compliance support", "Email assistance"] },
      { name: "Standard Business Package", tagline: "Growing proprietorships", bestFor: "Perfect for growing proprietorships", includes: ["ITR filing", "GST returns", "Basic accounting support", "Expense tracking guidance"] },
      { name: "Complete Business Package", tagline: "Serious business owners", bestFor: "Best for serious business owners", includes: ["ITR + GST filing", "Monthly accounting & bookkeeping", "Financial reports", "Business advisory support", "Priority CA assistance"] },
    ],
    problems: ["Missing GST or tax deadlines", "Confusion in tax filing", "Poor financial tracking", "Overpaying taxes", "Lack of expert advice"],
    whoFor: ["Freelancers", "Small business owners", "Consultants", "Traders and service providers", "Individual entrepreneurs"],
    faqs: [
      { q: "Is GST required for proprietorship?", a: "Yes, if turnover exceeds threshold or for specific businesses." },
      { q: "Do I need to file income tax?", a: "Yes, annually." },
      { q: "Are these packages affordable?", a: "Yes, designed for small businesses." },
      { q: "Can I upgrade later?", a: "Yes, packages are scalable." },
    ],
    keywords: ["Proprietorship compliance India", "Sole proprietorship tax services", "Proprietor GST and tax services", "Small business CA services"],
    whyChoose: ["Affordable pricing for small businesses", "Expert CA guidance", "Timely tax filing", "Easy and hassle-free process", "Scalable as your business grows"],
    help: ["Handle complete tax and GST compliance", "Provide expert advisory", "Ensure timely filing", "Simplify accounting", "Help optimize taxes"],
    steps: ["Choose your package", "Share your details", "Onboard with our team", "We manage your filings", "You grow your business"],
    trust: ["Affordable and easy tax filing.", "Great support for GST compliance.", "Perfect for small business owners."],
    moreTitle: "SEO Alignment",
    more: ["Proprietorship compliance packages India", "Proprietorship CA services", "Small business tax packages India", "Sole proprietorship tax services", "Proprietor GST and tax services"],
  },
  {
    slug: "partnership-firm",
    entity: "Partnership Firm",
    title: "Partnership Firm Compliance",
    h1: "Partnership Firm Compliance Solutions — Tax, GST & Accounting",
    metaTitle: "Partnership Firm Compliance | CA-led Tax, GST, Accounting Bundles",
    metaDescription: "Complete compliance for partnership firms — ITR, GST, bookkeeping, advisory. Enquiry-based, CA-led.",
    heroHeadline: "All-in-One Compliance for Your Partnership Firm",
    heroLead: "GST, income tax aur accounting — sab kuch ek hi CA team ke through. Small to growing partnership firms ke liye designed.",
    about: [
      "Partnership firms ko regular ITR, GST aur accounting handle karni padti hai — vendors alag-alag rakhna mehnga aur risky hota hai.",
      "Hamari bundled solutions sab kuch single point of contact se manage karte hain.",
    ],
    packages: [
      { name: "Basic Tax", tagline: "Small firms, limited transactions", bestFor: "Newly formed / low-activity firms", includes: ["Partnership firm ITR filing", "Basic tax advisory", "Compliance reminders"] },
      { name: "GST Solution", tagline: "Firms registered under GST", bestFor: "Trading & service firms", includes: ["GST registration", "GST return filing", "Compliance support", "Email assistance"] },
      { name: "Standard Business", tagline: "Growing partnership firms", bestFor: "Regular sales + multi-partner firms", includes: ["ITR filing", "GST returns", "Basic accounting support", "Expense & profit tracking"] },
      { name: "Complete Business", tagline: "Established partnership businesses", bestFor: "Mature firms wanting full handling", includes: ["ITR + GST filing", "Monthly accounting & bookkeeping", "Financial reports", "Business advisory", "Priority CA support"] },
    ],
    problems: ["GST / ITR deadlines miss", "Multiple vendors handle karna", "Profit-sharing tracking issues", "Compliance confusion", "High cost of individual services"],
    whoFor: ["Partnership firms", "Family businesses", "Service firms", "Traders & retailers", "Growing partnerships"],
    faqs: [
      { q: "Partnership firm ka ITR kaunsa form bharta hai?", a: "ITR-5 file hota hai partnership firms ke liye." },
      { q: "Kya GST registration zaroori hai?", a: "Turnover threshold cross / inter-state supply ho to zaroori hai." },
      { q: "Solution customizable hai?", a: "Haan — firm ki needs ke hisaab se tune kar dete hain." },
      { q: "CA support milta hai?", a: "Haan — expert CA included har bundle mein." },
    ],
    keywords: ["Partnership firm compliance India", "Partnership firm CA services", "Partnership firm tax & GST", "Partnership firm ITR filing"],
  },
  {
    slug: "llp",
    entity: "LLP",
    title: "LLP Compliance",
    h1: "LLP Compliance Solutions in India — Form 8, Form 11, Tax & Accounting",
    metaTitle: "LLP Compliance Solutions | Form 8, Form 11, GST & Tax — CA-led",
    metaDescription: "End-to-end LLP compliance — Form 8, Form 11, GST, accounting, partner changes. CA-led, enquiry-based.",
    heroHeadline: "All-in-One LLP Compliance Under One CA Team",
    heroLead: "Form 8, Form 11, GST returns, accounting aur partner-level filings — sab kuch ek hi place pe.",
    about: [
      "LLPs ko annual ROC filing (Form 8, Form 11), GST returns aur accounting mandatory hota hai — chhote business mein bhi.",
      "Hamare bundled solutions sab kuch ek CA team ke through manage karte hain — penalty aur multi-vendor headache ko khatam karte hain.",
    ],
    packages: [
      { name: "Basic LLP Compliance", tagline: "Minimal transactions wali LLPs", bestFor: "Dormant / low-activity LLPs", includes: ["Form 8 (Statement of Accounts & Solvency)", "Form 11 (Annual Return)", "Compliance reminders", "Basic CA support"] },
      { name: "Standard LLP", tagline: "Small LLPs & service businesses", bestFor: "Service-based LLPs under GST", includes: ["All Basic inclusions", "GST return filing", "Basic accounting support", "Email support"] },
      { name: "Advanced LLP", tagline: "Growing LLPs", bestFor: "Active LLPs with monthly transactions", includes: ["All Standard inclusions", "Monthly accounting & bookkeeping", "GST + Income Tax filing", "Financial reports"] },
      { name: "Complete LLP", tagline: "Expanding LLPs & professional firms", bestFor: "Multi-partner growing LLPs", includes: ["All Advanced inclusions", "Partner change filings (Form 3, Form 4)", "LLP agreement updates", "Compliance advisory", "Dedicated CA support"] },
    ],
    problems: ["Form 8 / Form 11 deadlines miss", "Multiple service providers", "Lack of proper accounting", "Compliance confusion", "High individual-service costs"],
    whoFor: ["LLPs & partnerships", "Consultants & professionals", "Agencies & service firms", "Small & medium businesses", "Growing LLPs"],
    faqs: [
      { q: "LLP compliance solution mein kya included hai?", a: "Form 8, Form 11, GST, accounting aur tax filings — bundle ke hisaab se." },
      { q: "Kya plans customizable hain?", a: "Haan — business needs ke base par." },
      { q: "Activity na ho to bhi LLP filing zaroori hai?", a: "Haan — annual ROC filing nil ho to bhi mandatory hai." },
      { q: "Kya baad mein upgrade kar sakte hain?", a: "Haan — sab plans scalable hain." },
      { q: "CA support milta hai?", a: "Haan — har bundle mein expert support hai." },
    ],
    keywords: ["LLP compliance India", "LLP annual compliance", "LLP Form 8 Form 11", "LLP CA services", "LLP tax filing"],
  },
  {
    slug: "private-limited-company",
    entity: "Private Limited",
    title: "Private Limited Company Packages",
    h1: "Private Limited Company Packages - Complete Tax & Compliance Services India",
    metaTitle: "Private Limited Company Packages | ROC, GST, Accounting & Secretarial",
    metaDescription: "Private limited company packages in India covering ROC compliance, GST, accounting, tax filings and secretarial support with expert CA guidance.",
    heroHeadline: "All-in-One Compliance & Tax Solutions for Your Private Limited Company",
    heroLead: "Simplify your business operations with complete ROC, GST, accounting, and tax services under one package.",
    about: [
      "Managing compliance for a Private Limited Company involves multiple filings, deadlines, and legal requirements.",
      "Our packages combine ROC compliance, GST and tax filings, accounting and bookkeeping, and ongoing advisory.",
      "Everything your company needs - handled in one place.",
    ],
    packages: [
      { name: "Basic Compliance Package", tagline: "Companies with minimal transactions", bestFor: "Best for companies with minimal transactions", includes: ["AOC-4 Filing (Financial statements)", "MGT-7 Filing (Annual return)", "DIR-3 KYC (Director KYC)", "Compliance reminders", "Basic CA support"] },
      { name: "Standard Business Package", tagline: "Small to mid-sized businesses", bestFor: "Ideal for small to mid-sized businesses", includes: ["All Basic package inclusions", "GST return filing", "Basic accounting support", "TDS return filing", "Email support"] },
      { name: "Advanced Business Package", tagline: "Growing companies", bestFor: "Perfect for growing companies", includes: ["All Standard package inclusions", "Monthly accounting & bookkeeping", "GST + TDS + ITR filing", "Financial reports and analysis", "Priority CA support"] },
      { name: "Complete Corporate Package", tagline: "Scaling businesses and enterprises", bestFor: "Best for scaling businesses and enterprises", includes: ["All Advanced package inclusions", "Secretarial records maintenance", "Board meeting & AGM documentation", "ROC compliance & advisory", "Dedicated CA manager"] },
    ],
    problems: ["Missing ROC deadlines", "Managing multiple vendors", "High compliance costs", "Lack of financial clarity", "Disorganized accounting"],
    whoFor: ["Private Limited Companies", "Startups and SMEs", "Growing businesses", "Companies needing full compliance support", "Businesses looking for cost-effective solutions"],
    faqs: [
      { q: "Are packages customizable?", a: "Yes, based on your business needs." },
      { q: "What is included in compliance package?", a: "ROC filings, GST, accounting, and tax services." },
      { q: "Do I get dedicated CA support?", a: "Yes, in higher-tier packages." },
      { q: "Can I upgrade later?", a: "Yes, packages are scalable." },
      { q: "Are these packages cost-effective?", a: "Yes, compared to individual services." },
    ],
    keywords: ["Private limited company packages", "Company compliance packages India", "Corporate compliance services", "CA packages for companies", "Business tax service packages"],
  },
  {
    slug: "complete-tax-business",
    entity: "Complete Tax & Business",
    title: "Complete Tax & Business Compliance",
    h1: "Complete Tax & Business Solutions — Startup to Scale",
    metaTitle: "Complete Tax & Business Solutions | Startup, Compliance, Accounting, Corporate",
    metaDescription: "Bundled CA-led solutions — startup setup, ongoing ROC compliance, accounting + tax, full corporate plan. Enquiry-based.",
    heroHeadline: "One CA Team — From Startup Setup to Full Corporate Compliance",
    heroLead: "Company / LLP registration, ROC compliance, accounting, GST, TDS, ITR aur secretarial — har stage ke liye bundled solution.",
    about: [
      "Naya business launch karna ho ya scaling company ko manage karna — har stage par alag-alag service providers se deal karna mehnga aur risky hai.",
      "Hamare end-to-end bundles ek hi CA team ke through full lifecycle cover karte hain.",
    ],
    packages: [
      { name: "Startup Plan", tagline: "New businesses launching", bestFor: "Founders setting up Company / LLP", includes: ["Company / LLP Registration", "PAN, TAN & basic setup", "GST Registration", "Initial 30-day compliance", "Basic advisory support"] },
      { name: "Compliance Plan", tagline: "Ongoing regular compliance", bestFor: "Companies running for 1+ year", includes: ["Annual ROC Compliance (AOC-4, MGT-7)", "Director KYC (DIR-3)", "GST returns filing", "Accounting support", "Compliance reminders"] },
      { name: "Accounting & Tax Plan", tagline: "Full financial management", bestFor: "Businesses with monthly transactions", includes: ["Monthly accounting & bookkeeping", "GST return filing", "TDS return filing", "Income tax return filing", "Financial reports"] },
      { name: "Corporate Plan", tagline: "Full-service for growing companies", bestFor: "Scaling companies & enterprises", includes: ["Complete ROC compliance", "Accounting & bookkeeping", "GST + TDS + ITR filing", "Secretarial records & documentation", "Board meeting & AGM support", "Dedicated CA support"] },
    ],
    problems: ["Multiple vendors manage karna", "Compliance deadlines miss", "Individual service ka high cost", "Expert guidance ki kami", "Disorganized financial records"],
    whoFor: ["Startups", "Growing SMEs", "Established companies", "Multi-entity groups", "Founders wanting one-window CA"],
    faqs: [
      { q: "Kya ek hi bundle complete business cover karta hai?", a: "Corporate Plan complete lifecycle cover karta hai — registration ke baad ka sab kuch." },
      { q: "Bundles customizable hain?", a: "Haan — business needs ke base par tune kar dete hain." },
      { q: "Kya bundles affordable hain?", a: "Individual services se kaafi cost-effective — bundled approach." },
      { q: "CA support milta hai?", a: "Haan — har plan mein expert CA included hai." },
      { q: "Kya plans scalable hain?", a: "Bilkul — startup se corporate tak grow kar sakte hain." },
    ],
    keywords: ["Complete business compliance India", "Startup CA package", "Business compliance solutions", "End-to-end CA services", "Tax & business management India"],
  },
];

export const getComplianceBundle = (slug: string) =>
  COMPLIANCE_BUNDLES.find((b) => b.slug === slug);
