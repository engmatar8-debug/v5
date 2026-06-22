import { Helmet } from 'react-helmet-async';
import PageTransition from '../components/PageTransition';
import HeroSection from '../sections/HeroSection';
import TrustedBySection from '../sections/TrustedBySection';
import ServicesSection from '../sections/ServicesSection';
import IndustriesSection from '../sections/IndustriesSection';
import WhyCortexSection from '../sections/WhyCortexSection';
import StatsSection from '../sections/StatsSection';
import SolutionsSection from '../sections/SolutionsSection';
import AcademyPreviewSection from '../sections/AcademyPreviewSection';
import BlogPreviewSection from '../sections/BlogPreviewSection';
import CTASection from '../sections/CTASection';
import { useI18n } from '../i18n/I18nContext';

export default function HomePage() {
  const { language } = useI18n();

  return (
    <>
      <Helmet>
        <title>Cortex AI — Transforming Ideas into Intelligent Solutions</title>
        <meta name="description" content="Cortex AI empowers organizations through Artificial Intelligence, Data Analytics, Digital Transformation, Cybersecurity, and Professional Training." />
        <meta property="og:title" content="Cortex AI — Intelligent Solutions for the Modern Enterprise" />
        <meta property="og:description" content="Partner with Cortex AI to transform your organization through cutting-edge AI, data analytics, cybersecurity, and digital transformation." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Cortex AI" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cortex AI — Transforming Ideas into Intelligent Solutions" />
        <meta name="twitter:description" content="Enterprise AI solutions: AI Agents, Data Analytics, Cybersecurity, Digital Transformation, and Professional Training." />
        <link rel="canonical" href="https://cortexforai.com" />
        <html lang={language} />
      </Helmet>
      <PageTransition>
        <HeroSection />
        <TrustedBySection />
        <ServicesSection />
        <IndustriesSection />
        <WhyCortexSection />
        <StatsSection />
        <SolutionsSection />
        <AcademyPreviewSection />
        <BlogPreviewSection />
        <CTASection />
      </PageTransition>
    </>
  );
}
