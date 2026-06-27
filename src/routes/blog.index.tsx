import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, Search, Clock, User2, Eye, ArrowRight, TrendingUp, Calculator, Mail, MessageCircle, Phone } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer, FloatingWhatsApp } from "@/components/site/Footer";
import { BLOG_POSTS, BLOG_CATEGORIES, TRENDING, FREE_TOOLS, POPULAR_SEARCHES } from "@/data/blogPosts";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Tax, GST & Business Compliance Blog — Praveen J & Associates" },
      { name: "description", content: "Expert articles, practical guides, tax-saving tips, GST updates, MCA compliance, and business insights by Chartered Accountants." },
      { property: "og:title", content: "Knowledge Center — Tax, GST & Business Insights" },
      { property: "og:description", content: "CA-authored guides on Income Tax, GST, TDS, MCA and business compliance." },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const [q, setQ] = useState("");
  const featured = BLOG_POSTS.slice(0, 3);
  const all = BLOG_POSTS.filter(p => p.title.toLowerCase().includes(q.toLowerCase()) || p.category.toLowerCase().includes(q.toLowerCase()));
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative bg-gradient-to-br from-brand/5 via-white to-brand/5 py-14 lg:py-20">
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-semibold">
              <BookOpen className="h-3.5 w-3.5" /> Knowledge Center
            </span>
            <h1 className="mt-4 font-display text-3xl md:text-5xl font-bold text-ink leading-tight">
              Tax, GST &amp; Business Compliance Made Simple
            </h1>
            <p className="mt-3 text-lg text-muted-foreground max-w-3xl mx-auto">
              Expert articles, practical guides, tax-saving tips, GST updates, MCA compliance, and business insights by Chartered Accountants.
            </p>
            <div className="mt-8 max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                value={q}
                onChange={e => setQ(e.target.value)}
                placeholder="Search articles..."
                className="w-full rounded-full border bg-white pl-12 pr-4 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand/30"
              />
            </div>
            <div className="mt-4 flex flex-wrap justify-center gap-2 text-xs">
              <span className="text-muted-foreground">Popular:</span>
              {POPULAR_SEARCHES.map(s => (
                <button key={s} onClick={() => setQ(s)} className="rounded-full border bg-white px-3 py-1 hover:bg-brand/5 hover:border-brand/30 transition">{s}</button>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">Browse by Category</h2>
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {BLOG_CATEGORIES.map(c => (
                <div key={c.name} className="p-5 rounded-2xl border bg-gradient-to-br from-white to-brand/5 hover:border-brand/40 hover:shadow-lg transition-all">
                  <h3 className="font-semibold text-ink">{c.name}</h3>
                  <p className="text-xs text-brand font-semibold mt-1">{c.count}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {c.topics.map(t => <span key={t} className="text-xs rounded-full bg-muted px-2 py-0.5 text-foreground/70">{t}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 bg-muted/30">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex items-end justify-between flex-wrap gap-4">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">Featured Articles</h2>
              <span className="text-sm text-muted-foreground">CA-authored • Updated for 2026</span>
            </div>
            <div className="mt-8 grid md:grid-cols-3 gap-5">
              {featured.map(p => (
                <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="group block rounded-2xl border bg-white overflow-hidden hover:shadow-xl hover:-translate-y-0.5 transition-all">
                  <div className="aspect-[16/9] bg-gradient-to-br from-brand/20 to-brand/5 flex items-center justify-center">
                    <BookOpen className="h-12 w-12 text-brand/60" />
                  </div>
                  <div className="p-5">
                    <span className="inline-block text-xs font-semibold text-brand bg-brand/10 rounded-full px-2 py-0.5">{p.category}</span>
                    <h3 className="mt-3 font-display font-bold text-ink group-hover:text-brand transition-colors line-clamp-2">{p.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.excerpt}</p>
                    <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{p.readTime}</span>
                      <span className="flex items-center gap-1"><User2 className="h-3.5 w-3.5" />{p.author}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 bg-white">
          <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">Latest Articles</h2>
              <div className="mt-6 grid sm:grid-cols-2 gap-5">
                {all.length === 0 ? (
                  <p className="text-muted-foreground col-span-2">No articles match your search.</p>
                ) : all.map(p => (
                  <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="group block rounded-2xl border bg-white overflow-hidden hover:shadow-lg hover:border-brand/40 transition-all">
                    <div className="aspect-[16/9] bg-gradient-to-br from-brand/10 to-muted flex items-center justify-center">
                      <BookOpen className="h-10 w-10 text-brand/60" />
                    </div>
                    <div className="p-5">
                      <span className="text-xs font-semibold text-brand">{p.category}</span>
                      <h3 className="mt-2 font-semibold text-ink group-hover:text-brand transition-colors line-clamp-2">{p.title}</h3>
                      <div className="mt-3 flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{p.readTime}</span>
                        <span className="flex items-center gap-1"><Eye className="h-3.5 w-3.5" />New</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <aside className="space-y-6">
              <div className="p-5 rounded-2xl border bg-gradient-to-br from-brand/5 to-white">
                <h3 className="font-semibold text-ink flex items-center gap-2"><TrendingUp className="h-4 w-4 text-brand" /> Trending This Week</h3>
                <ul className="mt-4 space-y-2 text-sm">
                  {TRENDING.map((t, i) => (
                    <li key={t} className="flex items-start gap-3">
                      <span className="text-brand font-bold">{i + 1}.</span>
                      <span className="text-foreground/80 hover:text-brand cursor-pointer">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-5 rounded-2xl border bg-white">
                <h3 className="font-semibold text-ink flex items-center gap-2"><Calculator className="h-4 w-4 text-brand" /> Free Tools</h3>
                <ul className="mt-4 space-y-2 text-sm">
                  {FREE_TOOLS.map(t => (
                    <li key={t} className="flex items-center justify-between hover:text-brand">
                      <span>{t}</span><ArrowRight className="h-3.5 w-3.5" />
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-5 rounded-2xl bg-ink text-white">
                <h3 className="font-semibold flex items-center gap-2"><Mail className="h-4 w-4" /> Never Miss Important Tax Updates</h3>
                <p className="text-sm text-white/70 mt-2">Get monthly insights from our CA team.</p>
                <form className="mt-4 space-y-2" onSubmit={e => { e.preventDefault(); window.open("https://wa.me/919999999999?text=Subscribe%20me%20to%20tax%20updates", "_blank"); }}>
                  <input type="email" required placeholder="Email" className="w-full rounded-lg px-3 py-2 text-ink focus:outline-none" />
                  <button className="w-full rounded-lg bg-brand py-2 font-semibold hover:bg-brand/90 transition">Subscribe</button>
                </form>
              </div>
            </aside>
          </div>
        </section>

        <section className="py-14 bg-gradient-to-br from-brand to-brand/80 text-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="font-display text-2xl md:text-4xl font-bold">Need Personal Tax Help?</h2>
            <p className="mt-3 text-white/90">Talk to a Chartered Accountant for tailored guidance on your situation.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link to="/contact-us" className="inline-flex items-center gap-2 rounded-xl bg-white text-brand px-6 py-3 font-semibold shadow-lg hover:bg-white/90 transition-all">
                <Phone className="h-4 w-4" /> Book Consultation
              </Link>
              <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] text-white px-6 py-3 font-semibold hover:opacity-90 transition-all">
                <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
