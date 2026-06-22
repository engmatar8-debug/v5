import { Link } from 'react-router-dom';

import { ArrowRight, Brain, BarChart3, Shield, Cpu, GraduationCap } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { useI18n } from '../i18n/I18nContext';

const serviceIcons = [Brain, BarChart3, Shield, Cpu, GraduationCap];
const serviceColors = [
  { from: '#147BFF', to: '#0B5FCC' },
  { from: '#00C6FF', to: '#0072FF' },
  { from: '#FF416C', to: '#FF4B2B' },
  { from: '#11998E', to: '#38EF7D' },
  { from: '#FF8A00', to: '#E52E71' },
];

export default function ServicesSection() {
  const { t } = useI18n();

  const services = [
    t.services.items.ai,
    t.services.items.data,
    t.services.items.cyber,
    t.services.items.digital,
    t.services.items.training,
  ];

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb orb-blue absolute top-1/2 left-0 w-[500px] h-[500px] opacity-10" />
      </div>

      <div className="container-max">
        <ScrollReveal className="text-center mb-16">
          <span className="section-label justify-center mb-4">
            <span className="w-8 h-px bg-brand-primary inline-block" />
            {t.services.label}
            <span className="w-8 h-px bg-brand-primary inline-block" />
          </span>
          <h2 className="section-title mb-4">{t.services.title}</h2>
          <p className="section-desc max-w-2xl mx-auto">{t.services.desc}</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => {
            const Icon = serviceIcons[i];
            const color = serviceColors[i];
            return (
              <ScrollReveal key={svc.title} delay={i * 0.08} direction="up">
                <div className="card group cursor-pointer h-full">
                  {/* Icon */}
                  <div className="mb-5 relative">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center relative overflow-hidden"
                      style={{ background: `linear-gradient(135deg, ${color.from}20, ${color.to}10)` }}
                    >
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ background: `linear-gradient(135deg, ${color.from}30, ${color.to}20)` }}
                      />
                      <Icon
                        size={24}
                        style={{ color: color.from }}
                        className="relative z-10 group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div
                      className="absolute -inset-1 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                      style={{ background: color.from }}
                    />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-primary transition-colors duration-200">
                    {svc.title}
                  </h3>
                  <p className="text-brand-textMuted text-sm leading-relaxed mb-6 flex-1">{svc.desc}</p>

                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 text-brand-primary text-sm font-semibold hover:gap-3 transition-all duration-200"
                  >
                    {t.services.learnMore}
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </ScrollReveal>
            );
          })}

          {/* CTA Card */}
          <ScrollReveal delay={services.length * 0.08} direction="up">
            <div
              className="card group cursor-pointer h-full flex flex-col items-center justify-center text-center relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, rgba(20,123,255,0.08), rgba(11,31,77,0.3))' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-brand-primary/20 flex items-center justify-center mx-auto mb-5">
                  <ArrowRight size={24} className="text-brand-primary group-hover:translate-x-1 transition-transform" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">View All Services</h3>
                <p className="text-brand-textMuted text-sm mb-5">Explore our complete portfolio of AI-powered solutions.</p>
                <Link to="/services" className="btn-primary text-sm">
                  Explore Services
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
