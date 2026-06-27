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
    h1: "Live Tax Consultation — Book Expert CA Online in India",
    metaTitle: "Live CA Consultation Online | Book Tax Advisor — Praveen J & Associates",
    metaDescription:
      "Talk to a CA LIVE — instant tax, GST, compliance & business advice via call / WhatsApp / Zoom. Book your live consultation today.",
    heroLead: "Urgent tax / business query? CA se LIVE baat karein — call, WhatsApp ya Zoom par.",
    heroSub: "15–30 minutes mein experienced Chartered Accountant se direct clarity — no delays, no confusion.",
    primaryCta: "Book Live Consultation",
    problems: [
      "Urgent tax notice mil gaya — kya reply karu?",
      "GST registration / filing par confusion",
      "Business setup decision atki hui hai",
      "Compliance deadline kal hai — guidance chahiye",
      "Financial decision lene se pehle expert opinion",
    ],
    whatIs: {
      heading: "Live Tax Consultation kya hai?",
      points: [
        "Real-time 1-on-1 session with a practicing CA",
        "Call, WhatsApp video ya Zoom — apki convenience",
        "15–30 minute focused session per query",
        "Actionable advice + clear next steps",
        "Follow-up service support available",
      ],
      note: "Sahi advice sahi waqt par — lakhon ke nuksaan se bachata hai.",
    },
    whoFor: [
      "Business owners with urgent queries",
      "Startups & founders planning structure",
      "Freelancers & professionals on tax planning",
      "Companies / LLPs needing compliance clarity",
      "Anyone needing one-time expert opinion",
    ],
    benefits: [
      "Instant answers from a qualified CA",
      "Avoid costly mistakes & penalties",
      "Practical, India-specific advice",
      "Save research time & confusion",
      "Clear action plan within minutes",
    ],
    important: [
      "Sessions are 15–30 minutes typically",
      "Available Mon–Sat, business hours (extended slots possible)",
      "Recording / written summary on request",
      "Confidential — no information shared externally",
      "Continue with full-service engagement post-session",
    ],
    process: [
      "Book your slot online / WhatsApp",
      "Share query + relevant documents",
      "Join call / Zoom / WhatsApp at scheduled time",
      "Get expert advice + next steps",
      "Optional: continue with end-to-end service",
    ],
    documents: [
      "Brief description of your query",
      "Relevant notices / forms (if any)",
      "Past returns / filings (optional)",
      "Business / entity details",
      "PAN / GSTIN (where applicable)",
    ],
    faqs: [
      { q: "Consultation paid hai?", a: "Haan — session type ke according nominal fee hoti hai. Quote upfront share kar dete hain." },
      { q: "Kaise book karu?", a: "Website form ya WhatsApp se slot book — confirmation + meeting link share kar dete hain." },
      { q: "Kitna time milega?", a: "Standard slot 15–30 minutes. Complex queries ke liye extended slots available." },
      { q: "Recording milegi?", a: "Request par session recording / written summary share kar dete hain." },
      { q: "Service aage continue kar sakte hain?", a: "Bilkul — full ITR / GST / MCA / compliance services hum end-to-end provide karte hain." },
    ],
  },
  {
    slug: "income-tax-calculation",
    title: "Income Tax Calculation",
    h1: "Income Tax Calculation India — Accurate CA-Led Tax Computation",
    metaTitle: "Income Tax Calculation India | CA Tax Computation — Praveen J & Associates",
    metaDescription:
      "Accurate income tax calculation for FY 2024-25 — old vs new regime, slab-wise, deductions & rebate. CA-reviewed computation sheet.",
    heroLead: "Apna actual tax kitna banega — old regime vs new regime?",
    heroSub: "Income, deductions, exemptions, rebate — CA-led computation sheet jo ITR filing ke time ready use ho jaye.",
    primaryCta: "Calculate My Tax",
    problems: [
      "Old vs New regime — kaunsa fayda?",
      "80C, 80D, HRA, LTA — sab deductions claim ho rahi?",
      "Advance tax / TDS adjust karne mein confusion",
      "Capital gain + salary mix calculation galat",
      "Rebate 87A eligible hu ya nahi?",
    ],
    whatIs: {
      heading: "Income Tax calculation mein kya hota hai?",
      points: [
        "All income heads aggregate — salary, business, capital gain, house property, other",
        "Eligible deductions & exemptions apply (old regime)",
        "Slab-wise tax + surcharge + cess",
        "TDS, advance tax & self-assessment adjustment",
        "Final payable / refundable amount",
      ],
      note: "Old vs new regime comparison harek case mein different — CA-led computation se best route choose hota hai.",
    },
    whoFor: [
      "Salaried individuals",
      "Freelancers & consultants",
      "Business owners & professionals",
      "NRIs with Indian income",
      "Investors with capital gains",
    ],
    benefits: [
      "Accurate tax liability — no surprises",
      "Old vs new regime best fit",
      "Maximise eligible deductions",
      "ITR filing ready computation",
      "Plan investments for next FY",
    ],
    important: [
      "FY 2024-25 — new regime is default",
      "Rebate 87A: ₹25,000 (new) / ₹12,500 (old) up to slab",
      "Surcharge slabs: ₹50L+, ₹1Cr+, ₹2Cr+, ₹5Cr+",
      "Cess: 4% Health & Education on tax + surcharge",
      "Mismatch with 26AS / AIS leads to notice",
    ],
    process: [
      "Share income details + Form 16 / 26AS",
      "Provide deduction proofs",
      "CA-led old vs new regime computation",
      "Final tax liability + planning notes",
      "Use for ITR filing or advance tax",
    ],
    documents: [
      "Form 16 / salary slips",
      "26AS + AIS / TIS",
      "Investment proofs (80C, 80D etc.)",
      "Capital gain statements",
      "Bank interest / other income proofs",
    ],
    faqs: [
      { q: "Old vs new regime — kaunsa choose karu?", a: "Deductions ₹2L+ claim ho rahe hain toh old. Otherwise new regime generally fayda deta hai." },
      { q: "Rebate 87A kab milta hai?", a: "New regime mein income ≤ ₹7L; old regime mein ≤ ₹5L par 87A rebate eligible." },
      { q: "Capital gain alag tax slab par lagti hai?", a: "Haan — LTCG (equity) 12.5%, STCG (equity) 20%, debt as per slab. Salary slab se alag treatment." },
      { q: "Advance tax kab pay karu?", a: "Tax liability ₹10,000+ hai toh 4 installments (15 Jun / 15 Sep / 15 Dec / 15 Mar) mandatory." },
      { q: "Tax computation ke baad ITR filing?", a: "Bilkul — same computation use karke hum ITR-1/2/3/4 file kar dete hain." },
    ],
  },
  {
    slug: "advance-tax-calculation",
    title: "Advance Tax Calculation",
    h1: "Advance Tax Calculation India — Quarterly Installments Without Interest",
    metaTitle: "Advance Tax Calculation India | 234B 234C — Praveen J & Associates",
    metaDescription:
      "Accurate advance tax calculation — 15 Jun, 15 Sep, 15 Dec, 15 Mar installments. Avoid 234B & 234C interest. CA-led computation.",
    heroLead: "Tax liability ₹10,000+ hai? Advance tax 4 installments mein pay karna mandatory hai.",
    heroSub: "234B / 234C interest avoid karne ke liye accurate quarterly projection — hum CA-led calculation karke share karte hain.",
    primaryCta: "Calculate Advance Tax",
    problems: [
      "234B / 234C interest aa raha — kab aur kitna miss hua?",
      "Income estimate galat — under / over payment",
      "Capital gain mid-year hua — installment kaise adjust?",
      "TDS already cut gaya — advance tax bhi pay karu?",
      "Quarterly deadline miss ho gayi — penalty calculation",
    ],
    whatIs: {
      heading: "Advance Tax kya hai?",
      points: [
        "Tax liability ₹10,000+ hai toh advance tax mandatory",
        "4 installments: 15 Jun (15%), 15 Sep (45%), 15 Dec (75%), 15 Mar (100%)",
        "Sec 234B — shortfall on 31 Mar par 1%/month interest",
        "Sec 234C — installment-wise shortfall interest",
        "Senior citizens (no business income) exempt",
      ],
      note: "Capital gain ya unexpected income aaya toh next installment mein adjust ho sakta hai — pehle wala interest waive nahi hota.",
    },
    whoFor: [
      "Salaried with high other income",
      "Freelancers & consultants",
      "Business owners & professionals",
      "Investors with capital gains",
      "NRIs with Indian taxable income",
    ],
    benefits: [
      "Avoid 234B / 234C interest",
      "Smooth cash-flow planning",
      "Accurate quarterly projections",
      "Last-minute panic avoid",
      "Year-end ITR filing seamless",
    ],
    important: [
      "Threshold: tax liability ₹10,000+ for FY",
      "Installments: 15 Jun / 15 Sep / 15 Dec / 15 Mar",
      "234B: 1%/month from Apr if <90% paid by 31 Mar",
      "234C: installment-wise shortfall — 1%/month",
      "44AD / 44ADA presumptive — pay full by 15 Mar",
    ],
    process: [
      "Project full-year income & TDS",
      "Compute estimated tax liability",
      "Allocate installment-wise amounts",
      "Pay via Challan 280 (e-payment)",
      "Quarterly review & adjustment",
    ],
    documents: [
      "Salary / business income projection",
      "Investment & rental income estimate",
      "Capital gain statements (YTD)",
      "26AS / TDS deducted till date",
      "Last year's ITR for reference",
    ],
    faqs: [
      { q: "Senior citizen ko bhi pay karna hai?", a: "Resident senior citizen without business / profession income — advance tax exempt." },
      { q: "Installment miss kar di — kya hoga?", a: "Sec 234C interest installment-wise lagta hai — short paid amount par 1%/month for 3 months." },
      { q: "Capital gain Dec mein hua — kya kare?", a: "Next installment (15 Mar) mein full adjust karein — earlier installments par 234C interest avoid hota hai us income ke liye." },
      { q: "TDS pehle se cut gaya hai — phir bhi advance tax?", a: "Total liability minus TDS = balance ₹10,000+ ho toh advance tax mandatory." },
      { q: "44AD / 44ADA presumptive scheme mein?", a: "Sirf 1 installment — 15 March tak 100% pay karna allowed hai." },
    ],
  },
  {
    slug: "capital-gain-calculation",
    title: "Capital Gain Calculation",
    h1: "Capital Gain Calculation India — Equity, Property & MF — CA-Led",
    metaTitle: "Capital Gain Calculation India | LTCG STCG — Praveen J & Associates",
    metaDescription:
      "Accurate capital gain computation — equity, MF, property. STCG / LTCG, indexation, exemptions u/s 54, 54EC, 54F. CA-reviewed.",
    heroLead: "Shares, mutual funds ya property bechi? Capital gain proper calculate karna padta hai.",
    heroSub: "STCG / LTCG, indexation, grandfathering, Sec 54/54EC/54F exemptions — hum CA-led computation sheet share karte hain.",
    primaryCta: "Calculate Capital Gain",
    problems: [
      "Equity vs MF vs property — alag-alag tax rates",
      "Indexation kaise apply karu?",
      "Grandfathering (31 Jan 2018) confusion",
      "Sec 54 / 54EC / 54F exemption miss",
      "Loss set-off & carry forward galat",
    ],
    whatIs: {
      heading: "Capital Gain kya hota hai?",
      points: [
        "Asset sale price minus indexed / actual cost = capital gain",
        "Short-term (STCG) vs Long-term (LTCG) — holding period based",
        "Equity LTCG: 12.5% above ₹1.25L (FY24-25)",
        "Equity STCG: 20% (Sec 111A)",
        "Property / debt: indexation removed (post 23 Jul 2024) — 12.5% flat",
      ],
      note: "Sahi exemption (Sec 54, 54EC, 54F) plan karke lakhon tax bachaya jaa sakta hai.",
    },
    whoFor: [
      "Equity & MF investors",
      "Property sellers (residential / commercial)",
      "Gold / jewellery sellers",
      "Startup founders exiting ESOPs",
      "NRIs selling Indian assets",
    ],
    benefits: [
      "Accurate STCG / LTCG bifurcation",
      "Maximise exemptions u/s 54 / 54EC / 54F",
      "Set-off & carry forward losses correctly",
      "Avoid notices on AIS / TIS mismatch",
      "Tax-efficient exit planning",
    ],
    important: [
      "Equity holding > 12 months = LTCG",
      "Property / unlisted shares > 24 months = LTCG",
      "LTCG equity exemption ₹1.25L per FY",
      "Sec 54: residential property reinvest within 2 years (build 3)",
      "Sec 54EC: ₹50L NHAI / REC bonds within 6 months",
    ],
    process: [
      "Share transaction statements",
      "Classify STCG / LTCG asset-wise",
      "Apply indexation / grandfathering",
      "Apply Sec 54 / 54EC / 54F exemptions",
      "Final computation + ITR-ready sheet",
    ],
    documents: [
      "Demat / broker capital gain statements",
      "Mutual fund CAS",
      "Property sale & purchase deeds",
      "Improvement cost proofs",
      "Reinvestment proofs (54 / 54EC / 54F)",
    ],
    faqs: [
      { q: "Equity LTCG par exemption?", a: "Per FY ₹1.25L tak LTCG tax-free; uske upar 12.5% (FY 2024-25)." },
      { q: "Grandfathering kya hai?", a: "31 Jan 2018 se pehle ki equity holdings — uss date ka highest price cost maan ke LTCG calculate hota hai." },
      { q: "Property sale par indexation milti hai?", a: "23 Jul 2024 ke baad — 12.5% without indexation. Older transactions par option mil sakta hai. CA-led case-by-case." },
      { q: "Sec 54 vs 54F mein difference?", a: "Sec 54: residential property → residential property. Sec 54F: any other asset → residential property (with conditions)." },
      { q: "Loss carry forward kab tak?", a: "STCL / LTCL — 8 years carry forward (only if ITR on time filed)." },
    ],
  },
];

export function getConsultationServiceBySlug(slug: string) {
  return CONSULTATION_SERVICES.find((s) => s.slug === slug);
}
