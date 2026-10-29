# Content Authoring Guide: MCQs, PYQs, Cheat Sheets & Instagram Reels

## 1. Multiple Choice & Previous Year Questions (MCQs & PYQs)

EduTech supports two primary categories of objective practice:
- **PYQ (Previous Year Questions):** Questions confirmed from official board exams with verified year citations (e.g., `Jan 2026`, `Dec 2024`, `Mar 2023`).
- **Unit Practice MCQs:** Topic-level conceptual drill questions.

### 1.1 Question Schema Specification

Each question in `unit.pyqQuiz` or `unit.completeQuiz` follows this schema:

```javascript
{
  id: 'iot_u1_q1',                             // Unique string or numeric identifier
  question: 'Which of the following is NOT a characteristic of IoT devices?',
  options: [
    'Interconnectivity',
    'Massive Scale',
    'Centralized processing on a single server only',
    'Dynamic changes in device state'
  ],
  correctAnswer: 2,                            // 0-indexed number OR matching text string
  explanation: 'IoT systems are inherently distributed architectures with edge, fog, and cloud tiers. They do not rely on a single centralized server.',
  pyq: 'WBSCTE Diploma Jan 2026',              // Board paper source citation
  year: 'Jan 2026',                            // Filterable year tag
  marks: 1                                     // Mark weightage (typically 1)
}
```

### 1.2 Normalization Engine (`src/content/questionNormalizer.js`)

To guarantee backwards compatibility with legacy question formats, EduTech runs all questions through `normalizeQuestion()`:
1. **Answer Resolution:** If `correctAnswer` is a string (e.g. `'Actuator'`), it automatically identifies the matching index in `options`. If numeric, it ensures valid $0 \le \text{index} < \text{options.length}$ bounds.
2. **Missing Explanation Guard:** If an explanation is missing, it outputs:
   `"Verified explanation will be published soon by instructor Sahil."`
   It **never** invents or hallucinates fake rationale.
3. **Question Type Detection:** If `pyq` or `year` is present, it is classified as `sourceType: 'pyq'`; otherwise `sourceType: 'practice'`.

---

## 2. Cheat Sheets (Rapid Exam Recall)

Cheat sheets provide high-yield summaries designed for 1-minute revision before exams.

### 2.1 Storage & Architectural Location

Per user requirements, **cheat sheets must strictly reside under their respective subject and unit**:

$$\text{Subjects} \longrightarrow \text{Selected Subject} \longrightarrow \text{Selected Unit} \longrightarrow \text{Cheat Sheets}$$

- **Active IoT Units:** Placed in the `cheatSheet` array of each unit in `src/data/iotUnits.js`.
- **Software Engineering:** All 37 legacy cheat sheets are stored in `src/data/units.js` and displayed inside the Software Engineering section of `SubjectUnitsPage.jsx`.

### 2.2 Cheat Sheet Object Schema

```javascript
{
  id: 'iot-u5-arduino-pinout',
  title: 'ATmega328P / Arduino Uno Hardware Pinouts',
  readingTime: '2 min read',                   // Computed as ceil(wordCount / 200)
  keyTerms: ['PWM', 'ADC', 'I2C', 'SPI', 'UART', 'VCC'],
  sections: [
    {
      heading: 'Pin Capabilities & Electrical Limits',
      bullets: [
        'Digital I/O: 14 pins (D0 to D13). D0/D1 used for Serial RX/TX.',
        'PWM Channels: 6 pins (D3, D5, D6, D9, D10, D11) with ~490Hz / 980Hz square waves.',
        'Analog Inputs: 6 pins (A0 to A5) connected to 10-bit ADC (1024 discrete steps).',
        'Operating Voltage: 5V recommended, 40mA absolute maximum per I/O pin.'
      ]
    }
  ]
}
```

---

## 3. Instagram Reels & Micro-Learning Video Library

The platform features a curated library of 60-second micro-learning reels.

### 3.1 Anti-Hallucination & URL Validation Protocol

To protect students from broken embeds and phishing, all reel submissions are validated against strict security rules in `src/content/reelsRegistry.js`:
- URL must start with `https://`
- Hostname must be `instagram.com` or `www.instagram.com`
- Path must match `/reel/[a-zA-Z0-9_-]+/` or `/p/[a-zA-Z0-9_-]+/`

### 3.2 Reel Registration Schema

To publish an authentic Instagram reel:

```javascript
import { registerReel } from '../content/reelsRegistry';

registerReel({
  id: 'reel_iot_u5_arduino',
  title: 'Arduino Uno vs Nano: 60-Second Pinout Breakdown',
  subjectId: 'iot',
  unitId: 5,
  instagramUrl: 'https://www.instagram.com/reel/DE_ExampleCode/',
  durationSeconds: 58,                        // Renders as "0:58"
  topics: ['Arduino Uno', 'Microcontrollers', 'ATmega328P'],
  status: 'published'                          // 'published' | 'draft'
});
```

### 3.3 Draft / In-Production State

If no reels have been published yet for a given unit, the application displays a transparent **Curriculum In Production** placeholder:
- Displays upcoming filming topics (e.g. *Arduino Pinouts*, *MQTT vs HTTP*).
- Provides a direct WhatsApp button for students to request specific video topics from instructor Sahil.
- Never renders empty or broken iframe players.

