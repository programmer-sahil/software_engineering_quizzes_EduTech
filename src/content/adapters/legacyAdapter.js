/**
 * EduTech Content System - Legacy Backward-Compatible Adapter
 * Phase 02: Extensible Subject and Content Architecture
 *
 * Wraps existing data files verbatim without altering a single byte.
 */

import { iotSubjectInfo, iotUnits } from '../../data/iotUnits.js';
import { unit1LongAnswers } from '../../data/iotLongAnswers.js';
import { iotUnit1Quiz, iotUnit1PyqQuestions } from '../../data/iotUnit1Quiz.js';
import { softwareEngineeringUnits } from '../../data/softwareEngineeringUnits.js';
import { BRAND } from '../../data/units.js';
import { ContentStatus } from '../types.js';
import {
  getIotUnitQuestions,
  getIotUnitPyqs,
  getIotUnitAvailableYears,
} from '../iotQuestionLoader.js';
import {
  getIotUnitLongQuestions,
  getIotUnitLongQuestionStats,
} from '../iotLongQuestionLoader.js';
import {
  getIotUnitCheatSheetSections,
} from '../iotCheatSheetLoader.js';

/**
 * Adapt legacy IoT subject and units into normalized schema
 */
export function adaptLegacyIoTSubject() {
  const normalizedUnits = iotUnits.map((unit) => {
    const isUnit1 = String(unit.id) === '1';
    const unitPyqs = getIotUnitPyqs(unit.id);
    const unitAllQuestions = getIotUnitQuestions(unit.id);
    const availableYears = getIotUnitAvailableYears(unit.id);

    return {
      ...unit,
      id: String(unit.id),
      unitNumber: Number(unit.id),
      slug: String(unit.id),
      title: unit.title,
      shortTitle: unit.shortTitle || `Unit ${unit.id}`,
      hours: unit.hours,
      marks: unit.marks,
      module: unit.module,
      description: unit.description,
      summary: unit.summary || unit.description,
      topics: unit.topics || [],
      topicRevision: unit.topicRevision || [],
      longAnswersRoute: undefined, // Handled inside UnitPage "Long Questions" tab
      longQuestions: getIotUnitLongQuestions(unit.id),
      longAnswers: getIotUnitLongQuestions(unit.id),
      longQuestionStats: getIotUnitLongQuestionStats(unit.id),
      pyqQuiz: unitPyqs,
      completeQuiz: unitAllQuestions,
      questions: unitAllQuestions,
      availableYears,
      pyqQuizTitle: `${unit.title} - PYQ MCQ Quiz`,
      pyqQuizSubtitle:
        availableYears.length > 0
          ? `Verified Past Papers (${availableYears.join(', ')}) & Syllabus MCQs`
          : `Syllabus Practice Questions for Unit ${unit.id}`,
      cheatSheet: getIotUnitCheatSheetSections(unit.id),
      reels: [],
      commonQuestions: unit.commonQuestions || [],
      placeholders: {
        completeQuiz: 'Quiz content will be added soon.',
        pyqQuiz:
          unitPyqs.length > 0
            ? undefined
            : 'Official previous-year questions are not in past papers. Practice MCQs are available.',
        cheatSheet: 'Cheat sheet and revision notes will be added soon.',
        reels: 'Topic Instagram reels will be added soon.',
        commonQuestions: 'Important common questions will be added soon.',
      },
    };
  });

  return {
    id: 'iot',
    slug: 'iot',
    name: 'Internet of Things',
    title: 'Internet of Things',
    shortName: 'IoT',
    shortTitle: 'IoT',
    semester: iotSubjectInfo.semester,
    stream: 'Computer Science & Technology',
    subtitle: `${iotSubjectInfo.semester} Computer Science & Technology`,
    description:
      'Learn IoT concepts, protocols, architecture, Web of Things, Arduino, sensors, actuators, and industrial IoT applications with exam-focused preparation.',
    summary:
      'Learn IoT concepts, protocols, architecture, Web of Things, Arduino, sensors, actuators, and industrial IoT applications with exam-focused preparation.',
    cta: 'Explore IoT',
    route: '/iot',
    unitRouteBase: '/iot/unit',
    eyebrow: 'Internet of Things',
    unitGridTitle: 'Choose Your IoT Unit',
    unitGridDescription:
      'Study module-wise IoT topics with syllabus summaries, marks, hours, learning focus, and placeholders ready for quiz, PYQ, and cheat-sheet content.',
    badge: 'Diploma 5th Sem Subject',
    status: ContentStatus.ACTIVE,
    disabled: false,
    visibleOrder: 1,
    icon: 'cpu',
    aim: iotSubjectInfo.aim,
    courseObjectives: iotSubjectInfo.courseObjectives,
    units: normalizedUnits,
  };
}

/**
 * Adapt legacy Software Engineering subject and units into normalized schema
 */
export function adaptLegacySoftwareEngineeringSubject() {
  const normalizedUnits = softwareEngineeringUnits.map((unit) => ({
    ...unit,
    id: String(unit.id),
    unitNumber: Number(unit.id),
    slug: String(unit.id),
    shortTitle: `Unit ${unit.id}`,
    reels: [],
    placeholders: {
      reels: 'Reels for Software Engineering will be available next semester.',
    },
  }));

  return {
    id: 'software-engineering',
    slug: 'software-engineering',
    name: 'Software Engineering',
    title: 'Software Engineering',
    shortName: 'Software Engineering',
    shortTitle: 'Software Engineering',
    semester: 'Diploma 4th Semester',
    stream: 'Computer Science & Technology',
    subtitle: 'Diploma 4th Semester Computer Science & Technology',
    description:
      'Learn software development, testing, project management, websites, and apps with unit-wise quiz, PYQ practice, and cheat sheets.',
    summary:
      'Learn software development, testing, project management, websites, and apps with unit-wise quiz, PYQ practice, and cheat sheets.',
    cta: 'Explore Software Engineering',
    route: '/software-engineering',
    unitRouteBase: '/software-engineering/unit',
    eyebrow: 'Software Engineering',
    unitGridTitle: 'Choose Your Software Engineering Unit',
    unitGridDescription:
      'Revise every unit with MCQ practice, PYQ patterns, cheat sheets, and highly important common-question support.',
    badge: 'Reopens Next Semester',
    status: ContentStatus.DISABLED,
    disabled: true,
    disabledLabel: 'Reopens next semester',
    disabledMessage:
      'Software Engineering is temporarily disabled for this semester. The section and all study material are kept in place for next semester.',
    visibleOrder: 2,
    icon: 'code',
    units: normalizedUnits,
    brand: BRAND,
  };
}
