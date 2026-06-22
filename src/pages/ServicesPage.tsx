import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Brain, BarChart3, Shield, Cpu, GraduationCap, CheckCircle, ArrowRight, Database, Eye, MessageSquare, Bot, TrendingUp, Code2 } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import ScrollReveal from '../components/ScrollReveal';
import NeuralBackground from '../components/NeuralBackground';
import CTASection from '../sections/CTASection';
import { useI18n } from '../i18n/I18nContext';
import { Link } from 'react-router-dom';

const aiSubItems = [Bot, MessageSquare, Brain, Code2, Database, TrendingUp, Eye, BarChart3];
void aiSubItems;

const dataServices = [
  { title: 'Business Intelligence & Dashboards', desc: 'Interactive real-time dashboards powered by Power BI, Tableau, and custom analytics platforms for executive and operational insights.' },
  { title: 'Predictive Modeling', desc: 'Machine learning models for demand forecasting, churn prediction, risk scoring, and strategic planning across business functions.' },
  { title: 'Data Engineering & Pipelines', desc: 'Scalable data pipelines, lake architectures, and ETL processes to ensure clean, reliable, and timely data flows.' },
  { title: 'Advanced Statistical Analysis', desc: 'Deep statistical analysis, A/B testing frameworks, and causal inference to drive evidence-based decision making.' },
];

const cyberServices = [
  { title: 'AI-Powered Threat Detection', desc: 'Machine learning models that identify anomalous behavior, zero-day threats, and advanced persistent threats in real time.' },
  { title: 'Security Operations Center (SOC)', desc: 'Managed SOC services with 24/7 monitoring, SIEM integration, and incident response for critical infrastructure.' },
  { title: 'Penetration Testing & Red Team', desc: 'Comprehensive offensive security assessments to identify and remediate vulnerabilities before attackers do.' },
  { title: 'Compliance & Governance (NCA, PDPL)', desc: 'Full regulatory compliance framework covering NCA Essential Cybersecurity Controls, PDPL, ISO 27001, and GDPR.' },
];

const digitalServices = [
  { title: 'Cloud Migration & Architecture', desc: 'Strategic cloud adoption across AWS, Azure, and GCP with secure, scalable, and cost-optimized architectures.' },
  { title: 'Process Automation & RPA', desc: 'Intelligent robotic process automation and workflow orchestration to eliminate manual tasks and accelerate operations.' },
  { title: 'Enterprise Platform Modernization', desc: 'Legacy system transformation and API-first architectures enabling agility and integration across your technology stack.' },
  { title: 'Digital Strategy Consulting', desc: 'Comprehensive digital transformation roadmaps aligned to your organizational goals, culture, and market dynamics.' },
];

const trainingServices = [
  { title: 'Corporate AI Training Programs', desc: 'Tailored AI literacy and skills development programs for executives, managers, and technical teams.' },
  { title: 'Data Science Bootcamps', desc: 'Intensive hands-on programs covering Python, machine learning, deep learning, and production ML engineering.' },
  { title: 'Cybersecurity Certification Prep', desc: 'Prep courses for CISSP, CEH, Security+, and regional certifications including NCA and Saudi-specific frameworks.' },
  { title: 'Custom Corporate Training', desc: 'Bespoke training solutions designed for your technology stack, industry context, and learning objectives.' },
];

interface ServiceSectionProps {
  id: string;
  icon: typeof Brain;
  color: string;
  gradient: string;
  title: string;
  desc: string;
  items: { title: string; desc: string }[];
  delay?: number;
}

