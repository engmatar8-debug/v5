import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import NeuralBackground from '../components/NeuralBackground';
import { useI18n } from '../i18n/I18nContext';

export default function CTASection() {
  const { t } = useI18n();

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-max">
        <ScrollReveal>
          <div className="relative rounded-3xl overflow-hidden">
            {/* Neural bg */}
            <NeuralBackground nodeCount={40} intensity="low" />

            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/80 via-brand-secondary/60 to-brand-bg/80" />
            <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(20,123,255,0.15) 0%, transparent 70%)' }} />

            {/* Border gradient */}
            <div className="absolute inset-0 rounded-3xl border border-brand-primary/20 pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 px-8 py-16 sm:px-16 sm:py-20 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="w-16 h-16 rounded-2xl bg-brand-primary/20 flex items-center justify-center mx-auto mb-6"
              >
                <Sparkles size={28} className="text-brand-primary" />
              </motion.div>

              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight max-w-2xl mx-auto">
                {t.cta.title}
              </h2>
              <p className="text-lg text-brand-textMuted max-w-xl mx-auto mb-10 leading-relaxed">
                {t.cta.desc}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/contact" className="btn-primary text-base px-8 py-4 w-full sm:w-auto justify-center">
                  {t.cta.book}
                  <ArrowRight size={18} />
                </Link>
                <Link to="/services" className="btn-ghost text-base px-8 py-4 w-full sm:w-auto justify-center">
                  {t.cta.explore}
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="mt-10 flex items-center justify-center gap-8 flex-wrap">
                {['No commitment required', 'Response within 24h', 'Expert consultants'].map((text) => (
                  <div key={text} className="flex items-center gap-2 text-sm text-brand-textMuted">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                    {text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
