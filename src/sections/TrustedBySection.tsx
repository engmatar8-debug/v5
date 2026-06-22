import ScrollReveal from '../components/ScrollReveal';
import { useI18n } from '../i18n/I18nContext';

const logoNames = [
  'Saudi Vision 2030', 'King Abdulaziz University', 'Ministry of Health',
  'Saudi Aramco', 'SABIC', 'Riyadh Municipality',
  'King Fahd University', 'Maaden', 'STC Group', 'Saudi Telecom'
];

export default function TrustedBySection() {
  const { t } = useI18n();

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-border to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-border to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-10">
            <span className="section-label mb-2 block">
              <span className="w-6 h-px bg-brand-primary inline-block mr-2 align-middle" />
              {t.trustedBy.label}
              <span className="w-6 h-px bg-brand-primary inline-block ml-2 align-middle" />
            </span>
          </div>
        </ScrollReveal>

        {/* Logo marquee */}
        <div className="relative overflow-hidden">
          {/* Left fade */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-brand-bg to-transparent z-10 pointer-events-none" />
          {/* Right fade */}
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-brand-bg to-transparent z-10 pointer-events-none" />

          <div className="flex gap-8 overflow-hidden">
            <div
              className="flex gap-8 flex-shrink-0"
              style={{
                animation: 'marquee 30s linear infinite',
              }}
            >
              {[...logoNames, ...logoNames].map((name, i) => (
                <div
                  key={`${name}-${i}`}
                  className="flex-shrink-0 glass rounded-xl px-6 py-3 flex items-center justify-center min-w-[160px] hover:border-brand-primary/30 transition-all duration-300 group"
                >
                  <span className="text-brand-textMuted group-hover:text-white text-sm font-medium whitespace-nowrap transition-colors">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
