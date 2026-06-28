import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Facebook, Instagram, Twitter, Send, CheckCircle, MapPin, Globe } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import ScrollReveal from '../components/ScrollReveal';
import NeuralBackground from '../components/NeuralBackground';
import { useI18n } from '../i18n/I18nContext';

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
}

export default function ContactPage() {
  const { t } = useI18n();
  const c = t.contactPage;

  const [form, setForm] = useState<FormData>({ name: '', email: '', company: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const ACCESS_KEY = "c8877ecd-53f4-4528-beda-bce95473ed09";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);

  const object = {
    access_key: ACCESS_KEY,
    name: form.name,
    email: form.email,
    company: form.company,
    phone: form.phone,
    message: form.message,
    subject: "New Contact Form - Cortex AI"
  };

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(object),
  });

  const result = await response.json();

  setLoading(false);

  if (result.success) {
    setSubmitted(true);

    setForm({
      name: "",
      email: "",
      company: "",
      phone: "",
      message: "",
    });
  } else {
    alert("Failed to send message.");
    console.log(result);
  }
};

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/company/cortexforai', label: 'LinkedIn', color: '#0077B5' },
    { icon: Facebook, href: 'https://facebook.com/cortexforai', label: 'Facebook', color: '#1877F2' },
    { icon: Instagram, href: 'https://instagram.com/cortexforai', label: 'Instagram', color: '#E4405F' },
    { icon: Twitter, href: 'https://x.com/cortexforai', label: 'X / Twitter', color: '#1DA1F2' },
  ];

  return (
    <>
      <Helmet>
        <title>Contact Cortex AI — Book a Consultation</title>
        <meta name="description" content="Get in touch with Cortex AI. Book a free consultation to discuss how AI, data analytics, cybersecurity, and digital transformation can benefit your organization." />
        <meta property="og:title" content="Contact Cortex AI — Start Your AI Transformation Journey" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <PageTransition>
        {/* Hero */}
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-16">
          <NeuralBackground nodeCount={35} intensity="low" />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-bg via-transparent to-brand-bg" />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 40%, rgba(20,123,255,0.1) 0%, transparent 70%)' }} />

          <div className="relative z-10 text-center max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="section-label justify-center mb-4 block">
                <span className="w-8 h-px bg-brand-primary inline-block" />
                Contact Us
                <span className="w-8 h-px bg-brand-primary inline-block" />
              </span>
              <h1 className="text-5xl sm:text-6xl font-bold text-white mb-5">{c.hero.title}</h1>
              <p className="text-xl text-brand-textMuted max-w-2xl mx-auto leading-relaxed">{c.hero.desc}</p>
            </motion.div>
          </div>
        </section>

        {/* Contact section */}
        <section className="section-padding">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
              {/* Form */}
              <ScrollReveal className="lg:col-span-3">
                <div className="card relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-primary via-brand-primary/50 to-transparent" />

                  {!submitted ? (
                    <>
                      <h2 className="text-2xl font-bold text-white mb-6">{c.form.title}</h2>
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-sm font-medium text-brand-text mb-1.5">{c.form.name} *</label>
                            <input
                              type="text"
                              name="name"
                              required
                              value={form.name}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-xl glass text-white placeholder-brand-textMuted/50 focus:outline-none focus:border-brand-primary/50 transition-all text-sm"
                              placeholder="John Smith"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-brand-text mb-1.5">{c.form.email} *</label>
                            <input
                              type="email"
                              name="email"
                              required
                              value={form.email}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-xl glass text-white placeholder-brand-textMuted/50 focus:outline-none focus:border-brand-primary/50 transition-all text-sm"
                              placeholder="john@company.com"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-sm font-medium text-brand-text mb-1.5">{c.form.company}</label>
                            <input
                              type="text"
                              name="company"
                              value={form.company}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-xl glass text-white placeholder-brand-textMuted/50 focus:outline-none focus:border-brand-primary/50 transition-all text-sm"
                              placeholder="Acme Corporation"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-brand-text mb-1.5">{c.form.phone}</label>
                            <input
                              type="tel"
                              name="phone"
                              value={form.phone}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-xl glass text-white placeholder-brand-textMuted/50 focus:outline-none focus:border-brand-primary/50 transition-all text-sm"
                              placeholder="+966 5x xxx xxxx"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-brand-text mb-1.5">{c.form.message} *</label>
                          <textarea
                            name="message"
                            required
                            value={form.message}
                            onChange={handleChange}
                            rows={5}
                            className="w-full px-4 py-3 rounded-xl glass text-white placeholder-brand-textMuted/50 focus:outline-none focus:border-brand-primary/50 transition-all text-sm resize-none"
                            placeholder="Tell us about your organization, challenges, and what you'd like to achieve..."
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={loading}
                          className="btn-primary w-full justify-center py-4 text-base disabled:opacity-60"
                        >
                          {loading ? (
                            <span className="flex items-center gap-2">
                              <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                              Sending...
                            </span>
                          ) : (
                            <>
                              <Send size={18} />
                              {c.form.send}
                            </>
                          )}
                        </button>
                      </form>
                    </>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-10"
                    >
                      <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-5">
                        <CheckCircle size={36} className="text-green-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">Message Sent!</h3>
                      <p className="text-brand-textMuted leading-relaxed max-w-sm mx-auto">{c.form.success}</p>
                      <button
                        onClick={() => { setSubmitted(false); setForm({ name: '', email: '', company: '', phone: '', message: '' }); }}
                        className="btn-secondary mt-6"
                      >
                        Send Another Message
                      </button>
                    </motion.div>
                  )}
                </div>
              </ScrollReveal>

              {/* Info panel */}
              <ScrollReveal className="lg:col-span-2" delay={0.15} direction="left">
                <div className="space-y-6">
                  {/* Contact info */}
                  <div className="card">
                    <h3 className="text-white font-bold mb-5">{c.info.title}</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-brand-primary/15 flex items-center justify-center flex-shrink-0">
                          <Mail size={18} className="text-brand-primary" />
                        </div>
                        <div>
                          <p className="text-brand-textMuted text-xs mb-0.5">{c.info.emailLabel}</p>
                          <a href="mailto:info@cortexforai.com" className="text-white text-sm hover:text-brand-primary transition-colors font-medium">
                            info@cortexforai.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-brand-primary/15 flex items-center justify-center flex-shrink-0">
                          <MapPin size={18} className="text-brand-primary" />
                        </div>
                        <div>
                          <p className="text-brand-textMuted text-xs mb-0.5">Headquarters</p>
                          <p className="text-white text-sm font-medium">Riyadh, Saudi Arabia</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-brand-primary/15 flex items-center justify-center flex-shrink-0">
                          <Globe size={18} className="text-brand-primary" />
                        </div>
                        <div>
                          <p className="text-brand-textMuted text-xs mb-0.5">Response Time</p>
                          <p className="text-white text-sm font-medium">Within 24 hours</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Social */}
                  <div className="card">
                    <h3 className="text-white font-bold mb-4">{c.info.followUs}</h3>
                    <div className="space-y-3">
                      {socialLinks.map(({ icon: Icon, href, label, color }) => (
                        <a
                          key={label}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 p-3 rounded-xl glass hover:border-opacity-50 transition-all duration-200 group"
                        >
                          <div
                            className="w-9 h-9 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110"
                            style={{ background: `${color}20` }}
                          >
                            <Icon size={16} style={{ color }} />
                          </div>
                          <div>
                            <p className="text-white text-sm font-medium">{label}</p>
                            <p className="text-brand-textMuted text-xs">@CORTEXFORAI</p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Response guarantee */}
                  <div className="card" style={{ background: 'linear-gradient(135deg, rgba(20,123,255,0.08), rgba(11,31,77,0.3))' }}>
                    <div className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-brand-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-white font-semibold text-sm mb-1">Free Consultation</h4>
                        <p className="text-brand-textMuted text-xs leading-relaxed">
                          Our first consultation is always free. No strings attached, no pressure — just an honest conversation about how we can help.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </PageTransition>
    </>
  );
}
