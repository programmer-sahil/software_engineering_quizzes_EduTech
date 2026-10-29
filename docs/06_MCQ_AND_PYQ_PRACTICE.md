# PHASE 06 — Build an Excellent MCQ/PYQ Student Practice Interface

Create a beautiful, fully functional quiz practice experience from the **existing questions only**. I will add more questions later; do not invent, rewrite, or silently 'correct' question banks.

## UX requirements
- Entry points: homepage quick action, subject page, unit page, persistent Practice page.
- Filters: subject, unit, topic, practice/PYQ, year **only where confirmed**, unanswered/bookmarked (if state stored).
- Pre-quiz overview: actual number of questions, attempt mode, time limit only if configured, start CTA; helpful empty state when zero.
- One question per view with large legible text and accessible radio options; question navigator, previous/next and progress `Question 3 of 15`.
- **Practice mode:** after answer submission, show correct/incorrect and the **stored** explanation (if missing, say `Explanation coming soon`, never invent). Permit review and change policy explicitly; if answers can be changed, ensure scoring is consistent.
- **Exam mode (optional):** no explanations until submit; optional timer, warn on unattempted questions, final confirmation and results. Only enable if correctly implemented and tested.
- Results: attempted, correct, wrong, skipped, percentage with correct rounding, review answers and retry wrong answers. No inflated accuracy metrics.
- Keyboard and touch support, ARIA grouping, disabled submit unless selected, visible focus, no color-only answer cues.
- Autosave/resume only when local storage or backend persistence is genuinely implemented, scoped to user/quiz to avoid collisions. Avoid storing private info unnecessarily.
- Shuffle question/order only with stable IDs and validated answer mapping; do not mutate original answers.
- PYQ badge/year/board only for verified metadata. Clearly mark unsourced practice questions as practice, not official PYQs.
- Booking/bookmarks require real persistence; otherwise hide the option.

## Data model and content safety
Document a reusable question schema: ID, subjectId, unitId, topic, type, prompt, options `[{id,text}]`, correctOptionId, explanation (optional), difficulty (optional), sourceType (`practice`/`pyq`), examYear (only known), examBoard (only known), sourceCitation (optional), published status. Preserve existing schemas via adapter; validate references. Never corrupt or overwrite legacy banks.

**Acceptance tests:** 0-question, 1-question and multi-question paths; correct/wrong/skip; back/next; exam submit; result arithmetic; retry; page refresh; keyboard; mobile; no original questions modified. Document precisely how I add MCQs and PYQs later. No deploy.
