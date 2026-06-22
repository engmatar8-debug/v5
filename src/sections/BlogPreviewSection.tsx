import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { useI18n } from '../i18n/I18nContext';

export const blogPosts = [
  {
    id: 1,
    title: 'The Future of Enterprise AI: From Proof of Concept to Production at Scale',
    excerpt: 'As organizations move beyond pilot programs, the challenge shifts from building AI capabilities to deploying them reliably, securely, and at enterprise scale.',
    category: 'AI Strategy',
    date: 'June 10, 2025',
    readTime: 8,
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: '#147BFF',
    slug: 'enterprise-ai-poc-to-production',
  },
  {
    id: 2,
    title: 'Arabic NLP in 2025: Breakthroughs Enabling the Next Wave of MENA AI Applications',
    excerpt: 'Recent advances in Arabic large language models are opening unprecedented opportunities for organizations across the Middle East and North Africa region.',
    category: 'NLP',
    date: 'May 28, 2025',
    readTime: 6,
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: '#00C6FF',
    slug: 'arabic-nlp-mena-2025',
  },
  {
    id: 3,
    title: 'Securing AI Systems: Threat Modeling for Large Language Model Deployments',
    excerpt: 'As LLMs become critical enterprise infrastructure, understanding their unique attack surface is essential for any organization serious about AI security.',
    category: 'Cybersecurity',
    date: 'May 15, 2025',
    readTime: 10,
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: '#FF416C',
    slug: 'llm-security-threat-modeling',
  },
  {
    id: 4,
    title: 'Data-Driven Government: How Public Sector Organizations Are Harnessing AI Analytics',
    excerpt: 'Leading government agencies are leveraging advanced analytics platforms to improve service delivery, optimize resource allocation, and enhance policy outcomes.',
    category: 'Data Analytics',
    date: 'May 2, 2025',
    readTime: 7,
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: '#11998E',
    slug: 'ai-analytics-government',
  },
  {
    id: 5,
    title: 'RAG Architecture Guide: Building Production-Ready Retrieval-Augmented Generation Systems',
    excerpt: 'A comprehensive technical guide to designing, building, and deploying RAG systems that are accurate, fast, and maintainable in production environments.',
    category: 'Engineering',
    date: 'April 18, 2025',
    readTime: 12,
    image: 'https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: '#9B59B6',
    slug: 'rag-architecture-guide',
  },
  {
    id: 6,
    title: 'Digital Transformation ROI: Measuring the Business Impact of AI Investments',
    excerpt: 'How to build a rigorous framework for quantifying the financial and operational returns from your organization\'s AI and digital transformation initiatives.',
    category: 'Digital Transformation',
    date: 'April 5, 2025',
    readTime: 9,
    image: 'https://images.pexels.com/photos/7947491/pexels-photo-7947491.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: '#FF8A00',
    slug: 'digital-transformation-roi',
  },
];

export default function BlogPreviewSection() {
  const { t } = useI18n();
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1, 4);

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-max">
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="section-label mb-3 block">
                <span className="w-8 h-px bg-brand-primary inline-block" />
                {t.blog.label}
              </span>
              <h2 className="section-title">{t.blog.title}</h2>
              <p className="section-desc mt-3 max-w-lg">{t.blog.desc}</p>
            </div>
            <Link to="/blog" className="btn-secondary whitespace-nowrap flex-shrink-0">
              {t.blog.viewAll}
              <ArrowRight size={16} />
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Featured article */}
          <ScrollReveal className="lg:col-span-3" delay={0.05}>
            <div className="card p-0 overflow-hidden group cursor-pointer h-full">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-surface via-brand-surface/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span
                    className="tag"
                    style={{ background: `${featured.color}20`, borderColor: `${featured.color}40`, color: featured.color }}
                  >
                    {featured.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-brand-textMuted mb-3">
                  <span>{featured.date}</span>
                  <div className="flex items-center gap-1">
                    <Clock size={12} />
                    <span>{featured.readTime} {t.blog.minRead}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-primary transition-colors leading-snug">
                  {featured.title}
                </h3>
                <p className="text-brand-textMuted text-sm leading-relaxed mb-5 line-clamp-3">
                  {featured.excerpt}
                </p>
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 text-brand-primary text-sm font-semibold hover:gap-3 transition-all"
                >
                  {t.blog.readMore}
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* Side articles */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {rest.map((post, i) => (
              <ScrollReveal key={post.id} delay={0.1 + i * 0.07}>
                <div className="card group cursor-pointer flex gap-4 p-4">
                  <div className="flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span
                        className="text-xs font-semibold"
                        style={{ color: post.color }}
                      >
                        {post.category}
                      </span>
                      <span className="text-brand-textMuted/40 text-xs">·</span>
                      <span className="text-xs text-brand-textMuted flex items-center gap-1">
                        <Clock size={10} />
                        {post.readTime} {t.blog.minRead}
                      </span>
                    </div>
                    <h4 className="text-white text-sm font-semibold leading-snug line-clamp-2 group-hover:text-brand-primary transition-colors">
                      {post.title}
                    </h4>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
