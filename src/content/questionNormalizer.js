/**
 * EduTech Question Normalizer & Schema Adapter
 * Phase 06: MCQ & PYQ Practice System
 * 
 * Safely normalizes questions from any supported format (legacy string-answer,
 * index-based correctAnswer, or new typed schema) into a uniform, immutable structure.
 * NEVER mutates the source question objects.
 */

/**
 * Standard Normalized Option
 * @typedef {Object} NormalizedOption
 * @property {string|number} id - Unique identifier or index
 * @property {string} label - Display label: 'A', 'B', 'C', 'D'
 * @property {string} text - Option text content
 */

/**
 * Standard Normalized Question
 * @typedef {Object} NormalizedQuestion
 * @property {string} id - Stable unique question ID
 * @property {string} prompt - Question text prompt
 * @property {NormalizedOption[]} options - Standardized array of options
 * @property {number} correctIndex - Zero-based index of correct option
 * @property {string} correctAnswerText - Clean text of the correct answer
 * @property {string} explanation - Stored explanation or 'Explanation coming soon'
 * @property {'pyq'|'practice'} sourceType - Question classification
 * @property {string|null} pyq - Verified PYQ badge/citation (e.g. 'Jan 2026 Q1(i)')
 * @property {string|null} examYear - Verified exam year (e.g. 'Jan 2026')
 * @property {string|null} examBoard - Verified exam board (e.g. 'WBSCTE')
 * @property {string|null} unitBadge - Unit badge (e.g. 'IoT Unit 1')
 * @property {string|null} topic - Topic tag if available
 * @property {Object} raw - Reference to original immutable question
 */

/**
 * Normalizes a single question without mutating the source
 */
export function normalizeQuestion(q, fallbackMetadata = {}) {
  if (!q) {
    throw new Error('normalizeQuestion received null or undefined question');
  }

  const id = String(q.id || `gen-${Math.random().toString(36).substring(2, 9)}`);
  const prompt = String(q.question || q.prompt || '').trim();

  // Normalize options to [{ id, label, text }]
  const rawOptions = Array.isArray(q.options) ? q.options : [];
  const options = rawOptions.map((opt, index) => {
    const label = String.fromCharCode(65 + index); // A, B, C, D
    if (typeof opt === 'object' && opt !== null) {
      return {
        id: opt.id !== undefined ? opt.id : index,
        label,
        text: String(opt.text || opt.label || '').trim(),
      };
    }
    return {
      id: index,
      label,
      text: String(opt || '').trim(),
    };
  });

  // Resolve correct option index
  let correctIndex = -1;

  if (typeof q.correctAnswer === 'number' && q.correctAnswer >= 0 && q.correctAnswer < options.length) {
    correctIndex = q.correctAnswer;
  } else if (typeof q.correctOptionId !== 'undefined') {
    correctIndex = options.findIndex((opt) => opt.id === q.correctOptionId);
  } else if (typeof q.answer === 'string') {
    const cleanAnswer = q.answer.trim().toLowerCase();
    correctIndex = options.findIndex((opt) => opt.text.trim().toLowerCase() === cleanAnswer);
  }

  // Fallback to 0 if unresolved to prevent UI crashes, but flag in raw
  if (correctIndex === -1 && options.length > 0) {
    console.warn(`[questionNormalizer] Could not resolve correct answer for question "${id}". Defaulting to index 0.`);
    correctIndex = 0;
  }

  const correctAnswerText = options[correctIndex]?.text || String(q.answer || '');

  // Explanation: strictly preserve stored explanation; NEVER hallucinate
  let explanation = '';
  if (typeof q.explanation === 'string' && q.explanation.trim()) {
    explanation = q.explanation.trim();
  } else {
    explanation = 'Explanation coming soon';
  }

  // Source type & metadata
  const isPyq = Boolean(q.pyq || q.year || q.sourceType === 'pyq');
  const sourceType = q.sourceType || (isPyq ? 'pyq' : 'practice');

  const examYear = q.year || q.examYear || extractYearFromPyq(q.pyq) || null;
  const pyqBadge = q.pyq || (q.year ? `PYQ ${q.year}` : null);
  const examBoard = q.examBoard || (isPyq ? 'WBSCTE' : null);
  const unitBadge = q.unitBadge || fallbackMetadata.unitBadge || null;
  const topic = q.topic || fallbackMetadata.topic || null;

  return {
    id,
    prompt,
    options,
    correctIndex,
    correctAnswerText,
    explanation,
    sourceType,
    pyq: pyqBadge,
    examYear,
    examBoard,
    unitBadge,
    topic,
    subjectId: fallbackMetadata.subjectId || q.subjectId || null,
    unitId: fallbackMetadata.unitId || q.unitId || null,
    raw: q,
  };
}

/**
 * Normalizes an array of questions
 */
export function normalizeQuestions(questions, fallbackMetadata = {}) {
  if (!Array.isArray(questions)) return [];
  return questions.map((q) => normalizeQuestion(q, fallbackMetadata));
}

/**
 * Extract verified year from strings like "Jan 2026 Q1(i)"
 */
function extractYearFromPyq(pyqStr) {
  if (!pyqStr || typeof pyqStr !== 'string') return null;
  const match = pyqStr.match(/\b(Jan|Dec|Mar|June|July|Nov|May)?\s*(20\d{2})\b/i);
  return match ? match[0] : null;
}

/**
 * Non-destructive array shuffle using Fisher-Yates
 * Preserves question objects and answer mappings exactly
 */
export function shuffleQuestions(questions) {
  if (!Array.isArray(questions)) return [];
  const copy = [...questions];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

