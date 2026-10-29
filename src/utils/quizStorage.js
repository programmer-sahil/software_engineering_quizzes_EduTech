/**
 * EduTech Quiz Storage & Persistence Utility
 * Phase 06: MCQ & PYQ Practice System
 * 
 * Safely persists bookmarks, autosave sessions, and authentic attempt history in localStorage.
 * Handles storage unavailability gracefully (e.g., incognito or restricted environments).
 */

const BOOKMARKS_KEY = 'edutech_question_bookmarks';
const AUTOSAVE_PREFIX = 'edutech_quiz_session_';
const HISTORY_KEY = 'edutech_practice_history';
const MAX_SESSION_AGE_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

function isStorageAvailable() {
  try {
    const test = '__storage_test__';
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch {
    return false;
  }
}

// ==========================================
// 1. QUESTION BOOKMARKS
// ==========================================

export function getBookmarks() {
  if (!isStorageAvailable()) return [];
  try {
    const raw = localStorage.getItem(BOOKMARKS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function isBookmarked(questionId) {
  if (!questionId) return false;
  const bookmarks = getBookmarks();
  return bookmarks.includes(String(questionId));
}

export function toggleBookmark(questionId) {
  if (!isStorageAvailable() || !questionId) return false;
  try {
    const qId = String(questionId);
    const bookmarks = getBookmarks();
    const index = bookmarks.indexOf(qId);
    let updated;
    let nowBookmarked = false;

    if (index >= 0) {
      updated = bookmarks.filter((id) => id !== qId);
      nowBookmarked = false;
    } else {
      updated = [...bookmarks, qId];
      nowBookmarked = true;
    }

    localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(updated));
    return nowBookmarked;
  } catch {
    return false;
  }
}

// ==========================================
// 2. QUIZ AUTOSAVE & SESSION RESUME
// ==========================================

export function saveQuizSession(sessionKey, sessionData) {
  if (!isStorageAvailable() || !sessionKey) return;
  try {
    const payload = {
      ...sessionData,
      savedAt: Date.now(),
    };
    localStorage.setItem(`${AUTOSAVE_PREFIX}${sessionKey}`, JSON.stringify(payload));
  } catch (err) {
    console.warn('[quizStorage] Failed to autosave quiz session:', err);
  }
}

export function loadQuizSession(sessionKey) {
  if (!isStorageAvailable() || !sessionKey) return null;
  try {
    const raw = localStorage.getItem(`${AUTOSAVE_PREFIX}${sessionKey}`);
    if (!raw) return null;
    const session = JSON.parse(raw);

    // Validate age
    if (!session.savedAt || Date.now() - session.savedAt > MAX_SESSION_AGE_MS) {
      clearQuizSession(sessionKey);
      return null;
    }

    return session;
  } catch {
    return null;
  }
}

export function clearQuizSession(sessionKey) {
  if (!isStorageAvailable() || !sessionKey) return;
  try {
    localStorage.removeItem(`${AUTOSAVE_PREFIX}${sessionKey}`);
  } catch {
    // Ignore error
  }
}

// ==========================================
// 3. AUTHENTIC PRACTICE HISTORY
// ==========================================

export function recordQuizAttempt({
  subjectId = 'iot',
  unitId = '1',
  quizTitle = 'Practice Quiz',
  total = 0,
  score = 0,
  percentage = 0,
  mode = 'practice',
}) {
  if (!isStorageAvailable() || total === 0) return;
  try {
    const history = getPracticeHistory();
    const newAttempt = {
      id: `attempt_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      subjectId,
      unitId,
      quizTitle,
      total,
      score,
      percentage: Math.round(percentage),
      mode,
      timestamp: Date.now(),
    };

    // Keep last 50 attempts to avoid unbounded growth
    const updated = [newAttempt, ...history].slice(0, 50);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(updated));

    // Also update last studied unit for home quick action
    localStorage.setItem(
      'edutech_last_unit',
      JSON.stringify({
        subjectId,
        subjectName: subjectId === 'iot' ? 'Internet of Things' : 'Diploma',
        unitId,
        route: `/${subjectId}/unit/${unitId}`,
        lastScore: `${score}/${total}`,
        updatedAt: Date.now(),
      })
    );
  } catch (err) {
    console.warn('[quizStorage] Failed to record quiz attempt:', err);
  }
}

export function getPracticeHistory() {
  if (!isStorageAvailable()) return [];
  try {
    const raw = localStorage.getItem(HISTORY_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function getUnitPracticeStats(subjectId, unitId) {
  const history = getPracticeHistory();
  const unitAttempts = history.filter(
    (h) => String(h.subjectId) === String(subjectId) && String(h.unitId) === String(unitId)
  );

  if (unitAttempts.length === 0) {
    return {
      attemptCount: 0,
      bestScore: null,
      bestPercentage: null,
      lastAttemptAt: null,
    };
  }

  const bestAttempt = unitAttempts.reduce((best, curr) =>
    curr.percentage > (best?.percentage ?? -1) ? curr : best
  );

  return {
    attemptCount: unitAttempts.length,
    bestScore: `${bestAttempt.score}/${bestAttempt.total}`,
    bestPercentage: bestAttempt.percentage,
    lastAttemptAt: unitAttempts[0].timestamp,
  };
}

