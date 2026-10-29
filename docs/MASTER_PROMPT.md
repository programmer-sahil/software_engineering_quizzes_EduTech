# MASTER PROMPT — EduTech Website Full Redesign

You are a senior product designer, frontend architect, accessibility specialist and full-stack engineer. You are working inside my **existing EduTech Diploma Learning Hub website repository**, not starting a replacement project.

## Product goal
Transform my existing platform into an elegant, modern, **student-first learning hub** for diploma students: semester-exam preparation, MCQ practice, previous-year questions (PYQs), cheat sheets, topic-specific Instagram reels and practical career guidance. The site should feel premium, intuitive, exceptionally smooth and fast, with subtle floating three-dimensional cards and refined dark/light themes.

## Absolute rules — non-negotiable
1. **Do not delete, overwrite, paraphrase, silently fix or regenerate any existing chapter/subject/unit syllabus, notes, educational explanations, MCQ/PYQ question text, options, correct answers, explanations, marks, hours or modules.** Treat educational content as immutable data during redesign. New content should be empty placeholders until I add it.
2. Preserve all existing URLs, routes, working buttons, forms, phone/WhatsApp integrations, images, existing submissions, quiz progress and backend contracts when present. Add migration/adapters only if needed and prove parity. Do not lose user data.
3. Preserve the existing IoT Units 1–6 and their current metadata (U1 10h/10m/A; U2 14h/14m/A; U3 10h/10m/B; U4 10h/10m/B; U5 6h/6m/C; U6 10h/10m/C). Keep Software Engineering visible but disabled for this semester.
4. Do not fabricate PYQ provenance, official exam year, quiz questions, completion counts, student testimonials, success rates, or instructor claims. Replace unverified '99.99%' assurances with defensible wording **only with my review**. Never claim score improvement or guaranteed grades.
5. Make adding a future subject/unit/MCQ/PYQ/reel a **content configuration task**, not a page redesign or hard-coded conditional. Store new authorable lesson/cheat sheet content in Markdown where compatible; use validated structured data (JSON/TypeScript or existing DB) for questions and scoring.
6. Discover the current framework, UI libraries, routes, content model and hosting. **Adapt to the existing stack**. Do not rewrite React as Next.js (or vice versa), replace the backend, or add large dependencies without evidence and approval.
7. Prefer accessible CSS/transform/gradient-based depth, not heavy 3D/WebGL. Smooth animations must honor `prefers-reduced-motion`; aim for reliable performance on budget student phones and slower networks.
8. Implement in small verifiable phases, preserve git history, show changes, run checks. Never deploy or push to production without explicit approval.

## Current visual problems from screenshots
- Dark UI appears visually flat in many sections and too text-heavy in hero and cards.
- Header/nav appears dense with many competing actions on desktop; improve hierarchy and mobile behavior.
- Repetitive subject text and badges dilute scanability.
- Quiz, PYQ, cheat sheet and reel discovery should be obvious from the first screen and every unit page.
- Better contrast and type scale, calmer spacing, consistent card system and meaningful calls to action are needed.
- Underexposed photos and the cluttered photo collage should be treated more carefully; preserve original assets, improve presentation/crops/overlays without falsifying people or credentials.

## Creative direction
**Style:** premium student SaaS platform — editorial readability with subtle futuristic accents. Modern, friendly and credible. No childish cartoons, glass blur overload, random neon, excessive glowing borders, or gimmicky animations.
**Theme:** dark = ink/navy background, elevated slate surfaces and blue/cyan/violet accents; light = warm off-white, white surfaces, dark ink text, soft sky/lavender accents. Contrast must pass WCAG AA for normal text.
**Typography:** use a distinctive but highly legible heading font (e.g., Space Grotesk or Plus Jakarta Sans) with Inter/Manrope for body; local fallbacks and `font-display: swap`. Avoid tiny text.
**Card treatment:** rounded 18–24px cards, fine strokes, layered shadows, top edge highlights, tasteful 3D hover rise/tilt only for pointer devices, reduced-motion fallback, keyboard focus indicator. Never make text tilt or become unreadable.
**Visual system:** CSS variables/design tokens, consistent spacing/grid, status colors, SVG/lucide-style iconography, subtle background motifs, sparse restrained gradients.

## Required information architecture
- Home: immediately communicate study value and two core CTAs `Start Learning` + `Practice MCQs`; secondary career/upskilling CTA.
- Subjects: semester + subject selector; clear enabled vs coming-soon distinction; easy addition of subjects.
- Subject overview: unit cards with hours, marks, module and syllabus snippet.
- Unit page: `Overview`, `Notes`, `MCQ Practice`, `PYQs`, `Cheat Sheets`, `Videos/Reels` tabs or equally accessible navigation. Active tabs display counts when real data exist. No fake data.
- Practice: one-question-at-a-time; previous/next; answer validation; explanations when supplied; score; progress; review incorrect; retry; bookmark only if stored. Practice vs timed exam only when fully implemented.
- Cheat sheets: clear printable readable summaries, topic/subject/unit filters; downloads only if an actual file exists.
- Instagram reels: curated grid with title, topic, subject, unit, description, real link, thumbnail or clean placeholder; official Instagram link/optional consent-based embed. No auto-play.
- Services/admissions: keep existing services, authentic contact links and visible status. Separate them from the main study flow.

## Deliverable per phase
Before code: describe repository facts and phase-specific plan. After code: list modified files, behavioral changes, tests run/results, exact content-parity checks, responsive/a11y notes, remaining risks and next phase. Make screenshots of desktop/mobile when tooling is available. Do not claim tests or screenshots not actually executed.

Start with **Phase 01** only (audit + content freeze). Do not implement new UI until inventory and backup are done. See `PROMPTS/01_AUDIT_AND_CONTENT_FREEZE.md`.
