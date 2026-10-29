/**
 * Draft Study Reel Template
 * Instructors can copy this template to register new verified Instagram video lessons.
 * 
 * Safety: Status is explicitly 'draft' until an authentic Instagram URL is provided.
 * Unfilled drafts are never surfaced to students.
 */

export const draftReelTemplate = {
  id: 'reel-sample-01',
  title: 'Sample Topic — 60-Second Revision',
  url: '', // Replace with authentic URL: e.g. 'https://www.instagram.com/reel/C2xyz123/'
  platform: 'instagram',
  subjectId: 'iot',
  subjectTitle: 'Internet of Things',
  unitId: '1',
  unitBadge: 'IoT Unit 1',
  topics: ['Sensors', 'Arduino Basics'],
  thumbnail: null, // Optional licensed thumbnail image path
  durationSeconds: 60, // Exact video duration if known
  description: 'Quick visual guide explaining how sensors interface with Arduino microcontrollers.',
  status: 'draft', // Change to 'published' only after link verification
};

