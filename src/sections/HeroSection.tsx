import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Sparkles, Zap, Shield, BarChart3 } from 'lucide-react';
import NeuralBackground from '../components/NeuralBackground';
import Logo from '../components/Logo';
import { useI18n } from '../i18n/I18nContext';

const floatingBadges = [
  { icon: Sparkles, label: 'AI Solutions', x: '8%', y: '20%', delay: 0 },
  { icon: BarChart3, label: 'Data Analytics', x: '85%', y: '15%', delay: 0.3 },
  { icon: Shield, label: 'Cybersecurity', x: '80%', y: '75%', delay: 0.6 },
  { icon: Zap, label: 'Digital Transformation', x: '5%', y: '72%', delay: 0.9 },
];

export default function HeroSection() {
  const { t } = useI18n();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Neural network background */}
      <NeuralBackground nodeCount={70} intensity="medium" />

      {/* Gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb orb-blue absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] opacity-20" />
        <div className="orb orb-accent absolute bottom-1/4 right-1/4 w-96 h-96 opacity-10" />
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(20, 123, 255, 0.08) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* Scan line */}
      <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-primary/20 to-transparent animate-scan pointer-events-none" />

      {/* Floating badges — hidden on mobile */}
      <div className="hidden xl:block absolute inset-0 pointer-events-none">
        {floatingBadges.map(({ icon: Icon, label, x, y, delay }) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 + delay, duration: 0.5 }}
            style={{ left: x, top: y }}
            className="absolute"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4 + delay, repeat: Infinity, ease: 'easeInOut' }}
              className="glass rounded-xl px-4 py-2.5 flex items-center gap-2.5 shadow-lg"
            >
              <div className="w-7 h-7 rounded-lg bg-brand-primary/20 flex items-center justify-center">
                <Icon size={14} className="text-brand-primary" />
              </div>
              <span className="text-xs font-semibold text-white whitespace-nowrap">{label}</span>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8 mt-20"
        >
          <div className="scale-[2] lg:scale-[2.5]">
  <img
  src="/assets/images/cortex-logo.png"
  alt="Cortex AI"
  className="w-[400px] lg:w-[600px] xl:w-[700px] h-auto"
 />
</div>
        </motion.div>

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <div className="glass inline-flex items-center gap-2 px-4 py-2 rounded-full">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
            <span className="text-xs font-semibold text-brand-primary tracking-widest uppercase">
              AI · Data · Cyber · Training
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
        >
          <span className="block">{t.hero.headline.split(' ').slice(0, 2).join(' ')}</span>
          <span className="gradient-text block">{t.hero.headline.split(' ').slice(2).join(' ')}</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-lg sm:text-xl text-brand-textMuted max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {t.hero.subheadline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link to="/contact" className="btn-primary text-base px-8 py-4 w-full sm:w-auto justify-center">
            {t.hero.bookConsultation}
            <ArrowRight size={18} />
          </Link>
          <Link to="/services" className="btn-ghost text-base px-8 py-4 w-full sm:w-auto justify-center">
            {t.hero.exploreServices}
            <ArrowRight size={18} />
          </Link>
        </motion.div>

        {/* Stats teaser */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-16 flex items-center justify-center gap-8 sm:gap-12 flex-wrap"
        >
          {[
            { value: '150+', label: 'Projects' },
            { value: '40+', label: 'Clients' },
            { value: '98%', label: 'Satisfaction' },
            { value: '15+', label: 'Countries' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-2xl font-bold text-white mb-0.5">{value}</div>
              <div className="text-xs text-brand-textMuted uppercase tracking-wider">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-brand-textMuted/60 text-xs tracking-widest uppercase">{t.hero.scrollDown}</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} className="text-brand-textMuted/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
