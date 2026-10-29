import { AnimatePresence, motion } from 'framer-motion';
import {
  BadgeCheck,
  BookOpenCheck,
  BriefcaseBusiness,
  Cpu,
  FileQuestion,
  GraduationCap,
  Home,
  Instagram,
  Lock,
  Menu,
  MessageCircle,
  Phone,
  Sparkles,
  Workflow,
  X,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { BRAND } from '../data/units';
import { getServicesWhatsAppLink } from '../data/services';
import Button from './ui/Button';
import ThemeToggle from './ThemeToggle';

function Navbar({ theme, onThemeToggle }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu whenever route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Exactly the 5 requested core navigation links
  const primaryNavLinks = [
    { to: '/', label: 'Home', Icon: Home },
    { to: '/subjects', label: 'Subjects', Icon: BookOpenCheck },
    { to: '/practice', label: 'Practice', Icon: FileQuestion },
    { to: '/reels', label: 'Reels', Icon: Instagram },
    { to: '/services', label: 'Services', Icon: BriefcaseBusiness },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-brand-border/60 bg-brand-canvas/85 backdrop-blur-xl transition-colors duration-200 shadow-sm">
      <nav className="section-shell py-2.5 sm:py-3" aria-label="Main Navigation">
        <div className="flex items-center justify-between gap-4">
          {/* Left: EduTech Brand Identity with Original Minimal Educational Icon */}
          <Link
            to="/"
            className="group inline-flex items-center gap-2.5 outline-none focus-visible:ring-2 focus-visible:ring-brand-primary rounded-xl"
            aria-label="EduTech Diploma Learning Hub Home"
          >
            <div className="relative grid h-10 w-10 place-items-center rounded-xl border border-brand-primary/30 bg-gradient-to-br from-brand-primary/20 via-brand-secondary/15 to-brand-primary/10 text-brand-primary shadow-glow-sm transition-transform duration-200 group-hover:scale-105">
              <GraduationCap size={22} className="text-brand-primary" />
              <div className="absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full bg-brand-primary animate-pulse" />
            </div>
            <div>
              <span className="font-display text-lg font-extrabold tracking-tight text-brand-heading block leading-tight">
                {BRAND.bannerText}
              </span>
              <span className="text-[11px] font-medium text-brand-muted block leading-none">
                Diploma Learning Hub
              </span>
            </div>
          </Link>

          {/* Centre: Clean Desktop Navigation (Home | Subjects | Practice | Reels | Services) */}
          <div className="hidden items-center gap-1 rounded-2xl border border-brand-border/50 bg-brand-surface/70 px-1.5 py-1 backdrop-blur-md shadow-card lg:flex">
            {primaryNavLinks.map(({ to, label, Icon }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `group relative rounded-xl px-3.5 py-2 text-xs font-semibold tracking-wide transition-all duration-200 ${
                    isActive
                      ? 'text-brand-primary'
                      : 'text-brand-body hover:text-brand-heading hover:bg-brand-elevated/50'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive ? (
                      <motion.span
                        layoutId="desktop-nav-active"
                        className="absolute inset-0 rounded-xl border border-brand-primary/35 bg-brand-primary/10 shadow-glow-sm"
                        transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                      />
                    ) : null}
                    <span className="relative z-10 inline-flex items-center gap-2">
                      <Icon size={14} className="transition-transform group-hover:scale-110" />
                      {label}
                    </span>
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Right: Admissions Open | Theme Toggle | Contact */}
          <div className="hidden items-center gap-3 lg:flex">
            {/* Admissions Status Pill */}
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Admissions Open</span>
            </span>

            {/* Theme Toggle */}
            <ThemeToggle theme={theme} onToggle={onThemeToggle} />

            {/* Contact Action */}
            <a
              href={`tel:${BRAND.contact.replace(/\s+/g, '')}`}
              className="inline-flex items-center"
            >
              <Button
                variant="secondary"
                size="sm"
                icon={<Phone size={14} />}
                className="text-xs font-semibold border-brand-border/60 hover:border-brand-primary/60 text-brand-heading"
              >
                Contact
              </Button>
            </a>
          </div>

          {/* Mobile Right Controls: Compact logo, theme toggle and hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle theme={theme} onToggle={onThemeToggle} compact />

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl border border-brand-border/60 bg-brand-surface text-brand-heading hover:bg-brand-elevated focus-visible:ring-2 focus-visible:ring-brand-primary transition"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Accessible Mobile Slide-Out Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 top-[61px] z-40 bg-black/60 backdrop-blur-sm lg:hidden"
              aria-hidden="true"
            />

            {/* Drawer Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="fixed bottom-0 right-0 top-[61px] z-50 flex w-full max-w-xs flex-col justify-between border-l border-brand-border bg-brand-canvas p-6 shadow-2xl lg:hidden overflow-y-auto"
            >
              <div className="space-y-6">
                {/* Admissions Status Bar */}
                <div className="flex items-center justify-between rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-3 text-xs text-emerald-400">
                  <span className="inline-flex items-center gap-1.5 font-bold">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    Admissions Going On
                  </span>
                  <span className="text-[11px] text-emerald-300/80">Batch 2026</span>
                </div>

                {/* Main Navigation Links */}
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-brand-muted mb-2 px-1">
                    Navigation
                  </p>
                  <div className="space-y-1">
                    {primaryNavLinks.map(({ to, label, Icon }) => (
                      <NavLink
                        key={to}
                        to={to}
                        end={to === '/'}
                        className={({ isActive }) =>
                          `flex min-h-[44px] items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-semibold transition ${
                            isActive
                              ? 'border border-brand-primary/30 bg-brand-primary/10 text-brand-primary'
                              : 'text-brand-body hover:bg-brand-elevated hover:text-brand-heading'
                          }`
                        }
                      >
                        <Icon size={18} />
                        <span>{label}</span>
                      </NavLink>
                    ))}
                  </div>
                </div>

                {/* Diploma Subjects Section */}
                <div className="border-t border-brand-border pt-4">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-brand-muted mb-2 px-1">
                    Curriculum Subjects
                  </p>
                  <div className="space-y-1.5">
                    <Link
                      to="/iot"
                      className="flex min-h-[44px] items-center justify-between rounded-xl border border-brand-border/60 bg-brand-surface p-3 text-xs font-semibold text-brand-heading hover:border-brand-primary/40 transition"
                    >
                      <div className="flex items-center gap-2.5">
                        <Cpu size={16} className="text-brand-primary" />
                        <div>
                          <p className="font-bold">Internet of Things</p>
                          <p className="text-[11px] text-brand-muted">5th Sem • 6 Units</p>
                        </div>
                      </div>
                      <span className="rounded bg-brand-primary/10 px-2 py-0.5 text-[10px] font-bold text-brand-primary">
                        Active
                      </span>
                    </Link>

                    <div className="flex min-h-[44px] items-center justify-between rounded-xl border border-brand-border/40 bg-brand-elevated/30 p-3 text-xs text-brand-muted opacity-75">
                      <div className="flex items-center gap-2.5">
                        <Workflow size={16} />
                        <div>
                          <p className="font-medium">Software Engineering</p>
                          <p className="text-[10px] text-brand-muted">4th Sem</p>
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-brand-coral">
                        <Lock size={10} /> Next Sem
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Quick Contact Actions */}
              <div className="space-y-3 pt-6 border-t border-brand-border">
                <a
                  href={`tel:${BRAND.contact.replace(/\s+/g, '')}`}
                  className="flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl border border-brand-border bg-brand-surface py-2.5 text-xs font-bold text-brand-heading hover:bg-brand-elevated transition"
                >
                  <Phone size={15} className="text-brand-primary" />
                  <span>Call {BRAND.contact}</span>
                </a>

                <a
                  href={getServicesWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-2.5 text-xs font-bold text-white hover:bg-emerald-500 transition shadow-sm"
                >
                  <MessageCircle size={15} />
                  <span>WhatsApp Sahil Sir</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
