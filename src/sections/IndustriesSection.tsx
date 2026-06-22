import { motion } from 'framer-motion';
import { Building2, GraduationCap, Heart, Factory, Landmark, TrendingUp, BookOpen, Shield } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { useI18n } from '../i18n/I18nContext';

const industryIcons = [Landmark, GraduationCap, Heart, Building2, TrendingUp, Factory, BookOpen, Shield];
const industryColors = ['#147BFF', '#00C6FF', '#FF416C', '#11998E', '#FF8A00', '#9B59B6', '#E74C3C', '#2ECC71'];

export default function IndustriesSection() {
  const { t } = useI18n();

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb orb-accent absolute top-1/3 right-0 w-[400px] h-[400px] opacity-10" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 40% at 80% 50%, rgba(255,138,0,0.04) 0%, transparent 70%)' }} />
      </div>

      <div className="container-max">
        <ScrollReveal className="text-center mb-16">
          <span className="section-label justify-center mb-4">
            <span className="w-8 h-px bg-brand-primary inline-block" />
            {t.industries.label}
            <span className="w-8 h-px bg-brand-primary inline-block" />
          </span>
          <h2 className="section-title mb-4">{t.industries.title}</h2>
          <p className="section-desc max-w-2xl mx-auto">{t.industries.desc}</p>
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {t.industries.items.map((industry, i) => {
            const Icon = industryIcons[i];
            const color = industryColors[i];
            return (
              <ScrollReveal key={industry} delay={i * 0.06}>
                <motion.div
                  whileHover={{ scale: 1.03, y: -4 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="glass rounded-2xl p-5 flex flex-col items-center text-center gap-3 group cursor-pointer hover:border-opacity-40 transition-all duration-300"
                  style={{ '--hover-color': color } as React.CSSProperties}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{ background: `${color}15` }}
                  >
                    <Icon size={22} style={{ color }} />
                  </div>
                  <span className="text-sm font-medium text-brand-text group-hover:text-white transition-colors leading-snug">
                    {industry}
                  </span>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
