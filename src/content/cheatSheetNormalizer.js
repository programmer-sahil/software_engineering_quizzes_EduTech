/**
 * EduTech Cheat Sheet Normalizer & Utility
 * Phase 07: Cheat Sheets & Micro-Learning System
 * 
 * Safely computes honest reading times and provides unified data formatting
 * for both legacy cheat sheets (src/data/units.js) and new markdown sheets.
 */

const WORDS_PER_MINUTE = 200;

/**
 * Honest reading time calculation based on actual word count
 * @param {string|string[]} textOrArray - Text content or array of strings
 * @returns {{ words: number, minutes: number, text: string }}
 */
export function calculateReadingTime(textOrArray) {
  let combined = '';

  if (Array.isArray(textOrArray)) {
    combined = textOrArray.filter(Boolean).join(' ');
  } else if (typeof textOrArray === 'string') {
    combined = textOrArray;
  }

  // Count words matching unicode letter/digit sequences
  const words = combined.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));

  return {
    words,
    minutes,
    text: `${minutes} min read`,
  };
}

/**
 * Standardize any cheat sheet object into a uniform reader schema
 */
export function normalizeCheatSheet(raw, fallbackMetadata = {}) {
  if (!raw) return null;

  const id = String(raw.id || `cs-${Math.random().toString(36).substring(2, 7)}`);
  const title = String(raw.title || raw.heading || 'Quick Revision Sheet').trim();
  const subjectId = String(raw.subjectId || fallbackMetadata.subjectId || 'iot');
  const subjectTitle = String(raw.subjectTitle || fallbackMetadata.subjectTitle || 'Diploma');
  const unitId = String(raw.unitId || fallbackMetadata.unitId || '1');
  const unitTitle = String(raw.unitTitle || fallbackMetadata.unitTitle || `Unit ${unitId}`);

  const keyTerms = Array.isArray(raw.keyTerms) ? raw.keyTerms : Array.isArray(raw.topics) ? raw.topics : [];
  const points = Array.isArray(raw.points) ? raw.points : [];
  const quickBox = typeof raw.quickBox === 'string' ? raw.quickBox.trim() : null;
  const content = typeof raw.content === 'string' ? raw.content : '';

  // Extract all text for genuine word count
  const allText = [
    title,
    ...keyTerms,
    ...points,
    quickBox,
    content,
  ].filter(Boolean).join(' ');

  const readingTime = calculateReadingTime(allText);

  // Short summary for card preview
  let summary = '';
  if (points.length > 0) {
    summary = points[0];
  } else if (quickBox) {
    summary = quickBox;
  } else if (content) {
    summary = content.slice(0, 140) + '...';
  } else {
    summary = 'Key definitions and core revision points for semester exams.';
  }

  return {
    id,
    title,
    heading: title,
    subjectId,
    subjectTitle,
    unitId,
    unitTitle,
    keyTerms,
    points,
    quickBox,
    content,
    readingTime,
    summary,
    raw,
  };
}

/**
 * Normalize an array of cheat sheets
 */
export function normalizeCheatSheets(sheets, fallbackMetadata = {}) {
  if (!Array.isArray(sheets)) return [];
  return sheets.map((s) => normalizeCheatSheet(s, fallbackMetadata)).filter(Boolean);
}

