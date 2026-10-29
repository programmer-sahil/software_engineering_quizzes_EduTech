/**
 * EduTech Content System - Types & Status Constants
 * Phase 02: Extensible Subject and Content Architecture
 */

export const ContentStatus = {
  ACTIVE: 'active',
  DISABLED: 'disabled',
  COMING_SOON: 'coming_soon',
  DRAFT: 'draft',
};

export const SourceType = {
  PRACTICE: 'practice',
  PYQ: 'pyq',
};

export const Platform = {
  INSTAGRAM: 'instagram',
  YOUTUBE: 'youtube',
};

/**
 * Standard Subject Display Fields:
 * - id: string (unique stable identifier, e.g. 'iot')
 * - slug: string (URL route identifier, e.g. 'iot')
 * - title: string (Full display name, e.g. 'Internet of Things')
 * - shortTitle: string (Short badge name, e.g. 'IoT')
 * - semester: string (e.g. 'Diploma 5th Semester')
 * - stream: string (e.g. 'Computer Science & Technology')
 * - subtitle: string
 * - summary: string
 * - description: string
 * - status: 'active' | 'disabled' | 'coming_soon' | 'draft'
 * - visibleOrder: number
 * - icon: string
 * - badge: string
 * - route: string
 * - unitRouteBase: string
 * - aim?: string
 * - courseObjectives?: string
 * - units: Array<Unit>
 */

/**
 * Standard Unit Display Fields:
 * - id: string (e.g. '1', '2')
 * - unitNumber: number (1, 2)
 * - title: string (e.g. 'Unit 1: IoT')
 * - shortTitle: string (e.g. 'IoT')
 * - hours: number
 * - marks: number
 * - module: string ('A', 'B', 'C')
 * - summary: string
 * - description: string
 * - topics: Array<string>
 * - topicRevision: Array<TopicRevision>
 * - longAnswersRoute?: string
 * - longAnswers?: Array<LongAnswer>
 * - pyqQuiz: Array<Question>
 * - pyqQuizTitle?: string
 * - pyqQuizSubtitle?: string
 * - completeQuiz: Array<Question>
 * - cheatSheet: Array<CheatSheetSection>
 * - reels: Array<Reel>
 * - commonQuestions: Array<Question>
 * - placeholders: { completeQuiz, pyqQuiz, cheatSheet, reels, commonQuestions }
 */

