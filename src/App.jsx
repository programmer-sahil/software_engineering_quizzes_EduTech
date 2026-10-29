import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton';
import HomePage from './pages/HomePage';
import UnitPage from './pages/UnitPage';
import SubjectsPage from './pages/SubjectsPage';
import SubjectUnitsPage from './pages/SubjectUnitsPage';
import ServicesPage from './pages/ServicesPage';
import PracticePage from './pages/PracticePage';
import CheatSheetsPage from './pages/CheatSheetsPage';
import ReelsPage from './pages/ReelsPage';
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
    <div className="relative min-h-screen bg-brand-canvas font-body text-brand-body transition-colors duration-200">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-mesh-dark dark:opacity-100 opacity-60 transition-opacity" />
      <ScrollToTop />
      <Navbar theme={theme} onThemeToggle={() => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))} />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/subjects" element={<SubjectsPage />} />
          <Route path="/practice" element={<PracticePage />} />
          <Route path="/cheat-sheets" element={<Navigate to="/subjects" replace />} />
          <Route path="/reels" element={<ReelsPage />} />
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
