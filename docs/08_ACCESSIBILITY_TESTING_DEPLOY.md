# PHASE 08 — Full QA, Performance, Accessibility and Safe Release

Audit the whole redesigned EduTech website before any production deployment.

1. **Content regression:** verify no existing notes, IoT chapter text, syllabus, all six unit hours/marks/modules, MCQs, PYQs, options, answer keys, images or subject states were changed unintentionally. Diff legacy content snapshots/hash where possible. Confirm Software Engineering remains disabled and visible.
2. **Student journeys:** homepage → Subjects → IoT → Units 1–6 → Notes / MCQs / PYQs / Cheat Sheets / Reels; quiz scoring and resume/review where implemented; all legitimate empty states; contact/WhatsApp/tel links.
3. **Device matrix:** 360/390px phone, 768px tablet, 1280/1440px desktop; both themes, portrait/landscape; no overflow or sticky overlays that hide buttons. Touch targets ~44px.
4. **Accessibility:** WCAG AA contrast, semantic headings, labels, focus, keyboard tab order, screen reader-friendly quiz controls, error announcements, reduced-motion setting, accessible SVGs and alt text, no color-only correctness feedback.
5. **Performance:** Lighthouse where accessible, optimized images, lazy-load offscreen images and reels, minimize third-party scripts/dependencies, reduce layout shift, avoid costly perspective or blur effects on low-end phones. Check LCP/CLS/INP where measurement available.
6. **Functionality/security:** safe external links, validation for new content, no XSS from Markdown, no compromised auth or unsafe direct DB writes, no exposure of secrets. Respect existing privacy and backend policies.
7. **Content admin:** demonstrate creating a draft subject with two draft units, one draft MCQ and one draft reel **without publishing invented academic content** and without modifying page components; remove test fixtures from production build.
8. **Reports:** create `/docs/edutech/QA_REPORT.md` listing PASS/FAIL/NOT TESTED with evidence; document known issues and fixes, screenshots for dark/light desktop/mobile where available.

Run existing tests, typecheck, lint and build. Fix critical issues. Do **not** merge/push/deploy without my authorization. Provide a go/no-go recommendation and concise deployment instructions appropriate to the current host.
