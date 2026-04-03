export const BRAND = {
  title: 'Software Engineering Learning Hub',
  heroSubtitle: 'Learn Unit-wise with Quiz, PYQ Practice, and Cheat Sheets',
  madeBy: 'SK SAHIL',
  subtitle: 'Freelance AI Developer, Coding Tutor',
  bannerText: 'EduTech',
  promoLine: 'Quality Teaching & Admission is going on',
  contact: '+91 72782 39699',
};

const makeQuiz = (unitNumber, variant) => {
  const label = variant === 'pyq' ? 'PYQ' : 'Complete';

  return [
    {
      id: `${variant}-${unitNumber}-1`,
      question: `(${label}) Unit ${unitNumber}: Which best describes software requirement elicitation?`,
      options: [
        'Collecting stakeholder needs systematically',
        'Writing production code directly',
        'Skipping user interviews',
        'Designing UI color themes only',
      ],
      correctAnswer: 0,
      explanation: 'Elicitation focuses on understanding and capturing stakeholder expectations.',
    },
    {
      id: `${variant}-${unitNumber}-2`,
      question: `(${label}) Unit ${unitNumber}: Which process model is most risk-driven?`,
      options: ['Waterfall', 'Spiral', 'V-Model', 'Prototype-only'],
      correctAnswer: 1,
      explanation: 'Spiral model emphasizes iterative development with explicit risk analysis.',
    },
    {
      id: `${variant}-${unitNumber}-3`,
      question: `(${label}) Unit ${unitNumber}: Verification primarily asks:`,
      options: [
        'Are we building the right product?',
        'Are we building the product right?',
        'Is this product profitable?',
        'Is deployment complete?',
      ],
      correctAnswer: 1,
      explanation: 'Verification checks conformance to specifications and process correctness.',
    },
    {
      id: `${variant}-${unitNumber}-4`,
      question: `(${label}) Unit ${unitNumber}: Which is a non-functional requirement?`,
      options: [
        'User can reset password',
        'System must handle 5,000 requests/minute',
        'Admin can add a new course',
        'Student can attempt quiz',
      ],
      correctAnswer: 1,
      explanation: 'Performance/scalability constraints are non-functional requirements.',
    },
    {
      id: `${variant}-${unitNumber}-5`,
      question: `(${label}) Unit ${unitNumber}: Which activity belongs to software testing?`,
      options: [
        'Requirement gathering',
        'Defect detection and validation',
        'Project budgeting only',
        'Hardware procurement',
      ],
      correctAnswer: 1,
      explanation: 'Testing validates behavior and identifies defects before release.',
    },
  ];
};

const makeCheatSheet = (unitNumber) => [
  {
    id: `cs-${unitNumber}-1`,
    heading: 'Core Concepts',
    keyTerms: ['SDLC', 'Requirement', 'Verification', 'Validation'],
    points: [
      'Software Engineering is a systematic and disciplined approach to software development.',
      'Functional requirements define what the system should do.',
      'Non-functional requirements define constraints such as performance and security.',
    ],
    quickBox: 'Quick Tip: Always support long answers with definition + example + diagram mention.',
  },
  {
    id: `cs-${unitNumber}-2`,
    heading: 'Exam Revision Formula',
    keyTerms: ['Model Selection', 'Quality Attributes', 'Metrics'],
    points: [
      'Compare process models by flexibility, risk handling, and documentation level.',
      'Quality attributes: reliability, maintainability, usability, performance.',
      'Use one real-world scenario to strengthen each answer.',
    ],
    quickBox: 'Write model differences in table format for maximum clarity.',
  },
  {
    id: `cs-${unitNumber}-3`,
    heading: 'Last-Minute Checklist',
    keyTerms: ['Definitions', 'Diagrams', 'PYQ Mapping'],
    points: [
      'Revise top definitions and abbreviations before tests.',
      'Practice at least 10 MCQs and 2 PYQ-style theory questions.',
      'Map each unit topic to one previous-year question pattern.',
    ],
    quickBox: '30-minute revision loop: Definitions -> MCQ -> PYQ -> Cheat Sheet.',
  },
];

