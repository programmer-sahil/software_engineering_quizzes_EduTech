/**
 * EduTech Content System - Runtime Validator & Schema Checker
 * Phase 02: Extensible Subject and Content Architecture
 */

import { ContentStatus, SourceType } from './types.js';

export class ContentValidationError extends Error {
  constructor(message, details = []) {
    super(message);
    this.name = 'ContentValidationError';
    this.details = details;
  }
}

/**
 * Validate a Subject configuration
 */
export function validateSubject(subject, options = { strict: true }) {
  const errors = [];

  if (!subject) {
    throw new ContentValidationError('Subject is null or undefined');
  }

  if (!subject.id || typeof subject.id !== 'string' || !subject.id.trim()) {
    errors.push('Subject must have a valid non-empty string "id".');
  }

  if (!subject.name && !subject.title) {
    errors.push(`Subject "${subject.id || 'unknown'}" must have a "name" or "title".`);
  }

  if (!subject.semester || typeof subject.semester !== 'string') {
    errors.push(`Subject "${subject.id}" must have a string "semester".`);
  }

  const validStatuses = Object.values(ContentStatus);
  const status = subject.status || (subject.disabled ? ContentStatus.DISABLED : ContentStatus.ACTIVE);
  if (!validStatuses.includes(status)) {
    errors.push(
      `Subject "${subject.id}" has invalid status "${status}". Expected one of: ${validStatuses.join(', ')}.`
    );
  }

  if (!Array.isArray(subject.units)) {
    errors.push(`Subject "${subject.id}" must have a "units" array.`);
  } else {
    const seenUnitIds = new Set();
    subject.units.forEach((unit, idx) => {
      if (!unit.id) {
        errors.push(`Unit at index ${idx} in subject "${subject.id}" is missing an "id".`);
      } else {
        const idStr = String(unit.id);
        if (seenUnitIds.has(idStr)) {
          errors.push(`Duplicate unit id "${idStr}" in subject "${subject.id}".`);
        }
        seenUnitIds.add(idStr);
      }

      if (options.strict) {
        if (typeof unit.hours !== 'number' || unit.hours < 0) {
          errors.push(`Unit "${unit.id}" in subject "${subject.id}" must have non-negative numeric "hours".`);
        }
        if (typeof unit.marks !== 'number' || unit.marks < 0) {
          errors.push(`Unit "${unit.id}" in subject "${subject.id}" must have non-negative numeric "marks".`);
        }
        if (!unit.module || typeof unit.module !== 'string') {
          errors.push(`Unit "${unit.id}" in subject "${subject.id}" must have a string "module".`);
        }
      }
    });
  }

  if (errors.length > 0) {
    throw new ContentValidationError(`Subject validation failed for "${subject.id || 'unknown'}":`, errors);
  }

  return true;
}

/**
 * Validate a Question item (MCQ or PYQ)
 */
export function validateQuestion(question) {
  const errors = [];

  if (!question) {
    throw new ContentValidationError('Question is null or undefined');
  }

  if (!question.id) {
    errors.push('Question missing "id".');
  }

  const promptText = question.question || question.prompt;
  if (!promptText || typeof promptText !== 'string' || !promptText.trim()) {
    errors.push(`Question "${question.id || 'unknown'}" missing valid text prompt.`);
  }

  if (!Array.isArray(question.options) || question.options.length < 2) {
    errors.push(`Question "${question.id}" must have at least 2 options.`);
  } else {
    // Check correct answer resolution
    let isValidAnswer = false;
    if (typeof question.correctAnswer === 'number') {
      isValidAnswer = question.correctAnswer >= 0 && question.correctAnswer < question.options.length;
    } else if (question.correctOptionId) {
      isValidAnswer = question.options.some((opt) => (typeof opt === 'object' ? opt.id === question.correctOptionId : false));
    } else if (typeof question.answer === 'string') {
      isValidAnswer = question.options.includes(question.answer);
    }

    if (!isValidAnswer) {
      errors.push(`Question "${question.id}" has invalid answer mapping that does not match available options.`);
    }
  }

  if (question.sourceType && !Object.values(SourceType).includes(question.sourceType)) {
    errors.push(`Question "${question.id}" has invalid sourceType "${question.sourceType}".`);
  }

  if (errors.length > 0) {
    throw new ContentValidationError(`Question validation failed for "${question.id}":`, errors);
  }

  return true;
}

/**
 * Validate a Reel item
 */
export function validateReel(reel) {
  const errors = [];

  if (!reel || !reel.id) {
    errors.push('Reel missing "id".');
  }

  if (!reel.title || typeof reel.title !== 'string') {
    errors.push(`Reel "${reel?.id}" missing title.`);
  }

  if (!reel.url || typeof reel.url !== 'string') {
    errors.push(`Reel "${reel?.id}" missing URL.`);
  } else {
    try {
      new URL(reel.url);
    } catch {
      errors.push(`Reel "${reel?.id}" has malformed URL: ${reel.url}`);
    }
  }

  if (errors.length > 0) {
    throw new ContentValidationError(`Reel validation failed for "${reel?.id}":`, errors);
  }

  return true;
}

/**
 * Compute genuine live counts for a subject from actual content (zero fabrication)
 */
export function computeSubjectCounts(subject) {
  if (!subject || !Array.isArray(subject.units)) {
    return {
      totalUnits: 0,
      totalTopics: 0,
      totalHours: 0,
      totalMarks: 0,
      totalCompleteMCQs: 0,
      totalPYQs: 0,
      totalCheatSheets: 0,
      totalLongAnswers: 0,
      totalReels: 0,
    };
  }

  let totalTopics = 0;
  let totalHours = 0;
  let totalMarks = 0;
  let totalCompleteMCQs = 0;
  let totalPYQs = 0;
  let totalCheatSheets = 0;
  let totalLongAnswers = 0;
  let totalReels = 0;

  subject.units.forEach((unit) => {
    totalTopics += Array.isArray(unit.topics) ? unit.topics.length : 0;
    totalHours += typeof unit.hours === 'number' ? unit.hours : 0;
    totalMarks += typeof unit.marks === 'number' ? unit.marks : 0;
    totalCompleteMCQs += Array.isArray(unit.completeQuiz) ? unit.completeQuiz.length : 0;
    totalPYQs += Array.isArray(unit.pyqQuiz) ? unit.pyqQuiz.length : 0;
    totalCheatSheets += Array.isArray(unit.cheatSheet) ? unit.cheatSheet.length : 0;
    totalLongAnswers += Array.isArray(unit.longAnswers) ? unit.longAnswers.length : 0;
    totalReels += Array.isArray(unit.reels) ? unit.reels.length : 0;
  });

  return {
    totalUnits: subject.units.length,
    totalTopics,
    totalHours,
    totalMarks,
    totalCompleteMCQs,
    totalPYQs,
    totalCheatSheets,
    totalLongAnswers,
    totalReels,
  };
}
