export type NavSubItem = { title: string; href: string };
export type NavGroup = { title: string; href: string; items: NavSubItem[] };
export type NavEntry = { title: string; href: string; groups: NavGroup[] };

export const HEADER_MENU: NavEntry[] = [
  {
    title: "Income Tax",
    href: "/income-tax",
    groups: [
      {
        title: "Simple & Basic ITR-1",
        href: "/income-tax/simple-itr-1-salary",
        items: [
          { title: "Salary Income (Sahaj)", href: "/income-tax/simple-itr-1-salary" },
          { title: "Rent Income ITR", href: "/income-tax/simple-itr-1-salary" },
          { title: "Retired Person ITR", href: "/income-tax/simple-itr-1-salary" },
          { title: "Salary + Interest + Dividend", href: "/income-tax/simple-itr-1-salary" },
          { title: "Salary + Rent Income", href: "/income-tax/simple-itr-1-salary" },
        ],
      },
      {
        title: "Business ITR-4 (SUGAM)",
        href: "/income-tax/business-itr-4-presumptive",
        items: [
          { title: "44AD Presumptive ITR", href: "/income-tax/business-itr-4-presumptive" },
          { title: "44ADA Freelancer ITR", href: "/income-tax/business-itr-4-presumptive" },
        ],
      },
      {
        title: "Capital Gain ITR-2",
        href: "/income-tax/capital-gain-itr-2",
        items: [
          { title: "Shares / Mutual Fund Gain-Loss", href: "/income-tax/capital-gain-itr-2" },
          { title: "Property Profit / Loss", href: "/income-tax/capital-gain-itr-2" },
        ],
      },
      {
        title: "Business Income ITR-3",
        href: "/income-tax/business-itr-3",
        items: [
          { title: "Commission & Brokerage", href: "/income-tax/business-itr-3" },
          { title: "FnO ITR", href: "/income-tax/business-itr-3" },
          { title: "Intraday ITR", href: "/income-tax/business-itr-3" },
          { title: "Partner of Firm ITR", href: "/income-tax/business-itr-3" },
          { title: "All Type Income ITR", href: "/income-tax/business-itr-3" },
        ],
      },
      {
        title: "LLP, Firm & Company ITR",
        href: "/income-tax/llp-firm-company-itr",
        items: [
          { title: "Partnership Firm ITR-5", href: "/income-tax/llp-firm-company-itr" },
          { title: "LLP ITR-5", href: "/income-tax/llp-firm-company-itr" },
          { title: "OPC Company ITR-6", href: "/income-tax/llp-firm-company-itr" },
          { title: "Pvt Ltd Company ITR-6", href: "/income-tax/llp-firm-company-itr" },
        ],
      },
      {
        title: "Special Income ITR",
        href: "/income-tax/special-income-crypto-nri",
        items: [
          { title: "Crypto Income", href: "/income-tax/special-income-crypto-nri" },
          { title: "Lottery / Winning Income", href: "/income-tax/special-income-crypto-nri" },
          { title: "Agricultural Income", href: "/income-tax/special-income-crypto-nri" },
          { title: "NRI ITR", href: "/income-tax/special-income-crypto-nri" },
          { title: "Foreign Income ITR", href: "/income-tax/special-income-crypto-nri" },
          { title: "Complex Income", href: "/income-tax/special-income-crypto-nri" },
        ],
      },
      {
        title: "Error in Income Tax Return",
        href: "/income-tax/revised-rectification",
        items: [
          { title: "Defective ITR 139(9)", href: "/income-tax/revised-rectification" },
          { title: "Revised ITR 139(5)", href: "/income-tax/revised-rectification" },
          { title: "Rectification of ITR", href: "/income-tax/revised-rectification" },
        ],
      },
      {
        title: "Income Tax Notice",
        href: "/income-tax/income-tax-notice",
        items: [
          { title: "143(1) Intimation", href: "/income-tax/income-tax-notice" },
          { title: "Section 142 Notice", href: "/income-tax/income-tax-notice" },
          { title: "Section 148A Notice", href: "/income-tax/income-tax-notice" },
          { title: "Section 148 Notice", href: "/income-tax/income-tax-notice" },
        ],
      },
      {
        title: "Appeal & Reply",
        href: "/income-tax/appeal-reply",
        items: [
          { title: "Letter to Income Tax", href: "/income-tax/appeal-reply" },
          { title: "Appeal & Hearings", href: "/income-tax/appeal-reply" },
        ],
      },
      {
        title: "Updated ITR (ITR-U)",
        href: "/income-tax/updated-itr-u",
        items: [],
      },
    ],
  },
  {
    title: "GST",
    href: "/gst",
    groups: [
      {
        title: "GST Registration",
        href: "/gst/gst-registration",
        items: [
          { title: "New GST Registration", href: "/gst/new-gst-registration" },
          { title: "GST Cancellation", href: "/gst/gst-cancellation" },
          { title: "Composition GST", href: "/gst/gst-registration" },
          { title: "Change Trade Name", href: "/gst/change-trade-name-in-gst" },
          { title: "Change Mobile / Email", href: "/gst/change-mobile-email-in-gst" },
          { title: "Change Address", href: "/gst/change-address-in-gst" },
          { title: "Add Additional Address", href: "/gst/add-additional-place-of-business" },
          { title: "Add POB & APOB", href: "/gst/add-pob-apob-in-gst" },
        ],
      },
      {
        title: "GST Return Filings",
        href: "/gst",
        items: [
          { title: "GSTR-1 & 3B", href: "/gst" },
          { title: "Quarterly GST Return", href: "/gst" },
          { title: "GSTR-9 Annual", href: "/gst" },
          { title: "GSTR-9C Audit", href: "/gst" },
          { title: "GSTR-10 Final", href: "/gst" },
        ],
      },
      {
        title: "GST Reconciliation",
        href: "/gst",
        items: [
          { title: "ITC Reco (3B vs 2B)", href: "/gst" },
          { title: "GSTR-1 vs 3B", href: "/gst" },
          { title: "Assessment Reco", href: "/gst" },
        ],
      },
      {
        title: "GST Notice",
        href: "/gst",
        items: [
          { title: "Interest Notice", href: "/gst" },
          { title: "ASMT-10", href: "/gst" },
          { title: "Amnesty Scheme", href: "/gst" },
          { title: "Section 73 Notice", href: "/gst" },
        ],
      },
      {
        title: "GST Appeal & Reply",
        href: "/gst",
        items: [
          { title: "GST Appeal", href: "/gst" },
          { title: "Notice Reply", href: "/gst" },
        ],
      },
      {
        title: "GST Refund",
        href: "/gst",
        items: [
          { title: "Export Refund", href: "/gst" },
          { title: "Rate Difference Refund", href: "/gst" },
        ],
      },
      {
        title: "GST Special Cases",
        href: "/gst",
        items: [
          { title: "LUT for Export", href: "/gst" },
          { title: "Merchant Exporter", href: "/gst" },
          { title: "Multiple GST", href: "/gst" },
          { title: "E-commerce (Amazon/Flipkart/Meesho)", href: "/gst" },
          { title: "TCS Credit", href: "/gst" },
        ],
      },
    ],
  },
  {
    title: "TDS & TCS",
    href: "/tds-tcs",
    groups: [
      {
        title: "TAN Registration",
        href: "/tds-tcs/new-tan-registration",
        items: [
          { title: "New TAN", href: "/tds-tcs/new-tan-registration" },
          { title: "Change TAN", href: "/tds-tcs/tan-correction-services" },
          { title: "Duplicate TAN", href: "/tds-tcs/duplicate-tan-certificate-online" },
          { title: "Lost TAN", href: "/tds-tcs/duplicate-tan-certificate-online" },
        ],
      },
      {
        title: "TDS/TCS Return",
        href: "/tds-tcs/tds-tcs-return-filing",
        items: [
          { title: "24Q Salary", href: "/tds-tcs/form-24q-tds-filing-salary" },
          { title: "26Q", href: "/tds-tcs/form-26q-tds-return-filing" },
          { title: "27Q (NRI)", href: "/tds-tcs/form-27q-nri-foreign-payments" },
          { title: "27EQ (TCS)", href: "/tds-tcs/form-27eq-tcs-return" },
        ],
      },
      {
        title: "Certificates",
        href: "/tds-tcs/tds-certificates-form-16-16a",
        items: [
          { title: "Form 16", href: "/tds-tcs/tds-certificates-form-16-16a" },
          { title: "Form 16A", href: "/tds-tcs/form-16a-tds-certificate-download" },
          { title: "Form 27D", href: "/tds-tcs/form-27d-tcs-certificate" },
        ],
      },
      {
        title: "Revised TDS/TCS",
        href: "/tds-tcs/revised-tds-tcs-return-filing",
        items: [],
      },
      {
        title: "Challan Correction",
        href: "/tds-tcs/tds-challan-correction",
        items: [],
      },
      {
        title: "TDS on Property",
        href: "/tds-tcs/tds-on-property-section-194ia",
        items: [
          { title: "26QB Filing", href: "/tds-tcs/form-26qb-filing-property" },
          { title: "16B", href: "/tds-tcs/form-16b-tds-certificate-property" },
          { title: "Correction", href: "/tds-tcs/form-26qb-correction-tds-property" },
          { title: "Multiple Buyers/Sellers", href: "/tds-tcs/tds-on-property-multiple-buyers-sellers" },
        ],
      },
      {
        title: "TDS on Rent",
        href: "/tds-tcs/form-26qc-rent-tds-194ib",
        items: [
          { title: "26QC", href: "/tds-tcs/form-26qc-rent-tds-194ib" },
          { title: "16C", href: "/tds-tcs/form-16c-tds-certificate-rent" },
          { title: "Correction", href: "/tds-tcs/form-26qc-correction" },
          { title: "Multiple Parties", href: "/tds-tcs/tds-on-rent-multiple-parties" },
          { title: "Lower TDS", href: "/tds-tcs/lower-tds-certificate-197" },
        ],
      },
      { title: "TDS/TCS Default", href: "/tds-tcs/tds-tcs-notice-resolution", items: [] },
      { title: "TDS/TCS Notice", href: "/tds-tcs/tds-tcs-notice-resolution", items: [] },
      { title: "TDS Property (NRI)", href: "/tds-tcs/tds-on-property-nri-section-195", items: [] },
      { title: "Form 15CA/15CB", href: "/tds-tcs/form-15ca-15cb-foreign-remittance", items: [] },
    ],
  },
  {
    title: "Accounting & Audit",
    href: "/accounting-audit-services",
    groups: [
      {
        title: "Accounting & Outsourcing",
        href: "/accounting-audit-services/complete-accounting-services",
        items: [
          { title: "Startup Outsourcing", href: "/accounting-audit-services/startup-outsourcing-services" },
          { title: "Small Business", href: "/accounting-audit-services/small-business-accounting-tax-services" },
          { title: "Daily E-Invoicing / E-way", href: "/accounting-audit-services/daily-einvoicing-eway-bill-services" },
          { title: "Complete Accounting", href: "/accounting-audit-services/complete-accounting-services" },
          { title: "Accounting Review", href: "/accounting-audit-services/accounting-review-visits-services" },
          { title: "Accounting for Audit", href: "/accounting-audit-services/company-audit-services" },
          { title: "Accounting for ITR", href: "/accounting-audit-services/accounting-for-itr-filing" },
          { title: "Personal Accounting", href: "/accounting-audit-services/personal-accounting-services" },
        ],
      },
      {
        title: "Balance Sheet",
        href: "/accounting-audit-services/balance-sheet-preparation-services",
        items: [
          { title: "P&L", href: "/accounting-audit-services/profit-loss-statement-services" },
          { title: "ITR Balance Sheet", href: "/accounting-audit-services/itr-balance-sheet-preparation-services" },
          { title: "True Copy", href: "/accounting-audit-services/ca-certified-itr-copy-services" },
          { title: "LLP Balance Sheet", href: "/accounting-audit-services/llp-balance-sheet-form-8-services" },
          { title: "Company Financials", href: "/accounting-audit-services/company-financial-statements" },
        ],
      },
    ],
  },
  {
    title: "Bank Loan",
    href: "/bank-loan",
    groups: [
      {
        title: "Bank Loan Documents",
        href: "/bank-loan",
        items: [
          { title: "True Copy BS & PNL", href: "/bank-loan/true-copy-itr-balance-sheet-pnl-bank-loan" },
          { title: "CMA Data", href: "/bank-loan/cma-data-bank-loan" },
          { title: "Provisional Balance Sheet", href: "/bank-loan/provisional-balance-sheet" },
          { title: "3-Year Balance Sheet", href: "/bank-loan/three-year-balance-sheet" },
          { title: "Projected Balance Sheet", href: "/bank-loan/projected-balance-sheet" },
          { title: "Project Report", href: "/bank-loan/project-report-bank-loan" },
        ],
      },
    ],
  },
  {
    title: "MCA / ROC",
    href: "/mca",
    groups: [
      {
        title: "DIN / DPIN",
        href: "/mca/din-dpin-registration",
        items: [
          { title: "New DIN", href: "/mca/new-din-application" },
          { title: "DPIN", href: "/mca/dpin-llp-designated-partner" },
          { title: "Surrender", href: "/mca/surrender-duplicate-din" },
        ],
      },
      {
        title: "Company Incorporation",
        href: "/mca/company-incorporation",
        items: [
          { title: "Pvt Ltd", href: "/mca/private-limited-registration" },
          { title: "OPC", href: "/mca/opc-registration" },
          { title: "Section 8", href: "/mca/section-8-company-registration" },
        ],
      },
      {
        title: "Change in Company Data",
        href: "/mca",
        items: [
          { title: "Name", href: "/mca/company-name-change" },
          { title: "Address", href: "/mca/company-address-change" },
          { title: "Email/Mobile", href: "/mca/update-email-mobile-mca" },
          { title: "Capital", href: "/mca/increase-authorised-capital" },
          { title: "Master Data", href: "/mca/mca-master-data-correction" },
        ],
      },
      {
        title: "Annual ROC Compliance",
        href: "/mca",
        items: [
          { title: "AOC-4", href: "/mca" },
          { title: "MGT-7 / 7A", href: "/mca/mgt-7-mgt-7a-filing" },
          { title: "ADT-1", href: "/mca" },
          { title: "LLP Forms", href: "/mca/llp-forms-filing" },
          { title: "KYC", href: "/mca/director-kyc-dir3" },
        ],
      },
      {
        title: "LLP",
        href: "/mca/new-llp-formation",
        items: [
          { title: "LLP Formation", href: "/mca/new-llp-formation" },
          { title: "Partner Change", href: "/mca/resignation-of-partner-llp" },
          { title: "Data Change", href: "/mca/llp-agreement-changes" },
        ],
      },
      {
        title: "Others",
        href: "/mca",
        items: [
          { title: "Change in MOA", href: "/mca" },
          { title: "Other ROC Forms", href: "/mca/roc-other-forms-filing" },
          { title: "Secretarial Records", href: "/mca/secretarial-records-maintenance" },
          { title: "Share Certificate", href: "/mca/issue-share-certificate-sh1" },
          { title: "Strike Off (Company / LLP)", href: "/mca/strike-off-company-llp" },
        ],
      },
      {
        title: "Loan Charge",
        href: "/mca/loan-creation-charge",
        items: [
          { title: "CHG-1 Creation", href: "/mca/loan-creation-charge" },
          { title: "Modification", href: "/mca/modification-of-charge-chg1-chg9" },
          { title: "CHG-4 Closure", href: "/mca/satisfaction-of-charge-chg4" },
        ],
      },
    ],
  },
  {
    title: "Registrations",
    href: "/registrations",
    groups: [
      {
        title: "Business Setup",
        href: "/registrations",
        items: [
          { title: "Sole Proprietorship", href: "/registrations/sole-proprietorship-registration" },
          { title: "Partnership Firm", href: "/registrations/partnership-firm-registration" },
          { title: "Shop & Establishment", href: "/registrations/shop-establishment-registration" },
        ],
      },
      {
        title: "Tax Registrations",
        href: "/registrations",
        items: [
          { title: "Professional Tax", href: "/registrations/professional-tax-registration" },
          { title: "ESIC & PF", href: "/registrations" },
        ],
      },
      {
        title: "Licenses",
        href: "/registrations",
        items: [
          { title: "FSSAI", href: "/registrations" },
          { title: "Import Export Code", href: "/registrations" },
        ],
      },
      {
        title: "Digital",
        href: "/registrations",
        items: [
          { title: "Digital Signature (All types)", href: "/registrations" },
        ],
      },
      {
        title: "Startup / NGO",
        href: "/registrations/startup-ngo-registration",
        items: [
          { title: "Startup India DPIIT", href: "/registrations/startup-india-dpiit-registration" },
          { title: "Tax Holiday 80IAC", href: "/registrations/tax-holiday-section-80iac" },
          { title: "80G & 12AA", href: "/registrations" },
        ],
      },
      {
        title: "Others",
        href: "/registrations",
        items: [
          { title: "HUF Creation", href: "/registrations" },
        ],
      },
    ],
  },
];
