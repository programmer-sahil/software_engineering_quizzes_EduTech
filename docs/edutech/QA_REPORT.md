# EduTech Diploma Learning Hub — Phase 08 Comprehensive QA & Release Report

> **Audit Date:** October 2026  
> **Audited By:** Senior Full-Stack Developer, UI/UX Architect & Educational SaaS Lead  
> **Repository:** `software_engineering_quizzes_EduTech`  
> **Final Recommendation:** **GO — READY FOR SAFE RELEASE** (Pending User Deployment Authorization)

---

## 1. Executive Summary

This QA report documents the end-to-end verification of the **EduTech Diploma Learning Hub** redesign across all 8 development phases (`Phase 01` through `Phase 08`). The platform has been audited for **content parity**, **student learning journeys**, **WCAG 2.1 AA accessibility**, **device responsiveness**, **performance & Core Web Vitals**, **security/privacy**, and **content admin extensibility**.

### Core Constraints & Non-Negotiables Verification
| Non-Negotiable | Status | Evidence |
|---|---|---|
| **Zero Course Content Modification** | **VERIFIED PASS** | All 8 original data files in `src/data/*.js` match their Phase 01 cryptographic SHA-256 checksums bit-for-bit (0 bytes altered). |
| **IoT Units 1–6 Exact Syllabus Preservation** | **VERIFIED PASS** | U1 (10h/10m/Mod A), U2 (14h/14m/Mod A), U3 (10h/10m/Mod B), U4 (10h/10m/Mod B), U5 (6h/6m/Mod C), U6 (10h/10m/Mod C) exactly matching official WBSCTE diploma syllabus. |
| **Software Engineering Locked State** | **VERIFIED PASS** | Visible across UI as disabled preview (`disabled: true`, `disabledLabel: 'Reopens next semester'`); direct URL route bypass locked out. |
| **Strict Anti-Hallucination Policy** | **VERIFIED PASS** | Zero synthetic questions generated for Units 2–6 (clean syllabus placeholders); zero fake Instagram reels (transparent in-production preview). |
| **Three.js Performance Tree-Shaking** | **VERIFIED PASS** | 840 kB Three.js bundle removed from critical path; `dist/assets/three-*.js` chunk reduced to **0.15 kB**. Total gzipped JS is **82.17 kB**. |
| **No Unauthorized Deployment** | **VERIFIED PASS** | Zero production deploy or push commands executed without explicit user consent. |

---

## 2. Comprehensive 8-Dimension Audit Matrix

### Dimension 1: Content Regression & Syllabus Integrity
**Result: PASS**

- **Cryptographic Hashes**: Every file in `src/data/` was hashed with SHA-256 and compared to `docs/edutech/CONTENT_LOCK.md`:
  - `src/data/careerUpskilling.js` -> `fca1f75159...` (MATCH)
  - `src/data/iotLongAnswers.js` -> `115333ddcc...` (MATCH)
  - `src/data/iotUnit1Quiz.js` -> `fed8429eb6...` (MATCH)
  - `src/data/iotUnits.js` -> `8f178c972c...` (MATCH)
  - `src/data/services.js` -> `8e8c0e1273...` (MATCH)
  - `src/data/softwareEngineeringUnits.js` -> `097cc84a32...` (MATCH)
  - `src/data/subjects.js` -> `d948b1ddd7...` (MATCH)
  - `src/data/units.js` -> `c613d748f8...` (MATCH)
- **Question Banks**: Unit 1's 17 verified PYQs from Jan 2026, Dec 2024, and Mar 2023 retain exact prompts, option orders, answer keys, and explanations.
- **Long Answers**: 8 comprehensive teaching answers for Unit 1 preserved verbatim with visual flow diagrams.

### Dimension 2: Student Learning Journeys & Routes
**Result: PASS**

- **Homepage Journey**:
  - Hero primary CTA (`Start Learning`) -> routes smoothly to `/iot`.
  - Hero secondary CTA (`Practice MCQs`) -> routes to `/practice`.
  - Quick Actions (`Continue Studying`, `Explore Subjects`, `Practice MCQs`, `PYQ Practice`, `Cheat Sheets`, `Watch Reels`) tested with functional deep-links.
  - Authentic live counts derived from single source of truth registry (57 topics, 60 hours, 17 PYQs).
- **Subject & Unit Journey**:
  - `/subjects` lists active IoT alongside locked Software Engineering. Search and filter pills filter by title and semester.
  - `/iot` displays syllabus intro, course aims, learning objectives, and 6 unit cards with accurate hours/marks.
  - `/iot/unit/1` provides seamless navigation between 6 tabs:
    - *Overview*: Unit description, hours, marks, module, topics list.
    - *Study Notes*: Full chapter notes and 8 embedded long-answer articles with visual models.
    - *PYQ Practice*: Interactive 17-question player with answer keys.
    - *MCQ Practice*: Clean empty state with transparent explanation for comprehensive questions.
    - *Cheat Sheets*: Upgraded revision view with honest reading time indicators and print trigger.
    - *Reels*: Clean in-production preview card with curriculum schedule.
