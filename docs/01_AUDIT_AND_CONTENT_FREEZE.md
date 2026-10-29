# PHASE 01 — Repository Audit + Content Freeze (paste as prompt)

Inspect the existing EduTech repository end-to-end without making visual changes first. Identify framework, dependencies, build scripts, hosting, route map, data stores, subject/unit definitions, existing MCQs, PYQs, cheat sheets, images, Instagram links, contact integrations, theming and tests.

**Non-negotiable:** protect all chapter text and current syllabus; protect Software Engineering's locked state and all six IoT units and marks/hours/modules. Preserve existing question answers and active URLs. Avoid changing source text.

Tasks:
1. Check `git status`; if uncommitted changes exist, report them rather than overwriting. Recommend a safe branch/commit and backup; do not discard changes.
2. Map primary student journeys (Home → Subjects → IoT → Unit → study/quiz). Document navigation dead ends and broken links.
3. List current content sources (component arrays, Markdown, JSON, database, API), schemas and existing identifiers; compute a stable snapshot of content or comparable baseline checks. If content is generated, capture its rendered text as well.
4. Record the currently displayed IoT Unit 1–6 hours/marks/modules and the existing Software Engineering disable state.
5. Find dynamic vs static pages and identify reusable components vs duplicated UI.
6. Review SEO, accessibility, bundle size and phone-screen usability, but only report findings now.
7. Write `/docs/edutech/BASELINE_AUDIT.md` and `/docs/edutech/CONTENT_LOCK.md` inside the repo. Include content-protection boundaries, test plan and current known issues.
8. Explain any unsupported marketing statements (especially '99.99%') and ask for approval before replacing these marketing phrases; do not touch academic content.

**Deliver:** concise inventory, proposed design/architecture changes ranked by risk, content parity strategy, exact next steps. **No redesign, no production deploy in Phase 01.**
