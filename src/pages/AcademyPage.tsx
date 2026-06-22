import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Star, BookOpen, Award, CheckCircle, ChevronRight, Play } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import ScrollReveal from '../components/ScrollReveal';
import NeuralBackground from '../components/NeuralBackground';
import CTASection from '../sections/CTASection';
import { useI18n } from '../i18n/I18nContext';

const allCourses = [
  {
    id: 1,
    title: 'Artificial Intelligence Fundamentals',
    titleAr: 'أساسيات الذكاء الاصطناعي',
    category: 'AI',
    level: 'Beginner',
    hours: 12,
    students: 2840,
    rating: 4.9,
    reviews: 342,
    type: 'free',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: '#147BFF',
    modules: 8,
    description: 'A comprehensive introduction to AI concepts, machine learning fundamentals, and real-world applications across industries.',
    highlights: ['AI history and foundations', 'Types of machine learning', 'Neural networks basics', 'AI ethics and governance', 'Hands-on projects', 'Industry case studies'],
  },
  {
    id: 2,
    title: 'Machine Learning Essentials',
    titleAr: 'أساسيات تعلم الآلة',
    category: 'ML',
    level: 'Intermediate',
    hours: 20,
    students: 1620,
    rating: 4.8,
    reviews: 198,
    type: 'premium',
    image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: '#00C6FF',
    modules: 12,
    description: 'Deep dive into machine learning algorithms, model training, evaluation, and deployment using Python, scikit-learn, and TensorFlow.',
    highlights: ['Supervised & unsupervised learning', 'Feature engineering', 'Model evaluation metrics', 'Ensemble methods', 'Python & scikit-learn', 'Capstone project'],
  },
  {
    id: 3,
    title: 'Data Analytics with Power BI',
    titleAr: 'تحليلات البيانات مع Power BI',
    category: 'Data',
    level: 'Beginner',
    hours: 16,
    students: 3210,
    rating: 4.9,
    reviews: 412,
    type: 'premium',
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: '#11998E',
    modules: 10,
    description: 'Master data visualization and business intelligence using Microsoft Power BI — from data modeling to interactive dashboards and reports.',
    highlights: ['Power BI interface mastery', 'DAX formulas', 'Data modeling', 'Interactive dashboards', 'Data storytelling', 'Publishing & sharing'],
  },
  {
    id: 4,
    title: 'Cybersecurity Foundations',
    titleAr: 'أساسيات الأمن السيبراني',
    category: 'Security',
    level: 'Beginner',
    hours: 14,
    students: 1980,
    rating: 4.7,
    reviews: 225,
    type: 'free',
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: '#FF416C',
    modules: 9,
    description: 'Build a solid foundation in cybersecurity — covering threat landscapes, network security, cryptography, and incident response.',
    highlights: ['Cyber threat landscape', 'Network security basics', 'Cryptography fundamentals', 'Access control models', 'Incident response', 'Compliance overview'],
  },
  {
    id: 5,
    title: 'Digital Transformation Strategy',
    titleAr: 'استراتيجية التحول الرقمي',
    category: 'Digital',
    level: 'Advanced',
    hours: 10,
    students: 890,
    rating: 4.8,
    reviews: 104,
    type: 'certified',
    image: 'https://images.pexels.com/photos/7947491/pexels-photo-7947491.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: '#FF8A00',
    modules: 7,
    description: 'An executive-level program for building, executing, and measuring digital transformation strategies in complex organizations.',
    highlights: ['Digital maturity assessment', 'Transformation roadmapping', 'Change management', 'KPIs and ROI measurement', 'Technology selection', 'Case studies'],
  },
  {
    id: 6,
    title: 'Professional AI Engineering',
    titleAr: 'هندسة الذكاء الاصطناعي المهنية',
    category: 'AI',
    level: 'Advanced',
    hours: 30,
    students: 640,
    rating: 4.9,
    reviews: 87,
    type: 'certified',
    image: 'https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: '#9B59B6',
    modules: 18,
    description: 'The most comprehensive AI engineering program — covering MLOps, LLM fine-tuning, RAG systems, production deployment, and AI governance.',
    highlights: ['MLOps & CI/CD for ML', 'LLM fine-tuning & RLHF', 'RAG system design', 'Vector databases', 'AI governance & ethics', 'Industry capstone'],
  },
];