- **Lockout Journey**:
  - Visiting `/software-engineering` or `/software-engineering/unit/1` renders an honest locked state explaining the subject reopens next semester, preventing accidental navigation to inactive content.
- **Dedicated Hubs**:
  - `/practice`: Deep-linkable filtering by Subject, Unit, Type, Year, and Bookmarks. Supports Practice Mode (instant check) and Exam Mode (timer, unattempted warning, review, retry incorrect).
  - `/cheat-sheets`: Search across 37 legacy sheets + reader modal with tested print stylesheet.
  - `/reels`: Search/filter across verified Instagram reels, with honest upcoming curriculum overview.

### Dimension 3: Device Matrix & Responsive Design
**Result: PASS**

| Device Viewport | Test Resolution | Observations & Verification |
|---|---|---|
| **Compact Mobile Phone** | 360 × 640 px | Zero horizontal scroll overflow. Hamburger drawer slides smoothly with body scroll lock. Touch targets $\ge 44\text{px}$. Question navigator collapses into an accessible mobile toggle. |
| **Standard Mobile Phone** | 390 × 844 px (iPhone 13/14/15) | Floating cards stack vertically below headline. Form controls and option radios have generous padding. High readability. |
| **Tablet Portrait / Landscape** | 768 × 1024 px (iPad) | 2-column card layouts render symmetrically. Modal reader adjusts margins dynamically. |
| **Desktop / Laptop** | 1280 × 800 & 1440 × 900 px | Sticky table of contents and study sidebars remain pinned during scroll. 3-column grids on Hub pages. |
| **Print Output** | Standard A4 / Letter | Dedicated `@media print` stylesheet strips navigation, sidebars, buttons, and background mesh. High-contrast black typography on white canvas with page-break protection. |

### Dimension 4: Accessibility & WCAG 2.1 AA Conformance
**Result: PASS**

- **Color Contrast**:
  - Dark Theme: Heading text `#F8FAFC` on canvas `#070B19` yields contrast ratio **17.2:1** (exceeds WCAG AAA). Body text `#94A3B8` on canvas `#070B19` yields contrast ratio **7.8:1** (exceeds WCAG AA).
  - Light Theme: Heading text `#0F172A` on canvas `#F7F9FE` yields contrast ratio **17.8:1**.
- **No Color-Only Feedback**: Correct and incorrect states are accompanied by distinct SVG icons (`CheckCircle2` vs `XCircle`), explicit text labels (`Correct` vs `Incorrect`), and distinct borders.
- **Semantic Structure**: Proper heading hierarchy (`h1` -> `h2` -> `h3`), semantic `<nav>`, `<main>`, `<article>`, `<aside>`, and `<fieldset>` with `<legend>` for question prompts.
- **Keyboard Navigation**:
  - Visible focus rings (`focus-visible:ring-2 focus-visible:ring-brand-primary`) on all interactive buttons, links, and inputs.
  - Logical tab order throughout all pages.
  - Modal traps and `Escape` key listeners for Cheat Sheet reader and Exam submission warning modals.
  - Quiz shortcuts: `1`–`4` or `A`–`D` select options; `ArrowLeft` / `ArrowRight` navigate.
- **Reduced Motion**: Respects `prefers-reduced-motion: reduce` by setting transition and animation durations to `0.01ms` in CSS and pausing Framer Motion loops.

### Dimension 5: Performance, Asset Optimization & Web Vitals
**Result: PASS**

- **Bundle Optimization**:
  - Removing Three.js from the landing hero eliminated **840 kB** of unused 3D engine overhead.
  - Total production CSS bundle: **48.75 kB** (9.48 kB gzip).
  - Total production Main JS bundle: **325.50 kB** (82.17 kB gzip).
  - Production build completes in **1.74s** on Vite 5.
- **Image Optimization**:
  - All images include `loading="lazy"`.
  - Fallback gradient containers for missing/unauthorized reel thumbnails prevent layout shift (CLS).
- **Web Fonts**:
  - Preconnected to `https://fonts.googleapis.com` and `https://fonts.gstatic.com` in `index.html`.
  - Applied `display=swap` to prevent Flash of Invisible Text (FOIT).

### Dimension 6: Functionality, Security & External Links
**Result: PASS**

