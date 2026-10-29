# EduTech Content Lock & Parity Baseline

**Status:** ACTIVE & IMMUTABLE  
**Audit Date:** October 29, 2026  
**Git Baseline Commit:** `495008f2e2e64be0317dfdf0d53c64122868c646`  
**Baseline Backup Branch:** `backup/pre-redesign-baseline`  

---

## 1. Non-Negotiable Content Protection Policy

1. **Academic Content Inviolability:**
   - No chapter syllabus, study notes, explanations, MCQ or PYQ questions, answer choices, correct answers, or explanation text may be deleted, truncated, paraphrased, rewritten, or silently "fixed".
   - Educational content must remain verbatim.
2. **IoT Units 1–6 Structural Freeze:**
   - All 6 Diploma 5th Semester Internet of Things units must preserve their exact title, module, marks, hours, syllabus topics, and long-answer links.
3. **Software Engineering Status Preservation:**
   - Software Engineering (Diploma 4th Semester) must remain visible in navigation, subject listings, and cards, but firmly disabled (`disabled: true`) with the notice that it reopens next semester.
4. **Authenticity Guarantee (Anti-Hallucination Policy):**
   - Empty sections (e.g. MCQs for Units 2–6, cheat sheets, or reels) must display clean, honest "Coming Soon" states.
   - **Under no circumstances should fake, AI-generated, or synthetic questions/PYQs/reels be generated to fill empty categories.** The instructor will supply authentic questions and links in subsequent phases.
5. **Contact and Functional Parity:**
   - All existing phone numbers, WhatsApp contact numbers, and URLs must remain functional and unmodified.

---

## 2. Cryptographic Content Hashes (SHA-256 Baseline)

The following hashes represent the exact state of all educational and configuration data files prior to any redesign work:

| File Path | SHA-256 Checksum | Description |
|:---|:---|:---|
| `src/data/careerUpskilling.js` | `fca1f75159983670bc21ef31a3c2249a5bb052f11a1072b4039772e0b32144ed` | Career & upskilling training details and WhatsApp contact |
| `src/data/iotLongAnswers.js` | `115333ddcc42f882d8b0eeaea7b5958bab7619cd5acf97d01fabc446f64bd051` | 8 structured long answers with visual flows, intros, bullets, conclusions |
| `src/data/iotUnit1Quiz.js` | `fed8429eb6aa2953cb5a46f77cf58ae950974b409c5cd048bdb1e1c58ad96bf5` | 17 verified PYQ MCQs (Jan 2026, Dec 2024, Mar 2023) |
| `src/data/iotUnits.js` | `8f178c972c24b52031dea2e6595f5e0d890d87f48fe75ad06b24cb72c9ab1ecf` | IoT Units 1–6 metadata, syllabus topics, topic revisions |
| `src/data/services.js` | `8e8c0e12737e4999828d6a6842daaea5227bb0a7d8cdf1344e864a55daef01d0` | Project domains, academic project categories, why projects matter, contacts |
| `src/data/softwareEngineeringUnits.js` | `097cc84a321b3bd024d0b0f9b624b07a1fd8cd4dad47e774d3b7edc823438d29` | Re-export bridge for Software Engineering units |
| `src/data/subjects.js` | `d948b1ddd7f4165a9f1322bf189d875eb1dad94b17ec441220ed4cfd4669fac2` | Subject registry (Software Engineering + Internet of Things) |
| `src/data/units.js` | `c613d748f84a010d3bf0cf2758cb8947932a7f1bf45f011f0bd22cbf99b0bb04` | Brand constants + complete Software Engineering Units 1–5 data |

---

## 3. Academic Inventory Breakdown

### A. Internet of Things (Diploma 5th Sem CST)

- **Aim:** Develop basic concepts of IoT and its applications.
- **Course Objectives:** Verbatim syllabus text introducing basics, protocols, applications, middleware, and Web of Things.

