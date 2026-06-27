import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Clock, User2, Calendar, CheckCircle2, XCircle, MessageCircle, Phone, BookOpen, Tag } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer, FloatingWhatsApp } from "@/components/site/Footer";
import { BLOG_POSTS, type BlogPost } from "@/data/blogPosts";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = BLOG_POSTS.find(p => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.post;
    if (!p) return {};
    return {
      meta: [
        { title: p.seoTitle },
        { name: "description", content: p.metaDescription },
        { property: "og:title", content: p.seoTitle },
        { property: "og:description", content: p.metaDescription },
        { property: "article:author", content: p.author },
        { property: "article:section", content: p.category },
      ],
      links: [{ rel: "canonical", href: `/blog/${p.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: p.title,
            author: { "@type": "Person", name: p.author },
            datePublished: p.updated,
            articleSection: p.category,
            description: p.metaDescription,
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: p.faqs.map(f => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 container mx-auto px-4 py-20 text-center">
        <h1 className="font-display text-3xl font-bold">Article not found</h1>
        <Link to="/blog" className="mt-4 inline-block text-brand underline">Back to blog</Link>
      </div>
      <Footer />
    </div>
  ),
  component: BlogPostPage,
});

function BlogPostPage() {
  const { post: p } = Route.useLoaderData() as { post: BlogPost };
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-brand/5 via-white to-brand/5 py-12 lg:py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog" className="inline-flex items-center gap-1 text-sm text-brand hover:underline"><ArrowLeft className="h-4 w-4" /> Back to Blog</Link>
            <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-semibold">{p.category}</span>
            <h1 className="mt-4 font-display text-3xl md:text-5xl font-bold text-ink leading-tight">{p.title}</h1>
            <div className="mt-5 flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5"><User2 className="h-4 w-4" /> {p.author}</span>
              <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> {p.readTime}</span>
              <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> Updated {p.updated}</span>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-4xl grid lg:grid-cols-[1fr_280px] gap-10">
            <article className="prose-content space-y-10">
              <div className="p-6 rounded-2xl border-l-4 border-brand bg-brand/5">
                <h2 className="font-display text-lg font-bold text-ink">Quick Answer</h2>
                <p className="mt-2 text-foreground/80">{p.quickAnswer}</p>
              </div>

              <div className="p-6 rounded-2xl border bg-emerald-50/50">
                <h2 className="font-display text-lg font-bold text-ink flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-emerald-600" /> Key Takeaways</h2>
                <ul className="mt-3 space-y-2">
                  {p.keyTakeaways.map(k => (
                    <li key={k} className="flex items-start gap-2 text-sm text-ink">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" /><span>{k}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {p.sections.map(s => (
                <div key={s.heading}>
                  <h2 className="font-display text-2xl font-bold text-ink">{s.heading}</h2>
                  {s.body && <p className="mt-3 text-foreground/80 leading-relaxed">{s.body}</p>}
                  {s.bullets && (
                    <ul className="mt-4 space-y-2">
                      {s.bullets.map(b => (
                        <li key={b} className="flex items-start gap-2 text-foreground/80">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand shrink-0" /><span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {s.table && (
                    <div className="mt-5 overflow-x-auto rounded-xl border">
                      <table className="w-full text-sm">
                        <thead className="bg-muted">
                          <tr>{s.table.headers.map(h => <th key={h} className="text-left px-4 py-3 font-semibold text-ink">{h}</th>)}</tr>
                        </thead>
                        <tbody>
                          {s.table.rows.map((row, i) => (
                            <tr key={i} className="border-t">
                              {row.map((c, j) => <td key={j} className="px-4 py-3 text-foreground/80">{c}</td>)}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              ))}

              <div>
                <h2 className="font-display text-2xl font-bold text-ink">Common Mistakes to Avoid</h2>
                <ul className="mt-4 space-y-2">
                  {p.mistakes.map(m => (
                    <li key={m} className="flex items-start gap-2 p-3 rounded-lg bg-red-50/60 border border-red-100 text-foreground/80">
                      <XCircle className="h-4 w-4 text-red-500 mt-0.5 shrink-0" /><span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-ink">Frequently Asked Questions</h2>
                <div className="mt-4 space-y-3">
                  {p.faqs.map(f => (
                    <details key={f.q} className="rounded-xl border bg-white p-4 group">
                      <summary className="cursor-pointer font-semibold text-ink list-none flex items-start justify-between gap-3">
                        <span>{f.q}</span><span className="text-brand group-open:rotate-45 transition-transform">+</span>
                      </summary>
                      <p className="mt-3 text-foreground/80 text-sm leading-relaxed">{f.a}</p>
                    </details>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-brand to-brand/80 text-white">
                <h2 className="font-display text-xl font-bold">Need Help Filing Your Return?</h2>
                <p className="mt-2 text-white/90">Whether you're salaried, a freelancer, business owner, trader or NRI — our CA team can help.</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link to="/contact-us" className="inline-flex items-center gap-2 rounded-xl bg-white text-brand px-5 py-2.5 font-semibold hover:bg-white/90 transition"><Phone className="h-4 w-4" /> Book Consultation</Link>
                  <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] text-white px-5 py-2.5 font-semibold hover:opacity-90 transition"><MessageCircle className="h-4 w-4" /> WhatsApp CA</a>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t">
                <span className="text-sm font-semibold text-ink flex items-center gap-1.5"><Tag className="h-4 w-4" /> Tags:</span>
                {p.tags.map(t => <span key={t} className="text-xs rounded-full bg-muted px-3 py-1 text-foreground/70">{t}</span>)}
              </div>
            </article>

            <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
              <div className="p-5 rounded-2xl border bg-white">
                <h3 className="font-semibold text-ink flex items-center gap-2"><BookOpen className="h-4 w-4 text-brand" /> More Articles</h3>
                <ul className="mt-4 space-y-3 text-sm">
                  {BLOG_POSTS.filter(b => b.slug !== p.slug).slice(0, 5).map(b => (
                    <li key={b.slug}>
                      <Link to="/blog/$slug" params={{ slug: b.slug }} className="text-foreground/80 hover:text-brand">{b.title}</Link>
                    </li>
                  ))}
                  {BLOG_POSTS.length === 1 && <li className="text-muted-foreground">More coming soon.</li>}
                </ul>
              </div>
              <div className="p-5 rounded-2xl bg-ink text-white">
                <h3 className="font-semibold">Free CA Consultation</h3>
                <p className="text-sm text-white/70 mt-2">Get personalised advice from our experts.</p>
                <Link to="/contact-us" className="mt-4 block w-full text-center rounded-lg bg-brand py-2 font-semibold hover:bg-brand/90 transition">Book Now</Link>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
