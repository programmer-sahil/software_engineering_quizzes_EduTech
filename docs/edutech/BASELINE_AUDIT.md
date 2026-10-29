# EduTech Learning Hub — Comprehensive Baseline Architecture & Repository Audit

**Phase:** 01 — Repository Audit & Content Freeze  
**Date:** October 29, 2026  
**Auditor:** Senior Full-Stack Developer & SaaS Product Architect  
**Repository Working Directory:** `/Users/skdeveloper/Downloads/edutech_iot/software_engineering_quizzes_EduTech`  
**Git Status:** Branch `main`, HEAD commit `495008f2e2e64be0317dfdf0d53c64122868c646`  
**Safety Baseline Branch:** `backup/pre-redesign-baseline`  

---

## 1. Executive Summary

This audit assesses the technical architecture, content structures, user journeys, bundle performance, accessibility, and visual usability of the **EduTech Diploma Learning Hub**.

The application is built on a modern **React 18 + Vite + Tailwind CSS** SPA stack. The educational data is rich and authentic—particularly for Diploma 5th Semester Internet of Things (IoT Units 1–6) and Diploma 4th Semester Software Engineering. However, the site suffers from bundle bloat caused by unnecessary 3D canvas libraries, heavy raw image assets, CSS color conflicts in light mode, repetitive marketing banners, and an unstreamlined student practice journey.

**Key Rule:** Academic content is frozen and protected under cryptographic SHA-256 baseline hashes. No questions, syllabi, marks, or hours will be altered.

---

## 2. Tech Stack & Dependency Assessment

### Core Dependencies
- **Runtime Framework:** React 18.3.1 + React DOM 18.3.1
- **Build Tool:** Vite 5.4.14 (with `@vitejs/plugin-react` 4.3.4)
- **Styling:** Tailwind CSS 3.4.17 + PostCSS 8.5.3 + Autoprefixer 10.4.21
- **Animations:** Framer Motion 11.18.2
- **Icons:** Lucide React 0.511.0
- **Routing:** React Router DOM 6.30.1
- **3D Graphics (Current):** Three.js 0.173.0, `@react-three/fiber` 8.17.14, `@react-three/drei` 9.121.4

### Dependency Findings & Performance Bottlenecks
1. **Unnecessary 3D Canvas Overhead:**
   - Three.js and `@react-three` are bundled into a massive **840.14 kB chunk** (`dist/assets/three-*.js`), which accounts for **>60% of total JavaScript**.
   - This heavy dependency is currently used *only* for rendering a single decorative floating sphere and torus in `ThreeDBackgroundScene.jsx`.
   - On low-power budget mobile devices and cellular connections, this causes noticeable battery drain, memory pressure, and canvas thread blocking.
   - *Recommendation:* Replace the heavy WebGL canvas with high-performance, GPU-accelerated CSS 3D perspective cards and an optional lightweight 2D canvas/SVG ambient particle glow that respects `prefers-reduced-motion` and loads instantaneously.
2. **Unoptimized Static Media Assets:**
   - Raw photographic assets in `assets/teaching/` and `assets/projects/` range from 2.2 MB to 7.9 MB (e.g., `teaching8.jpg` is 7.96 MB, `teaching7.jpg` is 3.93 MB, `project5.jpg` is 3.74 MB).
   - In production, serving uncompressed multi-megabyte images impairs mobile First Contentful Paint (FCP) and Largest Contentful Paint (LCP).
   - *Recommendation:* Optimize and serve modern responsive WebP/compressed images with explicit dimensions and `loading="lazy"`.

---

## 3. Route Map & Student Journey Analysis

### Active Application Routes

| Path | Component | Purpose | Status |
|:---|:---|:---|:---|
| `/` | `HomePage` | Hero, quick actions, features, subjects preview, services, signature | Active |
| `/subjects` | `SubjectsPage` | Subject selection dashboard | Active |
| `/services` | `ServicesPage` | Academic project development & 1:1 training catalog | Active |
| `/iot` | `SubjectUnitsPage` (subjectId="iot") | IoT Diploma 5th Sem unit directory | Active |
| `/iot/unit/:unitId` | `UnitPage` (subjectId="iot") | Unit dashboard (Quiz, PYQ, Notes, Flashcards) | Active |
| `/iot/unit/1/long-questions` | `IotLongQuestionsPage` | Unit 1 long answer revision cards & flows | Active |
| `/software-engineering` | `SubjectUnitsPage` (subjectId="software-engineering") | Software Engineering dashboard | **Disabled** (Reopens next sem) |
| `/software-engineering/unit/:unitId` | `UnitPage` (subjectId="software-engineering") | SE Unit workspace | **Disabled** (Shows lockout card) |
| `/unit/:unitId` | `UnitPage` (subjectId="software-engineering") | Legacy alias route | **Disabled** (Preserved for backward compatibility) |
| `*` | `NotFoundPage` | 404 fallback | Active |

