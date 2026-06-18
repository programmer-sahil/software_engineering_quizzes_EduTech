import { motion } from 'framer-motion';
import { BadgeCheck, BookOpenCheck, BriefcaseBusiness, Cpu, Home, Phone, Sparkles, Workflow } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { BRAND } from '../data/units';
import Button from './ui/Button';
import ThemeToggle from './ThemeToggle';

function Navbar({ theme, onThemeToggle }) {
  const navLinks = [
    { to: '/', label: 'Home', Icon: Home },
    { to: '/subjects', label: 'Subjects', Icon: BookOpenCheck },
    { to: '/services', label: 'Services', Icon: BriefcaseBusiness },
    { to: '/software-engineering', label: 'Software Engineering', Icon: Workflow },
    { to: '/iot', label: 'IoT', Icon: Cpu },
  ];

  return (
    <motion.header
      initial={{ y: -18, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl"
    >
      <nav className="section-shell py-3">
        <div className="flex items-center justify-between gap-3">
          <Link to="/" className="group inline-flex items-center gap-3">
            <motion.div
              whileHover={{ rotate: -8, scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-accent to-neon text-slate-900 shadow-glow"
            >
              <Sparkles size={18} />
            </motion.div>
            <div>
              <p className="font-display text-sm font-semibold leading-none text-white">{BRAND.bannerText}</p>
              <p className="text-xs text-slate-400">Diploma Learning Hub</p>
            </div>
          </Link>

          <div className="hidden items-center gap-1 rounded-2xl border border-white/10 bg-white/5 p-1 lg:flex">
            {navLinks.map(({ to, label, Icon }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `group relative overflow-hidden rounded-xl px-3 py-2 text-sm font-semibold transition ${
                    isActive ? 'text-accent' : 'text-slate-300 hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive ? (
                      <motion.span
                        layoutId="desktop-nav-active"
                        className="absolute inset-0 rounded-xl border border-accent/30 bg-accent/10"
                        transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                      />
                    ) : null}
                    <span className="relative z-10 inline-flex items-center gap-2">
                      <Icon size={15} className="transition group-hover:scale-110" />
                      {label}
                    </span>
                  </>
                )}
              </NavLink>
            ))}
            <motion.span
              animate={{ boxShadow: ['0 0 0 rgba(251,113,133,0)', '0 0 24px rgba(251,113,133,0.22)', '0 0 0 rgba(251,113,133,0)'] }}
              transition={{ duration: 2.2, repeat: Infinity }}
              className="inline-flex items-center gap-1 rounded-full border border-coral/50 bg-coral/10 px-3 py-1 text-xs font-semibold text-coral"
            >
              <BadgeCheck size={13} /> Admission Open
            </motion.span>
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            <ThemeToggle theme={theme} onToggle={onThemeToggle} />
            <a href={`tel:${BRAND.contact.replace(/\s+/g, '')}`}>
              <Button
                variant="secondary"
                icon={<Phone size={16} />}
                className="border-accent/50 text-accent hover:bg-accent/10"
              >
                {BRAND.contact}
              </Button>
            </a>
          </div>
        </div>

        <div className="mt-3 flex items-start justify-between gap-2 lg:hidden">
          <div className="mobile-nav-scroll flex max-w-[calc(100%-96px)] items-center gap-2 overflow-x-auto rounded-2xl border border-white/10 bg-white/5 p-1">
            {navLinks.map(({ to, label, Icon }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `relative shrink-0 rounded-xl px-3 py-2 text-xs font-semibold transition ${
                    isActive ? 'bg-accent/10 text-accent shadow-glow' : 'text-slate-300 hover:text-white'
                  }`
                }
              >
                <span className="inline-flex items-center gap-1.5">
                  <Icon size={13} />
                  {label}
                </span>
              </NavLink>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle theme={theme} onToggle={onThemeToggle} compact />
            <motion.a
              whileTap={{ scale: 0.94 }}
              href={`tel:${BRAND.contact.replace(/\s+/g, '')}`}
              className="inline-flex items-center justify-center rounded-lg border border-accent/40 bg-accent/10 p-2 text-accent"
              aria-label="Call now"
            >
              <Phone size={15} />
            </motion.a>
          </div>
        </div>

        <div className="mt-3 lg:hidden">
          <span className="inline-flex items-center gap-1 rounded-full border border-coral/50 bg-coral/10 px-3 py-1 text-[11px] font-semibold text-coral">
            <BadgeCheck size={12} /> Admission Open
          </span>
        </div>
        <div className="hidden sm:block lg:hidden">
          <a href={`tel:${BRAND.contact.replace(/\s+/g, '')}`} className="mt-3 inline-block">
            <Button
              variant="secondary"
              icon={<Phone size={16} />}
              className="border-accent/50 text-accent hover:bg-accent/10"
            >
              {BRAND.contact}
            </Button>
          </a>
        </div>
      </nav>
    </motion.header>
  );
}

export default Navbar;
