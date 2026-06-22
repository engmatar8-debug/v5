import AnimatedCounter from '../components/AnimatedCounter';
import ScrollReveal from '../components/ScrollReveal';
import { useI18n } from '../i18n/I18nContext';

export default function StatsSection() {
  const { t } = useI18n();

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-secondary/30 via-brand-secondary/50 to-brand-secondary/30" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(11,31,77,0.4) 50%, transparent 100%)' }} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-primary/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-primary/30 to-transparent" />
      </div>

      <div className="relative container-max px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-14">
          <span className="section-label justify-center mb-2">
            <span className="w-8 h-px bg-brand-primary inline-block" />
            {t.stats.label}
            <span className="w-8 h-px bg-brand-primary inline-block" />
          </span>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {t.stats.items.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.07}>
              <div className="text-center group">
                <div className="glass rounded-2xl p-6 hover:border-brand-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-brand-primary/10">
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                    <AnimatedCounter target={parseInt(stat.value.replace(/,/g, ''))} suffix={stat.suffix} />
                  </div>
                  <div className="text-brand-textMuted text-xs uppercase tracking-wider leading-snug">{stat.label}</div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