const tabs = ['all', 'free', 'premium', 'certified'] as const;
type TabType = typeof tabs[number];

export default function AcademyPage() {
  const { t, language } = useI18n();
  const a = t.academyPage;
  const [activeTab, setActiveTab] = useState<TabType>('all');

  const filtered = activeTab === 'all' ? allCourses : allCourses.filter((c) => c.type === activeTab);

  const tabLabels: Record<TabType, string> = {
    all: 'All Courses',
    free: t.academy.free,
    premium: t.academy.premium,
    certified: t.academy.certified,
  };

  const typeColors: Record<string, string> = {
    free: '#11998E',
    premium: '#147BFF',
    certified: '#FF8A00',
  };

  return (
    <>
      <Helmet>
        <title>Cortex Academy — AI, Data & Cybersecurity Courses & Certifications</title>
        <meta name="description" content="Upskill with Cortex Academy — free and premium courses in AI, machine learning, data analytics, cybersecurity, and digital transformation with professional certifications." />
        <meta property="og:title" content="Cortex Academy — Learn AI, Data Science & Cybersecurity" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <PageTransition>
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-16">
          <NeuralBackground nodeCount={40} intensity="low" />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-bg via-transparent to-brand-bg" />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 40%, rgba(20,123,255,0.1) 0%, transparent 70%)' }} />

          <div className="relative z-10 text-center max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="section-label justify-center mb-4 block">
                <span className="w-8 h-px bg-brand-primary inline-block" />
                {t.academy.label}
                <span className="w-8 h-px bg-brand-primary inline-block" />
              </span>
              <h1 className="text-5xl sm:text-6xl font-bold text-white mb-5">{a.hero.title}</h1>
              <p className="text-xl text-brand-textMuted max-w-2xl mx-auto leading-relaxed">{a.hero.desc}</p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-10 flex items-center justify-center gap-8 flex-wrap"
            >
              {[
                { value: '20+', label: 'Courses' },
                { value: '11K+', label: 'Students' },
                { value: '4.8★', label: 'Rating' },
                { value: '3', label: 'Certifications' },
              ].map(({ value, label }) => (
                <div key={label} className="glass rounded-xl px-5 py-3 text-center">
                  <div className="text-xl font-bold gradient-text-blue">{value}</div>
                  <div className="text-xs text-brand-textMuted">{label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Courses */}
        <section className="section-padding">
          <div className="container-max">
            {/* Tabs */}
            <ScrollReveal>
              <div className="flex items-center gap-2 mb-10 flex-wrap">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                      activeTab === tab
                        ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/20'
                        : 'glass text-brand-textMuted hover:text-white'
                    }`}
                  >
                    {tabLabels[tab]}
                  </button>
                ))}
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filtered.map((course, i) => (
                <ScrollReveal key={course.id} delay={i * 0.06}>
                  <div className="card p-0 overflow-hidden group cursor-pointer h-full flex flex-col">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-surface via-black/20 to-transparent" />

                      {/* Badges */}
                      <div className="absolute top-3 left-3 flex gap-2">
                        <span
                          className="text-xs font-bold px-2.5 py-1 rounded-full backdrop-blur-sm"
                          style={{ background: `${typeColors[course.type]}25`, border: `1px solid ${typeColors[course.type]}50`, color: typeColors[course.type] }}
                        >
                          {course.type === 'free' ? 'Free' : course.type === 'certified' ? '🏆 Certified' : 'Premium'}
                        </span>
                        <span className="text-xs px-2.5 py-1 rounded-full bg-black/30 backdrop-blur-sm text-white/80 border border-white/10">
                          {course.category}
                        </span>
                      </div>

                      {/* Play button */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-14 h-14 rounded-full bg-brand-primary/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                          <Play size={20} className="text-white ml-0.5" fill="white" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 flex flex-col flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs px-2 py-0.5 rounded glass text-brand-textMuted">{course.level}</span>
                      </div>
                      <h3 className="text-white font-bold mb-2 group-hover:text-brand-primary transition-colors leading-snug">
                        {language === 'ar' ? course.titleAr : course.title}
                      </h3>
                      <p className="text-brand-textMuted text-sm leading-relaxed mb-4 line-clamp-2 flex-1">{course.description}</p>

                      {/* Highlights */}
                      <div className="mb-4 grid grid-cols-2 gap-1.5">
                        {course.highlights.slice(0, 4).map((h) => (
                          <div key={h} className="flex items-center gap-1.5 text-xs text-brand-textMuted">
                            <CheckCircle size={11} className="text-brand-primary flex-shrink-0" />
                            <span className="truncate">{h}</span>
                          </div>
                        ))}
                      </div>

                      {/* Meta */}
                      <div className="flex items-center justify-between text-xs text-brand-textMuted border-t border-brand-border pt-3 mb-4">
                        <div className="flex items-center gap-1">
                          <Clock size={12} />
                          <span>{course.hours}h</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <BookOpen size={12} />
                          <span>{course.modules} modules</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users size={12} />
                          <span>{course.students.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center gap-1 text-yellow-400">
                          <Star size={12} fill="currentColor" />
                          <span className="text-white">{course.rating}</span>
                        </div>
                      </div>

                      <button
                        className="w-full justify-center text-sm py-2.5 rounded-lg font-semibold transition-all duration-200 hover:-translate-y-0.5"
                        style={{
                          background: `linear-gradient(135deg, ${course.color}, ${course.color}BB)`,
                          boxShadow: `0 4px 15px ${course.color}30`,
                          color: 'white',
                        }}
                      >
                        {course.type === 'free' ? a.enroll : a.enroll}
                      </button>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Certification programs highlight */}
        <section className="section-padding relative">
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(11,31,77,0.3) 50%, transparent 100%)' }} />
          <div className="container-max relative">
            <ScrollReveal className="text-center mb-12">
              <span className="section-label justify-center mb-3 block">
                <span className="w-8 h-px bg-brand-accent inline-block" />
                <span style={{ color: '#FF8A00' }}>{t.academy.certified}</span>
                <span className="w-8 h-px bg-brand-accent inline-block" />
              </span>
              <h2 className="section-title">Industry-Recognized Credentials</h2>
              <p className="section-desc mt-3 max-w-lg mx-auto">Earn certificates that demonstrate your expertise to employers and clients worldwide.</p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Certified AI Practitioner', level: 'Professional', hours: 30, color: '#147BFF', icon: '🤖' },
                { title: 'Certified Data Analyst', level: 'Professional', hours: 20, color: '#11998E', icon: '📊' },
                { title: 'Certified Digital Transformation Leader', level: 'Executive', hours: 15, color: '#FF8A00', icon: '🚀' },
              ].map((cert, i) => (
                <ScrollReveal key={cert.title} delay={i * 0.08}>
                  <div className="card text-center group relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1" style={{ background: `linear-gradient(90deg, ${cert.color}, transparent)` }} />
                    <div className="text-4xl mb-4">{cert.icon}</div>
                    <div className="flex justify-center mb-3">
                      <Award size={20} style={{ color: cert.color }} />
                    </div>
                    <h3 className="text-white font-bold mb-1">{cert.title}</h3>
                    <span className="text-xs px-2 py-0.5 rounded-full mb-4 inline-block" style={{ background: `${cert.color}20`, color: cert.color, border: `1px solid ${cert.color}40` }}>
                      {cert.level}
                    </span>
                    <p className="text-brand-textMuted text-sm mb-4">{cert.hours} hours · Industry recognized</p>
                    <button className="btn-primary text-sm w-full justify-center" style={{ background: `linear-gradient(135deg, ${cert.color}, ${cert.color}BB)` }}>
                      Enroll Now
                      <ChevronRight size={15} />
                    </button>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </PageTransition>
    </>
  );
}
