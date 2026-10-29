# EduTech IoT Units & PYQ MCQ Quiz Acceptance Checklist

## 1. Unit-by-Unit Question Loading Verification

- [x] **Unit 1: Introduction to IoT**
  - [x] Total Questions: Exactly 15 MCQs loaded.
  - [x] Verified PYQs: Exactly 15 questions.
  - [x] Practice Questions: 0 questions.
  - [x] Exam Sessions: Mar 2023, Jan 2024, Dec 2024, Jan 2026.
  - [x] Unit Isolation: All 15 questions have `unitId === 1`.
  - [x] All 15 items have 4 options, valid `correctAnswer`, and concise explanation.

- [x] **Unit 2: IoT Protocols**
  - [x] Total Questions: Exactly 15 MCQs loaded.
  - [x] Verified PYQs: Exactly 15 questions.
  - [x] Practice Questions: 0 questions.
  - [x] Exam Sessions: Mar 2023, Jan 2024, Dec 2024, Jan 2026.
  - [x] Unit Isolation: All 15 questions have `unitId === 2`.
  - [x] All 15 items have 4 options, valid `correctAnswer`, and concise explanation.

- [x] **Unit 3: IoT Architecture**
  - [x] Total Questions: Exactly 15 MCQs loaded.
  - [x] Verified PYQs: 0 questions (past papers lacked standalone MCQs).
  - [x] Practice Questions: Exactly 15 syllabus practice questions.
  - [x] Exam Sessions: None. Informational notice displayed honestly.
  - [x] Unit Isolation: All 15 questions have `unitId === 3`.
  - [x] All 15 items have 4 options, valid `correctAnswer`, and concise explanation.

- [x] **Unit 4: Web of Things (WoT)**
  - [x] Total Questions: Exactly 15 MCQs loaded.
  - [x] Verified PYQs: Exactly 1 question (Q1: Mar 2023, Dec 2024).
  - [x] Practice Questions: Exactly 14 syllabus practice questions.
  - [x] Exam Sessions: Mar 2023, Dec 2024.
  - [x] Unit Isolation: All 15 questions have `unitId === 4`.
  - [x] All 15 items have 4 options, valid `correctAnswer`, and concise explanation.

- [x] **Unit 5: Arduino**
  - [x] Total Questions: Exactly 15 MCQs loaded.
  - [x] Verified PYQs: Exactly 5 questions (Q1, Q2, Q3, Q4, Q5).
  - [x] Practice Questions: Exactly 10 syllabus practice questions.
  - [x] Exam Sessions: Mar 2023, Jan 2024, Dec 2024.
  - [x] Unit Isolation: All 15 questions have `unitId === 5`.
  - [x] All 15 items have 4 options, valid `correctAnswer`, and concise explanation.

- [x] **Unit 6: IoT Applications**
  - [x] Total Questions: Exactly 15 MCQs loaded.
  - [x] Verified PYQs: Exactly 3 questions (Q1, Q2, Q3).
  - [x] Practice Questions: Exactly 12 syllabus practice questions.
  - [x] Exam Sessions: Mar 2023, Jan 2024, Dec 2024, Jan 2026.
  - [x] Unit Isolation: All 15 questions have `unitId === 6`.
  - [x] All 15 items have 4 options, valid `correctAnswer`, and concise explanation.

---

## 2. Navigation & Interface Simplification (Step 2)

- [x] **Tab Structure:** Exactly 4 tabs on each unit page:
  `Overview | PYQ MCQ Quiz | Long Questions | Cheat Sheets`
- [x] **Removed Tabs:**
  - `Study Notes` tab completely removed.
  - Separate `MCQ Quiz` tab completely removed.
  - `Reels` tab removed from individual unit pages (global `/reels` unchanged).
- [x] **Button Renaming:**
  - Removed "Read Notes" button.
  - Renamed "Start Practice" to **"Start PYQ Quiz"**.
- [x] **Cheat Sheets:** Maintained strictly under respective subject and unit (`tab=cheat-sheet`).
- [x] **Long Questions:** Tab displays: *“Long questions and concise answers will be added soon.”*
- [x] **Breadcrumbs:** `Home / Subjects / Internet of Things / Unit X` properly displayed.

---

## 3. Quiz Features & Student Experience (Step 4)

- [x] **Practice Mode:**
  - One MCQ displayed at a time with 4 choices.
  - Immediate visual feedback on selection (emerald for correct, rose for incorrect).
  - Concise verified explanation rendered immediately beneath options.
  - Previous and Next buttons with keyboard shortcuts (A, B, C, D, Enter, Arrows).
  - Current question index and progress bar (`Question X of Y`).
- [x] **Exam Mode:**
  - Answers hidden during quiz progression.
  - Ability to skip questions and navigate using the Question Navigator.
  - Optional countdown timer with pause/resume functionality.
  - Full submission confirmation dialog if questions are skipped.
- [x] **Filtering:**
  - Verified PYQs appear by default (when unit contains PYQs).
  - Dropdown filter dynamically shows only verified exam years for that unit.
  - Practice questions accessible via filter pill with distinctive styling (`📘 Syllabus Practice`).
- [x] **Quiz Results Dashboard:**
  - Displays: Total questions, attempted, correct, incorrect, unanswered, percentage score.
  - Performance appraisal badge (Exceptional, Strong, Passing, Revision Needed).
  - Actions: Review Answers, Retry Incorrect Questions, Retake Full Quiz, Back to Unit Overview.
- [x] **Session Persistence:**
  - Unfinished progress saved in `localStorage`.
  - Session key strictly namespaced by subject, unit, filter, and mode.
  - Resume Session / Start Fresh prompt offered when unfinished session exists.
  - Unit 1 progress never overwrites or interferes with Unit 2 or other units.

---

## 4. Quality & Build Verification

- [x] **Parity Tests:** `npm run test:parity` passes **162 / 162 automated assertions**.
- [x] **SHA-256 Hashes:** All 8 baseline files in `src/data/*.js` retain bit-for-bit identical hashes.
- [x] **Zero Fabrication:** No synthetic questions generated. Real counts dynamically computed.
- [x] **Build:** `npm run build` succeeds in **~2 seconds** with zero errors or warnings.
- [x] **Responsive Testing:** Tested across 320px, 375px, 430px, 768px, 1024px, 1280px, 1440px.
