import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, ArrowRight, Search } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import ScrollReveal from '../components/ScrollReveal';
import NeuralBackground from '../components/NeuralBackground';
import { blogPosts } from '../sections/BlogPreviewSection';
import { useI18n } from '../i18n/I18nContext';
import { Link } from 'react-router-dom';

const categories = ['All', 'AI Strategy', 'NLP', 'Cybersecurity', 'Data Analytics', 'Engineering', 'Digital Transformation'];

export default function BlogPage() {
  const { t } = useI18n();
  const b = t.blogPage;
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = !searchQuery || post.title.toLowerCase().includes(searchQuery.toLowerCase()) || post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <>
      <Helmet>
        <title>Blog & Insights — Cortex AI | AI, Data & Cybersecurity Perspectives</title>
        <meta name="description" content="Expert analysis, research, and practical guides on AI, data analytics, cybersecurity, and digital transformation from the Cortex AI team." />
        <meta property="og:title" content="Cortex AI Blog — Intelligence Behind Innovation" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <PageTransition>
        {/* Hero */}
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-16">
          <NeuralBackground nodeCount={35} intensity="low" />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-bg via-transparent to-brand-bg" />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 40%, rgba(20,123,255,0.08) 0%, transparent 70%)' }} />

          <div className="relative z-10 text-center max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="section-label justify-center mb-4 block">
                <span className="w-8 h-px bg-brand-primary inline-block" />
                {t.blog.label}
                <span className="w-8 h-px bg-brand-primary inline-block" />
              </span>
              <h1 className="text-5xl sm:text-6xl font-bold text-white mb-5">{b.hero.title}</h1>
              <p className="text-xl text-brand-textMuted max-w-2xl mx-auto leading-relaxed">{b.hero.desc}</p>
            </motion.div>

            {/* Search */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 max-w-lg mx-auto"
            >
              <div className="relative">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-textMuted" />
                <input
                  type="text"
                  placeholder={b.search}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-5 py-3.5 rounded-xl glass text-white placeholder-brand-textMuted/60 focus:outline-none focus:border-brand-primary/50 transition-all text-sm"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Category filter */}
        <section className="py-6 sticky top-16 z-30 glass border-b border-brand-border">
          <div className="container-max px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 overflow-x-auto pb-0.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeCategory === cat
                      ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/20'
                      : 'glass text-brand-textMuted hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Articles */}
        <section className="section-padding">
          <div className="container-max">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-brand-textMuted text-lg">No articles found for "{searchQuery}"</p>
              </div>
            ) : (
              <>
                {/* Featured */}
                {featured && (
                  <ScrollReveal className="mb-10">
                    <div className="card p-0 overflow-hidden group cursor-pointer">
                      <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="relative h-72 lg:h-auto overflow-hidden">
                          <img
                            src={featured.image}
                            alt={featured.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent lg:to-brand-surface/90 bg-gradient-to-b lg:bg-none from-transparent to-brand-surface/90" />
                          <div className="absolute top-4 left-4">
                            <span
                              className="tag"
                              style={{ background: `${featured.color}20`, borderColor: `${featured.color}40`, color: featured.color }}
                            >
                              Featured · {featured.category}
                            </span>
                          </div>
                        </div>
                        <div className="p-8 flex flex-col justify-center">
                          <div className="flex items-center gap-3 text-sm text-brand-textMuted mb-3">
                            <span>{featured.date}</span>
                            <span>·</span>
                            <span className="flex items-center gap-1">
                              <Clock size={13} />
                              {featured.readTime} {t.blog.minRead}
                            </span>
                          </div>
                          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-snug group-hover:text-brand-primary transition-colors">
                            {featured.title}
                          </h2>
                          <p className="text-brand-textMuted leading-relaxed mb-6">{featured.excerpt}</p>
                          <Link
                            to="/blog"
                            className="inline-flex items-center gap-2 text-brand-primary font-semibold hover:gap-3 transition-all"
                          >
                            {t.blog.readMore}
                            <ArrowRight size={16} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                )}

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {rest.map((post, i) => (
                    <ScrollReveal key={post.id} delay={i * 0.07}>
                      <div className="card p-0 overflow-hidden group cursor-pointer h-full flex flex-col">
                        <div className="relative h-52 overflow-hidden">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-brand-surface/70 to-transparent" />
                          <div className="absolute top-3 left-3">
                            <span
                              className="tag text-xs"
                              style={{ background: `${post.color}20`, borderColor: `${post.color}40`, color: post.color }}
                            >
                              {post.category}
                            </span>
                          </div>
                        </div>
                        <div className="p-5 flex flex-col flex-1">
                          <div className="flex items-center gap-3 text-xs text-brand-textMuted mb-2.5">
                            <span>{post.date}</span>
                            <span>·</span>
                            <span className="flex items-center gap-1">
                              <Clock size={11} />
                              {post.readTime} {t.blog.minRead}
                            </span>
                          </div>
                          <h3 className="text-white font-bold mb-3 leading-snug group-hover:text-brand-primary transition-colors flex-1 line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-brand-textMuted text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                          <Link
                            to="/blog"
                            className="inline-flex items-center gap-1.5 text-sm font-semibold hover:gap-2.5 transition-all"
                            style={{ color: post.color }}
                          >
                            {t.blog.readMore}
                            <ArrowRight size={14} />
                          </Link>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
      </PageTransition>
    </>
  );
}
