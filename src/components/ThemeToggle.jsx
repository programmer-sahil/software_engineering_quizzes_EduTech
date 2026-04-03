import { Moon, Sun } from 'lucide-react';

function ThemeToggle({ theme = 'dark', onToggle, compact = false }) {
  const isLight = theme === 'light';

  return (
    <button
      type="button"
      onClick={onToggle}
      className={`inline-flex items-center gap-2 rounded-xl border transition ${
        compact ? 'px-3 py-2 text-xs' : 'px-4 py-2 text-sm'
      } border-white/15 bg-white/5 text-slate-200 hover:border-accent/50 hover:text-accent`}
      aria-label="Toggle theme"
      title={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
    >
      {isLight ? <Moon size={16} /> : <Sun size={16} />}
      {compact ? (isLight ? 'Dark' : 'Light') : isLight ? 'Dark Mode' : 'Light Mode'}
    </button>
  );
}

export default ThemeToggle;