function ServiceBlock({ id, icon: Icon, color, gradient, title, desc, items, delay = 0 }: ServiceSectionProps) {
  return (
    <div id={id} className="mb-20 scroll-mt-24">
      <ScrollReveal delay={delay}>
        <div className={`glass rounded-3xl p-8 sm:p-10 relative overflow-hidden bg-gradient-to-br ${gradient}`}>
          <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl" style={{ background: `linear-gradient(90deg, ${color}, transparent)` }} />
          <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full blur-3xl opacity-10" style={{ background: color }} />

          <div className="relative z-10">
            <div className="flex items-start gap-5 mb-8">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: `${color}20` }}>
                <Icon size={28} style={{ color }} />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">{title}</h2>
                <p className="text-brand-textMuted leading-relaxed">{desc}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {items.map((item) => (
                <div key={item.title} className="glass rounded-xl p-4 group hover:border-opacity-40 transition-all duration-300" style={{}}>
                  <div className="flex items-start gap-3">
                    <CheckCircle size={16} className="flex-shrink-0 mt-0.5" style={{ color }} />
                    <div>
                      <h4 className="text-white font-semibold text-sm mb-1">{item.title}</h4>
                      <p className="text-brand-textMuted text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <Link to="/contact" className="btn-primary text-sm px-6 py-2.5" style={{ background: `linear-gradient(135deg, ${color}, ${color}BB)` }}>
                Get Started
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}

export default function ServicesPage() {
  const { t } = useI18n();
  const s = t.servicesPage;

  return (
    <>
      <Helmet>
        <title>Services — Cortex AI | AI Solutions, Data Analytics, Cybersecurity & Digital Transformation</title>
        <meta name="description" content="Cortex AI offers comprehensive AI solutions, data analytics, cybersecurity, digital transformation, and professional training services for enterprises and governments." />
        <meta property="og:title" content="Cortex AI Services — Enterprise AI & Digital Transformation" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <PageTransition>
        {/* Hero */}
        <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden pt-16">
          <NeuralBackground nodeCount={40} intensity="low" />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-bg via-transparent to-brand-bg" />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 40%, rgba(20,123,255,0.1) 0%, transparent 70%)' }} />

          <div className="relative z-10 text-center max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="section-label justify-center mb-4 block">
                <span className="w-8 h-px bg-brand-primary inline-block" />
                What We Offer
                <span className="w-8 h-px bg-brand-primary inline-block" />
              </span>
              <h1 className="text-5xl sm:text-6xl font-bold text-white mb-5">{s.hero.title}</h1>
              <p className="text-xl text-brand-textMuted max-w-2xl mx-auto leading-relaxed">{s.hero.desc}</p>
            </motion.div>
          </div>
        </section>

        {/* Service quick nav */}
        <section className="py-8 sticky top-16 z-30 glass border-b border-brand-border">
          <div className="container-max px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 overflow-x-auto pb-1 scrollbar-hide">
              {[
                { label: 'AI Solutions', id: 'ai', color: '#147BFF' },
                { label: 'Data Analytics', id: 'data', color: '#00C6FF' },
                { label: 'Cybersecurity', id: 'cyber', color: '#FF416C' },
                { label: 'Digital Transformation', id: 'digital', color: '#11998E' },
                { label: 'Training', id: 'training', color: '#FF8A00' },
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium text-brand-textMuted hover:text-white hover:bg-white/5 transition-all duration-200 whitespace-nowrap"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="section-padding">
          <div className="container-max">
            <ServiceBlock
              id="ai"
              icon={Brain}
              color="#147BFF"
              gradient="from-blue-600/5 to-transparent"
              title={s.aiTitle}
              desc={s.aiDesc}
              items={s.aiItems}
            />
            <ServiceBlock
              id="data"
              icon={BarChart3}
              color="#00C6FF"
              gradient="from-cyan-600/5 to-transparent"
              title={s.dataTitle}
              desc={s.dataDesc}
              items={dataServices}
              delay={0.05}
            />
            <ServiceBlock
              id="cyber"
              icon={Shield}
              color="#FF416C"
              gradient="from-rose-600/5 to-transparent"
              title={s.cyberTitle}
              desc={s.cyberDesc}
              items={cyberServices}
              delay={0.05}
            />
            <ServiceBlock
              id="digital"
              icon={Cpu}
              color="#11998E"
              gradient="from-teal-600/5 to-transparent"
              title={s.digitalTitle}
              desc={s.digitalDesc}
              items={digitalServices}
              delay={0.05}
            />
            <ServiceBlock
              id="training"
              icon={GraduationCap}
              color="#FF8A00"
              gradient="from-orange-600/5 to-transparent"
              title={s.trainingTitle}
              desc={s.trainingDesc}
              items={trainingServices}
              delay={0.05}
            />
          </div>
        </section>

        <CTASection />
      </PageTransition>
    </>
  );
}
