# EduTech Design System & Component Guidelines

**Phase:** 03 — Premium Design System and Navigation  
**Architecture:** CSS Variables + Tailwind CSS Tokens + Accessible React UI Components  
**Compliance Target:** WCAG 2.1 AA Accessibility, Reduced-Motion Aware, 44px Touch Targets  

---

## 1. Visual Direction & Themes

The EduTech platform adopts an editorial, student-first educational SaaS aesthetic with subtle 3D floating perspective depth, delicate borders, and grounded shadows.

```
Dark Theme:
  Canvas: #070B19 (Deep Ink Navy)
  Surface: #11182B (Elevated Card)
  Primary: #31C9F4 (Electric Cyan)
  Secondary: #8B7CF6 (Soft Violet)
  Text Heading: #F8FAFC
  Text Body: #94A3B8

Light Theme:
  Canvas: #F7F9FE (Warm Off-White)
  Surface: #FFFFFF (Crisp White Card)
  Primary: #1261B2 (Deep Scholastic Blue)
  Secondary: #7C3AED (Rich Lavender Purple)
  Text Heading: #0F172A
  Text Body: #334155
```

---

## 2. CSS Variable Design Tokens

Tokens are defined on `:root` (dark default) and `html.light` in [`src/styles/index.css`](file:///Users/skdeveloper/Downloads/edutech_iot/software_engineering_quizzes_EduTech/src/styles/index.css):

| CSS Variable | Dark Theme Value | Light Theme Value | Usage |
|:---|:---|:---|:---|
| `--bg-canvas` | `#070B19` | `#F7F9FE` | Page background |
| `--bg-surface` | `#11182B` | `#FFFFFF` | Standard card surfaces |
| `--bg-surface-elevated` | `#17233E` | `#F1F5F9` | Hover states, pill containers, inputs |
| `--border-subtle` | `rgba(255, 255, 255, 0.08)` | `rgba(15, 23, 42, 0.08)` | Card borders & dividers |
| `--border-focus` | `#31C9F4` | `#1261B2` | Focus-visible rings |
| `--text-heading` | `#F8FAFC` | `#0F172A` | Page titles, headers, card titles |
| `--text-body` | `#94A3B8` | `#334155` | Paragraphs, descriptions, options |
| `--text-muted` | `#64748B` | `#64748B` | Meta labels, timestamps |
| `--color-primary` | `#31C9F4` | `#1261B2` | Primary buttons, active tabs, highlights |
| `--color-secondary` | `#8B7CF6` | `#7C3AED` | Badges, secondary accents |
| `--color-accent` | `#38BDF8` | `#0284C7` | Links, tags, breadcrumbs |
| `--color-coral` | `#FB7185` | `#E11D48` | Admission badges, timer alerts |
| `--color-success` | `#34D399` | `#059669` | Correct answer indicators, success badges |
| `--shadow-card` | `0 16px 36px -10px rgba(0, 0, 0, 0.55)` | `0 12px 30px -8px rgba(18, 97, 178, 0.08)` | Grounded 3D card shadow |
| `--shadow-glow` | `0 0 50px rgba(49, 201, 244, 0.18)` | `0 0 40px rgba(18, 97, 178, 0.12)` | Ambient glow effect |
| `--focus-ring` | `0 0 0 3px rgba(49, 201, 244, 0.45)` | `0 0 0 3px rgba(18, 97, 178, 0.35)` | Keyboard focus ring |

---

## 3. Typography System

- **Headings & Display:** `Plus Jakarta Sans` / `Space Grotesk` (`font-display: swap`)
- **Body & Content:** `Inter` / `Manrope` (`font-display: swap`)
- **Fluid Scale:**
  - Display Title (`h1`): `text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight`
  - Section Header (`h2`): `text-2xl sm:text-3xl font-bold tracking-tight`
  - Card Header (`h3`): `text-xl sm:text-2xl font-bold`
  - Eyebrow / Overline: `text-xs font-bold uppercase tracking-[0.22em]`
  - Body Text: `text-sm sm:text-base leading-relaxed`

---

## 4. UI Component Library

All components reside in [`src/components/ui/`](file:///Users/skdeveloper/Downloads/edutech_iot/software_engineering_quizzes_EduTech/src/components/ui/) and are exported via barrel [`index.js`](file:///Users/skdeveloper/Downloads/edutech_iot/software_engineering_quizzes_EduTech/src/components/ui/index.js).

### `Card`
Floating 3D container with delicate border gradients and subtle hover rise:
```jsx
import { Card } from '../components/ui';

<Card delay={0.05} className="p-6">
  <h3>Card Content</h3>
</Card>
```
- On desktop pointer hover: lifts 4px (`translateY(-4px)`).
- On mobile touch: stable and touch-friendly.
- Reduced motion: elevation animation disabled when `prefers-reduced-motion` is active.

### `Button`
Accessible action button with multiple variants, minimum 44px touch targets, and focus-visible rings:
```jsx
import { Button } from '../components/ui';

<Button variant="primary" size="md" icon={<ArrowRight size={16} />}>
  Start Learning
</Button>
```
- **Variants:** `primary`, `secondary`, `outline`, `ghost`, `danger`
- **Sizes:** `sm`, `md` (44px min-height), `lg` (48px min-height)
- **Features:** Loading spinner support, disabled states, touch-action: manipulation.

### `Badge`
Restrained status and metadata pills with high contrast in both themes:
```jsx
import { Badge } from '../components/ui';

<Badge variant="primary" icon={<Sparkles size={12} />}>
  Diploma 5th Sem
</Badge>
```
- **Variants:** `primary`, `secondary`, `coral`, `success`, `neutral`, `locked`

### `SectionHeading`
Standardized section headers:
```jsx
import { SectionHeading } from '../components/ui';

<SectionHeading
  eyebrow="Curriculum"
  title="Diploma Subjects"
  description="Select a subject to begin unit-wise preparation."
/>
```

### `Tabs`
Accessible tablist navigation with ARIA roles and keyboard arrow navigation:
```jsx
import { Tabs } from '../components/ui';

<Tabs
  tabs={[
    { id: 'notes', label: 'Study Notes', count: 8 },
    { id: 'quiz', label: 'MCQs', count: 17 }
  ]}
  activeTab={currentTab}
  onChange={setCurrentTab}
/>
```

### `EmptyState`
Clean, honest empty states for sections awaiting educator content:
```jsx
import { EmptyState } from '../components/ui';
import { BookOpen } from 'lucide-react';

<EmptyState
  icon={BookOpen}
  title="Questions will be added soon"
  description="The instructor will upload authentic past paper questions shortly."
/>
```

### `SearchFilter`
Search bar with clear button and accessible filter pills:
```jsx
import { SearchFilter } from '../components/ui';

<SearchFilter
  searchQuery={query}
  onSearchChange={setQuery}
  filterOptions={[{ id: 'all', label: 'All' }]}
  activeFilter={filter}
  onFilterChange={setFilter}
/>
```

### `ProgressBar`
Accessible linear progress indicator with percentage and step indicators:
```jsx
import { ProgressBar } from '../components/ui';

<ProgressBar current={3} total={17} label="Question 3 of 17" />
```

---

## 5. Navigation Architecture

### Sticky Desktop Header
- Compact layout with brand logo, centralized navigation pill (`Home`, `Subjects`, `IoT`, `Practice`, `Services`, `Software Engineering [Locked]`).
- Secondary placement for Admission Open badge.
- Quick `ThemeToggle` and direct telephone contact button.

### Responsive Mobile Drawer (<1024px)
- Minimum 44px touch-friendly hamburger toggle with `aria-expanded`.
- Background scroll lock when drawer is active.
- Smooth backdrop blur overlay.
- Accessible vertical link list, admission card, and 1-click WhatsApp / Phone shortcuts.
- Closes automatically on route transitions or backdrop clicks.

---

## 6. Accessibility & Performance Verification
1. **WCAG 2.1 AA Contrast:** All text tokens verified for >= 4.5:1 contrast against surface backgrounds.
2. **Keyboard Navigation:** Every interactive element has visible outline rings via `:focus-visible`.
3. **Reduced Motion:** Verified `@media (prefers-reduced-motion: reduce)` rules disable transforms and transition loops.
4. **Touch Targets:** Buttons and navigation items enforce `min-height: 44px`.
