/**
 * EduTech Diploma Learning Hub - IoT Long Question Loader & Helpers
 * Dynamic query engine and revision state storage for IoT Descriptive Questions.
 */

import { IOT_LONG_QUESTIONS } from './iotLongQuestions.js';

/**
 * Retrieve long questions for a specific unit with optional filtering
 *
 * @param {number|string} unitId - Unit identifier (1 to 6)
 * @param {Object} [options={}] - Filter criteria
 * @param {string} [options.filter='all'] - 'all' | 'pyq' | 'practice'
 * @param {string} [options.year='all'] - Specific exam year or 'all'
 * @param {string} [options.search=''] - Keyword search term
 * @param {Set<string>|Array<string>} [options.revisedIds] - Optional set of revised question IDs
 * @param {string} [options.revisedFilter='all'] - 'all' | 'revised' | 'unrevised'
 * @returns {Array<Object>} Filtered long questions
 */
export function getIotUnitLongQuestions(unitId, options = {}) {
  const targetUnitId = Number(unitId);
  const {
    filter = 'all',
    year = 'all',
    search = '',
    revisedIds = new Set(),
    revisedFilter = 'all',
  } = options;

  const revisedSet = revisedIds instanceof Set ? revisedIds : new Set(revisedIds || []);

  return IOT_LONG_QUESTIONS.filter((q) => {
    // 1. Unit matching
    if (q.unitId !== targetUnitId) return false;

    // 2. Question Pool filter ('all' | 'pyq' | 'practice')
    if (filter === 'pyq' && q.type !== 'PYQ') return false;
    if (filter === 'practice' && q.type !== 'Practice') return false;

    // 3. Exam Year filter
    if (year !== 'all') {
      if (!Array.isArray(q.years) || !q.years.includes(year)) return false;
    }

    // 4. Revision Status filter
    if (revisedFilter === 'revised' && !revisedSet.has(q.id)) return false;
    if (revisedFilter === 'unrevised' && revisedSet.has(q.id)) return false;

    // 5. Keyword search filter (matches prompt, definition, key points, category)
    if (search && search.trim()) {
      const term = search.toLowerCase().trim();
      const promptMatch = q.title?.toLowerCase().includes(term);
      const categoryMatch = q.category?.toLowerCase().includes(term);
      const defMatch = q.definition?.toLowerCase().includes(term);
      const pointsMatch = q.keyPoints?.some((pt) => pt.toLowerCase().includes(term));
      const exampleMatch = q.example?.toLowerCase().includes(term);

      if (!promptMatch && !categoryMatch && !defMatch && !pointsMatch && !exampleMatch) {
        return false;
      }
    }

    return true;
  });
}

/**
 * Get available examination session years for a given unit
 * @param {number|string} unitId
 * @returns {Array<string>} Unique list of examination years
 */
export function getAvailableLongQuestionYears(unitId) {
  const targetUnitId = Number(unitId);
  const yearsSet = new Set();

  IOT_LONG_QUESTIONS.filter((q) => q.unitId === targetUnitId).forEach((q) => {
    if (Array.isArray(q.years)) {
      q.years.forEach((yr) => yearsSet.add(yr));
    }
  });

  // Canonical chronological sort
  const order = ['Mar 2023', 'Jan 2024', 'Dec 2024', 'Jan 2026'];
  return Array.from(yearsSet).sort((a, b) => {
    const idxA = order.indexOf(a);
    const idxB = order.indexOf(b);
    if (idxA !== -1 && idxB !== -1) return idxA - idxB;
    return a.localeCompare(b);
  });
}

/**
 * Get statistical metrics for a specific unit's long questions
 * @param {number|string} unitId
 * @returns {{ total: number, pyqs: number, practice: number, years: Array<string> }}
 */
export function getIotUnitLongQuestionStats(unitId) {
  const targetUnitId = Number(unitId);
  const unitQuestions = IOT_LONG_QUESTIONS.filter((q) => q.unitId === targetUnitId);

  const pyqs = unitQuestions.filter((q) => q.type === 'PYQ').length;
  const practice = unitQuestions.filter((q) => q.type === 'Practice').length;
  const years = getAvailableLongQuestionYears(targetUnitId);

  return {
    total: unitQuestions.length,
    pyqs,
    practice,
    years,
  };
}

/**
 * Get overall platform-wide long question statistics
 * @returns {{ total: number, pyqs: number, practice: number, unitBreakdown: Object }}
 */
export function getIotAllLongQuestionStats() {
  const pyqs = IOT_LONG_QUESTIONS.filter((q) => q.type === 'PYQ').length;
  const practice = IOT_LONG_QUESTIONS.filter((q) => q.type === 'Practice').length;

  const unitBreakdown = {};
  for (let u = 1; u <= 6; u++) {
    unitBreakdown[u] = getIotUnitLongQuestionStats(u);
  }

  return {
    total: IOT_LONG_QUESTIONS.length,
    pyqs,
    practice,
    unitBreakdown,
  };
}

// =========================================================================
// LOCALSTORAGE REVISION STATE HELPERS
// =========================================================================

const REVISION_STORAGE_KEY_PREFIX = 'edutech_revised_lq_';

/**
 * Load revised question IDs from localStorage
 * @param {string} subjectId
 * @param {number|string} unitId
 * @returns {Set<string>} Set of revised question IDs
 */
export function getRevisedQuestions(subjectId = 'iot', unitId) {
  try {
    const key = `${REVISION_STORAGE_KEY_PREFIX}${subjectId}_u${unitId}`;
    const raw = localStorage.getItem(key);
    if (!raw) return new Set();
    const parsed = JSON.parse(raw);
    return new Set(Array.isArray(parsed) ? parsed : []);
  } catch {
    return new Set();
  }
}

/**
 * Toggle the revised status for a specific question
 * @param {string} subjectId
 * @param {number|string} unitId
 * @param {string} questionId
 * @returns {boolean} New revised state (true if revised, false if cleared)
 */
export function toggleQuestionRevision(subjectId = 'iot', unitId, questionId) {
  try {
    const key = `${REVISION_STORAGE_KEY_PREFIX}${subjectId}_u${unitId}`;
    const set = getRevisedQuestions(subjectId, unitId);
    let nextState = false;

    if (set.has(questionId)) {
      set.delete(questionId);
      nextState = false;
    } else {
      set.add(questionId);
      nextState = true;
    }

    localStorage.setItem(key, JSON.stringify(Array.from(set)));
    return nextState;
  } catch {
    return false;
  }
}

/**
 * Explicitly set a question's revision status
 * @param {string} subjectId
 * @param {number|string} unitId
 * @param {string} questionId
 * @param {boolean} isRevised
 */
export function setQuestionRevision(subjectId = 'iot', unitId, questionId, isRevised) {
  try {
    const key = `${REVISION_STORAGE_KEY_PREFIX}${subjectId}_u${unitId}`;
    const set = getRevisedQuestions(subjectId, unitId);

    if (isRevised) {
      set.add(questionId);
    } else {
      set.delete(questionId);
    }

    localStorage.setItem(key, JSON.stringify(Array.from(set)));
  } catch {}
}

/**
 * Check if a question is revised
 * @param {string} subjectId
 * @param {number|string} unitId
 * @param {string} questionId
 * @returns {boolean}
 */
export function isQuestionRevised(subjectId = 'iot', unitId, questionId) {
  const set = getRevisedQuestions(subjectId, unitId);
  return set.has(questionId);
}
