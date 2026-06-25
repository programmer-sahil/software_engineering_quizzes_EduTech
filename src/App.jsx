import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton';
import HomePage from './pages/HomePage';
import UnitPage from './pages/UnitPage';
import SubjectsPage from './pages/SubjectsPage';
import SubjectUnitsPage from './pages/SubjectUnitsPage';
import ServicesPage from './pages/ServicesPage';
import IotLongQuestionsPage from './pages/IotLongQuestionsPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  const location = useLocation();
  const [theme, setTheme] = useState(() => localStorage.getItem('se-theme') || 'dark');

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('light', theme === 'light');
    localStorage.setItem('se-theme', theme);
  }, [theme]);

  return (
    <div className="relative min-h-screen bg-ink font-body text-slate-100">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-mesh-dark" />
      <ScrollToTop />
      <Navbar theme={theme} onThemeToggle={() => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))} />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/subjects" element={<SubjectsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/software-engineering" element={<SubjectUnitsPage subjectId="software-engineering" />} />
          <Route path="/iot" element={<SubjectUnitsPage subjectId="iot" />} />
          <Route path="/software-engineering/unit/:unitId" element={<UnitPage subjectId="software-engineering" />} />
          <Route path="/iot/unit/:unitId" element={<UnitPage subjectId="iot" />} />
          <Route path="/iot/unit/1/long-questions" element={<IotLongQuestionsPage />} />
          <Route path="/unit/:unitId" element={<UnitPage subjectId="software-engineering" />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AnimatePresence>
      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
}

export default App;
