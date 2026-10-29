# EduTech Premium Design System & UI Specifications

## 1. Overview & Design Philosophy

The **EduTech Diploma Learning Hub** design system is engineered to deliver a modern, high-retention, educational SaaS experience for diploma engineering students. 

### Core Design Goals
1. **Eliminate Harsh Outlined Boxes:** Traditional educational interfaces often suffer from cluttered high-contrast borders and boxy containers. EduTech utilizes **soft border gradients**, **ambient elevation**, **glassmorphism**, and **depth-driven drop shadows** (`shadow-card`, `shadow-glow`) to achieve depth without visual clutter.
2. **Dual-Theme Elegance:** Native dark theme optimized for low-strain night studying and crisp light theme for daytime reading, powered by semantic CSS variables and Tailwind CSS dark mode classes.
3. **Accessibility First (WCAG 2.1 AA):** High-contrast text ratios ($\ge 4.5:1$ for normal text, $\ge 3:1$ for large headings and icons), clear focus rings for keyboard navigation, and automatic disabling of floating animations when `prefers-reduced-motion` is detected.
4. **Performance Without Heavy 3D Engines:** 3D floating dashboard visual effects are achieved using pure CSS perspective (`perspective: 1200px`), GPU-accelerated transforms (`translate3d`), and lightweight Framer Motion springs—keeping the entire bundle under 2 seconds build time with zero WebGL overhead.

---

## 2. Color Palette & Token Architecture

The design system relies on semantic CSS custom properties configured in `src/styles/index.css` and mapped into `tailwind.config.js`.

### 2.1 Dark Mode (Default)
| Token | Variable | Hex / Value | Usage |
| :--- | :--- | :--- | :--- |
| **Canvas** | `--bg-canvas` | `#070B19` | Deep cosmic navy page background |
| **Surface** | `--bg-surface` | `#0D1527` | Primary card background |
| **Elevated** | `--bg-elevated` | `#111C33` | Raised cards, dropdowns, inputs, secondary pills |
| **Primary** | `--color-primary` | `#31C9F4` | Electric cyan brand accent, primary CTA buttons |
| **Secondary**| `--color-secondary`| `#8B7CF6` | Soft violet highlights, gradients |
| **Accent** | `--color-accent` | `#60A5FA` | Sky blue interactive highlights |
| **Coral** | `--color-coral` | `#F43F5E` | Exam focus alerts, weightage badges, PYQ pills |
| **Success** | `--color-success` | `#10B981` | Correct answers, admissions open status pill |
| **Heading** | `--text-heading` | `#F8FAFC` | High-contrast headers and titles |
| **Body** | `--text-body` | `#94A3B8` | Subtext, chapter descriptions, notes paragraphs |
| **Muted** | `--text-muted` | `#64748B` | Metadata, timestamps, module labels |
| **Border** | `--border-subtle`| `rgba(148, 163, 184, 0.14)` | Ultra-delicate separation borders |

### 2.2 Light Mode
| Token | Variable | Hex / Value | Usage |
| :--- | :--- | :--- | :--- |
| **Canvas** | `--bg-canvas` | `#F8FAFC` | Clean soft slate-white page background |
| **Surface** | `--bg-surface` | `#FFFFFF` | Crisp pure white card containers |
| **Elevated** | `--bg-elevated` | `#F1F5F9` | Neutral input backgrounds, light pills |
| **Primary** | `--color-primary` | `#0284C7` | Rich ocean blue interactive primary |
| **Secondary**| `--color-secondary`| `#7C3AED` | Royal lavender violet secondary |
| **Accent** | `--color-accent` | `#38BDF8` | Cyan sky accents |
| **Coral** | `--color-coral` | `#E11D48` | Exam alerts and warnings |
| **Success** | `--color-success` | `#059669` | Success badges, checkmarks |
| **Heading** | `--text-heading` | `#0F172A` | Deep ink headings |
| **Body** | `--text-body` | `#334155` | High-readability body copy |
| **Muted** | `--text-muted` | `#64748B` | Muted auxiliary text |
| **Border** | `--border-subtle`| `rgba(15, 23, 42, 0.08)` | Clean soft shadow edge |

---

## 3. Typography Hierarchy

### 3.1 Font Families
- **Display Headings (`font-display`):** `Plus Jakarta Sans`, `Space Grotesk`, `sans-serif`
- **Body & Academic Content (`font-sans`):** `Inter`, `Manrope`, system-ui, `sans-serif`
- **Code & Hardware Pinouts (`font-mono`):** `JetBrains Mono`, `Fira Code`, monospace

### 3.2 Scale & Leading
- **Hero Title:** `text-4xl sm:text-5xl md:text-6xl`, `font-extrabold`, `leading-[1.12]`
- **Section Headings:** `text-2xl sm:text-3xl`, `font-extrabold`, `tracking-tight`
- **Card Titles:** `text-base sm:text-lg`, `font-bold`
- **Academic Body:** `text-sm sm:text-base`, `leading-relaxed` (1.65 line-height)
- **Badges & Metadata:** `text-[11px] sm:text-xs`, `font-semibold`, `uppercase tracking-wider`

---

## 4. Elevation, Glassmorphism & Depth

### 4.1 Card Elevation Tokens
```css
/* Refined elevation drop shadows */
.shadow-card {
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.35);
}
.shadow-glow {
  box-shadow: 0 0 40px -10px rgba(49, 201, 244, 0.28);
}
.shadow-glow-sm {
  box-shadow: 0 0 20px -5px rgba(49, 201, 244, 0.18);
}
```

### 4.2 Floating 3D CSS Layering
Instead of flat bounding rectangles, layered cards use CSS 3D perspectives:
```jsx
<div className="[perspective:1200px]">
  <div className="transform-gpu transition-all duration-300 hover:rotate-x-2 hover:-translate-y-2">
    {/* Card Content with backdrop-blur-xl */}
  </div>
</div>
```

---

## 5. UI Component Library (`src/components/ui/`)

| Component | Path | Purpose |
| :--- | :--- | :--- |
| `Button` | `src/components/ui/Button.jsx` | Polymorphic button supporting `primary`, `secondary`, `ghost`, `coral`, sizes `sm`/`md`/`lg`, loading spinner, and icons |
| `Card` | `src/components/ui/Card.jsx` | Soft rounded container with delicate border gradient and hover elevation |
| `GlassCard`| `src/components/ui/GlassCard.jsx` | Backdrop blur acrylic card with subtle gradient highlights |
| `Badge` | `src/components/ui/Badge.jsx` | High-contrast status pill (`primary`, `coral`, `emerald`, `amber`, `muted`) |
| `Tabs` | `src/components/ui/Tabs.jsx` | Animated accessible tabs with sliding indicator |
| `EmptyState`| `src/components/ui/EmptyState.jsx` | Standardized empty placeholder with icon, message, and recovery CTA |
| `ProgressBar`| `src/components/ui/ProgressBar.jsx` | Smooth animated progress indicator with custom color accents |
| `SectionHeading`| `src/components/ui/SectionHeading.jsx` | Eyebrow + Title + Subtitle section introductory block |

---

## 6. Accessibility & Motion Guidelines

1. **Reduced Motion:** Every animated container checks `useReducedMotion()` from `framer-motion` or the `@media (prefers-reduced-motion: reduce)` media query. When active, transforms and floating offsets are clamped to zero.
2. **Touch Targets:** All interactive buttons, navigation pills, quiz options, and mobile drawer items enforce a minimum bounding box of **$44 \times 44\text{px}$**.
3. **Contrast Verification:** Text elements comply with WCAG AA standards in both Dark and Light themes.

