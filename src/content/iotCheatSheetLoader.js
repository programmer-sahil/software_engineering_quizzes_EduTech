/**
 * EduTech IoT Cheat Sheet Loader & Dynamic Markdown Parser
 * Phase 04: Six IoT Cheat Sheets Integration
 *
 * Imports the 6 authentic Markdown cheat sheets, validates YAML frontmatter,
 * parses structured ## sections, tables, code blocks, and key terms dynamically.
 */

import unit1Md from '../../cheat_sheets/Unit_1_Introduction_to_IoT.md?raw';
import unit2Md from '../../cheat_sheets/Unit_2_IoT_Protocols.md?raw';
import unit3Md from '../../cheat_sheets/Unit_3_IoT_Architecture.md?raw';
import unit4Md from '../../cheat_sheets/Unit_4_Web_of_Things.md?raw';
import unit5Md from '../../cheat_sheets/Unit_5_Arduino.md?raw';
import unit6Md from '../../cheat_sheets/Unit_6_IoT_Applications.md?raw';
import { parseFrontmatter } from './markdownParser.js';
import { calculateReadingTime } from './cheatSheetNormalizer.js';

const RAW_SHEETS = [
  { unitId: 1, raw: unit1Md },
  { unitId: 2, raw: unit2Md },
  { unitId: 3, raw: unit3Md },
  { unitId: 4, raw: unit4Md },
  { unitId: 5, raw: unit5Md },
  { unitId: 6, raw: unit6Md },
];

/**
 * Parse a markdown table into headers and rows
 */
function parseMarkdownTable(tableLines) {
  if (!tableLines || tableLines.length < 2) return null;

  // Header line
  const headerLine = tableLines[0];
  const headers = headerLine
    .split('|')
    .map((c) => c.trim())
    .filter(Boolean);

  // Separator is line 1 (e.g. | :--- | :--- |)
  // Rows start from line 2
  const rows = [];
  for (let i = 2; i < tableLines.length; i++) {
    const line = tableLines[i].trim();
    if (!line || !line.includes('|')) continue;
    const cells = line
      .split('|')
      .map((c) => c.trim())
      .filter((_, idx, arr) => idx > 0 && idx < arr.length - 1);
    if (cells.length > 0) {
      rows.push(cells);
    }
  }

  if (headers.length > 0 && rows.length > 0) {
    return { headers, rows };
  }
  return null;
}

/**
 * Parse raw markdown content into structured sections based on ## headings
 */
function parseSections(markdownBody, unitId) {
  const lines = markdownBody.split(/\r?\n/);
  const sections = [];
  let currentSection = null;
  let sectionIndex = 0;

  let inCodeBlock = false;
  let currentCode = '';
  let currentCodeLang = '';

  let inTable = false;
  let currentTableLines = [];

  const finalizeSection = () => {
    if (!currentSection) return;

    if (inTable && currentTableLines.length > 0) {
      const parsedTable = parseMarkdownTable(currentTableLines);
      if (parsedTable) currentSection.tables.push(parsedTable);
      inTable = false;
      currentTableLines = [];
    }

    // Generate concise preview text
    let preview = '';
    if (currentSection.paragraphs.length > 0) {
      preview = currentSection.paragraphs[0];
    } else if (currentSection.points.length > 0) {
      preview = currentSection.points.slice(0, 2).join('; ');
    } else if (currentSection.tables.length > 0) {
      preview = `Comparison Table: ${currentSection.tables[0].headers.join(' vs ')}`;
    } else {
      preview = 'Key definitions and core revision points for semester exams.';
    }

    // Limit preview length
    if (preview.length > 160) {
      preview = preview.slice(0, 157).trim() + '...';
    }
    currentSection.preview = preview;

    // Calculate genuine reading time
    currentSection.readingTime = calculateReadingTime(currentSection.rawContent);

    // Extract bold key terms
    const boldMatches = currentSection.rawContent.match(/\*\*([^*]+)\*\*/g) || [];
    const extractedTerms = Array.from(
      new Set(
        boldMatches
          .map((m) => m.replace(/\*\*/g, '').trim())
          .filter((t) => t.length > 2 && t.length < 35 && !t.includes(':'))
      )
    );
    currentSection.keyTerms = extractedTerms.slice(0, 5);

    sections.push(currentSection);
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Code fence toggle
    if (trimmed.startsWith('```')) {
      if (inCodeBlock) {
        if (currentSection) {
          currentSection.codeBlocks.push({
            language: currentCodeLang || 'text',
            code: currentCode.trim(),
          });
        }
        inCodeBlock = false;
        currentCode = '';
        currentCodeLang = '';
      } else {
        inCodeBlock = true;
        currentCodeLang = trimmed.slice(3).trim();
        currentCode = '';
      }
      if (currentSection) currentSection.rawContent += line + '\n';
      continue;
    }

    if (inCodeBlock) {
      currentCode += line + '\n';
      if (currentSection) currentSection.rawContent += line + '\n';
      continue;
    }

    // Table detection
    if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
      if (!inTable) inTable = true;
      currentTableLines.push(trimmed);
      if (currentSection) currentSection.rawContent += line + '\n';
      continue;
    } else if (inTable) {
      const parsedTable = parseMarkdownTable(currentTableLines);
      if (parsedTable && currentSection) currentSection.tables.push(parsedTable);
      inTable = false;
      currentTableLines = [];
    }

    // Heading ## Section start
    if (line.startsWith('## ')) {
      finalizeSection();
      sectionIndex++;
      const heading = line.replace('## ', '').trim();
      currentSection = {
        id: `iot-cs-u${unitId}-s${sectionIndex}`,
        unitId: String(unitId),
        sectionIndex,
        heading,
        preview: '',
        paragraphs: [],
        points: [],
        tables: [],
        codeBlocks: [],
        examHook: null,
        keyTerms: [],
        readingTime: { words: 0, minutes: 1, text: '1 min read' },
        rawContent: line + '\n',
      };
      continue;
    }

    // Skip top # Title or ignore if no section active yet
    if (line.startsWith('# ')) continue;
    if (!currentSection) continue;

    currentSection.rawContent += line + '\n';

    // Exam Reminder / Tip
    if (line.startsWith('### Exam Reminder') || line.startsWith('### Exam Tip')) {
      // Look ahead for the reminder content
      let hook = '';
      for (let j = i + 1; j < lines.length && !lines[j].startsWith('#'); j++) {
        const nextTrim = lines[j].trim();
        if (nextTrim) hook += (hook ? ' ' : '') + nextTrim;
      }
      currentSection.examHook = hook;
      continue;
    }

    // Bullet points
    if (trimmed.startsWith('- ') || trimmed.startsWith('* ') || trimmed.startsWith('• ')) {
      currentSection.points.push(trimmed.replace(/^[-*•]\s+/, '').trim());
    } else if (trimmed.length > 0 && !trimmed.startsWith('#')) {
      currentSection.paragraphs.push(trimmed);
    }
  }

  finalizeSection();
  return sections;
}

