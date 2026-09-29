export interface LeadData {
    name: string;
    phone: string;
    email?: string;
    serviceName?: string;
    message?: string;

    sourceType: 'popup' | 'inline' | 'contact' | string;
    formName: string;
    ctaName?: string;
    ctaLocation?: string;
}

export const submitLead = async (data: LeadData) => {
    try {
        const searchParams = new URLSearchParams(window.location.search);

        // Attempt to store UTMs in session storage so they persist across pages
        const utms = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
        utms.forEach(utm => {
            if (searchParams.has(utm)) {
                sessionStorage.setItem(utm, searchParams.get(utm) || '');
            }
        });

        const payload = {
            ...data,
            pageTitle: document.title,
            pageUrl: window.location.href,
            pagePath: window.location.pathname,
            referrerUrl: document.referrer,

            utmSource: sessionStorage.getItem('utm_source') || '',
            utmMedium: sessionStorage.getItem('utm_medium') || '',
            utmCampaign: sessionStorage.getItem('utm_campaign') || '',
            utmTerm: sessionStorage.getItem('utm_term') || '',
            utmContent: sessionStorage.getItem('utm_content') || '',
        };

        const response = await fetch('https://api.praveenjandassociates.com/api/enquiries/create.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        });

        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Lead submission failed:", error);
        return { success: false, message: "Submission failed due to a network error." };
    }
};
