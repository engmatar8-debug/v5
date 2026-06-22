import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import { I18nProvider } from './i18n/I18nContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import AcademyPage from './pages/AcademyPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/academy" element={<AcademyPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route
          path="*"
          element={
            <div className="min-h-screen flex items-center justify-center pt-16">
              <div className="text-center">
                <h1 className="text-6xl font-bold gradient-text mb-4">404</h1>
                <p className="text-brand-textMuted mb-6">Page not found</p>
                <a href="/" className="btn-primary">Back to Home</a>
              </div>
            </div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function AppLayout() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-text flex flex-col">
      <Navbar />
      <main className="flex-1">
        <AnimatedRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <I18nProvider>
        <BrowserRouter>
          <AppLayout />
        </BrowserRouter>
      </I18nProvider>
    </HelmetProvider>
  );
}