### Journey Walkthroughs & Friction Points Identified

1. **Student Journey: Landing to Practice**
   - *Path:* `Home` → `Subjects` → `IoT` → `Unit 1` → `PYQ Practice`
   - *Friction:* Students landing on the homepage are not given a direct 1-click shortcut to "Start Practice" or "IoT Unit 1 PYQs". Instead, they must scroll past multiple hero metrics and upskilling cards.
2. **Navigation Dead Ends & Link Suboptimalities:**
   - In `UnitPage.jsx` (line 211), the button linking to `/iot/unit/1/long-questions` is rendered as an external anchor `<a href="..." target="_blank">` rather than a React Router `<Link>`. This triggers a disruptive full-page reload and loses in-memory client state.
   - When viewing Software Engineering (`/software-engineering`), the disabled lockout card only offers buttons to "View Subjects" or "Continue With IoT". Direct deep-links to `/software-engineering/unit/1` render the lockout card, but with unstyled inline button styles rather than the design system's `<Button>` component.
   - The desktop navigation in `Navbar.jsx` contains too many competing buttons (Logo, 5 links, "Admission Open" glowing badge, ThemeToggle, Call button). On viewports between 1024px and 1200px, items can wrap awkwardly.
   - On mobile devices, there is no slide-out or full-height menu drawer; navigation items are in a horizontal scroll strip that truncates without clear visual affordance.

---

## 4. Academic Content Inventory & Protection Boundaries

### Cryptographic Baseline Verification
All 8 academic data files have been locked and hashed (see `CONTENT_LOCK.md`):
- `src/data/iotUnits.js` (6 Units, 67 Topics)
- `src/data/iotUnit1Quiz.js` (17 PYQs across Jan 2026, Dec 2024, Mar 2023)
- `src/data/iotLongAnswers.js` (8 structured long answers with visual flows)
- `src/data/units.js` (5 Software Engineering units with 2,370 lines of verified quizzes and cheat sheets)
- `src/data/services.js` (Academic project categories, domains, and contact endpoints)
- `src/data/careerUpskilling.js` (Hybrid training formats, course titles, outcome lines)

### Verification of IoT Units 1–6 Display Fields

| Unit ID | Title | Module | Hours | Marks | Topics | PYQs | Long Answers |
|:---:|:---|:---:|:---:|:---:|:---:|:---:|:---:|
| **1** | Unit 1: IoT | A | 10 | 10 | 9 topics | 17 | 8 |
| **2** | Unit 2: IoT Protocols | A | 14 | 14 | 16 topics | Empty | Empty |
| **3** | Unit 3: IoT Architecture | B | 10 | 10 | 10 topics | Empty | Empty |
| **4** | Unit 4: Web of Things | B | 10 | 10 | 7 topics | Empty | Empty |
| **5** | Unit 5: Arduino | C | 6 | 6 | 6 topics | Empty | Empty |
| **6** | Unit 6: IoT Applications | C | 10 | 10 | 9 topics | Empty | Empty |

### Content Anti-Hallucination Policy
- Units 2 through 6 have empty `pyqQuiz`, `completeQuiz`, and `cheatSheet` arrays.
- **Rule:** Under no circumstance will synthetic or AI-generated questions be added to these units. The application must render elegant, informative "Coming Soon" states until the educator provides authentic questions.

---

## 5. Component Architecture & Reusability Audit

### Reusable Components Found
- `Button.jsx`: Supports variants (`primary`, `secondary`, `outline`), sizes, and icons.
- `GlassCard.jsx`: Wrapper for translucent card styling with motion hover effects.
- `ThemeToggle.jsx`: Sun/Moon toggle for light/dark modes.
- `QuizPlayer.jsx`, `QuizProgress.jsx`, `QuizResult.jsx`: Handles sequential quiz playback, scoring, and percentage calculations.
- `CheatSheetView.jsx`: Renders key terms, summary points, and revision aside boxes.
- `TopicRevisionPanel.jsx`: Flashcard flip mechanism and topic-wise MCQ mini-quizzes.

### Inconsistencies & Duplication Found
1. **Raw Card Duplication:** Instead of using `<GlassCard>` uniformly, several pages use hardcoded `<div className="glass rounded-2xl p-6 sm:p-8">` with ad-hoc border and background styles.
2. **Button Styling Fragmentation:** In `UnitPage.jsx` and `SubjectUnitsPage.jsx`, multiple action buttons are coded as raw `<button className="...">` with custom gradients rather than using `<Button>`.
3. **Banner Saturation:** `CareerUpskillingBanner` is rendered in 4 different places across the user flow, diluting academic focus and feeling repetitive.
4. **Theme Override Fragility:** `src/styles/index.css` contains dozens of aggressive `!important` CSS rules targeting `html.light .text-white`, `html.light .text-slate-100`, etc. This leads to color conflicts whenever a component uses Tailwind utility classes.

