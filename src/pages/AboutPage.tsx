import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Heart, Zap, CheckCircle, Globe2, Award, Users } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import ScrollReveal from '../components/ScrollReveal';
import NeuralBackground from '../components/NeuralBackground';
import CTASection from '../sections/CTASection';
import { useI18n } from '../i18n/I18nContext';

const valueIcons = [Lightbulb, Award, Heart, Zap];
const valueColors = ['#147BFF', '#FF8A00', '#FF416C', '#11998E'];

const whyIcons = [Globe2, Users, Award, CheckCircle];

export default function AboutPage() {
  const { t } = useI18n();
  const a = t.about;

  return (
    <>
      <Helmet>
        <title>About Cortex AI — Our Vision, Mission & Values</title>
        <meta name="description" content="Learn about Cortex AI — our vision to become a trusted global AI partner, our mission to empower organizations, and the values that guide everything we do." />
        <meta property="og:title" content="About Cortex AI — Vision, Mission & Values" />
        <meta property="og:description" content="Cortex AI is a leading AI and digital transformation company partnering with governments, enterprises, and institutions globally." />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <PageTransition>
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-16">
          <NeuralBackground nodeCount={50} intensity="low" />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-bg via-transparent to-brand-bg" />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 40%, rgba(20,123,255,0.1) 0%, transparent 70%)' }} />

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="section-label justify-center mb-4 block">
                <span className="w-8 h-px bg-brand-primary inline-block" />
                {a.overview.label}
                <span className="w-8 h-px bg-brand-primary inline-block" />
              </span>
              <h1 className="text-5xl sm:text-6xl font-bold text-white mb-5">{a.hero.title}</h1>
              <p className="text-xl text-brand-textMuted max-w-2xl mx-auto leading-relaxed">{a.hero.desc}</p>
            </motion.div>
          </div>
        </section>

        {/* Overview */}
        <section className="section-padding">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal>
                <span className="section-label mb-4 block">
                  <span className="w-8 h-px bg-brand-primary inline-block" />
                  {a.overview.label}
                </span>
                <h2 className="section-title mb-6">{a.overview.title}</h2>
                {a.overview.desc.split('\n\n').map((para, i) => (
                  <p key={i} className="section-desc leading-relaxed mb-4">{para}</p>
                ))}
              </ScrollReveal>

              <ScrollReveal delay={0.2} direction="left">
                <div className="relative">
                  <div className="glass rounded-3xl p-8 relative overflow-hidden">
                    <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at top right, rgba(20,123,255,0.08) 0%, transparent 70%)' }} />
                    <div className="relative z-10 grid grid-cols-2 gap-6">
                      {[
                        { label: 'Founded', value: '2020', icon: '🏢' },
                        { label: 'Headquarters', value: 'Riyadh, KSA', icon: '📍' },
                        { label: 'Team Size', value: '50+ Experts', icon: '👥' },
                        { label: 'Global Offices', value: '3 Countries', icon: '🌍' },
                        { label: 'Projects', value: '150+', icon: '✅' },
                        { label: 'Certifications', value: 'ISO 27001', icon: '🏆' },
                      ].map((item) => (
                        <div key={item.label} className="flex items-start gap-3">
                          <span className="text-2xl">{item.icon}</span>
                          <div>
                            <div className="text-white font-semibold text-sm">{item.value}</div>
                            <div className="text-brand-textMuted text-xs">{item.label}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Decoration */}
                  <div className="absolute -z-10 -top-6 -right-6 w-48 h-48 rounded-full bg-brand-primary/5 blur-2xl" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="section-padding relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(11,31,77,0.2) 50%, transparent 100%)' }} />
          <div className="container-max relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Vision */}
              <ScrollReveal delay={0.05}>
                <div className="card h-full relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-primary via-brand-primary/50 to-transparent" />
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-brand-primary/15 flex items-center justify-center">
                      <Target size={20} className="text-brand-primary" />
                    </div>
                    <span className="section-label text-sm">{a.vision.label}</span>
                  </div>
                  <blockquote className="text-xl font-semibold text-white leading-relaxed mb-4 border-l-2 border-brand-primary pl-4">
                    "{a.vision.title}"
                  </blockquote>
                  <p className="section-desc text-sm">{a.vision.desc}</p>
                </div>
              </ScrollReveal>

              {/* Mission */}
              <ScrollReveal delay={0.1}>
                <div className="card h-full relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-accent via-brand-accent/50 to-transparent" />
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-brand-accent/15 flex items-center justify-center">
                      <Zap size={20} className="text-brand-accent" />
                    </div>
                    <span className="section-label text-sm" style={{ color: '#FF8A00' }}>{a.mission.label}</span>
                  </div>
                  <blockquote className="text-xl font-semibold text-white leading-relaxed mb-4 border-l-2 pl-4" style={{ borderColor: '#FF8A00' }}>
                    "{a.mission.title}"
                  </blockquote>
                  <p className="section-desc text-sm">{a.mission.desc}</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="section-padding">
          <div className="container-max">
            <ScrollReveal className="text-center mb-14">
              <span className="section-label justify-center mb-3 block">
                <span className="w-8 h-px bg-brand-primary inline-block" />
                {a.values.label}
                <span className="w-8 h-px bg-brand-primary inline-block" />
              </span>
              <h2 className="section-title">{a.values.title}</h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {a.values.items.map((val, i) => {
                const Icon = valueIcons[i];
                const color = valueColors[i];
                return (
                  <ScrollReveal key={val.title} delay={i * 0.08}>
                    <div className="card text-center group h-full">
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-all duration-300 group-hover:scale-110"
                        style={{ background: `${color}15` }}
                      >
                        <Icon size={28} style={{ color }} />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-3" style={{ color: color }}>{val.title}</h3>
                      <p className="text-brand-textMuted text-sm leading-relaxed">{val.desc}</p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Cortex */}
        <section className="section-padding relative">
          <div className="container-max">
            <ScrollReveal className="text-center mb-14">
              <span className="section-label justify-center mb-3 block">
                <span className="w-8 h-px bg-brand-primary inline-block" />
                {a.why.label}
                <span className="w-8 h-px bg-brand-primary inline-block" />
              </span>
              <h2 className="section-title">{a.why.title}</h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {a.why.items.map((item, i) => {
                const Icon = whyIcons[i];
                return (
                  <ScrollReveal key={item.title} delay={i * 0.08}>
                    <div className="card group flex items-start gap-5 h-full">
                      <div className="w-12 h-12 rounded-xl bg-brand-primary/15 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-primary/25 transition-colors">
                        <Icon size={22} className="text-brand-primary" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-2 group-hover:text-brand-primary transition-colors">{item.title}</h3>
                        <p className="text-brand-textMuted text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        <CTASection />
      </PageTransition>
    </>
  );
}
