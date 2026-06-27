export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  author: string;
  updated: string;
  excerpt: string;
  quickAnswer: string;
  keyTakeaways: string[];
  sections: { heading: string; body?: string; bullets?: string[]; table?: { headers: string[]; rows: string[][] } }[];
  mistakes: string[];
  faqs: { q: string; a: string }[];
  seoTitle: string;
  metaDescription: string;
  tags: string[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "how-to-file-income-tax-return-india-2026",
    title: "How to File Income Tax Return (ITR) in India – Complete Step-by-Step Guide (2026)",
    category: "Income Tax",
    readTime: "8–10 mins",
    author: "CA Praveen Jain",
    updated: "2026",
    excerpt: "A complete 2026 guide to filing your Income Tax Return in India — ITR forms, documents, deductions, common mistakes and FAQs.",
    quickAnswer: "Filing your Income Tax Return (ITR) is a legal requirement for many individuals and businesses in India. The process involves selecting the correct ITR form, calculating taxable income, claiming eligible deductions, verifying your return, and submitting it before the due date. Filing accurately helps you avoid penalties, receive faster refunds, and maintain a strong financial record.",
    keyTakeaways: [
      "Choose the correct ITR form based on your income.",
      "Keep all income and investment documents ready.",
      "Claim all eligible deductions.",
      "Verify your return after filing.",
      "Seek professional guidance for business income, capital gains, crypto income, foreign assets or multiple income sources.",
    ],
    sections: [
      {
        heading: "Why Filing ITR Is Important",
        body: "Many people believe Income Tax Return filing is only necessary if taxes are deducted from their salary. In reality, filing an ITR offers several benefits beyond legal compliance.",
        bullets: [
          "Avoid penalties and notices from the Income Tax Department.",
          "Claim tax refunds quickly.",
          "Apply for home, business and personal loans.",
          "Build financial credibility.",
          "Carry forward capital losses.",
          "Maintain proper financial records.",
        ],
      },
      {
        heading: "Who Should File an Income Tax Return?",
        bullets: [
          "Salaried employee",
          "Freelancer / Consultant",
          "Business owner",
          "Partnership firm / LLP",
          "Private Limited Company",
          "Stock trader (F&O / Intraday)",
          "Investor earning capital gains",
          "NRI with taxable Indian income",
          "Individual with foreign assets or income",
        ],
      },
      {
        heading: "Step 1 – Collect Your Documents",
        bullets: [
          "PAN Card, Aadhaar Card",
          "Form 16, Salary slips",
          "Bank statements",
          "Form 26AS, AIS & TIS",
          "Investment proofs",
          "Home loan statements",
          "Capital gain statements (if applicable)",
        ],
      },
      {
        heading: "Step 2 – Select the Correct ITR Form",
        body: "Choosing the correct return form is extremely important. Selecting the wrong form can result in defects or notices.",
        table: {
          headers: ["Income Type", "Recommended Form"],
          rows: [
            ["Salary", "ITR-1"],
            ["Capital Gain", "ITR-2"],
            ["Business / Trading", "ITR-3"],
            ["Presumptive Business", "ITR-4"],
            ["LLP", "ITR-5"],
            ["Company", "ITR-6"],
          ],
        },
      },
      {
        heading: "Step 3 – Calculate Your Total Income",
        bullets: ["Salary", "House Property", "Interest Income", "Dividend", "Capital Gains", "Business Income", "Freelancing", "Foreign Income", "Other Sources"],
      },
      {
        heading: "Step 4 – Claim Eligible Deductions",
        body: "You may be eligible for deductions under various provisions:",
        bullets: ["Section 80C", "Section 80D", "Home Loan Interest", "Education Loan", "NPS Contributions", "Donations", "HRA Benefits"],
      },
      {
        heading: "Step 5 – Verify Your Return",
        body: "Your ITR is considered complete only after verification.",
        bullets: ["Aadhaar OTP", "Net Banking", "Demat Account", "Bank Account Verification", "Physical ITR-V (if applicable)"],
      },
      {
        heading: "Benefits of Filing Through a Chartered Accountant",
        bullets: [
          "Correct ITR form selection",
          "Accurate tax computation",
          "Maximum eligible deductions",
          "Compliance with tax laws",
          "Notice handling support",
          "Future tax planning",
        ],
      },
    ],
    mistakes: [
      "Choosing the wrong ITR form.",
      "Ignoring Form 26AS or AIS.",
      "Missing interest income.",
      "Forgetting capital gains.",
      "Incorrect bank account details.",
      "Not verifying the return.",
      "Filing after the due date.",
    ],
    faqs: [
      { q: "Which ITR form should I file?", a: "The correct form depends on your income sources. Salaried individuals generally use ITR-1, while business owners, professionals and investors may require different forms." },
      { q: "Can I file my previous year's ITR?", a: "Yes. Updated returns can be filed for eligible past assessment years, subject to applicable provisions." },
      { q: "What happens if I don't file my ITR?", a: "You may face penalties, interest, loss of certain tax benefits, and difficulty obtaining loans or visas." },
      { q: "Is filing ITR mandatory if TDS has already been deducted?", a: "In many cases, yes. TDS deduction does not automatically complete your tax compliance obligations." },
      { q: "Can freelancers file ITR?", a: "Yes. Freelancers must report their professional income and file the appropriate ITR based on their circumstances." },
    ],
    seoTitle: "How to File Income Tax Return (ITR) in India – Complete Guide 2026",
    metaDescription: "Learn how to file your Income Tax Return (ITR) in India with this complete 2026 guide. Understand ITR forms, required documents, deductions, common mistakes, FAQs, and expert CA assistance.",
    tags: ["Income Tax", "ITR Filing", "Updated ITR", "Tax Planning", "CA Mumbai"],
  },
];

export const BLOG_CATEGORIES = [
  { name: "Income Tax", count: "120+ Articles", topics: ["Latest Updates", "ITR Filing", "Tax Planning"] },
  { name: "GST", count: "90+ Articles", topics: ["Registration", "Returns", "Notice"] },
  { name: "TDS", count: "60+ Articles", topics: ["Property", "Rent", "Compliance"] },
  { name: "MCA / ROC", count: "45+ Articles", topics: ["Company Compliance", "Strike Off", "DIR"] },
  { name: "Business Registration", count: "50+ Articles", topics: ["LLP", "Private Ltd", "Startup"] },
  { name: "Accounting", count: "35+ Articles", topics: ["Bookkeeping", "Audit", "Payroll"] },
  { name: "Tax Planning", count: "40+ Articles", topics: ["Save Tax", "Investments", "Deductions"] },
];

export const TRENDING = ["Updated Return", "GST Notice", "Crypto Tax", "Capital Gain", "MCA Amnesty"];
export const FREE_TOOLS = ["Income Tax Calculator", "HRA Calculator", "Capital Gain Calculator", "GST Calculator", "TDS Calculator"];
export const POPULAR_SEARCHES = ["GST Registration", "Updated ITR", "Income Tax Notice", "Capital Gain", "TDS Property", "MCA Amnesty"];
