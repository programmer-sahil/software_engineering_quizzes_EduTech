import { BadgeCheck, Phone, Sparkles } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { BRAND } from '../data/units';
import Button from './ui/Button';

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <nav className="section-shell flex items-center justify-between py-3">
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

        <a href={`tel:${BRAND.contact.replace(/\s+/g, '')}`} className="hidden sm:block">
          <Button
            variant="secondary"
            icon={<Phone size={16} />}
            className="border-accent/50 text-accent hover:bg-accent/10"
          >
            {BRAND.contact}
          </Button>
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
