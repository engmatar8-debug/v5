import { Link } from 'react-router-dom';
import { Linkedin, Facebook, Instagram, Twitter, Mail, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';
import { useI18n } from '../i18n/I18nContext';

const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com/company/cortexforai', label: 'LinkedIn' },
  { icon: Facebook, href: 'https://facebook.com/cortexforai', label: 'Facebook' },
  { icon: Instagram, href: 'https://instagram.com/cortexforai', label: 'Instagram' },
  { icon: Twitter, href: 'https://x.com/cortexforai', label: 'X' },
];

export default function Footer() {
  const { t } = useI18n();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: t.nav.home, href: '/' },
    { label: t.nav.about, href: '/about' },
    { label: t.nav.services, href: '/services' },
    { label: t.nav.academy, href: '/academy' },
    { label: t.nav.blog, href: '/blog' },
    { label: t.nav.contact, href: '/contact' },
  ];

  const services = [
    { label: t.services.items.ai.title, href: '/services#ai' },
    { label: t.services.items.data.title, href: '/services#data' },
    { label: t.services.items.cyber.title, href: '/services#cyber' },
    { label: t.services.items.digital.title, href: '/services#digital' },
    { label: t.services.items.training.title, href: '/services#training' },
  ];

  return (
    <footer className="relative bg-brand-surface border-t border-brand-border overflow-hidden">
      {/* Gradient top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-brand-primary/30 to-transparent" />

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb orb-blue absolute -bottom-40 left-1/4 w-96 h-96 opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <Logo size="md" />
            </Link>
            <p className="text-brand-textMuted text-sm leading-relaxed mb-6">
              {t.footer.desc}
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg glass flex items-center justify-center text-brand-textMuted hover:text-brand-primary hover:border-brand-primary/40 transition-all duration-200 group"
                  aria-label={label}
                >
                  <Icon size={16} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 tracking-wide uppercase">{t.footer.quickLinks}</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-brand-textMuted hover:text-brand-primary text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand-primary/40 group-hover:bg-brand-primary transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 tracking-wide uppercase">{t.footer.services}</h4>
            <ul className="space-y-2.5">
              {services.map((svc) => (
                <li key={svc.href}>
                  <Link
                    to={svc.href}
                    className="text-brand-textMuted hover:text-brand-primary text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand-primary/40 group-hover:bg-brand-primary transition-colors" />
                    {svc.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 tracking-wide uppercase">{t.contactPage.info.title}</h4>
            <div className="space-y-4">
              <a
                href="mailto:info@cortexforai.com"
                className="flex items-center gap-3 text-brand-textMuted hover:text-brand-primary text-sm transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg glass flex items-center justify-center group-hover:border-brand-primary/40 transition-colors">
                  <Mail size={14} />
                </div>
                info@cortexforai.com
              </a>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-wider mb-3">{t.footer.legal}</p>
                <ul className="space-y-2">
                  {[
                    { label: t.footer.privacy, href: '/privacy' },
                    { label: t.footer.terms, href: '/terms' },
                    { label: t.footer.cookies, href: '/cookies' },
                  ].map((item) => (
                    <li key={item.href}>
                      <Link
                        to={item.href}
                        className="text-brand-textMuted hover:text-brand-primary text-sm transition-colors flex items-center gap-1 group"
                      >
                        {item.label}
                        <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-brand-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Logo size="sm" variant="icon" />
            <p className="text-brand-textMuted text-sm">
              © {currentYear} Cortex AI. {t.footer.rights}
            </p>
          </div>
          <p className="text-brand-textMuted/60 text-xs italic">{t.footer.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
