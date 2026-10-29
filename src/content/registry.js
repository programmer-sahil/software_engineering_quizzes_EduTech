/**
 * EduTech Content System - Single Source of Truth Subject Registry
 * Phase 02: Extensible Subject and Content Architecture
 */

import { adaptLegacyIoTSubject, adaptLegacySoftwareEngineeringSubject } from './adapters/legacyAdapter.js';
import { ContentStatus } from './types.js';
import { computeSubjectCounts, validateSubject } from './validator.js';

class ContentRegistry {
  constructor() {
    this._subjects = new Map();
    this._initDefaultSubjects();
  }

  _initDefaultSubjects() {
    // Register IoT (Active) and Software Engineering (Disabled for this semester)
    const iot = adaptLegacyIoTSubject();
    const se = adaptLegacySoftwareEngineeringSubject();

    validateSubject(iot, { strict: true });
    validateSubject(se, { strict: false }); // SE legacy schema has flexible unit fields

    this._subjects.set(iot.id, iot);
    this._subjects.set(se.id, se);
  }

  /**
   * Register a new subject dynamically without editing page components
   */
  registerSubject(subjectConfig, options = { strict: true }) {
    validateSubject(subjectConfig, options);

    if (this._subjects.has(subjectConfig.id)) {
      console.warn(`[ContentRegistry] Overwriting existing subject with id "${subjectConfig.id}".`);
    }

    this._subjects.set(subjectConfig.id, subjectConfig);
    return subjectConfig;
  }

  /**
   * Get all registered subjects sorted by visibleOrder
   */
  getAllSubjects({ includeDrafts = false } = {}) {
    const list = Array.from(this._subjects.values());
    const filtered = includeDrafts ? list : list.filter((s) => s.status !== ContentStatus.DRAFT);
    return filtered.sort((a, b) => (a.visibleOrder ?? 99) - (b.visibleOrder ?? 99));
  }

  /**
   * Get only active, non-disabled subjects
   */
  getActiveSubjects() {
    return this.getAllSubjects().filter((s) => s.status === ContentStatus.ACTIVE && !s.disabled);
  }

  /**
   * Find subject by ID or slug
   */
  getSubject(idOrSlug) {
    if (!idOrSlug) return undefined;
    const direct = this._subjects.get(idOrSlug);
    if (direct) return direct;

    return Array.from(this._subjects.values()).find(
      (s) => s.id === idOrSlug || s.slug === idOrSlug
    );
  }

  /**
   * Find subject and unit by identifiers
   */
  getSubjectUnit(subjectIdOrSlug, unitIdOrSlug) {
    const subject = this.getSubject(subjectIdOrSlug);
    if (!subject || !Array.isArray(subject.units)) {
      return { subject: undefined, unit: undefined };
    }

    const unitStr = String(unitIdOrSlug);
    const unit = subject.units.find(
      (u) =>
        String(u.id) === unitStr ||
        u.slug === unitStr ||
        `unit-${u.id}` === unitStr ||
        `unit-${u.slug}` === unitStr
    );

    return { subject, unit };
  }

  /**
   * Compute live counts for a subject (zero fabrication)
   */
  getSubjectCounts(idOrSlug) {
    const subject = this.getSubject(idOrSlug);
    return computeSubjectCounts(subject);
  }

  /**
   * Query all verified questions across subjects and units
   */
  getAllQuestions({ subjectId, unitId, sourceType } = {}) {
    const results = [];
    const subjects = subjectId ? [this.getSubject(subjectId)].filter(Boolean) : this.getAllSubjects();

    subjects.forEach((subject) => {
      subject.units.forEach((unit) => {
        if (unitId && String(unit.id) !== String(unitId)) return;

        if (!sourceType || sourceType === 'pyq') {
          if (Array.isArray(unit.pyqQuiz)) {
            unit.pyqQuiz.forEach((q) => {
              results.push({
                ...q,
                subjectId: subject.id,
                unitId: unit.id,
                sourceType: 'pyq',
              });
            });
          }
        }

        if (!sourceType || sourceType === 'practice') {
          if (Array.isArray(unit.completeQuiz)) {
            unit.completeQuiz.forEach((q) => {
              results.push({
                ...q,
                subjectId: subject.id,
                unitId: unit.id,
                sourceType: 'practice',
              });
            });
          }
        }
      });
    });

    return results;
  }

  /**
   * Query all verified cheat sheets across subjects and units
   */
  getAllCheatSheets({ subjectId, unitId, topic } = {}) {
    const results = [];
    const subjects = subjectId ? [this.getSubject(subjectId)].filter(Boolean) : this.getAllSubjects();

    subjects.forEach((subject) => {
      subject.units.forEach((unit) => {
        if (unitId && String(unit.id) !== String(unitId)) return;

        if (Array.isArray(unit.cheatSheet) && unit.cheatSheet.length > 0) {
          unit.cheatSheet.forEach((sheet) => {
            if (topic && !sheet.topics?.includes(topic)) return;
            results.push({
              ...sheet,
              subjectId: subject.id,
              subjectTitle: subject.title,
              unitId: unit.id,
              unitTitle: unit.title,
            });
          });
        }
      });
    });

    return results;
  }

  /**
   * Query all verified Instagram Reels across subjects and units
   */
  getAllReels({ subjectId, unitId, topic } = {}) {
    const results = [];
    const subjects = subjectId ? [this.getSubject(subjectId)].filter(Boolean) : this.getAllSubjects();

    subjects.forEach((subject) => {
      subject.units.forEach((unit) => {
        if (unitId && String(unit.id) !== String(unitId)) return;

        if (Array.isArray(unit.reels) && unit.reels.length > 0) {
          unit.reels.forEach((reel) => {
            if (reel.status === ContentStatus.DRAFT) return;
            if (topic && !reel.topics?.includes(topic)) return;
            results.push({
              ...reel,
              subjectId: subject.id,
              subjectTitle: subject.title,
              unitId: unit.id,
              unitTitle: unit.title,
            });
          });
        }
      });
    });

    return results;
  }
}

// Export singleton instance
export const registry = new ContentRegistry();

// Export convenient standalone accessors
export const getAllSubjects = (options) => registry.getAllSubjects(options);
export const getActiveSubjects = () => registry.getActiveSubjects();
export const getSubject = (idOrSlug) => registry.getSubject(idOrSlug);
export const getSubjectUnit = (subjectId, unitId) => registry.getSubjectUnit(subjectId, unitId);
export const getSubjectCounts = (idOrSlug) => registry.getSubjectCounts(idOrSlug);
export const registerSubject = (config, options) => registry.registerSubject(config, options);
export const getAllQuestions = (filter) => registry.getAllQuestions(filter);
export const getAllCheatSheets = (filter) => registry.getAllCheatSheets(filter);
export const getAllReels = (filter) => registry.getAllReels(filter);
