# PHASE 07 — Cheat Sheets + Instagram Reels Library

Build two first-class study sections with the same premium design language, **without creating fake educational content**.

## Cheat Sheets
- Discoverable from navbar, home, subjects and units.
- Cards show authentic title, subject/unit, topic, short summary and reading time only if computed honestly.
- Search/filter by subject, unit and topic. Clean reader view: readable paragraphs, tables, callouts, diagrams, syntax highlighting where real code exists. Print-optimized stylesheet. Download PDF only when an actual PDF is available or when a tested PDF export flow exists.
- Markdown with YAML frontmatter for future sheets if compatible; all existing sheets stay byte/text-identical. Add blank `new sheet` template; unfilled draft is never public.

## Instagram Reels / Topic Videos
- New `Study Reels` section with cards: cover/thumbnail (if authorized), concise title, topic, unit, platform label, duration only if known, and `Watch on Instagram` external link.
- Support verified Instagram URL input with validation. Only real reels supplied by me; do not scrape, re-upload, auto-download or invent Instagram posts/links.
- Prefer link-out; optional click-to-load embed with privacy considerations and graceful fallback. Never auto-play video on page load.
- Search/filter by subject, unit, topic (e.g., IoT, Arduino, exam tips, Python). Unit pages surface matching real reels automatically.
- Add `Featured Reels` on home only if real published entries exist. If zero, use `New lessons coming soon` rather than placeholder play buttons.
- Document a simple `/content/reels/*.md` approach or an existing JSON/DB registry as appropriate; a single entry should be addable without editing React page layout.

**Acceptance:** authentic links open to correct posts in new tabs with `rel="noopener noreferrer"`; no broken media, no autoplay, missing thumbnails handled, excellent mobile layout, existing chapter content unchanged. No deploy.
