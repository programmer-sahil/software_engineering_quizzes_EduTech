# Developer Guide: Adding New Subjects & Units

## 1. Single Source of Truth Architecture

In the initial version of the codebase, subjects and units were coupled directly to hardcoded React pages (`IotUnitsPage.jsx`, `SoftwareEngineeringPage.jsx`). 
Under the modern architecture, all curriculum items are registered in a **single centralized registry**:

- **Subject Registry:** `src/content/registry.js`
- **Data Models & Types:** `src/content/types.js`
- **Schema Validators:** `src/content/validators.js`

Adding a new subject or expanding an existing one requires **zero modifications to page routing or JSX templates**. The application automatically queries the registry to build cards, unit listings, practice filters, and breadcrumbs.

---

## 2. Subject Registration Schema

To register a subject, define an object adhering to the `SubjectDefinition` schema:

```javascript
{
  id: 'cn',                                   // Unique lowercase slug used in URLs (e.g. /cn)
  title: 'Computer Networks',                 // Concise subject title
  name: 'Diploma in Computer Networks',       // Full curriculum diploma name
  code: 'CST-502',                            // State council subject code
  semester: '5th Semester',                   // Target academic semester
  stream: 'Computer Science & Technology',    // Engineering branch
  icon: 'Network',                            // Lucide icon identifier
  status: 'active',                           // 'active' | 'coming_soon' | 'draft' | 'archived'
  disabled: false,                            // Boolean: true disables route access and shows locked banner
  disabledLabel: null,                        // e.g. 'Reopens next semester' if disabled
  disabledMessage: null,                      // Custom explanation for lockout banner
  aim: 'To provide foundational understanding of packet-switched networking, OSI layers, and TCP/IP.',
  courseObjectives: 'Understand IP addressing, subnetting, routing algorithms, and transport protocols.',
  unitRouteBase: '/cn/unit',                  // Base URL prefix for unit detail routes
  units: [ /* Array of UnitDefinition objects */ ]
}
```

---

## 3. Unit Registration Schema

Each subject contains an array of units:

```javascript
{
  id: 1,                                      // Numeric or string unit ID (1, 2, 3...)
  title: 'Network Models & Physical Layer',   // Full unit heading
  shortTitle: 'OSI & Physical',               // Compact label for pills and tabs
  module: 'A',                                // Council exam module ('A', 'B', 'C')
  hours: 10,                                  // Official council lecture hours
  marks: 10,                                  // Official exam marks weightage
  summary: 'Layered architectures, ISO-OSI 7 layer reference model, TCP/IP protocol suite.',
  description: 'Detailed unit overview explaining transmission media and physical signaling.',
  topics: [                                   // Array of authentic syllabus topics
    'Introduction to Computer Networks',
    'Network Topologies: Mesh, Star, Bus, Ring',
    'OSI Reference Model vs TCP/IP Suite',
    'Transmission Media: Guided vs Unguided',
    'Physical Layer Modulation & Encoding'
  ],
  pyqQuiz: [],                                // Array of authentic previous-year questions
  completeQuiz: [],                           // Array of practice MCQs
  cheatSheet: [],                             // High-retention revision summaries
  topicRevision: [],                          // Flashcards and mini-quizzes
  placeholders: {
    pyqQuiz: 'Official 2026 and 2024 questions will be uploaded after council review.',
    reels: '60-second video on subnetting is in production.'
  }
}
```

---

## 4. Step-by-Step Walkthrough: Adding a Subject

### Step 1: Create the Subject Data File
Create a new file in `src/data/` or `src/content/subjects/`, for example `src/data/computerNetworksUnits.js`:

```javascript
export const computerNetworksUnits = [
  {
    id: 1,
    title: 'Introduction to Data Communication',
    module: 'A',
    hours: 10,
    marks: 10,
    summary: 'Components of data communications, protocols and standards, topologies.',
    topics: [
      'Components of Data Communication',
      'Data Representation & Direction of Data Flow',
      'Networks & Network Topologies',
      'Protocols and Standards'
    ],
    pyqQuiz: [],
    completeQuiz: []
  }
];
```

### Step 2: Register in `src/content/registry.js`
Import the new units and register the subject in the registry:

```javascript
import { computerNetworksUnits } from '../data/computerNetworksUnits';

registerSubject({
  id: 'cn',
  title: 'Computer Networks',
  name: 'Computer Networks (Diploma CST)',
  semester: '5th Semester',
  stream: 'Computer Science & Technology',
  icon: 'Network',
  status: 'active',
  disabled: false,
  unitRouteBase: '/cn/unit',
  units: computerNetworksUnits,
});
```

### Step 3: Add Dynamic Route Support in `src/App.jsx`
If the subject uses custom route paths, add the route in `src/App.jsx`:

```jsx
<Route path="/cn" element={<SubjectUnitsPage subjectId="cn" />} />
<Route path="/cn/unit/:unitId" element={<UnitPage subjectId="cn" />} />
```

### Step 4: Run Content Parity & Schema Tests
Run the automated test runner to ensure schema compliance:

```bash
npm run test:parity
```
The validator will automatically verify that all IDs, titles, hours, and modules meet council specifications.

