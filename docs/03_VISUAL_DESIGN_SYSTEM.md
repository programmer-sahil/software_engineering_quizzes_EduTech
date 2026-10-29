# PHASE 03 — Premium Design System and Navigation

Implement a complete **responsive design system** for EduTech, using existing stack/design conventions where sensible, without touching course content.

Visual direction:
- Premium and approachable SaaS learning app; subtle depth rather than visual noise.
- Dark theme: `#070B19` page canvas, `#11182B` raised cards, off-white headings, muted cool-gray body, cyan `#31C9F4` primary, violet `#8B7CF6` secondary. Light theme: `#F7F9FE` canvas, white cards, ink `#111827` text, deep blue `#1261B2` buttons and small lavender highlights. Tokens are starting suggestions; check actual contrast and refine.
- Type: Space Grotesk/Plus Jakarta Sans headings, Inter/Manrope body; fluid type scale, high line-height, suitable Bengali/English fallback if needed.
- Design tokens for color, spacing, radii, elevation, focus rings, typography and motion durations. CSS variable driven, consistent in all pages.
- Rounded floating cards, delicate border/gradients, grounded 3D shadow. On desktop pointer hover max 4–6px elevation and mild perspective (optional; never rotate text excessively). Respect reduced-motion. On mobile cards stay stable and tappable.
- Strong contrast, focus-visible, semantic links, min ~44px touch targets, no icon-only control without label, no low-contrast muted text on dark background.
- Implement functional theme toggle: persisted user preference if appropriate, system default, prevents flash of incorrect theme on load.
- Compact sticky nav with logo, Subjects, Practice, Cheat Sheets, Reels, Services; admission/career area in secondary placement; clear mobile drawer/menus. Keep all existing actions available and phone/WhatsApp contacts correct.
- Replace inconsistent card styles with reusable Card, Button, Badge, SectionHeading, Tabs, EmptyState, Search/Filter, Progress, Skeleton components. Keep badge use restrained.

Create `/docs/edutech/DESIGN_SYSTEM.md` with tokens/components, screenshots when possible and usage instructions.

**Acceptance:** desktop 1440/1280, tablet 768 and mobile 390/360 layouts; no horizontal overflow, no dense unusable navbar, keyboard navigation works, theme readable, no visual regressions of educational content. Run existing lint/build/tests. No deployment.
