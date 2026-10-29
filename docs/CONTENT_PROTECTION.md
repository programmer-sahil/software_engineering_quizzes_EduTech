# Content Protection & Cryptographic Integrity Protocol

## 1. Overview & Non-Negotiable Directives

EduTech serves diploma engineering students studying for state council (WBSCTE) board examinations. The platform enforces strict **content protection rules**:
1. **Never Modify Existing Academic Content:** All chapter syllabus texts, lecture hours, exam marks, module allocations, long answers, and question solutions must remain unchanged.
2. **Zero Hallucination / Anti-Fabrication Guarantee:** Never invent, rewrite, or synthesize artificial quiz questions, mock test scores, or non-existent video links. If questions or videos have not been published by the instructor, the system must render an honest, transparent **"Questions Coming Soon"** empty state.
3. **Software Engineering Locked State:** Software Engineering study materials must remain safely preserved on disk, but the subject status must remain disabled for the current semester with the clear notice **"Reopens Next Semester"**.

---

## 2. Cryptographic SHA-256 Content Freeze

To ensure that redesign work and future development never inadvertently alter academic content, EduTech incorporates an automated SHA-256 checksum lock over all legacy data files.

### 2.1 Monitored Content Baseline Files

| File Path | Baseline SHA-256 Hash | Protected Content |
| :--- | :--- | :--- |
| `src/data/careerUpskilling.js` | `fca1f751594cb745cce6178c5ba9354e6378e90fe0cf972a9e5250484bfeb372` | 4 career tracks, course modules, outcomes |
| `src/data/iotLongAnswers.js` | `115333ddcca18e692a8848a60f9bb1c8a149a42cf8967b5e43a63a56cf9937ba` | 8 structured long answers, diagrams, visual flows |
| `src/data/iotUnit1Quiz.js` | `fed8429eb62d85208035fb54254471f49fa728c734563a3ca7e9a8f4c478a873` | 17 verified past-paper questions (Jan 2026, Dec 2024, Mar 2023) |
| `src/data/iotUnits.js` | `8f178c972cbb092feff497c6533f0bbcb4f55f30e6ef581ea1cc9b2518f8fa36` | IoT Units 1–6 syllabus, hours, marks, modules, topic lists |
| `src/data/services.js` | `8e8c0e12735d4fa552787e6fa39f5c225018a385f096ae5800ca26084666f2c3` | Final-year projects, viva preparation, WhatsApp links |
| `src/data/softwareEngineeringUnits.js`| `097cc84a32bb3ebef2275b22b1029e924d521ae540e137452d3a9d90ec8fc290` | Software Engineering 5 units curriculum & topics |
| `src/data/subjects.js` | `d948b1ddd79ecdbdb27e57c67beea590d6e6443c683b5443fa38fb654b17e4bb` | Subject definitions, semesters, credit hours, status |
| `src/data/units.js` | `c613d748f8cfa40a33a3fc7aa4600122e232b704c7755e37344933a39e3ec8b9` | Brand constants, instructor contacts, 37 SE cheat sheets |

---

## 3. Verified Curriculum Numbers & Metrics

The application dynamically computes curriculum metrics from authentic data sources rather than hardcoding static text:

### 3.1 Internet of Things (Active - 5th Semester)
- **Total Units:** Exactly **6 Units**
- **Total Topics:** Exactly **57 Topics** (Unit 1: 9, Unit 2: 16, Unit 3: 10, Unit 4: 7, Unit 5: 6, Unit 6: 9)
- **Total Lecture Hours:** Exactly **60 Hours** (10 + 14 + 10 + 10 + 6 + 10)
- **Total Exam Marks:** Exactly **60 Marks** (10 + 14 + 10 + 10 + 6 + 10)
- **Verified PYQs:** Exactly **17 Questions** (Unit 1 only)
- **Long Questions:** Exactly **8 Articles** (Unit 1 only)
- **Units 2 to 6:** Zero synthetic questions. All render transparent **"Questions Coming Soon"** empty states.

### 3.2 Software Engineering (Locked - 4th Semester)
- **Total Units:** Exactly **5 Units**
- **Cheat Sheets:** Exactly **37 Cheat Sheets** (Unit 1: 4, Unit 2: 8, Unit 3: 9, Unit 4: 8, Unit 5: 8)
- **Status:** Locked (`disabled: true`, `disabledLabel: 'Reopens next semester'`)

---

## 4. Automated Content Parity Test Suite

To run the automated content verification suite:

```bash
npm run test:parity
```

### What the Test Suite Checks (120 Assertions):
1. **SHA-256 File Checksums:** Verifies that no bytes in `src/data/*.js` have drifted.
2. **Registry Integrity:** Confirms exactly 1 active subject (`iot`) and 1 disabled subject (`software-engineering`).
3. **Unit Metadata Match:** Validates hours, marks, council modules, and topic counts for Units 1 through 6.
4. **Authentic Question Normalization:** Confirms all 17 questions in Unit 1 map to valid option indices and maintain authentic explanations without synthetic text.
5. **Cheat Sheet & Reel Validation:** Confirms all 37 Software Engineering cheat sheets are indexed and that reel URLs strictly validate against verified Instagram patterns.

