# EduTech IoT Long Questions QA & Testing Checklist

This document details the quality assurance procedures, functional test cases, and automated validation scripts for the IoT Long Questions section across all six units.

---

## 1. Automated Test Suite

Run the full parity and long-question test suite from the repository root:

```bash
npm run test:parity
```

### What `verify-content-parity.js` Asserts (Section 11):
- **Dataset Count:** Asserts exactly **39 long questions** loaded.
- **PYQ vs Practice:** Asserts **33 verified PYQs** and **6 practice questions**.
- **No Duplicate IDs:** Validates that all 39 IDs are globally unique.
- **Unit Isolation:**
  - Unit 1: 8 long questions (8 PYQ, 0 practice).
  - Unit 2: 8 long questions (7 PYQ, 1 practice).
  - Unit 3: 6 long questions (4 PYQ, 2 practice).
  - Unit 4: 5 long questions (3 PYQ, 2 practice).
  - Unit 5: 5 long questions (5 PYQ, 0 practice).
  - Unit 6: 7 long questions (6 PYQ, 1 practice).
- **Completeness:** Verifies that **every single question has a valid definition, at least 3 key points, and zero missing answers**.
- **Filter Correctness:** Tests filtering by pool (`pyq` vs `practice`), exam session (e.g. *Mar 2023*), and keyword search.

---

## 2. Manual QA Verification Checklist

### 2.1 Navigation & Section Simplification (Step 4)
- [x] In `/iot/unit/:unitId`, verify exactly 4 unit tabs are present:
  `Overview | PYQ MCQ Quiz | Long Questions | Cheat Sheets`.
- [x] Verify that redundant tabs (*Study Notes*, *MCQ Quiz*, *Reels*) are completely removed from unit navigation.
- [x] Verify that the *Long Questions* tab displays the dynamic question count badge (e.g. `8 Qs`).
- [x] Verify switching between tabs does not lose active quiz or revision progress.

### 2.2 3D-Inspired Long Question Cards & Progressive Disclosure (Step 5)
- [x] In Browse Mode, verify questions initially render as compact floating cards.
- [x] Verify initial cards display Question Number, Category, PYQ Session badges (in coral), and Marks badge.
- [x] Click **View Answer**: card expands smoothly with height transition.
- [x] Verify model answer displays:
  1. Highlighted Exam Definition (1–2 sentences).
  2. Structured Key Points with bullet markers.
  3. Real-world example box.
  4. Visual Step Flow diagram (where applicable) or C++ code block (Unit 5 Blink sketch).
  5. Conclusion / Exam Takeaway.
- [x] Verify that by default, opening a card collapses other cards (single-card accordion), avoiding screen clutter.
- [x] Verify **Expand All / Collapse All** toggle works as expected.

### 2.3 Search & Filtering (Step 6)
- [x] Type a keyword (e.g. *"gateway"*, *"MQTT"*, *"sketch"*) into the search box: list filters instantly.
- [x] Click **Filters** toggle: dropdown expands smoothly.
- [x] Select **Verified PYQs Only**: practice questions are excluded and count updates dynamically.
- [x] Select an **Exam Session Year** (e.g. *Jan 2026*): only questions verified for that year are shown.
- [x] Click **Reset Filters**: all controls return to default.

### 2.4 Self-Practice Mode (Step 7)
- [x] Click **Self-Practice Mode** toggle in the top control bar.
- [x] Verify Question 1 is displayed in isolation with progress bar (`Question 1 of N`).
- [x] Verify model answer is **hidden initially**, showing notebook revision prompt.
- [x] Click **Reveal Model Answer**: answer expands smoothly.
- [x] Click **Mark as Revised**: question is marked revised; saved in localStorage under `edutech_revised_lq_iot_u{unitId}`.
- [x] Click **Next Question**: advances to Question 2 with answer hidden again.
- [x] Refresh the browser: revised status persists.

### 2.5 Unit Header Ribbon (Step 8)
- [x] Verify unit ribbon displays strictly: `Unit X: Title | Module X · X Hours · X Marks`.
- [x] Verify 3 clear action buttons:
  - `Practice PYQ MCQs` (switches to PYQ MCQ Quiz tab)
  - `Study Long Questions` (switches to Long Questions tab)
  - `Open Cheat Sheets` (switches to Cheat Sheets tab)
- [x] Verify syllabus details are inside the expandable accordion.

### 2.6 Device Responsiveness (Step 9)
- [x] **Mobile (320px–375px):** Single-column layout, full-width touch targets ($\ge 44$px), no horizontal overflow.
- [x] **Tablet (768px):** Clean margins, readable typography, responsive filter grid.
- [x] **Desktop (1280px+):** Centered max-w-7xl container, subtle 3D hover elevation, sticky table-of-contents sidebar.
- [x] **Theme Switcher:** Clean dark mode (charcoal `#111C33` on navy `#0A0F1D`) and light mode (white on off-white `#F8FAFC`).

### 2.7 Academic & Framework Integrity (Step 11)
- [x] Zero modification to `src/data/*.js` (all 8 cryptographic SHA-256 baseline hashes remain intact).
- [x] Software Engineering remains visibly locked with `"Reopens next semester"`.
- [x] Existing 90 IoT MCQs and quizzes remain fully functional.
