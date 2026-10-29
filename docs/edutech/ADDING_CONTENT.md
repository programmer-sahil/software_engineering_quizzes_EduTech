# EduTech Content Authoring Guide

> Add new subjects, units, notes, MCQs, PYQs, cheat sheets, and Instagram Reels in **less than 10 straightforward steps** without touching UI components.

---

## 1. Quick Content Architecture Overview

All content is managed through the single source-of-truth **Subject Registry** in `src/content/registry.js`.
- **Active subjects:** Fully interactive for students (e.g. IoT).
- **Disabled subjects:** Kept visible with locked indicators (e.g. Software Engineering).
- **Coming soon subjects:** Visible with "Coming Soon" badge.
- **Draft subjects:** Kept in internal drafts; never published to students.
- **Pure Data Configuration:** Adding or updating content requires **zero changes** to React page components.

---

## 2. Step-by-Step Instructions

### Step 1: Prepare Your Authentic Curriculum Data
- Never use fake or AI-generated exam questions or unverified PYQs.
- Collect official course objectives, syllabus topics, hours, marks, and module letters (`A`, `B`, `C`).

### Step 2: To Add a New Subject
Open or create a config file in `src/content/` and register it using `registerSubject()`:
```javascript
import { registerSubject, ContentStatus } from './content';

registerSubject({
  id: 'cloud-computing',
  slug: 'cloud-computing',
  title: 'Cloud Computing & DevOps',
  shortTitle: 'Cloud',
  semester: 'Diploma 6th Semester',
  stream: 'Computer Science & Technology',
  description: 'Study cloud deployment, virtualization, microservices, and Docker.',
  status: ContentStatus.COMING_SOON, // or ContentStatus.ACTIVE
  visibleOrder: 3,
  icon: 'cloud',
  units: [] // Populate using Step 3
});
```

### Step 3: To Add a Unit to a Subject
Add the unit object into the subject's `units` array:
```javascript
{
  id: '1',
  unitNumber: 1,
  title: 'Unit 1: Introduction to Cloud',
  hours: 10,
  marks: 10,
  module: 'A',
  description: 'Cloud fundamentals, NIST model, IaaS, PaaS, SaaS.',
  topics: ['NIST Cloud Model', 'IaaS vs PaaS vs SaaS', 'Public vs Private Cloud'],
  completeQuiz: [], // Empty initially
  pyqQuiz: [],      // Empty initially
  cheatSheet: [],
  reels: [],
  placeholders: {
    completeQuiz: 'Quiz questions will be added soon.',
    pyqQuiz: 'PYQ questions will be added soon.',
    cheatSheet: 'Cheat sheet notes will be added soon.',
    reels: 'Topic Instagram reels will be added soon.'
  }
}
```

### Step 4: To Add Practice MCQs
Append validated question objects to `unit.completeQuiz`:
```javascript
{
  id: 'cc-u1-mcq-001',
  question: 'Which cloud service model provides virtualized computing infrastructure over the internet?',
  options: ['IaaS', 'PaaS', 'SaaS', 'FaaS'],
  correctAnswer: 0, // 0-based index matching options[0] ('IaaS')
  explanation: 'IaaS (Infrastructure as a Service) delivers compute, storage, and networking resources.',
  sourceType: 'practice',
  status: 'published'
}
```

### Step 5: To Add Previous Year Questions (PYQs)
Append validated question objects to `unit.pyqQuiz` (only with authentic provenance):
```javascript
{
  id: 'cc-u1-pyq-001',
  pyq: 'Dec 2025 Q1(ii)',
  year: 'Dec 2025',
  question: 'In the NIST cloud model, on-demand self-service means ______.',
  options: [
    'Provisioning resources automatically without human interaction with service provider',
    'Calling customer care to start a server',
    'Waiting 24 hours for cloud access',
    'Using only local storage'
  ],
  correctAnswer: 0,
  explanation: 'On-demand self-service allows consumers to unilaterally provision computing capabilities.',
  sourceType: 'pyq',
  status: 'published'
}
```

### Step 6: To Add a Cheat Sheet
Add structured revision cards to `unit.cheatSheet`:
```javascript
{
  id: 'cc-u1-cs-nist',
  heading: 'NIST Cloud Computing Characteristics',
  keyTerms: ['On-Demand', 'Broad Network Access', 'Resource Pooling', 'Rapid Elasticity', 'Measured Service'],
  points: [
    'On-demand self-service enables automated provisioning.',
    'Broad network access provides standard device compatibility.',
    'Resource pooling serves multiple consumers via multi-tenant models.'
  ],
  quickBox: 'Remember the 5 essential characteristics for 5-mark short notes.'
}
```

### Step 7: To Add an Instagram Reel
Add an authentic Instagram Reel URL to `unit.reels`:
```javascript
{
  id: 'reel-cloud-nist-01',
  platform: 'instagram',
  title: '5 NIST Cloud Characteristics in 60 Seconds',
  url: 'https://www.instagram.com/reel/YOUR_AUTHENTIC_REEL_ID/',
  topics: ['NIST Cloud Model', 'Cloud Characteristics'],
  description: 'Quick memory hook for the 5 NIST cloud characteristics.',
  status: 'published'
}
```

### Step 8: Verify Content Integrity & Parity
Run the automated validation and parity test:
```bash
npm run test:parity
```
All 70+ checks must report `PASS`. If an answer index is out of bounds, an ID is duplicated, or an URL is malformed, the validator will output the exact file and field to fix.

### Step 9: Verify the Production Build
Confirm that the build succeeds without warnings:
```bash
npm run build
```

---

## 3. Content Rules to Remember
1. **Never fabricate PYQ sessions:** Mark unsourced questions as `sourceType: 'practice'`, never `sourceType: 'pyq'`.
2. **Leave empty sections clean:** Empty arrays automatically render elegant "Coming Soon" states. Never generate synthetic questions to fill blank units.
3. **Draft Safety:** Set `status: 'draft'` to keep unverified work invisible to students until proofread.

