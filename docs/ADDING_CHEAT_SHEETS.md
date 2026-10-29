# Adding & Managing Cheat Sheets via Markdown

This guide outlines how to author, update, and publish **Unit Revision Cheat Sheets** in the EduTech Diploma Learning Hub.

The platform uses a **zero-code content loading architecture**: you do **not** need to touch React components (`CheatSheetView.jsx`, `UnitPage.jsx`) to update or add revision materials.

---

## 1. Directory Structure

All cheat sheets reside as pure Markdown files in the `cheat_sheets/` folder:

```text
cheat_sheets/
├── Unit_1_Introduction_to_IoT.md
├── Unit_2_IoT_Protocols.md
├── Unit_3_IoT_Architecture.md
├── Unit_4_Web_of_Things.md
├── Unit_5_Arduino.md
└── Unit_6_IoT_Applications.md
```

---

## 2. YAML Frontmatter Specification

Every cheat sheet file must begin with a YAML frontmatter block enclosed between `---` markers:

```yaml
---
id: "iot-unit-1"
subjectId: "iot"
unitId: "1"
title: "Unit 1: Introduction to IoT — Exam Cheat Sheet"
topics: ["IoT Fundamentals", "Characteristics", "Sensing & Actuation", "Ecosystem Elements", "Drivers & Governance", "Security & Privacy"]
status: "published"
---
```

### Field Definitions

| Field | Type | Description |
| :--- | :--- | :--- |
| `id` | String | Unique slug identifier (e.g., `iot-unit-1`) |
| `subjectId` | String | Subject ID matching the registry (`iot`, `software-engineering`, etc.) |
| `unitId` | String | Corresponding unit number (e.g., `1`, `2`, `3`) |
| `title` | String | Full descriptive title shown in header and meta |
| `topics` | Array | Array of string tags representing covered syllabus topics |
| `status` | String | `'published'` to display live, or `'draft'` to conceal |

---

## 3. Formatting Sections (`##`)

Each major topic is designated with a second-level Markdown heading `##`:

```markdown
## 1. IoT Fundamentals & Core Definition
IoT refers to the networked interconnection of physical objects...

- **Origin**: Coined by Kevin Ashton in 1999.
- **Core Principle**: Bridging physical world with digital cyber-systems.
```

The system automatically:
1. Renders each `##` heading as an **expandable 3D card**.
2. Displays the first paragraph or initial bullet points as a **concise preview**.
3. Calculates **honest reading time** based on the word count.
4. Extracts **bold key terms** (`**...**`) as tag badges.
5. Keeps full details collapsed until clicked (**progressive disclosure**).

---

## 4. Rich Media & Markdown Elements

### A. Comparison Tables
Format standard Markdown tables with pipes `|`. The loader automatically transforms them into responsive, mobile-scrollable HTML tables:

```markdown
| Parameter | Sensors | Actuators |
| :--- | :--- | :--- |
| **Primary Function** | Converts physical phenomena to electrical signals | Converts electrical signals into mechanical motion |
| **Direction** | Physical $\rightarrow$ Digital | Digital $\rightarrow$ Physical |
```

### B. Programming Code Snippets
Fence code blocks using triple backticks and the language name (e.g. ````cpp, ````json, ````python):

````markdown
```cpp
void setup() {
  pinMode(13, OUTPUT);
}
void loop() {
  digitalWrite(13, HIGH);
  delay(1000);
}
```
````

The interface will automatically provide a **Copy Code** button with visual feedback.

### C. Exam Memory Hooks & Tips
Add a third-level heading `### Exam Reminder` or `### Exam Tip` to create an elevated callout box:

```markdown
### Exam Reminder
Always define IoT by emphasizing both hardware and software functioning together over standard IP networks.
```

---

## 5. Automated Verification & Testing

Before deploying, run the automated test suite to ensure the frontmatter and section parsing pass all validation checks:

```bash
npm run test:parity
npm run build
```

