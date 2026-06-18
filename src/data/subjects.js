import { iotSubjectInfo, iotUnits } from './iotUnits';
import { softwareEngineeringUnits } from './softwareEngineeringUnits';

export const subjects = [
  {
    id: 'software-engineering',
    slug: 'software-engineering',
    name: 'Software Engineering',
    shortName: 'Software Engineering',
    semester: 'Diploma 4th Semester',
    stream: 'Computer Science & Technology',
    subtitle: 'Diploma 4th Semester Computer Science & Technology',
    description:
      'Learn software development, testing, project management, websites, and apps with unit-wise quiz, PYQ practice, and cheat sheets.',
    cta: 'Explore Software Engineering',
    route: '/software-engineering',
    unitRouteBase: '/software-engineering/unit',
    eyebrow: 'Software Engineering',
    unitGridTitle: 'Choose Your Software Engineering Unit',
    unitGridDescription:
      'Revise every unit with MCQ practice, PYQ patterns, cheat sheets, and highly important common-question support.',
    badge: 'Existing quiz + PYQ + cheat sheets',
    units: softwareEngineeringUnits,
  },
  {
    id: 'iot',
    slug: 'iot',
    name: 'Internet of Things',
    shortName: 'IoT',
    semester: iotSubjectInfo.semester,
    stream: 'Computer Science & Technology',
    subtitle: 'Diploma 5th Semester Computer Science & Technology',
    description:
      'Learn IoT concepts, protocols, architecture, Web of Things, Arduino, sensors, actuators, and industrial IoT applications with exam-focused preparation.',
    cta: 'Explore IoT',
    route: '/iot',
    unitRouteBase: '/iot/unit',
    eyebrow: 'Internet of Things',
    unitGridTitle: 'Choose Your IoT Unit',
    unitGridDescription:
      'Study module-wise IoT topics with syllabus summaries, marks, hours, learning focus, and placeholders ready for quiz, PYQ, and cheat-sheet content.',
    badge: 'New Diploma 5th Sem subject',
    aim: iotSubjectInfo.aim,
    courseObjectives: iotSubjectInfo.courseObjectives,
    units: iotUnits,
  },
];

export const findSubject = (subjectId = 'software-engineering') =>
  subjects.find((subject) => subject.id === subjectId || subject.slug === subjectId);

export const findSubjectUnit = (subjectId, unitId) => {
  const subject = findSubject(subjectId);
  const unit = subject?.units.find((item) => item.id === unitId || `unit-${item.id}` === unitId);

  return { subject, unit };
};
