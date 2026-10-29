# PHASE 02 — Extensible Subject and Content Architecture

Using the completed Phase 01 repository audit, make **future content additions simple** while retaining current content verbatim. Adapt to the existing stack/backend rather than forcing a new framework.

Goals:
- Introduce a single source-of-truth **subject registry**, reusable subject/unit route renderer and stable IDs/slugs. Do not change old slugs or old deep links; add redirects only if absolutely necessary.
- Record display fields: subject ID, title, course/semester, summary, status (`active`, `coming_soon`, `disabled`), visible order, icon, units, unit number/title, syllabus, hours, marks, module.
- Keep existing IoT Unit 1–6 content and metadata unchanged; Software Engineering must remain visible but disabled (no accidental route bypass).
- Build a backward-compatible adapter to existing educational content. Avoid moving/reformatting old content until content snapshot/parity tests prove exact equivalence; ideally keep old content file bytes identical.
- New text-based lessons/cheat sheets may use **Markdown with YAML frontmatter**; new MCQs/PYQs should use **validated JSON/TS or the existing database** with stable IDs, correct option references, explanations, provenance and unit references. Never generate questions to fill empty units.
- Add typed validation or runtime schema validation, meaningful empty states, content counts computed from real data, and a clearly documented authoring path. Do not break builds when future subjects have no MCQs yet.
- Separate display ordering from IDs; handle new semesters and categories without one-off code conditionals.
- Make one example **non-published template** for a future subject; do not announce that a future subject is available.
- Add `/docs/edutech/ADDING_CONTENT.md`, with instructions to add a subject, unit, note, MCQ, PYQ, cheat sheet and Reel in less than 10 straightforward steps.

**Acceptance:** every currently visible unit has identical wording and metadata before/after; existing links still work; new empty subject can be registered without editing page components; tests validate schemas and invalid references; no fabricated content.

Report changed files, diff, tests and parity evidence. Do not deploy.