const unit3CompleteQuiz = [
  {
    id: 'u3-cq-01',
    question: 'What is the main purpose of software testing?',
    options: ['To write code', 'To find defects', 'To design database', 'To deploy software'],
    correctAnswer: 1,
    explanation: 'Testing mainly helps detect errors.',
  },
  {
    id: 'u3-cq-02',
    question: 'Testing improves software:',
    options: ['Color', 'Quality', 'Size', 'Price'],
    correctAnswer: 1,
    explanation: 'Testing makes software more reliable and correct.',
  },
  {
    id: 'u3-cq-03',
    question: 'A planned and step-by-step way of testing is called:',
    options: ['Random testing', 'Strategic approach', 'Fast coding', 'Deployment testing'],
    correctAnswer: 1,
    explanation: 'Strategic approach means systematic testing.',
  },
  {
    id: 'u3-cq-04',
    question: 'Which testing comes first?',
    options: ['System testing', 'Validation testing', 'Unit testing', 'Beta testing'],
    correctAnswer: 2,
    explanation: 'Testing starts from the smallest unit.',
  },
  {
    id: 'u3-cq-05',
    question: 'Unit testing checks:',
    options: ['Whole system', 'Small module', 'User feedback', 'Network only'],
    correctAnswer: 1,
    explanation: 'Unit testing tests one small part.',
  },
  {
    id: 'u3-cq-06',
    question: 'Integration testing checks:',
    options: ['Module interaction', 'Only code style', 'Only database size', 'Only output screen'],
    correctAnswer: 0,
    explanation: 'It checks whether modules work together.',
  },
  {
    id: 'u3-cq-07',
    question: 'Which is an integration testing approach?',
    options: ['Top-down', 'Black-green', 'Input-output', 'Alpha-beta'],
    correctAnswer: 0,
    explanation: 'Top-down is a standard integration approach.',
  },
  {
    id: 'u3-cq-08',
    question: 'Regression testing is done after:',
    options: ['Requirement gathering', 'Design only', 'Changes or bug fixes', 'User training'],
    correctAnswer: 2,
    explanation: 'It checks old features after updates.',
  },
  {
    id: 'u3-cq-09',
    question: 'Smoke testing is used to check:',
    options: ['Full security', 'Basic build stability', 'Final user acceptance', 'Coding standards'],
    correctAnswer: 1,
    explanation: 'Smoke testing checks main functions quickly.',
  },
  {
    id: 'u3-cq-10',
    question: 'Validation testing checks whether:',
    options: ['Code is short', 'Product meets user needs', 'Design is colorful', 'Program has comments'],
    correctAnswer: 1,
    explanation: 'It confirms the right product is built.',
  },
  {
    id: 'u3-cq-11',
    question: 'Alpha testing is usually done by:',
    options: ['Real users only', 'Internal team', 'Customers at home', 'Hardware engineers only'],
    correctAnswer: 1,
    explanation: 'Alpha testing is done at developer side.',
  },
  {
    id: 'u3-cq-12',
    question: 'Beta testing is usually done by:',
    options: [
      'Internal developers only',
      'Real users in real environment',
      'Only project manager',
      'Only testers in lab',
    ],
    correctAnswer: 1,
    explanation: 'Beta testing uses actual users.',
  },
  {
    id: 'u3-cq-13',
    question: 'System testing checks:',
    options: ['Single function only', 'Complete software system', 'Only class diagram', 'Only one input'],
    correctAnswer: 1,
    explanation: 'It tests the whole system.',
  },
  {
    id: 'u3-cq-14',
    question: 'Which testing checks recovery after failure?',
    options: ['Recovery testing', 'Unit testing', 'Smoke testing', 'White box testing'],
    correctAnswer: 0,
    explanation: 'It checks system recovery after crash.',
  },
  {
    id: 'u3-cq-15',
    question: 'Which testing checks protection from unauthorized access?',
    options: ['Stress testing', 'Security testing', 'Smoke testing', 'Regression testing'],
    correctAnswer: 1,
    explanation: 'Security testing checks safety of data and access.',
  },
  {
    id: 'u3-cq-16',
    question: 'Which testing checks software under heavy load?',
    options: ['Performance testing', 'Stress testing', 'Unit testing', 'Alpha testing'],
    correctAnswer: 1,
    explanation: 'Stress testing checks extreme conditions.',
  },
  {
    id: 'u3-cq-17',
    question: 'Black box testing focuses on:',
    options: ['Internal code', 'Input and output', 'Loops only', 'Variables only'],
    correctAnswer: 1,
    explanation: 'It tests behavior without seeing code.',
  },
  {
    id: 'u3-cq-18',
    question: 'White box testing focuses on:',
    options: ['External user view', 'Internal logic and code', 'Color of interface', 'Customer opinion'],
    correctAnswer: 1,
    explanation: 'It checks paths, logic, and conditions.',
  },
  {
    id: 'u3-cq-19',
    question: 'Debugging means:',
    options: ['Writing requirements', 'Finding and fixing errors', 'Installing software', 'Drawing diagrams'],
    correctAnswer: 1,
    explanation: 'Debugging removes the cause of bugs.',
  },
  {
    id: 'u3-cq-20',
    question: 'Which is a debugging strategy?',
    options: ['Backtracking', 'Deployment', 'Validation', 'Modelling'],
    correctAnswer: 0,
    explanation: 'Backtracking traces error source backward.',
  },
];

export const units = [1, 2, 3, 4, 5].map((number) => ({
  id: String(number),
  title: number === 3 ? 'Unit 3: Software Testing Basics' : `Unit ${number}`,
  description: `Placeholder summary for Unit ${number}. Replace with your exact syllabus topics, outcomes, and priorities.`,
  completeQuiz: number === 3 ? unit3CompleteQuiz : makeQuiz(number, 'complete'),
  pyqQuiz: makeQuiz(number, 'pyq'),
  cheatSheet: makeCheatSheet(number),
}));
