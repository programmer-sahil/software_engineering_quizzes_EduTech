# EduTech Reusable Question Schema & Authoring Guide

> **Phase 06 Standard Specification**  
> Validated by `src/content/validator.js` and normalized immutably by `src/content/questionNormalizer.js`.

---

## 1. Schema Overview

EduTech supports both **verified previous year questions (PYQs)** and **syllabus-aligned practice MCQs**. All questions are validated at runtime and normalized without mutating the underlying data files.

### Core Canonical Schema (JSON / JavaScript)

```json
{
  "id": "iot-u2-001",
  "subjectId": "iot",
  "unitId": "2",
  "topic": "Microcontrollers & Architecture",
  "type": "mcq",
  "prompt": "Which microcontroller is commonly used in Arduino Uno boards?",
  "options": [
    { "id": 0, "text": "ATmega328P" },
    { "id": 1, "text": "ESP8266" },
    { "id": 2, "text": "STM32" },
    { "id": 3, "text": "PIC16F877A" }
  ],
  "correctOptionId": 0,
  "explanation": "The Arduino Uno R3 is powered by the 8-bit Microchip ATmega328P microcontroller running at 16 MHz.",
  "difficulty": "easy",
  "sourceType": "pyq",
  "examYear": "Jan 2026",
  "examBoard": "WBSCTE",
  "sourceCitation": "WBSCTE Diploma Examination Jan 2026, Question 1(v)",
  "published": true
}
```

---

## 2. Field Definitions & Validation Rules

| Field Name | Type | Required? | Rules & Allowed Values |
|---|---|---|---|
| `id` | `string` | **Yes** | Unique, stable identifier (e.g. `iot-u1-001`). Never reuse across questions. |
| `subjectId` | `string` | **Yes** | Matches a registered subject ID in `src/content/registry.js` (e.g. `iot`). |
| `unitId` | `string` or `number` | **Yes** | Unit ID within the subject (e.g. `1`, `2`, `3`). |
| `prompt` (or `question`) | `string` | **Yes** | Clear question prompt text. Markdown/math permitted. |
| `options` | `Array<string \| { id, text }>` | **Yes** | Minimum 2 options, standard is 4 options (A, B, C, D). |
| `correctOptionId` | `number \| string` | **Conditional** | ID or index of the correct option. |
| `correctAnswer` | `number` | **Alternative** | 0-based index of correct option (supported for backward compatibility). |
| `answer` | `string` | **Alternative** | Exact string matching one of the options (supported for backward compatibility). |
| `explanation` | `string` | *Optional* | Verified solution and reasoning. If omitted, system safely shows `"Explanation coming soon"` (never synthetic or hallucinated). |
| `sourceType` | `'pyq' \| 'practice'` | **Yes** | `'pyq'` for official university/board exam questions; `'practice'` for textbook/unit self-tests. |
| `examYear` | `string` | *Optional* | Only include verified years (e.g. `Jan 2026`, `Dec 2024`, `Mar 2023`). Do not guess or invent years. |
| `examBoard` | `string` | *Optional* | Official examination body (e.g. `WBSCTE`). |
| `sourceCitation` | `string` | *Optional* | Specific paper reference (e.g. `Jan 2026 Q1(i)`). |
| `topic` | `string` | *Optional* | Specific topic from the unit syllabus. |
| `difficulty` | `'easy' \| 'medium' \| 'hard'` | *Optional* | Self-explanatory difficulty rating. |
| `published` | `boolean` | *Optional* | Default is `true`. Set `false` for pending teacher review. |

---

## 3. Backward Compatibility Support

The normalizer in [`src/content/questionNormalizer.js`](file:///Users/skdeveloper/Downloads/edutech_iot/software_engineering_quizzes_EduTech/src/content/questionNormalizer.js) automatically adapts:
1. **Legacy String Answer Format** (e.g. `src/data/iotUnit1Quiz.js`):
   ```js
   {
     id: 'iot-u1-001',
     pyq: 'Jan 2026 Q1(i)',
     year: 'Jan 2026',
     question: 'The IoT is a ______ based technology.',
     options: ['Software', 'Hardware', 'Both software and hardware', 'None of these'],
     answer: 'Both software and hardware',
     explanation: 'IoT needs physical devices plus software/network services.'
   }
   ```
2. **Legacy Numeric Index Format** (e.g. `src/data/units.js`):
   ```js
   {
     id: 'pyq-1-1',
     question: 'Which best describes software requirement elicitation?',
     options: ['Collecting stakeholder needs systematically', 'Writing code directly', ...],
     correctAnswer: 0,
     explanation: 'Elicitation captures stakeholder expectations.'
   }
   ```

Both formats continue to work without touching or modifying a single byte of legacy files.

---

## 4. How to Add New Questions to Any Unit

### Step 1: Open or Create the Unit Question File
For IoT Unit 2, create `src/data/iotUnit2Quiz.js` (or add to your custom unit config):

```js
export const iotUnit2Quiz = {
  subject: 'Internet of Things',
  unit: 'Unit 2',
  unitBadge: 'IoT Unit 2',
  title: 'IoT Unit 2 Objective Practice',
  subtitle: 'Microcontrollers, Arduino, Sensors & Interfaces',
  questions: [
    {
      id: 'iot-u2-001',
      pyq: 'Dec 2024 Q1(ii)',
      year: 'Dec 2024',
      question: 'The ATmega328P operates at a clock frequency of ______ MHz in standard Arduino Uno.',
      options: ['8', '16', '32', '64'],
      answer: '16',
      explanation: 'Arduino Uno uses a 16 MHz crystal oscillator to drive the ATmega328P microcontroller.',
      sourceType: 'pyq'
    }
  ]
};
```

### Step 2: Register in Unit Definition
In `src/content/adapters/legacyAdapter.js` (or your new subject config), link the questions array to the unit's `pyqQuiz` or `completeQuiz`:

```js
unit.pyqQuiz = iotUnit2Quiz.questions;
```

### Step 3: Run Parity & Acceptance Verification
Run:
```bash
npm run test:parity
```
The test suite will automatically validate option counts, answer mappings, question IDs, and report any errors before you commit.

