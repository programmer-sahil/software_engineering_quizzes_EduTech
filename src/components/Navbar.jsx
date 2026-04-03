import { BadgeCheck, Phone, Sparkles } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { BRAND } from '../data/units';
import Button from './ui/Button';
import ThemeToggle from './ThemeToggle';

function Navbar({ theme, onThemeToggle }) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <nav className="section-shell py-3">
        <div className="flex items-center justify-between gap-3">
          <Link to="/" className="group inline-flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-accent to-neon text-slate-900">
              <Sparkles size={18} />
            </div>
            <div>
              <p className="font-display text-sm font-semibold leading-none text-white">{BRAND.bannerText}</p>
              <p className="text-xs text-slate-400">Software Engineering</p>
            </div>
          </Link>

          <div className="hidden items-center gap-2 md:flex">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `rounded-lg px-4 py-2 text-sm transition ${isActive ? 'bg-white/10 text-accent' : 'text-slate-300 hover:text-white'}`
              }
            >
              Home
            </NavLink>
            <a href="#units" className="rounded-lg px-4 py-2 text-sm text-slate-300 transition hover:text-white">
              Units
            </a>
            <span className="inline-flex items-center gap-1 rounded-full border border-coral/50 bg-coral/10 px-3 py-1 text-xs text-coral">
              <BadgeCheck size={13} /> Admission Open
            </span>
          </div>

          <div className="hidden items-center gap-2 sm:flex">
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

        <div className="mt-3 flex items-center justify-between gap-2 sm:hidden">
          <div className="flex items-center gap-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `rounded-lg px-3 py-2 text-xs transition ${isActive ? 'bg-white/10 text-accent' : 'text-slate-300 hover:text-white'}`
              }
            >
              Home
            </NavLink>
            <a href="#units" className="rounded-lg px-3 py-2 text-xs text-slate-300 transition hover:text-white">
              Units
            </a>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle theme={theme} onToggle={onThemeToggle} compact />
            <a
              href={`tel:${BRAND.contact.replace(/\s+/g, '')}`}
              className="inline-flex items-center justify-center rounded-lg border border-accent/40 bg-accent/10 p-2 text-accent"
              aria-label="Call now"
            >
              <Phone size={15} />
            </a>
          </div>
        </div>

        <div className="mt-3 md:hidden">
          <span className="inline-flex items-center gap-1 rounded-full border border-coral/50 bg-coral/10 px-3 py-1 text-[11px] text-coral">
            <BadgeCheck size={12} /> Admission Open
          </span>
        </div>
        <div className="hidden sm:block md:hidden">
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
    </header>
  );
}

export default Navbar;
