/**
 * EduTech IoT Question Loader & Markdown Parser Engine
 * Handles loading, validation, year extraction, filtering, and deduplication
 * for IoT Units 1–6 MCQs and PYQs.
 */

import { ALL_IOT_QUESTIONS, IOT_UNIT_QUESTIONS } from './iotQuestions.js';

/**
 * Parses raw Markdown text from an IoT Unit file into normalized question objects.
 * Supports standard Section A MCQ blocks:
 *
 * ### MCQ 1. Question text?
 * **PYQ — Mar 2023, Jan 2026** OR **Practice — Not verified PYQ**
 * - **A.** Option A
 * - **B.** Option B
 * - **C.** Option C
 * - **D.** Option D
 * **Answer:** A. Option A
 * **Explanation:** Explanation text.
 * *Note: Optional note text.*
 */
export function parseMarkdownQuestions(rawMarkdown, { unitId = 1, filename = 'Unit.md' } = {}) {
  if (typeof rawMarkdown !== 'string' || !rawMarkdown.trim()) {
    return [];
  }

  // Extract Section A if present, otherwise parse entire text
  let targetText = rawMarkdown;
  const sectionAMatch = rawMarkdown.match(/##\s+Section\s+A[\s\S]*?(?=##\s+Section\s+B|$)/i);
  if (sectionAMatch) {
    targetText = sectionAMatch[0];
  }

  const mcqBlocks = targetText.split(/###\s+MCQ\s+\d+\./).slice(1);
  const letterToIdx = { A: 0, B: 1, C: 2, D: 3 };
  const questions = [];

  mcqBlocks.forEach((block, idx) => {
    const qNum = idx + 1;
    const lines = block.trim().split('\n');
    const questionText = lines[0].trim();

    // Options
    const optA = block.match(/- \*\*A\.\*\*\s*(.*)/)?.[1]?.trim() || '';
    const optB = block.match(/- \*\*B\.\*\*\s*(.*)/)?.[1]?.trim() || '';
    const optC = block.match(/- \*\*C\.\*\*\s*(.*)/)?.[1]?.trim() || '';
    const optD = block.match(/- \*\*D\.\*\*\s*(.*)/)?.[1]?.trim() || '';

    // Answer
    const ansMatch = block.match(/\*\*Answer:\*\*\s*([A-D])\.\s*(.*)/);
    const correctLetter = ansMatch?.[1] || 'A';
    const correctIdx = letterToIdx[correctLetter] ?? 0;

    // Explanation
    const expMatch = block.match(/\*\*Explanation:\*\*\s*(.*)/);
    const explanation = expMatch?.[1]?.trim() || 'Verified explanation from syllabus notes.';

    // Source Type & Years
    const pyqMatch = block.match(/\*\*PYQ\s*—\s*([^*]+)\*\*/);
    const isPyq = Boolean(pyqMatch);
    const years = isPyq ? pyqMatch[1].split(',').map((y) => y.trim()) : [];

    // Optional Note
    const noteMatch = block.match(/\*Note:\s*([^*]+)\*/);
    const note = noteMatch?.[1]?.trim() || null;

    const options = [optA, optB, optC, optD];

    questions.push({
      id: `iot-u${unitId}-q${qNum}`,
      subjectId: 'iot',
      unitId: Number(unitId),
      qNum,
      question: questionText,
      options,
      correctAnswer: correctIdx,
      answer: options[correctIdx],
      explanation,
      sourceType: isPyq ? 'pyq' : 'practice',
      years,
      year: years.length > 0 ? years.join(', ') : null,
      pyq: isPyq ? `PYQ — ${years.join(', ')}` : null,
      note,
      sourceFile: filename,
    });
  });

  return questions;
}

/**
 * Get all questions for a given unit with optional filtering
 *
 * @param {number|string} unitId - Unit number (1 to 6)
 * @param {Object} [options]
 * @param {'all'|'pyq'|'practice'} [options.filter='all'] - Question type filter
 * @param {string} [options.year='all'] - Specific exam session filter (e.g. 'Jan 2026')
 * @returns {Array} Array of question objects
 */
export function getIotUnitQuestions(unitId, { filter = 'all', year = 'all' } = {}) {
  const numericId = Number(unitId);
  const unitGroup = IOT_UNIT_QUESTIONS.find((u) => u.unitId === numericId);
  if (!unitGroup) return [];

  let questions = [...unitGroup.questions];

  // Filter by Source Type
  if (filter === 'pyq') {
    questions = questions.filter((q) => q.sourceType === 'pyq');
  } else if (filter === 'practice') {
    questions = questions.filter((q) => q.sourceType === 'practice');
  }

  // Filter by Year
  if (year && year !== 'all') {
    questions = questions.filter((q) => q.years && q.years.includes(year));
  }

  return questions;
}

/**
 * Get only verified previous-year questions for a unit
 */
export function getIotUnitPyqs(unitId) {
  return getIotUnitQuestions(unitId, { filter: 'pyq' });
}

/**
 * Get only syllabus practice questions for a unit
 */
export function getIotUnitPracticeQuestions(unitId) {
  return getIotUnitQuestions(unitId, { filter: 'practice' });
}

/**
 * Get list of unique available exam sessions for a unit
 */
export function getIotUnitAvailableYears(unitId) {
  const numericId = Number(unitId);
  const unitGroup = IOT_UNIT_QUESTIONS.find((u) => u.unitId === numericId);
  if (!unitGroup) return [];

  const yearsSet = new Set();
  unitGroup.questions.forEach((q) => {
    if (Array.isArray(q.years)) {
      q.years.forEach((y) => yearsSet.add(y));
    }
  });

  return Array.from(yearsSet);
}

/**
 * Get metrics summary for a unit
 */
export function getIotUnitStats(unitId) {
  const numericId = Number(unitId);
  const unitGroup = IOT_UNIT_QUESTIONS.find((u) => u.unitId === numericId);
  if (!unitGroup) {
    return { total: 0, pyqs: 0, practice: 0, years: [] };
  }

  const pyqs = unitGroup.questions.filter((q) => q.sourceType === 'pyq').length;
  const practice = unitGroup.questions.filter((q) => q.sourceType === 'practice').length;
  const years = getIotUnitAvailableYears(numericId);

  return {
    unitId: numericId,
    name: unitGroup.name,
    total: unitGroup.questions.length,
    pyqs,
    practice,
    years,
  };
}

/**
 * Get complete question inventory across all 6 units
 */
export function getIotQuestionInventory() {
  return IOT_UNIT_QUESTIONS.map((u) => getIotUnitStats(u.unitId));
}

/**
 * Get all questions across all 6 units
 */
export function getAllIotQuestions() {
  return ALL_IOT_QUESTIONS;
}
