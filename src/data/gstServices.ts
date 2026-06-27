export type GstService = {
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

export const GST_SERVICES: GstService[] = [
  {
    slug: "gst-registration",
    title: "GST Registration",
    h1: "GST Registration Online — GSTIN in 7 Working Days with CA Support",
    metaTitle: "GST Registration Online India | Apply GSTIN — Praveen J & Associates",
    metaDescription:
      "Apply for GST registration online with expert CA support. Correct category, ARN tracking and GSTIN issuance for traders, startups, freelancers and ecommerce sellers.",
    heroLead: "Threshold cross ho gaya ya client GST bill maang raha hai?",
    heroSub:
      "Hum aapke business ke liye sahi category (Regular / Composition) decide karke, Aadhaar authentication ke saath GSTIN apply karte hain. ARN se lekar certificate tak full handholding.",
    primaryCta: "Apply for GST Registration",
    problems: [
      "Regular vs Composition — kaunsa scheme lena hai pata nahi",
      "Goods ₹40L / Services ₹20L threshold confusion",
      "Principal Place ka rent agreement / NOC missing",
      "Aadhaar authentication fail ya physical verification notice",
      "Pehle apply kiya, application reject ho gayi",
    ],
    whatIs: {
      heading: "GST Registration kya hota hai?",
      points: [
        "GSTIN — 15 digit ka unique tax identification number",
        "Mandatory jab turnover threshold cross ho ya inter-state supply ho",
        "Ecommerce sellers (Amazon, Flipkart, Meesho) ke liye day-1 se zaroori",
        "Voluntary registration bhi le sakte hain — ITC claim ke liye useful",
      ],
      note: "GSTIN milne ke baad tax invoice issue kar sakte hain aur ITC claim eligible hote hain.",
    },
    whoFor: [
      "Traders / shop owners crossing ₹40L turnover",
      "Service providers crossing ₹20L (₹10L in special states)",
      "Inter-state supply karne wale (kisi bhi turnover par)",
      "Amazon / Flipkart / Meesho sellers",
      "Freelancers billing to foreign / Indian companies",
    ],
    benefits: [
      "Legal authority to charge GST on invoices",
      "Input Tax Credit (ITC) on purchases & expenses",
      "Inter-state trade aur ecommerce platforms par sell karne ki freedom",
      "B2B clients ke saath credibility — TDS / TCS smoothly handle",
      "Government tenders & corporate vendor onboarding eligibility",
    ],
    important: [
      "Apply within 30 days of crossing threshold — late par penalty",
      "Aadhaar authentication se physical verification chance kam ho jaata hai",
      "Principal Place of Business proof sabse critical document hai",
      "Trade name aur legal name dono alag-alag entries hain — dhyaan se",
      "HSN/SAC codes correct daalna important hai future returns ke liye",
    ],
    process: [
      "Eligibility & scheme selection call with CA",
      "Document checklist share + collection",
      "REG-01 application filing with DSC/EVC",
      "Aadhaar authentication & ARN tracking",
      "GSTIN issued + certificate delivery on WhatsApp",
    ],
    documents: [
      "PAN of business / proprietor",
      "Aadhaar of authorized signatory",
      "Address proof of Principal Place (electricity bill + NOC / rent agreement)",
      "Bank account proof (cancelled cheque or statement)",
      "Passport photo + DSC (for companies / LLPs)",
    ],
    faqs: [
      { q: "Turnover threshold kya hai?", a: "Goods ke liye ₹40 lakh (₹20L in special states), services ke liye ₹20 lakh (₹10L in special states). Inter-state supply par threshold lagu nahi hota — registration mandatory hai." },
      { q: "GSTIN milne mein kitna time lagta hai?", a: "Aadhaar authentication complete ho jaye toh typically 7 working days. Physical verification ki nobat aaye toh 15–21 days bhi lag sakte hain." },
      { q: "Composition scheme kab choose karein?", a: "Annual turnover ₹1.5 cr tak ho, B2C heavy business ho, aur ITC ki zaroorat na ho toh composition (1% / 5% / 6%) better hota hai." },
      { q: "Home address par GST le sakte hain?", a: "Haan, residential address par bhi GST mil sakti hai — electricity bill + owner NOC (agar khud ka ghar nahi) chahiye." },
      { q: "Application reject ho jaye toh?", a: "Hum SCN (Show Cause Notice) ka reply 7 din mein file karte hain. Genuine cases mein dobara apply karke approval karwa lete hain." },
    ],
  },

  {
    slug: "new-gst-registration",
    title: "New GST Registration",
    h1: "New GST Registration for Fresh Businesses — Launch Compliant from Day 1",
    metaTitle: "New GST Registration India | First-Time GSTIN — Praveen J & Associates",
    metaDescription:
      "First-time GST registration for newly incorporated companies, LLPs, proprietorships and startups. Correct constitution mapping, jurisdiction and Aadhaar verification.",
    heroLead: "Naya business start kar rahe hain aur pehli baar GST le rahe hain?",
    heroSub:
      "First-time applicants ke liye sabse common mistake galat constitution ya jurisdiction select karna hota hai. Hum naye proprietors, LLP partners aur Pvt Ltd founders ke liye clean first-time GSTIN deliver karte hain.",
    primaryCta: "Apply for New GST Registration",
    problems: [
      "Proprietor / Partnership / Pvt Ltd — constitution kaise map karein",
      "State + Centre jurisdiction sahi select karna",
      "DSC issue ho rahi hai ya EVC fail ho raha hai",
      "Promoter ke Aadhaar mein mobile linked nahi hai",
      "REG-01 form ke 10 tabs mein har jagah confusion",
    ],
    whatIs: {
      heading: "New GST Registration kya hai?",
      points: [
        "Fresh GSTIN for businesses jo pehli baar register ho rahe hain",
        "Constitution of business (Prop / Partnership / LLP / Pvt Ltd) ke hisaab se documents alag hote hain",
        "Day-1 se tax invoice issue karne ka legal right",
        "ITC accumulation business launch ke saath hi start",
      ],
    },
    whoFor: [
      "Naye incorporated Pvt Ltd companies (post-MCA approval)",
      "Fresh LLPs jisne abhi RoC certificate liya hai",
      "Pehli baar register ho rahe proprietors / freelancers",
      "New ecommerce sellers Amazon / Flipkart onboarding ke liye",
      "Voluntary first-time registrants ITC ke liye",
    ],
    benefits: [
      "Business launch ke pehle din se compliant",
      "Investor / VC due diligence ke liye clean GST record",
      "Vendor & client onboarding mein zero friction",
      "Pre-incorporation expenses par ITC claim possible",
      "Sahi jurisdiction se future assessments smooth",
    ],
    important: [
      "Pvt Ltd / LLP ke liye COI date se 30 din andar apply karna better",
      "Promoter Aadhaar mobile-linked hona zaroori — OTP wahin aayega",
      "Authorized signatory ka separate KYC chahiye",
      "DSC Class 3 — companies aur LLPs ke liye mandatory",
      "Pehli return due date 1st month-end ke baad hi shuru ho jaati hai",
    ],
    process: [
      "Constitution + jurisdiction mapping call",
      "DSC / EVC readiness check",
      "REG-01 full filing across all 10 tabs",
      "Aadhaar authentication of all promoters/partners",
      "GSTIN + welcome kit (filing calendar) handover",
    ],
    documents: [
      "PAN of entity (firm/company) + all promoters",
      "Incorporation certificate (COI) / Partnership deed",
      "Board resolution authorizing signatory (companies)",
      "Registered office address proof + NOC",
      "DSC of authorized signatory (Class 3) + bank proof",
    ],
    faqs: [
      { q: "Company incorporate hote hi GST le lein?", a: "Haan, COI milte hi le lena best practice hai — pre-launch expenses par ITC milta hai. Mandatory threshold cross hone par hi hota hai, lekin voluntary lena smart move hai." },
      { q: "DSC nahi hai toh kya karein?", a: "Pvt Ltd / LLP ke liye DSC mandatory hai. Hum Class 3 DSC bhi 1 working day mein arrange kar dete hain." },
      { q: "Partnership deed notarised hona chahiye?", a: "Haan, notarised partnership deed + PAN of firm — dono mandatory hain partnership GST ke liye." },
      { q: "Multiple promoters ke Aadhaar verify karne hote hain?", a: "Companies mein at least authorized signatory aur 1 director, LLPs mein designated partners — sabki Aadhaar authentication zaroori hai." },
      { q: "Pehli return kab file karni hogi?", a: "GSTIN milne ke baad agle month ki 11 tareekh (GSTR-1) aur 20 tareekh (GSTR-3B) — nil return bhi mandatory hai." },
    ],
  },

  {
    slug: "quick-gst-registration",
    title: "Quick GST Registration (Rule 14A)",
    h1: "Quick GST Registration under Rule 14A — Priority GSTIN for Urgent Cases",
    metaTitle: "Quick GST Registration Rule 14A | Urgent GSTIN — Praveen J & Associates",
    metaDescription:
      "Need GSTIN urgently for a tender, Amazon onboarding or a client contract? Apply under Rule 14A with priority processing and CA-led follow-up.",
    heroLead: "Tender bharna hai ya Amazon seller account kal activate karna hai?",
    heroSub:
      "Rule 14A ke under priority GST registration — eligible cases mein dramatically faster turnaround. Hum eligibility check karke fast-track route choose karte hain aur department follow-up directly handle karte hain.",
    primaryCta: "Apply for Quick GST Registration",
    problems: [
      "Government tender deadline 3 din mein hai aur GSTIN nahi",
      "Amazon / Flipkart onboarding ke liye GSTIN immediate chahiye",
      "Client ne PO bheji hai but GST bill ke bina release nahi karega",
      "Normal route mein 10–15 din lag rahe hain",
      "Pehli application stuck hai aur koi update nahi mil raha",
    ],
    whatIs: {
      heading: "Rule 14A Quick GST Registration kya hai?",
      points: [
        "CGST Rules ka Rule 14A — priority / fast-track processing route",
        "Eligible cases mein officer-level priority allocation",
        "Aadhaar authentication mandatory — physical verification skip ho jaata hai",
        "Genuine urgency vaale cases ke liye design kiya gaya",
      ],
      note: "Sab cases qualify nahi karte — pehle eligibility check karna zaroori hai.",
    },
    whoFor: [
      "Tender bidders with documented deadline",
      "Ecommerce sellers awaiting marketplace activation",
      "Contractors with signed PO requiring GST invoice",
      "Time-bound launches (event-based businesses, seasonal sellers)",
      "Pehli application reject hone ke baad re-applicants",
    ],
    benefits: [
      "Faster ARN-to-GSTIN turnaround",
      "Physical verification ki probability significantly reduce",
      "Department follow-up CA direct handle karte hain",
      "Tender / PO deadlines miss hone se bachte hain",
      "Documentation pre-validation se rejection chance near zero",
    ],
    important: [
      "Eligibility Rule 14A ke specific conditions par depend karti hai",
      "Aadhaar authentication 100% mandatory — biometric ho sakta hai",
      "Documents pehle se WhatsApp / drive par ready rakhne hote hain",
      "ARN generate hote hi same-day filing complete karna padta hai",
      "Eligible nahi hain toh normal route hi suggest karenge — false promise nahi",
    ],
    process: [
      "Same-day eligibility & urgency assessment call",
      "Document pre-validation (rejection prevention)",
      "REG-01 filing with Aadhaar biometric authentication",
      "Direct department follow-up on ARN",
      "Priority GSTIN issuance + certificate delivery",
    ],
    documents: [
      "PAN + Aadhaar (mobile-linked, OTP ready)",
      "Address proof + NOC (pre-verified)",
      "Bank proof (cancelled cheque / first-page passbook)",
      "Constitution proof (COI / Deed / Prop declaration)",
      "Urgency proof helpful — tender doc / PO / onboarding email",
    ],
    faqs: [
      { q: "Quick registration mein exact kitna time?", a: "Eligibility + Aadhaar smooth ho toh 2–4 working days realistic hai. Lekin yeh officer load par bhi depend karta hai — guaranteed 24 hour wala promise koi sahi CA nahi karega." },
      { q: "Kya Rule 14A sabke liye available hai?", a: "Nahi. Specific eligibility criteria hain — hum free 10-min call par confirm karte hain ki aapka case qualify karega ya nahi." },
      { q: "Biometric Aadhaar kya hota hai?", a: "Kuch states mein GST Seva Kendra visit karke fingerprint verification karni padti hai. Hum nearest center + appointment book karne mein help karte hain." },
      { q: "Physical verification ho sakti hai?", a: "Aadhaar authentication complete hone par 95% cases mein physical verification skip ho jaati hai. Lekin officer ki discretion always rehti hai." },
      { q: "Reject ho gayi toh refund?", a: "Hamari fee me free re-application included hai genuine rejection cases mein. SCN reply + re-apply same scope mein cover hai." },
    ],
  },

  {
    slug: "add-additional-place-of-business",
    title: "Add Additional Place of Business (APOB)",
    h1: "Add Additional Place of Business (APOB) in GST — Same-State Branches & Warehouses",
    metaTitle: "Add APOB in GST | Additional Place of Business — Praveen J & Associates",
    metaDescription:
      "Add warehouses, branches and additional offices under same GSTIN via APOB amendment. Critical for ecommerce sellers using FBA/Smart Fulfilment.",
    heroLead: "Naya warehouse khol rahe hain ya Amazon FBA location add ho raha hai?",
    heroSub:
      "Har additional business location GST mein declare karna mandatory hai. Hum APOB amendment file karke same-state branches, warehouses aur fulfilment centers ko aapki existing GSTIN par add karte hain.",
    primaryCta: "Add APOB in GST",
    problems: [
      "Amazon FBA / Flipkart Smart warehouse ko APOB add karna",
      "Naya godown khola lekin GST mein update nahi kiya",
      "Multiple branches same state mein but ek hi address registered",
      "Department notice — undeclared place of business ka",
      "APOB add karte time owner NOC ya rent agreement missing",
    ],
    whatIs: {
      heading: "APOB (Additional Place of Business) kya hota hai?",
      points: [
        "Same GSTIN par additional business locations declare karna",
        "Warehouses, branches, godowns, fulfilment centers — sab APOB hote hain",
        "Sirf same state ke additional places — dusra state ke liye new GSTIN chahiye",
        "REG-14 amendment ke through file hoti hai",
      ],
      note: "Ecommerce sellers ke liye marketplace warehouse APOB add karna sabse zaroori compliance hai.",
    },
    whoFor: [
      "Amazon FBA sellers (har fulfilment center alag APOB)",
      "Flipkart Smart / Meesho warehouse users",
      "Traders opening new godown / storage facility",
      "Service businesses opening second branch same state",
      "Manufacturers with separate dispatch warehouse",
    ],
    benefits: [
      "Marketplace warehouse compliance — account suspension se safety",
      "E-way bill correctly generate hoti hai sahi origin se",
      "ITC on warehouse expenses (rent, electricity) claim possible",
      "Department audit mein clean records",
      "Multi-location inventory legally accounted",
    ],
    important: [
      "Same state mein hi APOB kaam karta hai — dusra state = new GSTIN",
      "Har location ka separate address proof + NOC chahiye",
      "Amazon ke FBA warehouses ke liye Amazon ka authorisation letter chahiye",
      "Core field amendment — officer approval lagti hai (auto-approved nahi)",
      "Approval ke baad updated certificate download karke share karna padta hai marketplaces ko",
    ],
    process: [
      "APOB list & purpose mapping (FBA / godown / branch)",
      "Address proof + NOC collection for each location",
      "REG-14 amendment filing with all locations",
      "Officer query (if any) reply within 7 days",
      "Updated GSTIN certificate share with Amazon/Flipkart",
    ],
    documents: [
      "GST portal login + existing certificate",
      "Address proof of each new location (electricity bill)",
      "NOC from owner OR rent agreement (per location)",
      "Amazon/Flipkart warehouse authorisation letter (for FBA APOB)",
      "Authorized signatory KYC if changed",
    ],
    faqs: [
      { q: "Amazon FBA warehouse APOB add nahi kiya toh?", a: "Amazon account suspend ho sakta hai — woh GSTIN certificate par warehouse address verify karta hai. Notice aane par 7 din mein add karna padta hai." },
      { q: "Kitne APOB add kar sakte hain?", a: "No limit. Same state mein 50+ APOB bhi single GSTIN par possible hain. Bade FBA sellers ke liye normal hai." },
      { q: "APOB amendment kitne din mein approve hoti hai?", a: "Core field amendment hai — typically 7–15 working days, officer query aaye toh thoda jyada." },
      { q: "Dusre state mein warehouse hai toh?", a: "Wahan ke liye alag GSTIN lena padega us state ka. Hum multi-state registration bhi handle karte hain." },
      { q: "NOC nahi mil rahi owner se?", a: "Rent agreement + electricity bill se kaam chal jaata hai. Friendly NOC draft hum share karte hain owner ke liye." },
    ],
  },

  {
    slug: "add-pob-apob-in-gst",
    title: "Add POB & APOB in GST",
    h1: "Update Principal & Additional Place of Business — Complete GST Address Structure",
    metaTitle: "Update POB & APOB in GST | Principal + Additional — Praveen J & Associates",
    metaDescription:
      "Restructuring your business? Update Principal Place of Business (POB) and Additional Places (APOB) together in one clean GST amendment.",
    heroLead: "Head office shift + multiple branch additions ek saath karne hain?",
    heroSub:
      "POB (principal) aur APOB (additional) dono ek saath update karne ka combined amendment. Hum officer-level approval ke saath complete address structure clean rebuild karte hain.",
    primaryCta: "Update POB & APOB Together",
    problems: [
      "Head office shift ho raha hai + naye branches bhi add karne hain",
      "Pehle wrong POB register tha, ab proper structure chahiye",
      "Business restructuring ke baad address mismatch ho gaya",
      "Audit notice — POB aur APOB dono mein discrepancy",
      "Investor due diligence se pehle GST records saaf karne hain",
    ],
    whatIs: {
      heading: "POB vs APOB — kya difference hai?",
      points: [
        "POB (Principal Place of Business) — main registered head office, sirf 1 hota hai",
        "APOB (Additional Place of Business) — branches, warehouses, godowns, multiple ho sakte hain",
        "POB par hi major correspondence aur jurisdiction define hoti hai",
        "Dono changes core field amendment hain — officer approval mandatory",
      ],
    },
    whoFor: [
      "Businesses head office shift kar rahe (same state)",
      "Companies adding multiple new locations together",
      "Restructuring post-merger / acquisition",
      "Startups moving from co-working to own office + adding warehouses",
      "Audit / due diligence ke pehle records cleanup karne wale",
    ],
    benefits: [
      "Ek hi amendment mein complete address structure update",
      "Officer query handle karne ka effort 1 hi baar",
      "Future returns aur invoices same address par consistent",
      "Investor / lender DD ke liye clean GST history",
      "Jurisdiction shift bhi handle ho jaata hai sahi tarah",
    ],
    important: [
      "POB change = core field, officer approval mandatory",
      "Dono changes ek REG-14 mein file karna efficient hai",
      "Jurisdiction (Centre/State) shift ho sakti hai POB change se",
      "Bank, billing, MSME, MCA mein bhi parallel update karna padta hai",
      "Pending returns POB change ke pehle file karna recommended",
    ],
    process: [
      "Current address structure audit",
      "New POB + APOB list finalisation",
      "Address proofs + NOCs collection (all locations)",
      "Combined REG-14 amendment filing",
      "Approval tracking + updated certificate delivery",
    ],
    documents: [
      "Existing GST certificate + login",
      "Address proof of new POB (electricity bill + NOC/rent)",
      "Address proofs of all APOBs separately",
      "Board resolution (companies) authorising change",
      "Authorized signatory updated KYC",
    ],
    faqs: [
      { q: "POB change ke baad jurisdiction change ho jaati hai?", a: "Haan, agar naya POB different ward / circle mein hai toh jurisdiction officer change ho jaate hain. Hum naye officer tak handover ensure karte hain." },
      { q: "POB aur APOB alag amendment mein file karein?", a: "Ek saath karna better hai — officer ek hi baar review karte hain, time aur effort dono bachte hain." },
      { q: "POB change mein kitna time?", a: "Core field amendment hai — 15–30 working days typical. Officer site visit bhi possible hai." },
      { q: "Pending returns ka kya hota hai?", a: "Pending returns POB change se pehle file karne ka request karte hain — naye officer ke saath fresh start saaf rehta hai." },
      { q: "Multi-state mein POB change?", a: "Different state ka POB matlab existing GSTIN cancel + naye state mein fresh GSTIN. Hum dono process handle karte hain." },
    ],
  },

  {
    slug: "change-address-in-gst",
    title: "Change Address in GST",
    h1: "Change Address in GST Certificate — Same-State Office / Shop Shifting",
    metaTitle: "Change Address in GST Certificate | Update GST Address — Praveen J & Associates",
    metaDescription:
      "Shifted your office, shop or registered premises within the same state? File GST address amendment with correct proof and CA-led officer follow-up.",
    heroLead: "Office ya shop same state mein shift ho gayi hai?",
    heroSub:
      "GST certificate par address update karna core field amendment hai — officer approval lagti hai. Hum sahi address proof + NOC ke saath REG-14 file karke 7–15 din mein updated certificate deliver karte hain.",
    primaryCta: "Update GST Address",
    problems: [
      "Office shift ho gayi but GST certificate purani address dikha raha hai",
      "Shop rent badal gaya, naya rent agreement upload karna hai",
      "Owner NOC dene mein hesitate kar raha hai",
      "Address change file kiya but officer ne reject kar diya",
      "Electricity bill owner ke naam, business ke naam nahi",
    ],
    whatIs: {
      heading: "GST Address Change kya hota hai?",
      points: [
        "Principal Place of Business ka registered address update karna",
        "Sirf same state ke andar — dusre state move = new GSTIN",
        "Core field amendment — REG-14 form se",
        "Officer approval + documentary evidence dono mandatory",
      ],
      note: "Address change ke baad updated certificate marketplaces, banks, vendors sabko share karna padta hai.",
    },
    whoFor: [
      "Businesses shifting office within same city / state",
      "Shop owners relocating to bigger premises",
      "Co-working users moving to own office",
      "Companies consolidating multiple offices into one",
      "Anyone wanting to correct wrong address in existing certificate",
    ],
    benefits: [
      "Updated certificate sab official communications par dikhega",
      "E-way bills naye address se generate hongi",
      "Marketplace KYC seamless — Amazon, Flipkart auto-update",
      "Bank, MSME, MCA records alignment easy",
      "Future audit mein zero address discrepancy",
    ],
    important: [
      "Core field amendment — auto-approve nahi hota, officer review karta hai",
      "Address proof + NOC dono lagte hain (rent ya owned premises ke liye different)",
      "Cross-state shift ke liye yeh process kaam nahi karega — fresh GSTIN chahiye",
      "Site verification ho sakti hai — premises ready honi chahiye",
      "Updated certificate marketplaces ko 7 din mein share karna best practice",
    ],
    process: [
      "Naye address ka document checklist share",
      "Owner NOC drafting (agar khud ka ghar nahi)",
      "REG-14 core amendment filing",
      "Officer query reply + site verification coordination",
      "Updated GST certificate download + WhatsApp delivery",
    ],
    documents: [
      "Existing GST certificate + portal login",
      "Naye address ka electricity bill (latest 2 months)",
      "Rent agreement (if rented) — registered preferred",
      "NOC from premises owner",
      "Authorized signatory KYC",
    ],
    faqs: [
      { q: "Address change kitne din mein hoti hai?", a: "Core field amendment hai — typical 7–15 working days. Site verification ki nobat aaye toh 21 days bhi possible." },
      { q: "Electricity bill owner ke naam hai toh?", a: "Bilkul valid hai — owner NOC + bill ki copy chahiye. Tenant ke naam bill mandatory nahi hai." },
      { q: "Rent agreement notarised hona chahiye?", a: "Notarised ya registered — dono mein se kuch bhi acceptable. Plain agreement par officer query aa sakti hai." },
      { q: "Site verification mein kya dekhte hain?", a: "Officer premises par jaake business activity, signboard, employees aur stock (if applicable) verify karte hain. Empty premises pe issue ho sakta hai." },
      { q: "Naya state hai toh isi process se hoga?", a: "Nahi. Cross-state shift = existing GSTIN cancel + naye state ka fresh GSTIN. Hum dono ek saath handle kar sakte hain." },
    ],
  },

  {
    slug: "change-mobile-email-in-gst",
    title: "Change Mobile & Email in GST",
    h1: "Change Mobile Number & Email in GST — Restore OTP Access Same Day",
    metaTitle: "Change Mobile & Email in GST | Update OTP Contact — Praveen J & Associates",
    metaDescription:
      "Lost access to OTP mobile or email registered in GST? Update authorized signatory contact details via non-core amendment. Usually same-day resolution.",
    heroLead: "GST portal pe OTP nahi aa raha aur filing stuck hai?",
    heroSub:
      "Authorized signatory ka mobile/email change non-core amendment hai — usually same working day mein resolve ho jaata hai. Hum lockout cases mein bhi authorized signatory route se access restore karte hain.",
    primaryCta: "Update Mobile & Email in GST",
    problems: [
      "Purana CA / accountant ka number registered tha, ab unreachable",
      "Authorized signatory left the company, OTP unka mobile pe aa raha hai",
      "Email account hacked / closed, GST notices miss ho rahi hain",
      "Mobile number change kiya but GST mein update nahi kiya",
      "Filing deadline aa rahi hai aur portal access nahi mil raha",
    ],
    whatIs: {
      heading: "Mobile & Email Update kya hota hai?",
      points: [
        "Authorized signatory ka registered mobile aur email change karna",
        "Non-core field amendment — usually auto-approved",
        "Naye dono details par OTP verification mandatory",
        "Lockout cases mein authorized signatory swap karke bhi restore hota hai",
      ],
      note: "Non-core amendment hone ke baavjood OTP verification ke bina change possible nahi.",
    },
    whoFor: [
      "Businesses jisme ex-employee ke contact details registered hain",
      "Outgoing CA / consultant change cases",
      "Companies jiska email account closed ya hacked ho gaya",
      "Sellers jisne mobile number change kiya aur update nahi kiya",
      "Anyone facing OTP not received issue on GST portal",
    ],
    benefits: [
      "Portal access usually same working day restore",
      "GST notices aur filing reminders sahi person ko milte hain",
      "OTP failures se filing delay aur late fee se safety",
      "Ex-employee / consultant ki dependency khatam",
      "Future compliance smooth aur in-house team ke control mein",
    ],
    important: [
      "Naye mobile aur email dono par OTP verify karna mandatory",
      "Agar existing contact unreachable hai toh authorized signatory change route lena padta hai",
      "Companies mein board resolution chahiye signatory change ke liye",
      "Non-core hone ke kaaran usually approval auto ho jaati hai",
      "Update hote hi GST portal password reset karna best practice",
    ],
    process: [
      "Current access status check (OTP coming ya nahi)",
      "Direct mobile/email update OR authorized signatory swap route",
      "REG-14 non-core amendment filing",
      "OTP verification on new mobile + email",
      "Confirmation + password reset support",
    ],
    documents: [
      "GST login (if accessible)",
      "Naya mobile number (active, OTP ready)",
      "Naya email ID (active inbox)",
      "Authorized signatory KYC (if changing person)",
      "Board resolution (for companies, if signatory change)",
    ],
    faqs: [
      { q: "Mobile/email change auto-approved hota hai?", a: "Haan, non-core field hai — OTP verification complete hote hi auto-approval. Usually same working day." },
      { q: "Purane mobile/email tak access nahi hai toh?", a: "Authorized signatory change route lena padta hai — naya signatory add karke uske mobile/email register karte hain. Yeh thoda lambi process hai but solve hota hai." },
      { q: "Kya GSTIN ya certificate change hoga?", a: "Nahi. Sirf contact details update hongi, GSTIN aur certificate same rahega." },
      { q: "Multiple users add kar sakte hain?", a: "Haan, ek se zyada authorized signatories add ho sakte hain — har ek ke alag mobile/email." },
      { q: "Filing due hai aur access nahi — emergency mein kya?", a: "Hum priority basis pe handle karte hain — usually 24 hours mein access restore karke filing complete karwate hain." },
    ],
  },

  {
    slug: "change-trade-name-in-gst",
    title: "Change Trade Name in GST",
    h1: "Change Trade Name in GST Certificate — Rebrand without Changing GSTIN",
    metaTitle: "Change Trade Name in GST | Update Business Name — Praveen J & Associates",
    metaDescription:
      "Rebranding your business? Update trade name on GST certificate via non-core amendment — usually same day approval. GSTIN remains unchanged.",
    heroLead: "Business rebrand kiya ya trade name change karna hai?",
    heroSub:
      "Trade name change non-core amendment hai — usually 1 working day mein updated GST certificate mil jaata hai. GSTIN same rehta hai, sirf certificate par naam update hota hai.",
    primaryCta: "Update GST Trade Name",
    problems: [
      "Brand rebrand hua but GST certificate purana naam dikha raha hai",
      "Invoice par naya naam, GST mein purana — client confusion",
      "Legal name vs trade name ka difference samajh nahi aa raha",
      "Trade name change ke saath legal name bhi change karna hai",
      "Marketplaces (Amazon/Flipkart) updated certificate maang rahe hain",
    ],
    whatIs: {
      heading: "Trade Name Change kya hota hai?",
      points: [
        "GST certificate par dikhne wala 'Trade Name' update karna",
        "Legal name (PAN ka naam) alag rehta hai — wo nahi badalta is process se",
        "Non-core field amendment — usually auto-approved",
        "GSTIN, jurisdiction, dates — sab same rehte hain",
      ],
      note: "Legal name (entity ka actual naam) change karna hai toh pehle PAN update, phir GST.",
    },
    whoFor: [
      "Brands rebranding their consumer-facing name",
      "Proprietors changing business name (legal name same)",
      "Businesses jisme trade name galat type ho gaya tha originally",
      "DBA (Doing Business As) name add karne wale",
      "Companies aligning GST trade name with website/marketing",
    ],
    benefits: [
      "Invoices aur GST certificate par consistent branding",
      "Marketplace listings ke saath alignment",
      "Customer trust — same naam everywhere",
      "Updated certificate usually 1 working day mein",
      "GSTIN intact — historical compliance records preserve",
    ],
    important: [
      "Trade name vs Legal name — bilkul alag concepts hain",
      "Legal name change ke liye pehle PAN update karna padta hai",
      "Proprietorship mein legal name = proprietor ka naam (cannot change without PAN change)",
      "Companies / LLPs ka legal name change MCA route se hota hai pehle",
      "Updated certificate Amazon / Flipkart par 7 din mein share karna chahiye",
    ],
    process: [
      "Legal name vs trade name clarity call",
      "Supporting document collection (board resolution / declaration)",
      "REG-14 non-core amendment filing",
      "Auto-approval tracking on portal",
      "Updated certificate download + delivery",
    ],
    documents: [
      "GST portal login",
      "Declaration / board resolution for new trade name",
      "PAN of entity (legal name reference)",
      "Authorized signatory KYC",
      "Updated branding documents (optional but helpful)",
    ],
    faqs: [
      { q: "Trade name change mein GSTIN badlega?", a: "Bilkul nahi. GSTIN permanent rehta hai — sirf certificate par trade name update hota hai. Sab historical filings same GSTIN par continue." },
      { q: "Legal name bhi change karna hai toh?", a: "Pehle PAN par naam update karna padega (companies = MCA, prop = self-attested + Aadhaar). Phir GST core field amendment file karenge — officer approval lagti hai." },
      { q: "Kitne din mein update ho jaata hai?", a: "Non-core field hai — typically 1 working day. Kabhi-kabhi system delay ho toh 2-3 din lag jaate hain." },
      { q: "Invoice format mein kya change karna padega?", a: "Apne ERP / billing tool mein trade name update karna — GSTIN same rahega. Updated certificate ke baad turant change karein invoices mein." },
      { q: "Marketplaces ko update kaise share karein?", a: "Amazon Seller Central / Flipkart partner panel par updated GST certificate upload — usually 48 hours mein listing par naya naam reflect ho jaata hai." },
    ],
  },

  {
    slug: "gst-cancellation",
    title: "GST Cancellation",
    h1: "GST Cancellation & Final Return (GSTR-10) — Clean GSTIN Closure",
    metaTitle: "GST Cancellation Online India | Surrender GSTIN — Praveen J & Associates",
    metaDescription:
      "Properly cancel GST registration with pending returns clearance and GSTR-10 final return filing. Voluntary cancellation and suo-moto revocation both handled.",
    heroLead: "Business band kar diya ya GST ki ab zaroorat nahi rahi?",
    heroSub:
      "Sirf 'cancel' button dabane se kaam nahi hota — pending returns, ITC reversal aur GSTR-10 final return file karna padta hai. Hum complete clean closure ya suo-moto revocation dono handle karte hain.",
    primaryCta: "Start GST Cancellation",
    problems: [
      "Business band ho gaya but GST returns abhi tak file karne pad rahe hain",
      "Suo-moto cancellation ho gayi aur revocation chahiye",
      "GSTR-10 final return ki samajh nahi — kya file karna hai",
      "Stock par ITC reversal ka calculation confusing hai",
      "Cancel karne ke baad bhi notices aa rahe hain",
    ],
    whatIs: {
      heading: "GST Cancellation kya hota hai?",
      points: [
        "GSTIN voluntarily surrender karna (REG-16) ya suo-moto cancel hone par revoke karna (REG-21)",
        "Cancellation ke baad GSTR-10 (final return) 3 mahine mein mandatory",
        "Stock par lagi ITC reverse karna padta hai cancellation date par",
        "Properly close na karein toh future mein heavy penalties + notices",
      ],
      note: "Suo-moto cancellation revoke karne ki time limit hoti hai — miss ho gayi toh new GSTIN lena padta hai.",
    },
    whoFor: [
      "Businesses jo permanently band ho gaye",
      "Turnover threshold se neeche aa gaye aur GST chhodna chahte hain",
      "Proprietor jisne business structure change kar liya (e.g. Pvt Ltd mein convert)",
      "Inactive GSTINs jin par 6+ months returns nil file ho rahi hain",
      "Suo-moto cancelled GSTINs jinhe revoke karwana hai",
    ],
    benefits: [
      "Permanent stop on monthly return compliance burden",
      "Late fees aur penalties ka risk khatam",
      "Department records mein clean closure status",
      "Stock ITC reversal sahi tarah documented",
      "Future business start karna ho toh clean slate",
    ],
    important: [
      "Cancel apply karne se pehle saari pending returns file karna mandatory",
      "Stock par closing date par ITC reversal calculation critical",
      "GSTR-10 final return cancellation date ke 3 months mein mandatory — miss = ₹10,000 penalty",
      "Suo-moto cancellation revocation window — typically 30 days, hum extension bhi try karte hain",
      "E-way bill portal aur income tax bhi update karna padta hai",
    ],
    process: [
      "Reason assessment (closure / threshold / restructure / suo-moto)",
      "Pending returns clearance + dues payment",
      "Stock ITC reversal calculation",
      "REG-16 (voluntary) ya REG-21 (revocation) filing",
      "GSTR-10 final return + cancellation order delivery",
    ],
    documents: [
      "GST portal login + last 6 months returns status",
      "Reason for cancellation (business closure proof helpful)",
      "Stock-on-hand details at cancellation date",
      "Last tax liability + ITC ledger",
      "For revocation: SCN reply, returns due, penalty payment proof",
    ],
    faqs: [
      { q: "GSTR-10 file na karein toh kya hoga?", a: "₹10,000 ka penalty + ongoing notices. Cancellation incomplete maani jaati hai aur future GST registration mein bhi issue aa sakta hai." },
      { q: "Suo-moto cancellation revoke ho sakti hai?", a: "Haan — typically 30 din ki window milti hai SCN milne ke baad. Pending returns file karke + dues clear karke REG-21 file karte hain. Hum window expire ke cases bhi try karte hain extension ke saath." },
      { q: "Stock par ITC reversal kaise calculate karte hain?", a: "Closing stock par jo ITC originally claim hua tha (proportionate) reverse karna padta hai. Hum stock value + ITC ledger se exact calculation karke pay karwate hain cancellation se pehle." },
      { q: "Cancellation ke baad agar dobara GST chahiye?", a: "New GSTIN ke liye fresh registration kar sakte hain — purani cancelled GSTIN revive nahi hoti (revocation window ke baad)." },
      { q: "Total process kitne din?", a: "Voluntary cancellation: 30–45 din (pending returns + REG-16 approval + GSTR-10). Revocation: 15–30 din typically." },
    ],
  },
];

export function getGstServiceBySlug(slug: string) {
  return GST_SERVICES.find((s) => s.slug === slug);
}
