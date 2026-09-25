export type ConsultationService = {
  slug: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  heroLead: string;
  heroSub: string;
  primaryCta: string;
  problems: string[];
  whatIs: { heading: string; points: string[]; note?: string };
  whoFor: string[];
  benefits: string[];
  important: string[];
  process: string[];
  documents: string[];
  faqs: { q: string; a: string }[];
};

export const CONSULTATION_SERVICES: ConsultationService[] = [
  {
    slug: "live-tax-consultation",
    title: "Live Tax Consultation",
    h1: "Live Tax Consultation – Book Expert CA Online in India",
    metaTitle: "Live CA Consultation Online | Book Tax Advisor — Praveen J & Associates",
    metaDescription:
      "Talk to a CA LIVE – Get instant tax & business advice. Book a live consultation with experienced Chartered Accountants on tax, GST, compliance, and business decisions.",
    heroLead: "Talk to a CA LIVE – Get Instant Tax & Business Advice",
    heroSub: "Book a live consultation with experienced Chartered Accountants and get clarity on tax, GST, compliance, and business decisions.",
    primaryCta: "Book Live Consultation Now",
    problems: [
      "Urgent tax issues",
      "GST confusion",
      "Business setup doubts",
      "Compliance errors",
      "Financial decision-making",
    ],
    whatIs: {
      heading: "About Live Consultation",
      points: [
        "Get instant expert advice",
        "Solve urgent tax or compliance issues",
        "Make informed financial decisions",
        "No delays. No confusion. Just clear guidance.",
      ],
      note: "Need quick answers to your business or tax questions? Real-time consultation via call / WhatsApp / online meeting.",
    },
    whoFor: [
      "Business owners",
      "Startups and entrepreneurs",
      "Freelancers and professionals",
      "Companies and LLPs",
      "Anyone needing urgent tax advice",
    ],
    benefits: [
      "Instant answers from experts",
      "Avoid costly mistakes",
      "Save time and effort",
      "Get practical solutions",
      "Clear next steps",
    ],
    important: [
      "Understand your exact query",
      "Provide expert solutions",
      "Suggest best course of action",
      "Guide implementation steps",
      "Offer further service support",
    ],
    process: [
      "Step 1: Book your slot",
      "Step 2: Share your query",
      "Step 3: Connect with CA (Call/Zoom/WhatsApp)",
      "Step 4: Get expert advice",
      "Step 5: Take action confidently",
    ],
    documents: [
      "Pvt Ltd / LLP / Proprietorship guidance & structure selection",
      "Income tax planning & saving strategies",
      "GST queries, registration & compliance",
      "ROC filings, MCA compliance & legal requirements",
      "Financial advisory & business growth strategies",
    ],
    faqs: [
      { q: "How do I book consultation?", a: "Through website or WhatsApp." },
      { q: "Is it live or recorded?", a: "Live session with CA." },
      { q: "What is the duration?", a: "Typically 15–30 minutes." },
      { q: "Is consultation paid?", a: "Yes, depending on session type." },
      { q: "Can I continue services after consultation?", a: "Yes, full services are available." },
    ],
  },
  {
    slug: "income-tax-calculation",
    title: "Income Tax Calculation",
    h1: "Income Tax Calculation in India – Calculate Tax Online (FY 2025-26)",
    metaTitle: "Income Tax Calculation in India | Calculate Tax Online (FY 2025-26) — Praveen J & Associates",
    metaDescription:
      "Understand your tax liability with simple calculation methods, latest tax slabs, deductions, and formulas for FY 2025-26. Get accurate tax estimates and plan your taxes better.",
    heroLead: "Easily Calculate Your Income Tax in India",
    heroSub: "Understand your tax liability with simple calculation methods, latest tax slabs, deductions, and formulas for FY 2025-26.",
    primaryCta: "Calculate Your Tax Now",
    problems: [
      "Choosing wrong tax regime",
      "Missing deductions",
      "Incorrect income calculation",
      "Ignoring exemptions",
      "Not planning taxes early",
    ],
    whatIs: {
      heading: "About Income Tax Calculation & Tax Slabs (FY 2025-26)",
      points: [
        "New Tax Regime (Default): Up to ₹3L Nil | ₹3L-6L 5% | ₹6L-9L 10% | ₹9L-12L 15% | ₹12L-15L 20% | Above ₹15L 30%",
        "Old Tax Regime: Up to ₹2.5L Nil | ₹2.5L-5L 5% | ₹5L-10L 20% | Above ₹10L 30% (allows 80C, 80D, HRA, etc.)",
        "Income tax is calculated based on total income, applicable tax slabs, and deductions under the Income Tax Act",
        "Proper calculation helps you save tax and avoid penalties",
        "Tax liability depends on income level, regime choice, eligible deductions, and rebates",
      ],
      note: "Proper calculation helps you save tax and avoid penalties. Compare Old vs New regime for better savings.",
    },
    whoFor: [
      "Salaried individuals",
      "Freelancers",
      "Business owners",
      "Professionals",
      "Anyone filing income tax",
    ],
    benefits: [
      "Accurate tax calculation",
      "Tax saving strategies",
      "Regime comparison",
      "Income tax filing support",
      "Personalized advisory",
    ],
    important: [
      "Rebate under Section 87A available (up to ₹7L in new regime)",
      "Standard deduction applicable",
      "Surcharge applies for high income",
      "Different rules for businesses and professionals",
      "4% Health & Education Cess added to final slab tax",
    ],
    process: [
      "Step 1: Calculate Total Income (salary, business, interest, rental, etc.)",
      "Step 2: Choose Tax Regime (compare Old vs New regime)",
      "Step 3: Apply Deductions (Old Regime: 80C ₹1.5L, 80D, HRA, LTA, etc.)",
      "Step 4: Apply Tax Slabs (calculate tax based on slab rates)",
      "Step 5: Add Cess (4% Health & Education Cess = Final Tax)",
    ],
    documents: [
      "Tax Calculation Example (₹10L New Regime):",
      "0–3L → Nil",
      "3–6L → 5% = ₹15,000",
      "6–9L → 10% = ₹30,000",
      "9–10L → 15% = ₹15,000 | Total Tax = ₹60,000 | Cess (4%) = ₹2,400 | Final Tax = ₹62,400",
    ],
    faqs: [
      { q: "How to calculate income tax in India?", a: "By applying tax slabs on total taxable income." },
      { q: "Which tax regime is better?", a: "Depends on your deductions and income level." },
      { q: "Is rebate available?", a: "Yes, under Section 87A." },
      { q: "Is cess included?", a: "Yes, 4% is added." },
      { q: "Can CA help in tax planning?", a: "Yes, expert guidance can reduce tax liability." },
    ],
  },
  {
    slug: "advance-tax-calculation",
    title: "Advance Tax Calculation",
    h1: "Advance Tax Calculation in India – Due Dates, Formula & Guide",
    metaTitle: "Advance Tax Calculation in India | Due Dates, Formula & Guide — Praveen J & Associates",
    metaDescription:
      "Learn how to calculate and pay advance tax in India with correct formulas, due dates, and expert guidance. Plan your taxes in advance and avoid interest under Sections 234B & 234C.",
    heroLead: "Calculate Your Advance Tax & Avoid Penalties",
    heroSub: "Learn how to calculate and pay advance tax in India with correct formulas, due dates, and expert guidance.",
    primaryCta: "Calculate Advance Tax Now",
    problems: [
      "Not estimating income correctly",
      "Ignoring advance tax requirement",
      "Missing due dates",
      "Underpayment of tax",
      "Not adjusting TDS",
    ],
    whatIs: {
      heading: "About Advance Tax & Due Dates",
      points: [
        "15 June → 15% of total tax",
        "15 September → 45% of total tax",
        "15 December → 75% of total tax",
        "15 March → 100% of total tax",
        "Applicable when total tax liability exceeds ₹10,000 from business, capital gains, or freelance income",
      ],
      note: "Advance tax is the tax you must pay in installments during the financial year instead of paying it all at once (“Pay as You Earn” system). Missing deadlines leads to interest penalties.",
    },
    whoFor: [
      "Freelancers",
      "Business owners",
      "Professionals (CA, doctors, consultants)",
      "Investors with capital gains",
      "Individuals with multiple income sources",
    ],
    benefits: [
      "Accurate advance tax calculation",
      "Income estimation support",
      "Tax saving strategies",
      "Timely reminders",
      "Filing and compliance support",
    ],
    important: [
      "Section 234B – Interest penalty for non-payment",
      "Section 234C – Interest penalty for delay in installments",
      "Even small delays can increase your tax liability",
      "Advance Tax = Total Tax – TDS/TCS",
      "Salaried individuals with additional income must also calculate & pay advance tax",
    ],
    process: [
      "Step 1: Estimate Total Income (salary, business, capital gains, interest, etc.)",
      "Step 2: Calculate Total Tax Liability (apply tax slabs and rates)",
      "Step 3: Subtract TDS/TCS (deduct already paid taxes)",
      "Step 4: Pay Remaining Tax in Installments (15 Jun, 15 Sep, 15 Dec, 15 Mar)",
    ],
    documents: [
      "Simple Example (Total Tax: ₹1,00,000 | TDS: ₹20,000 | Advance Tax = ₹80,000):",
      "15 June → ₹12,000 (15%)",
      "15 September → ₹36,000 (45%)",
      "15 December → ₹60,000 (75%)",
      "15 March → ₹80,000 (100%)",
    ],
    faqs: [
      { q: "Who needs to pay advance tax?", a: "Anyone with tax liability above ₹10,000." },
      { q: "What if I miss due date?", a: "Interest under Sections 234B & 234C applies." },
      { q: "Is advance tax compulsory?", a: "Yes, if applicable." },
      { q: "Can salaried individuals pay advance tax?", a: "Yes, if additional income exists." },
      { q: "Can CA help with calculation?", a: "Yes, expert guidance is recommended." },
    ],
  },
  {
    slug: "capital-gain-calculation",
    title: "Capital Gain Calculation",
    h1: "Capital Gain Calculation in India – LTCG & STCG Tax Guide",
    metaTitle: "Capital Gain Calculation in India | LTCG & STCG Tax Guide — Praveen J & Associates",
    metaDescription:
      "Understand how to calculate capital gains on property, shares, and investments with updated tax rules in India. Learn LTCG, STCG, indexation, and tax rates clearly.",
    heroLead: "Calculate Your Capital Gains Easily – Avoid Tax Mistakes",
    heroSub: "Understand how to calculate capital gains on property, shares, and investments with updated tax rules in India.",
    primaryCta: "Calculate Capital Gains Now",
    problems: [
      "Not applying indexation",
      "Ignoring exemptions",
      "Wrong holding period calculation",
      "Incorrect cost calculation",
      "Missing tax planning",
    ],
    whatIs: {
      heading: "About Capital Gains (STCG & LTCG)",
      points: [
        "Short-Term Capital Gain (STCG): Short holding period — Shares (<1 yr) 15%, Property (<2 yrs) slab rate",
        "Long-Term Capital Gain (LTCG): Long holding period — Shares (>1 yr) 10% above ₹1 lakh, Property (>2 yrs) 20% with indexation",
        "Basic Formula: Capital Gain = Sale Price – (Purchase Price + Expenses + Improvements)",
        "LTCG Formula with Indexation: Indexed Cost = Purchase Price × (CII of Sale Year / CII of Purchase Year) | LTCG = Sale Price – Indexed Cost",
        "Capital gain is the profit earned on sale of assets like property, shares, or investments",
      ],
      note: "Proper planning can significantly reduce tax. Exemptions available under Sections 54 and 54F.",
    },
    whoFor: [
      "Property sellers",
      "Stock market investors",
      "Mutual fund investors",
      "Business owners",
      "Individuals with asset sales",
    ],
    benefits: [
      "Accurate capital gain calculation",
      "Tax saving strategies",
      "Exemption planning (54, 54F)",
      "Property & share tax advisory",
      "Income tax filing support",
    ],
    important: [
      "Indexation benefit available for long-term assets",
      "Exemptions available under Sections 54, 54F",
      "Different rules for shares vs property",
      "Surcharge and cess applicable",
      "Proper planning can significantly reduce tax",
    ],
    process: [
      "Calculate Capital Gain = Sale Price – (Purchase Price + Expenses + Improvements)",
      "Apply Indexation for LTCG = Purchase Price × (CII of Sale Year / CII of Purchase Year)",
      "Calculate STCG vs LTCG tax based on holding period & asset type",
      "Claim Exemptions under Sections 54 and 54F",
      "File Tax Return with CA-verified Capital Gain Computation",
    ],
    documents: [
      "Simple Property Calculation Example:",
      "Purchase Price: ₹20,00,000",
      "Sale Price: ₹50,00,000",
      "Indexed Cost: ₹30,00,000",
      "Capital Gain = ₹20,00,000 | Tax @20% = ₹4,00,000",
    ],
    faqs: [
      { q: "What is capital gain?", a: "Profit from sale of assets." },
      { q: "What is LTCG tax rate?", a: "Generally 10% (shares) or 20% (property)." },
      { q: "What is STCG tax rate?", a: "15% for shares, slab rate for property." },
      { q: "What is indexation?", a: "Adjustment of purchase price for inflation." },
      { q: "Can I save capital gains tax?", a: "Yes, through exemptions and planning." },
    ],
  },
];

export function getConsultationServiceBySlug(slug: string) {
  return CONSULTATION_SERVICES.find((s) => s.slug === slug);
}
