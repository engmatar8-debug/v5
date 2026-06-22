import { CheckCircle } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { useI18n } from '../i18n/I18nContext';

export default function WhyCortexSection() {
  const { t } = useI18n();

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb orb-blue absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] opacity-8" />
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(20,123,255,0.04) 0%, transparent 70%)' }}
        />
      </div>

      <div className="container-max">
        <ScrollReveal className="text-center mb-16">
          <span className="section-label justify-center mb-4">
            <span className="w-8 h-px bg-brand-primary inline-block" />
            {t.why.label}
            <span className="w-8 h-px bg-brand-primary inline-block" />
          </span>
          <h2 className="section-title mb-4">{t.why.title}</h2>
          <p className="section-desc max-w-2xl mx-auto">{t.why.desc}</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.why.items.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.08}>
              <div className="card group h-full">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="w-8 h-8 rounded-lg bg-brand-primary/15 flex items-center justify-center group-hover:bg-brand-primary/25 transition-colors">
                      <CheckCircle size={16} className="text-brand-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2 group-hover:text-brand-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-brand-textMuted text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
