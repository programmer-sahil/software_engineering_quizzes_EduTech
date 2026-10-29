# Guide: Adding and Updating IoT Long Questions

This guide explains how educators and developers can add new descriptive questions, update model answers, link verified examination years, and maintain the EduTech Long Questions architecture without modifying UI components.

---

## 1. Architectural Philosophy

1. **Single Source of Truth:** All descriptive long questions are managed in `src/content/iotLongQuestions.js`.
2. **Zero UI Hardcoding:** The UI dynamically calculates question counts, filter options, and available examination years. Adding a valid question record automatically surfaces it in the Unit Page, Browse Mode, and Self-Practice Mode.
3. **Verified Academic Integrity:** Never assign an examination year unless verified against an official paper. Questions created to fill syllabus gaps must be designated as `type: 'Practice'`.

---

## 2. Long Question Data Schema

Every long question record must follow this JavaScript object specification:

```javascript
{
  id: 'iot-uX-lqY',               // String: Unique slug (e.g. 'iot-u1-lq9')
  subjectId: 'iot',               // String: Subject identifier ('iot')
  unitId: 1,                      // Number: Unit number (1 to 6)
  questionNumber: 9,              // Number: Sequential unit question number
  title: 'Explain...',            // String: Exact exam question prompt
  type: 'PYQ',                    // String: 'PYQ' | 'Practice'
  years: ['Dec 2024'],            // Array<String>: Verified sessions (empty if Practice)
  marks: 6,                       // Number: Exam marks weightage (typically 4, 5, 6, 8, 10)
  category: 'Fundamentals',       // String: Topic classification
  sourceFile: 'docs/iot/...',     // String: Source Markdown path
  
  // Concise Model Answer Structure
  definition: '...',              // String: 1–2 sentence crisp definition
  keyPoints: [                    // Array<String>: 3–5 short bullet points
    'Point 1: ...',
    'Point 2: ...',
    'Point 3: ...'
  ],
  example: '...',                 // String: One simple real-world application
  
  // Optional Visual Diagram / Flow
  visualFlow: {                   // Optional Object: Step flowchart
    title: 'Flow Title',
    steps: ['Step 1', 'Step 2', 'Step 3']
  },
  
  // Optional Code Snippet
  codeSnippet: '...',             // Optional String: C++ or Python code
  
  // Exam Takeaway / Conclusion
  conclusion: '...'               // String: 1-sentence wrap-up for high exam marks
}
```

---

## 3. Step-by-Step: Adding a New Question

### Step 3.1: Document in Markdown
Add the question under `Section B` of the corresponding unit Markdown file in `docs/iot/`:
```markdown
### Long Q9. What is LoRaWAN? Explain its network architecture.
**PYQ — Jan 2026**

**Definition:** LoRaWAN is a Low Power Wide Area Network (LPWAN) protocol designed for wireless battery-operated devices.

**Key Points:**
- Star-of-stars topology.
- Long range up to 15 km in rural areas.
- Operates on sub-GHz ISM bands (868 MHz / 915 MHz).
```

### Step 3.2: Add to `src/content/iotLongQuestions.js`
Append the new record to `IOT_LONG_QUESTIONS`:
```javascript
{
  id: 'iot-u2-lq9',
  subjectId: 'iot',
  unitId: 2,
  questionNumber: 9,
  title: 'What is LoRaWAN? Explain its network architecture.',
  type: 'PYQ',
  years: ['Jan 2026'],
  marks: 6,
  category: 'Wireless Protocols',
  sourceFile: 'docs/iot/Unit_2_IoT_Protocols.md',
  definition: 'LoRaWAN is an open LPWAN specification that connects battery-powered IoT devices to regional networks with low data rates.',
  keyPoints: [
    'Topology: Star-of-stars topology with gateways relaying messages between end-devices and a central network server.',
    'Transmission Range: Operates up to 2–5 km in dense urban environments and 15 km in line-of-sight rural areas.',
    'Device Classes: Class A (bidirectional, lowest power), Class B (scheduled slots), Class C (continuous listening).',
    'Low Power: Devices sleep between transmissions, enabling battery life exceeding 5 years.'
  ],
  example: 'Smart city water meters reporting daily cubic meter consumption over a municipal LoRa gateway.',
  visualFlow: {
    title: 'LoRaWAN Network Stack',
    steps: ['Battery End-Nodes', 'LoRa Radio Signals', 'LoRaWAN Gateways', 'Network Server', 'Application Cloud']
  },
  conclusion: 'LoRaWAN provides the long-range, battery-efficient backbone for large-scale outdoor infrastructure telemetry.'
}
```

### Step 3.3: Verify with Parity Tests
Run the automated test runner:
```bash
npm run test:parity
```
The test suite automatically tests for:
- Unique IDs
- Correct assignment to Unit 2
- Valid definition and at least 3 key points
- Accurate recalculation of total questions and verified PYQs.

---

## 4. How to Update Existing Questions Safely

1. **Preserve ID:** Never change an existing question's `id` (e.g. `iot-u1-lq1`). LocalStorage uses this ID to persist student revision progress.
2. **Add Verified Years:** If an existing question appears again in a new exam session (e.g. *June 2026*), simply append it:
   ```javascript
   years: ['Mar 2023', 'Jan 2026', 'Jun 2026'],
   ```
3. **Refine Answers for Brevity:** Ensure the definition is at most 2 sentences and key points are concise. Students revise these under exam pressure.
