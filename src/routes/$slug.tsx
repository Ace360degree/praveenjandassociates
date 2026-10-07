import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer, FloatingWhatsApp } from "@/components/site/Footer";
import { getCMSPageBySlug, CMSPage } from "@/services/cmsApi";
import { DynamicBlockRenderer } from "@/components/cms/DynamicBlockRenderer";
import { ChevronRight, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/$slug")({
  loader: async ({ params }) => {
    // Exclude static root paths if any
    const reservedSlugs = ["thankyou", "disclaimer", "privacy-policy", "terms-and-conditions", "company-profile", "company-policies", "contact-us"];
    if (reservedSlugs.includes(params.slug)) {
      return null;
    }

    const page = await getCMSPageBySlug(params.slug);
    if (!page || page.status !== 'published') {
      throw notFound();
    }
    return page;
  },
  head: ({ loaderData }) => {
    const page = loaderData as CMSPage | null;
    if (!page) return {};
    return {
      meta: [
        { title: page.meta_title || page.title },
        { name: "description", content: page.meta_description || "" },
        { property: "og:title", content: page.meta_title || page.title },
        { property: "og:description", content: page.meta_description || "" },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen flex flex-col bg-white text-ink">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-24 text-center">
        <h1 className="font-display text-4xl font-bold text-red-600">Page Not Found</h1>
        <p className="text-muted-foreground mt-3">The page you are looking for does not exist or has been moved.</p>
        <Link to="/" className="inline-flex mt-6 items-center gap-2 text-red-600 font-semibold hover:underline">
          <ArrowRight className="h-4 w-4" /> Return to Homepage
        </Link>
      </main>
      <Footer />
    </div>
  ),
  component: DynamicCMSPage,
});

function DynamicCMSPage() {
  const page = Route.useLoaderData() as CMSPage;
  if (!page) return null;

  return (
    <div className="min-h-screen flex flex-col bg-white text-ink">
      <Header />
      <main className="flex-1">
        <Breadcrumbs title={page.title} />
        <DynamicBlockRenderer blocks={page.blocks_json} pageTitle={page.title} />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

function Breadcrumbs({ title }: { title: string }) {
  return (
    <nav className="border-b bg-muted/30" aria-label="Breadcrumb">
      <ol className="container mx-auto px-4 py-3 text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2 text-muted-foreground flex-wrap max-w-full overflow-hidden">
        <li><Link to="/" className="hover:text-red-600">Home</Link></li>
        <ChevronRight className="h-3 w-3" />
        <li className="text-ink font-medium">{title}</li>
      </ol>
    </nav>
  );
}