---

## 6. Accessibility, SEO & Usability Audit

### Accessibility (WCAG 2.1 AA) Issues
1. **Low Contrast on Light Theme:**
   - In light mode, badges styled with `text-cyan-100` (#cffafe) or `text-accent` (#22d3ee) on white/light backgrounds fail the 4.5:1 WCAG contrast ratio for normal text.
   - Text colors need semantic tokens that resolve to deep ink/navy (#0f172a / #1e293b) in light mode and bright crisp slate (#f8fafc / #e2e8f0) in dark mode.
2. **Missing ARIA Attributes:**
   - The quiz timer toggle in `QuizPlayer.jsx` is an interactive toggle button without `aria-pressed`.
   - Radio buttons for quiz options lack an explicit `<fieldset>` and `<legend>` container for assistive screen readers.
3. **Motion Sensitivity:**
   - Continuous rotations and floating animations in Framer Motion do not query `useReducedMotion()`. Users with vestibular motion sensitivities should have animations disabled or substituted with simple crossfades.

### SEO & Performance Usability
- The `<title>` and `<meta name="description">` in `index.html` are static.
- Touch target sizes for some small pill badges are under 44px by 44px.

---

## 7. Unsupported Marketing Statements & Recommendations

Per Phase 01 Task 8, we identified the following unverified marketing claims in the codebase:

| Location | Existing String | Issue | Proposed Defensible Alternative (Pending Approval) |
|:---|:---|:---|:---|
| `HeroSection.jsx:17` | `'99.99% common-question focused prep'` | Unverified statistical claim; cannot guarantee exam appearance | `'High-probability common question focus'` or `'Exam-pattern focused preparation'` |
| `HeroSection.jsx:25` | `title: '99.99%'` | Prominent metric card displaying an unsupported percentage | `title: '100%'`, `label: 'Syllabus aligned with diploma examination guidelines'` |
| `HeroSection.jsx:50` | `'Get 99.99% common-question focused exam preparation'` | Guarantee-sounding marketing phrase | `'Structured revision covering high-frequency diploma exam topics'` |
| `SignatureSection.jsx:7` | `'100% Common Question Focus'` | Absolute percentage claim | `'Focused on Core & High-Frequency Exam Questions'` |

> **Action required:** These phrases are documented here for the user's explicit review and approval before making any text adjustments in Phase 04. No academic data is touched.

---

## 8. Proposed Architectural Plan Ranked by Risk

| Priority | Phase | Core Objectives | Risk Level | Mitigation Strategy |
|:---:|:---|:---|:---:|:---|
| **1** | **Phase 02** | Centralized Subject Registry, Scalable Content Architecture, Runtime Schema Validation | Low | Keep legacy data files completely untouched; build typed adapter layer with unit tests. |
| **2** | **Phase 03** | Premium Design System, CSS Variable Tokens, Accessible Floating 3D Cards, Streamlined Nav | Medium | CSS-driven depth without heavy WebGL; test WCAG contrast in both themes; mobile drawer. |
| **3** | **Phase 04** | Premium Student-First Landing Page, Quick Actions, Trust Section | Medium | Preserve mentor images and verified quotes; no fake student claims; eliminate Three.js canvas. |
| **4** | **Phase 05** | Subject Directory & Unit Detail Page (Overview, Notes, Quiz, PYQs, Cheat Sheets, Reels) | Medium | Preserve exact unit metadata (marks/hours/modules) and syllabus text; clean empty states. |
| **5** | **Phase 06** | Student Practice Interface (One question at a time, review mode, scoring, retry wrong answers) | Medium | Use only authentic questions from `iotUnit1Quiz.js` and `units.js`; no synthetic questions. |
| **6** | **Phase 07** | Cheat Sheets Reader View + Instagram Reels Library (authentic URLs only, external link-out) | Low | Filterable grid; Markdown template support; non-intrusive Instagram preview with privacy. |
| **7** | **Phase 08** | Full QA, Cross-Device Testing (360px–1440px), A11y Audit, Performance Report | Low | Full content parity verification against SHA-256 hashes; bundle size verification. |

---

## 9. Phase 01 Verification & Sign-off

- [x] Repository structure analyzed end-to-end.
- [x] Git baseline commit identified and backup branch `backup/pre-redesign-baseline` created.
- [x] Student journeys, routes, and dead ends mapped.
- [x] All 8 data files cryptographically hashed with SHA-256 and locked in `CONTENT_LOCK.md`.
- [x] Displayed IoT Units 1–6 hours/marks/modules and Software Engineering disabled state cataloged.
- [x] Reusable vs duplicated UI components identified.
- [x] Bundle size and Three.js overhead quantified.
- [x] Marketing statements flagged for user review.
- [x] No academic content modified, deleted, or regenerated.
- [x] No production deployment executed.

**Ready for Phase 02: Extensible Subject & Content Architecture upon user authorization.**

