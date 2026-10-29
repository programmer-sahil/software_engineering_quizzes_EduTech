/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['"Plus Jakarta Sans"', '"Space Grotesk"', 'Poppins', 'sans-serif'],
        body: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        'brand-canvas': 'var(--bg-canvas)',
        'brand-surface': 'var(--bg-surface)',
        'brand-elevated': 'var(--bg-surface-elevated)',
        'brand-heading': 'var(--text-heading)',
        'brand-body': 'var(--text-body)',
        'brand-muted': 'var(--text-muted)',
        'brand-primary': 'var(--color-primary)',
        'brand-secondary': 'var(--color-secondary)',
        'brand-accent': 'var(--color-accent)',
        'brand-coral': 'var(--color-coral)',
        'brand-success': 'var(--color-success)',
        'brand-border': 'var(--border-subtle)',
        // Legacy backward compatibility mappings
        ink: '#070B19',
        accent: '#31C9F4',
        neon: '#38BDF8',
        coral: '#FB7185',
        violet: '#8B7CF6',
      },
      boxShadow: {
        glow: 'var(--shadow-glow)',
        card: 'var(--shadow-card)',
        'card-3d': 'var(--shadow-card)',
        focus: 'var(--focus-ring)',
      },
      backgroundImage: {
        'mesh-dark':
          'radial-gradient(circle at 15% 15%, rgba(49, 201, 244, 0.12), transparent 32%), radial-gradient(circle at 85% 12%, rgba(139, 124, 246, 0.12), transparent 30%), radial-gradient(circle at 50% 85%, rgba(56, 189, 248, 0.1), transparent 40%)',
        'mesh-light':
          'radial-gradient(circle at 15% 15%, rgba(18, 97, 178, 0.08), transparent 35%), radial-gradient(circle at 85% 12%, rgba(124, 58, 237, 0.06), transparent 30%), radial-gradient(circle at 50% 85%, rgba(2, 132, 199, 0.05), transparent 40%)',
      },
    },
  },
  plugins: [],
};