| Unit # | Unit Title | Module | Hours | Marks | Topics Count | PYQs Present | Long Answers Present | Topic Revision Flashcards/MCQs |
|:---|:---|:---|:---:|:---:|:---:|:---:|:---:|:---:|
| **Unit 1** | Unit 1: IoT | Module A | 10 | 10 | 9 topics | 17 questions | 8 long answers | 9 topics (27 flashcards, 27 MCQs) |
| **Unit 2** | Unit 2: IoT Protocols | Module A | 14 | 14 | 16 topics | 0 (Coming Soon) | 0 (Coming Soon) | 16 topics (48 flashcards, 48 MCQs) |
| **Unit 3** | Unit 3: IoT Architecture | Module B | 10 | 10 | 10 topics | 0 (Coming Soon) | 0 (Coming Soon) | 10 topics (30 flashcards, 30 MCQs) |
| **Unit 4** | Unit 4: Web of Things | Module B | 10 | 10 | 7 topics | 0 (Coming Soon) | 0 (Coming Soon) | 7 topics (21 flashcards, 21 MCQs) |
| **Unit 5** | Unit 5: Arduino | Module C | 6 | 6 | 6 topics | 0 (Coming Soon) | 0 (Coming Soon) | 6 topics (18 flashcards, 18 MCQs) |
| **Unit 6** | Unit 6: IoT Applications | Module C | 10 | 10 | 9 topics | 0 (Coming Soon) | 0 (Coming Soon) | 9 topics (27 flashcards, 27 MCQs) |

### B. Unit 1 Verified Previous Year Questions (PYQs)

Total Questions: **17**
- **Jan 2026:** 6 questions (`iot-u1-001` through `iot-u1-006`)
- **Mar 2023:** 7 questions (`iot-u1-007` through `iot-u1-013`)
- **Dec 2024:** 4 questions (`iot-u1-014` through `iot-u1-017`)

All 17 questions include:
- Official examination session tag (`pyq`)
- Verified question text
- 4 multiple-choice options
- Verified answer text
- Pedagogical explanation

### C. Unit 1 Important Long Answers (`unit1LongAnswers`)

Total Items: **8**
1. `what-is-iot`: "What is IoT? Explain why IoT is important." (Flow: Thing → Sensor → Internet → Cloud/App → Action)
2. `iot-ecosystem-components`: "Explain the elements/components of an IoT ecosystem." (Flow: Sensors → Actuators → Device → Network → Cloud → User)
3. `technology-business-drivers`: "Explain technology drivers and business drivers of IoT." (Flow: Low-cost sensors → Internet → Cloud → AI/Data → Productivity)
4. `privacy-security-issues`: "Explain privacy and security issues in IoT." (Flow: Data → Device → Network → Cloud → User)
5. `sensing-actuation`: "Explain sensing and actuation in IoT with examples." (Flow: Sensor reads → Data processed → Command sent → Actuator acts)
6. `trends-implications`: "Explain trends and implications of IoT." (Flow: Home → City → Industry → Health → Agriculture → Vehicles)
7. `governance-in-iot`: "Explain governance in IoT." (Flow: Data → Privacy → Security → Standards → Risk)
8. `short-notes`: "Write short notes on IoT ecosystem, sensing, actuation, and IoT security." (Flow: Ecosystem → Sensing → Actuation → Security)

### D. Software Engineering (Diploma 4th Sem CST)

- **Status:** `disabled: true`
- **Label:** `Reopens next semester`
- **Units:** 5 complete units preserved in `src/data/units.js` (2370 lines) containing complete quizzes, PYQs, and cheat sheets for Units 1–5.

### E. Professional Contacts & Admissions

- **Brand Contact (Phone):** `+91 72782 39699`
- **Services Phone:** `+91 8583058673`
- **WhatsApp Direct:** `918583058673`
- **Admissions Banner:** "Quality Teaching & Admission is going on", "Diploma teaching for every department", "Highly qualified teachers available"
- **Author Identity:** SK SAHIL, Freelance AI Developer & Coding Tutor

