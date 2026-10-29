# EduTech Long Questions Architecture & Future Publishing Manual

## 1. Current State & Policy

In compliance with **Step 5** instructions:
- **No long questions or answers are currently published to students.**
- Every IoT unit page features a dedicated **Long Questions** tab that displays:
  > **“Long questions and concise answers will be added soon.”**
- All pre-existing long-answer texts in `src/data/iotLongAnswers.js` and in Section B of `docs/iot/Unit_*_*.md` are **strictly preserved on disk** without modification or deletion.

---

## 2. Source Long-Answer Material on Disk

The repository contains raw long-answer material safely archived in Section B of each unit's Markdown file:

| Unit | Title | Section B Items | Exam Sessions Referenced | Status |
| :---: | :--- | :---: | :--- | :---: |
| **1** | Introduction to IoT | 8 Long Questions | Mar 2023, Jan 2024, Dec 2024, Jan 2026 | Preserved (Unpublished) |
| **2** | IoT Protocols | 8 Long Questions | Mar 2023, Jan 2024, Dec 2024, Jan 2026 | Preserved (Unpublished) |
| **3** | IoT Architecture | 6 Long Questions | Mar 2023, Jan 2024, Dec 2024 | Preserved (Unpublished) |
| **4** | Web of Things (WoT) | 5 Long Questions | Jan 2024, Dec 2024, Jan 2026 | Preserved (Unpublished) |
| **5** | Arduino | 5 Long Questions | Mar 2023, Jan 2024, Dec 2024, Jan 2026 | Preserved (Unpublished) |
| **6** | IoT Applications | 7 Long Questions | Mar 2023, Jan 2024, Dec 2024, Jan 2026 | Preserved (Unpublished) |
| **TOTAL** | **All 6 Units** | **39 Long Questions** | **WBSCTE Group B** | **Ready for Review** |

---

## 3. Future Long-Question Data Schema

When authorized to publish long questions, each question must follow this structured schema:

```javascript
{
  id: "iot-u1-lq1",
  unitId: 1,
  title: "Define IoT. Explain its main characteristics and advantages.",
  marks: 10,                                  // Typical exam mark weightage (5, 8, or 10 marks)
  module: "A",                                // Council exam module
  examSessions: ["Mar 2023", "Jan 2026"],     // Verified Group B paper sessions
  definition: "IoT is a network of physical objects fitted with sensors, software and connectivity to collect and exchange data.",
  points: [
    {
      heading: "Core Characteristics",
      bullets: [
        "Dynamic global network infrastructure with self-configuring capabilities.",
        "Physical and virtual 'things' have identities, physical attributes and virtual personalities.",
        "Interoperability based on standard communication protocols."
      ]
    },
    {
      heading: "Key Advantages",
      bullets: [
        "Minimizes human labor and automates routine decisions.",
        "Real-time monitoring improves asset safety and operational visibility.",
        "Predictive analytics reduces downtime and operational expenses."
      ]
    }
  ],
  visualFlow: {                               // Optional step flow diagram
    title: "IoT Data Flow",
    steps: ["Physical Sensor", "Microcontroller / Edge Gateway", "Cloud Platform", "User Dashboard / Actuator"]
  },
  conclusion: "IoT bridges the physical and cyber worlds to deliver intelligent, automated decision-making."
}
```

---

## 4. Reusable Frontend Component

The placeholder component is implemented in:
- `src/components/LongQuestionsPlaceholder.jsx`

### Props Accepted:
- `unit`: Current unit object (`id`, `title`, `module`, `hours`, `marks`).
- `onSwitchToQuiz`: Callback to switch to the `PYQ MCQ Quiz` tab.
- `onSwitchToCheatSheet`: Callback to switch to the `Cheat Sheets` tab.

---

## 5. How to Publish Long Questions Later

When the instructor authorizes releasing long answers:
1. Validate the concise answers against the official board syllabus.
2. Populate the unit's `longAnswers` array in `src/content/adapters/legacyAdapter.js` (or import from `src/content/longQuestions.js`).
3. In `src/pages/UnitPage.jsx`, conditionally render the full question reader if `unit.longAnswers?.length > 0`:
   ```jsx
   {activeTab === 'long-questions' && (
     unit.longAnswers?.length > 0 ? (
       <LongQuestionsViewer questions={unit.longAnswers} />
     ) : (
       <LongQuestionsPlaceholder unit={unit} onSwitchToQuiz={() => handleTabChange('pyq-quiz')} />
     )
   )}
   ```
4. Zero routing modifications or URL changes are needed.
