import { Link } from 'react-router-dom';
import { ArrowRight, Bot, Database, Eye, MessageSquare } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { useI18n } from '../i18n/I18nContext';

const solutions = [
  {
    icon: Bot,
    title: 'CortexAgent Platform',
    category: 'AI Agents',
    desc: 'Enterprise-grade autonomous AI agent platform for intelligent workflow automation, decision support, and process orchestration at scale.',
    tags: ['LLM', 'Automation', 'Enterprise'],
    color: '#147BFF',
    gradient: 'from-blue-600/20 to-blue-900/10',
  },
  {
    icon: MessageSquare,
    title: 'CortexChat Enterprise',
    category: 'Conversational AI',
    desc: 'Multilingual Arabic-English conversational AI platform with deep domain knowledge injection, RAG capabilities, and enterprise security controls.',
    tags: ['Arabic NLP', 'RAG', 'Multilingual'],
    color: '#00C6FF',
    gradient: 'from-cyan-600/20 to-cyan-900/10',
  },
  {
    icon: Database,
    title: 'DataPulse Analytics',
    category: 'Data Intelligence',
    desc: 'Real-time business intelligence platform with predictive analytics, automated reporting, and AI-driven anomaly detection for enterprise data.',
    tags: ['Power BI', 'ML', 'Real-time'],
    color: '#11998E',
    gradient: 'from-teal-600/20 to-teal-900/10',
  },
  {
    icon: Eye,
    title: 'SecureVision AI',
    category: 'Cybersecurity',
    desc: 'AI-powered threat detection and response platform for critical infrastructure protection, combining computer vision, behavioral analysis, and NLP.',
    tags: ['Threat Detection', 'SIEM', 'SOC'],
    color: '#FF416C',
    gradient: 'from-rose-600/20 to-rose-900/10',
  },
];

export default function SolutionsSection() {
  const { t } = useI18n();

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb orb-blue absolute bottom-0 right-0 w-[600px] h-[600px] opacity-10" />
      </div>

      <div className="container-max">
        <ScrollReveal className="text-center mb-16">
          <span className="section-label justify-center mb-4">
            <span className="w-8 h-px bg-brand-primary inline-block" />
            {t.solutions.label}
            <span className="w-8 h-px bg-brand-primary inline-block" />
          </span>
          <h2 className="section-title mb-4">{t.solutions.title}</h2>
          <p className="section-desc max-w-2xl mx-auto">{t.solutions.desc}</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solutions.map((sol, i) => {
            const Icon = sol.icon;
            return (
              <ScrollReveal key={sol.title} delay={i * 0.1}>
                <div className={`card group cursor-pointer h-full bg-gradient-to-br ${sol.gradient} relative overflow-hidden`}>
                  {/* Decorative glow */}
                  <div
                    className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                    style={{ background: sol.color }}
                  />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{ background: `${sol.color}20` }}
                      >
                        <Icon size={22} style={{ color: sol.color }} />
                      </div>
                      <span className="tag text-xs">{sol.category}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-primary transition-colors">
                      {sol.title}
                    </h3>
                    <p className="text-brand-textMuted text-sm leading-relaxed mb-5">{sol.desc}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex gap-2 flex-wrap">
                        {sol.tags.map((tag) => (
                          <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-brand-textMuted">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link
                        to="/services"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-200 hover:gap-2.5"
                        style={{ color: sol.color }}
                      >
                        {t.solutions.learnMore}
                        <ArrowRight size={15} />
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
