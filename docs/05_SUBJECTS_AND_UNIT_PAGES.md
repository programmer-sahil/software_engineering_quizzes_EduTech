# PHASE 05 — Subject and Unit Learning Experience

Build a scalable student journey using the existing subject registry and design system. Do **not** edit any existing syllabus or notes text.

Subject listing:
- Search subject by name; filter semester/status when data exists.
- Active subjects are prominent cards; disabled/coming-soon subjects remain visible but do not allow entry into inactive content. Preserve Software Engineering locked state.
- Each card shows real title, semester, units count, description, status, and clear action.

IoT subject page:
- Intro + total units derived from registry; six existing units displayed in a responsive grid/list.
- Show unit title, exact current hours/marks/module, syllabus preview **from original content**, and action `Open Unit`. Avoid redundant badges.
- Optional learning progress only when truly tracked (not hard-coded percentages).

Unit detail page:
- Compact breadcrumb `Subjects / Internet of Things / Unit 5`.
- One stable header with unit title, syllabus, hours, marks, module, and optional print/share links only if functional.
- A student-friendly navigation: `Overview`, `Study Notes`, `MCQ Practice`, `PYQ Practice`, `Cheat Sheets`, `Reels`.
- Above learning content, add `Start practice` and `Read notes`; use chapter section anchors, better typography, tables and diagrams where already present.
- A sticky but unobtrusive side table of contents on desktop; tabbed or accordion navigation on mobile.
- For empty MCQ/PYQ/reel categories, display clear copy `Questions will be added soon` with back-to-notes CTA; **never generate placeholder questions that look authentic**.
- Preserve original chapter HTML/Markdown, paragraph text, images, exercises, formulas and correct answers exactly; use wrappers/styles to improve presentation without altering text.

**Acceptance:** all original links/routes deep-link correctly, each of IoT Units 1–6 appears with correct metadata, screen readers have meaningful navigation, small-screen text does not overflow, locked subject cannot be entered by URL. Confirm content parity. No deploy.
