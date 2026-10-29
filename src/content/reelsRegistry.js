/**
 * EduTech Instagram Reels & Video Registry
 * Phase 07: Study Reels Library
 * 
 * Strict Anti-Hallucination Policy:
 * Only authentic Instagram URLs supplied directly by the instructor are accepted.
 * Incomplete drafts or invalid URLs are strictly excluded from student views.
 */

const INSTAGRAM_URL_REGEX = /^https:\/\/(www\.)?instagram\.com\/(reel|p)\/([A-Za-z0-9_-]+)\/?(\?.*)?$/i;

/**
 * Validates whether a URL is an authentic, secure Instagram Reel or Post link
 * @param {string} url 
 * @returns {boolean}
 */
export function isValidInstagramUrl(url) {
  if (!url || typeof url !== 'string') return false;
  const trimmed = url.trim();
  return INSTAGRAM_URL_REGEX.test(trimmed);
}

/**
 * Extracts the Instagram shortcode ID (e.g., "C2xyz123") from a reel URL
 * @param {string} url 
 * @returns {string|null}
 */
export function extractInstagramId(url) {
  if (!isValidInstagramUrl(url)) return null;
  const match = url.trim().match(/instagram\.com\/(reel|p)\/([A-Za-z0-9_-]+)/i);
  return match ? match[2] : null;
}

/**
 * Format duration seconds into MM:SS
 * @param {number|null} seconds 
 * @returns {string|null}
 */
export function formatReelDuration(seconds) {
  if (typeof seconds !== 'number' || seconds <= 0) return null;
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${String(secs).padStart(2, '0')}`;
}

/**
 * In-memory registry of published and draft study reels
 */
class ReelsRegistry {
  constructor() {
    this._reels = new Map();
  }

  /**
   * Register a new reel item with schema validation
   */
  registerReel(reel) {
    if (!reel || !reel.id) {
      throw new Error('[ReelsRegistry] Reel must have a unique "id".');
    }
    if (!reel.title || typeof reel.title !== 'string') {
      throw new Error(`[ReelsRegistry] Reel "${reel.id}" missing a title.`);
    }

    const isPublished = reel.status === 'published';

    if (isPublished) {
      if (!reel.url || !isValidInstagramUrl(reel.url)) {
        throw new Error(
          `[ReelsRegistry] Published reel "${reel.id}" must have a valid Instagram URL. Received: "${reel.url}".`
        );
      }
    }

    const normalized = {
      id: String(reel.id),
      title: String(reel.title).trim(),
      url: reel.url ? String(reel.url).trim() : '',
      platform: 'instagram',
      subjectId: String(reel.subjectId || 'iot'),
      subjectTitle: String(reel.subjectTitle || (reel.subjectId === 'iot' ? 'Internet of Things' : 'Diploma')),
      unitId: reel.unitId !== undefined && reel.unitId !== null ? String(reel.unitId) : null,
      unitBadge: reel.unitBadge || (reel.unitId ? `Unit ${reel.unitId}` : null),
      topics: Array.isArray(reel.topics) ? reel.topics : [],
      thumbnail: reel.thumbnail || null,
      durationSeconds: typeof reel.durationSeconds === 'number' ? reel.durationSeconds : null,
      durationFormatted: formatReelDuration(reel.durationSeconds),
      description: typeof reel.description === 'string' ? reel.description.trim() : '',
      status: reel.status === 'published' ? 'published' : 'draft',
      instagramId: extractInstagramId(reel.url),
      publishedAt: reel.publishedAt || null,
    };

    this._reels.set(normalized.id, normalized);
    return normalized;
  }

  /**
   * Query published reels matching filters
   */
  getPublishedReels({ subjectId, unitId, topic } = {}) {
    return Array.from(this._reels.values()).filter((reel) => {
      // Must be published and have a valid Instagram URL
      if (reel.status !== 'published') return false;
      if (!isValidInstagramUrl(reel.url)) return false;

      // Subject filter
      if (subjectId && subjectId !== 'all' && reel.subjectId !== String(subjectId)) {
        return false;
      }

      // Unit filter
      if (unitId && unitId !== 'all' && reel.unitId !== String(unitId)) {
        return false;
      }

      // Topic filter
      if (topic && topic !== 'all') {
        const hasTopic = reel.topics.some(
          (t) => t.toLowerCase().includes(topic.toLowerCase())
        );
        if (!hasTopic) return false;
      }

      return true;
    });
  }

  /**
   * Get all registered reels (including drafts, for instructor authoring)
   */
  getAllReels() {
    return Array.from(this._reels.values());
  }

  /**
   * Clear registry (used for test teardown)
   */
  clear() {
    this._reels.clear();
  }
}

export const reelsRegistry = new ReelsRegistry();
export const getPublishedReels = (filters) => reelsRegistry.getPublishedReels(filters);
export const getAllReels = () => reelsRegistry.getAllReels();
export const registerReel = (reel) => reelsRegistry.registerReel(reel);