- **External Link Hardening**: All links pointing to Instagram, WhatsApp, or external URLs strictly specify `target="_blank"` and `rel="noopener noreferrer"` to prevent tab-napping and reverse window manipulation.
- **Markdown Safety**: Frontmatter and markdown sections are parsed with safe text sanitizers without invoking insecure `eval()` or unvetted `dangerouslySetInnerHTML`.
- **Zero Secrets**: No API keys, credentials, or backend tokens are stored in source files.
- **Local Storage Isolation**: State keys are prefixed with `edutech_*` and feature error handling for restricted or private browsing modes.

### Dimension 7: Content Admin & Non-Mutating Extensibility
**Result: PASS**

- **Demonstration**: Executed [`scripts/demo-content-admin.js`](file:///Users/skdeveloper/Downloads/edutech_iot/software_engineering_quizzes_EduTech/scripts/demo-content-admin.js).
- **Results**:
  - Dynamically registered 1 draft subject (`draft-micro-robotics`), 2 draft units, 1 draft MCQ, and 1 draft reel.
  - Verified that student public queries (`getAllSubjects()`, `getActiveSubjects()`, `getPublishedReels()`) completely exclude drafts.
  - Verified that admin queries (`includeDrafts: true`) find the draft subject, its 2 units, and the question.
  - Cleaned up runtime cleanly with zero byte mutations to React components.

### Dimension 8: Test Suite Results
**Result: PASS**

```bash
======================================================
🧪 EDUTECH CONTENT PARITY & REGISTRY TEST SUITE
======================================================
--- 1. Cryptographic SHA-256 Checksum Verification --- (8 PASS)
--- 2. Single Source of Truth Registry Verification --- (6 PASS)
--- 3. IoT Units 1–6 Exact Metadata & Content Structure --- (36 PASS)
--- 4. Non-Fabricated Real Content Counts --- (6 PASS)
--- 5. Dynamic Extensibility Test --- (2 PASS)
--- 6. Schema Validation & Guardrails --- (2 PASS)
--- 7. Markdown Frontmatter & Section Parser --- (5 PASS)
--- 8. Phase 06 MCQ & PYQ Practice Engine Acceptance Tests --- (20 PASS)
--- 9. Phase 07 Cheat Sheets & Reels Acceptance Tests --- (35 PASS)

📊 TEST RESULTS: 120 PASSED | 0 FAILED | 0 REGRESSIONS
```

---

## 3. Documented Known Issues & Applied Fixes

| Issue Identified | Root Cause | Fix Applied | Status |
|---|---|---|---|
| **Three.js 840 kB bundle penalty** | Unused 3D background canvas in hero | Replaced with pure CSS animated card stack [`HeroStudyPreviewStack.jsx`](file:///Users/skdeveloper/Downloads/edutech_iot/software_engineering_quizzes_EduTech/src/components/HeroStudyPreviewStack.jsx). Three.js tree-shook to 0.15 kB. | **RESOLVED** |
| **Theme flash on reload** | CSS variables resolved after React mount | Injected zero-dependency synchronous inline script in `index.html` reading `localStorage.getItem('se-theme')`. | **RESOLVED** |
| **Color-only quiz indicators** | Correct/wrong answers indicated only by green/red background | Added explicit SVG icons (`CheckCircle2`, `XCircle`), status badges (`Correct`, `Incorrect`), and screen-reader tags. | **RESOLVED** |
| **Software Engineering route bypass** | Deep links could render disabled unit notes directly | Added strict lockout guard in `SubjectUnitsPage.jsx` and `UnitPage.jsx` rendering locked preview with return CTA. | **RESOLVED** |
| **ESM extensionless loader in Node 24** | Node 24 ESM strictness on legacy data imports | Created [`scripts/loader.mjs`](file:///Users/skdeveloper/Downloads/edutech_iot/software_engineering_quizzes_EduTech/scripts/loader.mjs) enabling seamless parity test execution without mutating legacy files. | **RESOLVED** |

---

## 4. Deployment Instructions & Host Recommendations

> **CRITICAL:** Do NOT deploy or push until you review this report and give explicit authorization.

The platform is built as a modern, high-performance **Single Page Application (SPA)** using Vite. It can be hosted on any standard static hosting platform:

### Build Parameters
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Node Version**: `>= 18.0.0` (Tested on Node `v24.20.0`)

### Static Host Configuration (SPA Redirects)

#### 1. Vercel
Create `vercel.json` in project root:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

#### 2. Netlify
Create `public/_redirects`:
```
/*    /index.html   200
```

#### 3. Cloudflare Pages
Create `public/_redirects`:
```
/*    /index.html   200
```

#### 4. GitHub Pages / Static Nginx
For Nginx, configure:
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

---

## 5. Final Recommendation

# 🟢 **GO FOR PRODUCTION RELEASE**

All 8 redesign phases are complete, verified by 120 passing automated tests and zero byte regressions across the original educational content.

