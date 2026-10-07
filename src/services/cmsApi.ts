export interface CMSPage {
  id: number;
  title: string;
  slug: string;
  meta_title?: string;
  meta_description?: string;
  status: 'published' | 'draft';
  blocks_json: Array<{
    id: string;
    type: 'hero' | 'features' | 'faqs' | 'pricing' | 'cta';
    data: any;
  }>;
}

const API_BASE = import.meta.env.VITE_CMS_API_URL || 'http://localhost:5001/api';

export const getCMSPageBySlug = async (slug: string): Promise<CMSPage | null> => {
  try {
    const response = await fetch(`${API_BASE}/pages/slug/${slug}`);
    if (!response.ok) return null;
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching CMS page for slug '${slug}':`, error);
    return null;
  }
};