/**
 * Load and normalize all 6 IoT Cheat Sheets
 */
export const IOT_CHEAT_SHEETS = RAW_SHEETS.map(({ unitId, raw }) => {
  const { data, content } = parseFrontmatter(raw);
  const sections = parseSections(content, unitId);

  const title = data.title || `Unit ${unitId} Cheat Sheet`;
  const topics = Array.isArray(data.topics) ? data.topics : [];
  const status = data.status || 'published';

  // Overall reading time across all sections
  const totalWords = sections.reduce((acc, s) => acc + (s.readingTime?.words || 0), 0);
  const readingTime = calculateReadingTime(content);

  return {
    id: data.id || `iot-unit-${unitId}`,
    unitId: String(unitId),
    unitNumber: unitId,
    subjectId: 'iot',
    subjectTitle: 'Internet of Things',
    title,
    topics,
    status,
    sections,
    sectionCount: sections.length,
    readingTime,
    totalWords,
  };
});

/**
 * Get cheat sheet for a specific unit
 * @param {string|number} unitId
 */
export function getIotUnitCheatSheet(unitId) {
  const normalizedId = String(unitId);
  return IOT_CHEAT_SHEETS.find((s) => s.unitId === normalizedId) || null;
}

/**
 * Get sections array for a specific unit
 * @param {string|number} unitId
 */
export function getIotUnitCheatSheetSections(unitId) {
  const sheet = getIotUnitCheatSheet(unitId);
  return sheet ? sheet.sections : [];
}

/**
 * Get all 6 cheat sheets
 */
export function getAllIotCheatSheets() {
  return IOT_CHEAT_SHEETS;
}

/**
 * Get overall summary stats across all cheat sheets
 */
export function getIotCheatSheetStats() {
  const totalSheets = IOT_CHEAT_SHEETS.length;
  const totalSections = IOT_CHEAT_SHEETS.reduce((acc, s) => acc + s.sectionCount, 0);
  const totalWords = IOT_CHEAT_SHEETS.reduce((acc, s) => acc + s.totalWords, 0);
  const totalTables = IOT_CHEAT_SHEETS.reduce(
    (acc, s) => acc + s.sections.reduce((tAcc, sec) => tAcc + (sec.tables?.length || 0), 0),
    0
  );
  const totalCodeBlocks = IOT_CHEAT_SHEETS.reduce(
    (acc, s) => acc + s.sections.reduce((cAcc, sec) => cAcc + (sec.codeBlocks?.length || 0), 0),
    0
  );

  return {
    totalSheets,
    totalSections,
    totalWords,
    totalTables,
    totalCodeBlocks,
  };
}

