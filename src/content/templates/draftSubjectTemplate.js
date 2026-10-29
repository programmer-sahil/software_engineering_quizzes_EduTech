/**
 * Non-Published Template for Future Subjects
 * Phase 02: Extensible Subject and Content Architecture
 *
 * Status is set to DRAFT so it is never exposed in student-facing lists or routes.
 */

import { ContentStatus } from '../types.js';

export const draftSubjectTemplate = {
  id: 'template-future-subject',
  slug: 'future-subject',
  title: 'Future Subject Template (Draft Only)',
  name: 'Future Subject Template (Draft Only)',
  shortTitle: 'Draft Subject',
  shortName: 'Draft',
  semester: 'Diploma Future Semester',
  stream: 'Computer Science & Technology',
  subtitle: 'Template for adding future subjects without altering UI components',
  description:
    'Internal draft template demonstrating how future subjects can be registered purely through configuration data.',
  summary: 'Internal draft template for future subjects.',
  cta: 'Explore Template',
  route: '/future-subject',
  unitRouteBase: '/future-subject/unit',
  eyebrow: 'Future Curriculum',
  unitGridTitle: 'Choose Your Unit',
  unitGridDescription: 'Draft unit listing.',
  badge: 'Internal Draft',
  status: ContentStatus.DRAFT,
  disabled: true,
  disabledLabel: 'Under Development',
  disabledMessage: 'This subject is an authoring template and is not currently published.',
  visibleOrder: 999,
  icon: 'book-open',
  units: [
    {
      id: '1',
      unitNumber: 1,
      slug: '1',
      title: 'Unit 1: Fundamentals (Draft)',
      shortTitle: 'Fundamentals',
      hours: 10,
      marks: 10,
      module: 'A',
      description: 'Draft unit outline for content authoring.',
      summary: 'Draft unit outline for content authoring.',
      topics: ['Topic 1 Overview', 'Topic 2 Core Concepts'],
      topicRevision: [],
      completeQuiz: [],
      pyqQuiz: [],
      cheatSheet: [],
      reels: [],
      commonQuestions: [],
      placeholders: {
        completeQuiz: 'Quiz questions will be added soon.',
        pyqQuiz: 'PYQ questions will be added soon.',
        cheatSheet: 'Cheat sheet notes will be added soon.',
        reels: 'Reels will be added soon.',
      },
    },
  ],
};
