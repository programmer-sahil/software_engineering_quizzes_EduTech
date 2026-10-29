# Content Authoring Guide (for adding lessons, subjects, quizzes and reels later)

> These conventions guide your coding assistant. The **current repository remains authoritative**. Adapt paths and field names rather than replacing the existing database or chapter files. The examples are drafts only.

## 1) Add a new subject
1. Copy `TEMPLATES/NEW_SUBJECT.md` for planning its metadata and syllabus.
2. Create a new subject record in the registry implemented during Phase 02. Give it a unique stable `id` and `slug`, semester, course, title, description, status and order.
3. Keep status `coming_soon` until ready; do not show empty quizzes as active.
4. Register unit records (unique IDs/slugs); link existing content or new lessons.
5. Verify subject card, course page, unit navigation and disabled/active behavior.
6. Never require edits to Home or Subjects page layout.

## 2) Add a new unit/lesson
1. Copy `TEMPLATES/NEW_UNIT.md`; enter the **real syllabus** and official hours/marks/module if known.
2. Store lesson in Markdown with YAML frontmatter if the site supports it; otherwise follow the existing content loader.
3. Link by subject ID + unit ID; mark as draft until proofread.
4. Do not copy placeholder text into the published learning experience.

## 3) Add MCQs
Use **validated structured data** (JSON/TS/DB), not plain unstructured Markdown for graded questions. Important properties:

```json
{
  "id": "your-unique-question-id",
  "subjectId": "your-subject-id",
  "unitId": "your-unit-id",
  "topic": "Topic name",
  "sourceType": "practice",
  "prompt": "Write the real question here",
  "options": [
    { "id": "a", "text": "Option A" },
    { "id": "b", "text": "Option B" },
    { "id": "c", "text": "Option C" },
    { "id": "d", "text": "Option D" }
  ],
  "correctOptionId": "a",
  "explanation": "Real explanation, if provided",
  "status": "draft"
}
```

Do **not** publish the above sample; it contains placeholders, not a valid authored exam question. Use unique IDs and validate `correctOptionId` against the options. Set `sourceType:"pyq"` and add year/board only with a verifiable provenance record; never present invented questions as past papers.

## 4) Add a PYQ
Same schema as MCQ, plus legitimate year, exam/board/source (when known). Attach source only when permitted. If provenance is uncertain, classify as `practice` or `exam-pattern`, not a verified PYQ.

## 5) Add a cheat sheet
Copy `TEMPLATES/NEW_CHEAT_SHEET.md`, fill correct subject and unit IDs, write text and examples, and publish once reviewed. If export is not implemented, show `Print` rather than an inoperative PDF button.

## 6) Add a reel
Copy `TEMPLATES/NEW_REEL.md` or enter equivalent structured record. Use **your real Instagram Reel URL**, accurate topic, subject and optional unit; add a thumbnail only when allowed. Publish only after testing the link. Do not autoplay.

## 7) Content governance
- Draft → Review → Published states for future assets.
- Keep existing academic content immutable unless an explicit separate content-edit request is made.
- Preview before release; broken external links and incomplete records should fail validation or remain unpublished.
- For future subjects, test routes and quiz score calculations before setting `active`.
