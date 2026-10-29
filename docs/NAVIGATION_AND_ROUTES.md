# EduTech Route Map & Navigation Architecture

## 1. Route Map Overview

The application is structured around a streamlined, student-first navigation flow. All educational materials follow a logical hierarchy from overarching diploma subjects down to specific unit topics and revision sheets.

### 1.1 Registered Application Routes

| Path | Component | Description | Access Policy |
| :--- | :--- | :--- | :--- |
| `/` | `HomePage.jsx` | Hero with 3D study stack, quick actions, syllabus overview, and mentor credentials | Public |
| `/subjects` | `SubjectsPage.jsx` | Full curriculum catalog (Active IoT and Locked Software Engineering) | Public |
| `/iot` | `SubjectUnitsPage.jsx` | Internet of Things subject portal with 6 units & unit-wise cheat sheets | Active Subject |
| `/iot/unit/:unitId` | `UnitPage.jsx` | Deep unit workspace (Overview, Notes, PYQs, MCQs, Cheat Sheets, Reels) | Active Subject |
| `/iot/unit/1/long-questions` | `IotLongQuestionsPage.jsx` | 8 structured long questions with visual step flows for Unit 1 | Active Subject |
| `/software-engineering` | `SubjectUnitsPage.jsx` | Software Engineering overview with 5 units & 37 locked cheat sheets | Visibly Locked ("Reopens Next Semester") |
| `/software-engineering/unit/:unitId` | `UnitPage.jsx` | Disabled subject guard page preventing accidental route bypass | Blocked / Redirect CTA |
| `/practice` | `PracticePage.jsx` | Interactive objective quiz hub with Practice & Timed Exam modes | Public |
| `/reels` | `ReelsPage.jsx` | 60-second micro-learning video library & instructor filming schedule | Public |
| `/services` | `ServicesOverview.jsx` | Final-year capstone project guidance & 1-on-1 viva assistance | Public |
| `/cheat-sheets` | `<Navigate to="/subjects" replace />` | Backward-compatibility redirect enforcing hierarchical access | Redirects to `/subjects` |
| `*` | `<Navigate to="/" replace />` | Catch-all 404 safety redirect | Redirects to `/` |

---

## 2. Desktop Navigation Architecture

The desktop navbar is intentionally focused to prevent overcrowding:

```
[ EduTech Brand Icon + Typography ]  ---  [ Home | Subjects | Practice | Reels | Services ]  ---  [ Admissions Open | Theme Toggle | Contact ]
```

### 2.1 Navbar Sections
1. **Left (Brand Identity):**
   - Original educational brand icon: Minimal `GraduationCap` enclosed in an elevated gradient badge with a pulsing cyan indicator.
   - Typography: Bold `EduTech` title with sub-caption `Diploma Learning Hub`.
2. **Centre (Exactly 5 Core Links):**
   - **Home** (`/`)
   - **Subjects** (`/subjects`)
   - **Practice** (`/practice`)
   - **Reels** (`/reels`)
   - **Services** (`/services`)
   - Animated pill highlight (`layoutId="desktop-nav-active"`) tracks the current route smoothly using Framer Motion springs.
3. **Right (Actions & Status):**
   - **Admissions Status Pill:** `Admissions Open` indicator with pulsing emerald badge.
   - **Theme Toggle:** Sun/Moon toggle with smooth rotation transition.
   - **Contact CTA:** Direct link to telephone/WhatsApp support (`+91 72782 39699`).

---

## 3. Mobile Drawer Navigation

On viewports below `1024px` (tablets and mobile phones):
- The central navigation is collapsed into a clean hamburger button with an accessible `min-h-[44px] min-w-[44px]` touch target.
- Clicking the hamburger opens an animated slide-out drawer from the right.
- **Scroll Lock:** Background body scrolling is automatically disabled (`document.body.style.overflow = 'hidden'`) while the drawer is active.
- **Drawer Contents:**
  - Active Admissions status banner (`Admissions Going On • Batch 2026`).
  - Core navigation links with icons and active state highlights.
  - Quick subject shortcuts (IoT 5th Sem active badge, SE locked status).
  - Direct WhatsApp and Call buttons for instant student support.

---

## 4. Cheat Sheets Hierarchy (Critical Structural Change)

Per user specifications, **cheat sheets are not a standalone top-level route in the main navigation**. 
Instead, cheat sheets are strictly scoped to the curriculum hierarchy:

$$\text{Subjects} \longrightarrow \text{Selected Subject} \longrightarrow \text{Selected Unit} \longrightarrow \text{Cheat Sheets}$$

### 4.1 Internet of Things (Active Subject)
- Students navigate to **Subjects** $\to$ **Internet of Things** (`/iot`).
- Below the units grid, a dedicated **Unit-Wise Exam Cheat Sheets** section (`/iot#cheat-sheets`) displays cards for Units 1 through 6.
- Clicking any cheat sheet card routes directly to the unit's cheat sheet tab: `/iot/unit/:unitId?tab=cheat-sheet`.

### 4.2 Software Engineering (Locked Subject)
- Navigating to `/software-engineering` displays the lockout screen: **"Reopens Next Semester"**.
- Below the locked units, all **37 authentic Software Engineering cheat sheets** (Units 1 to 5) are listed unit-by-unit in a dedicated summary section.
- Each cheat sheet card clearly indicates `Locked • Reopens Next Sem`, with clickable entry disabled to preserve academic calendar integrity.
- Direct URL entry to `/software-engineering/unit/1` is intercepted by the `subject.disabled` guard in `UnitPage.jsx`, displaying a polite locked banner and preventing bypass.

---

## 5. Breadcrumb Navigation System

Every deep learning page implements structured breadcrumb navigation for spatial orientation:
- **Unit Page:** `Home / Subjects / Internet of Things / Unit X: Title`
- **Practice Page:** `Home / Subjects / Practice Hub`
- **Reels Page:** `Home / Study Reels`
- **Long Questions Page:** `Home / Subjects / Internet of Things / Unit 1 / Long Answers`

