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

const unit1CompleteQuiz = [
  {
    id: 'u1-cq-01',
    question: 'The changing nature of software means software is:',
    options: ['Always fixed', 'Constantly evolving', 'Never updated', 'Only hardware-based'],
    correctAnswer: 1,
    explanation: 'Software changes with user needs and technology.',
  },
  {
    id: 'u1-cq-02',
    question: 'Software engineering mainly helps in:',
    options: ['Building software systematically', 'Selling hardware', 'Drawing only diagrams', 'Reducing electricity use'],
    correctAnswer: 0,
    explanation: 'It provides a proper way to develop software.',
  },
  {
    id: 'u1-cq-03',
    question: 'In the layered technology approach, the foundation is:',
    options: ['Tools', 'Methods', 'Quality focus', 'Testing'],
    correctAnswer: 2,
    explanation: 'Quality focus is the base of software engineering.',
  },
  {
    id: 'u1-cq-04',
    question: 'Which is a layer of software engineering?',
    options: ['Quality focus', 'Printer', 'Keyboard', 'Internet cable'],
    correctAnswer: 0,
    explanation: 'Quality focus is one important layer.',
  },
  {
    id: 'u1-cq-05',
    question: 'A process framework in software engineering provides:',
    options: ['Random activities', 'Structured development steps', 'Only coding rules', 'Only design colors'],
    correctAnswer: 1,
    explanation: 'It organizes development activities step by step.',
  },
  {
    id: 'u1-cq-06',
    question: 'Project tracking and control are used to:',
    options: ['Ignore project progress', 'Monitor and manage project work', 'Remove developers', 'Avoid deadlines'],
    correctAnswer: 1,
    explanation: 'Tracking checks progress and control manages issues.',
  },
  {
    id: 'u1-cq-07',
    question: 'CMMI stands for:',
    options: [
      'Computer Method Management Integration',
      'Capability Maturity Model Integration',
      'Coding Maturity Method Index',
      'Control Method Model Integration',
    ],
    correctAnswer: 1,
    explanation: 'CMMI is the full form.',
  },
  {
    id: 'u1-cq-08',
    question: 'CMMI is mainly used to improve:',
    options: ['Software process quality', 'Hardware speed', 'Screen brightness', 'Network wires'],
    correctAnswer: 0,
    explanation: 'CMMI improves process maturity and quality.',
  },
  {
    id: 'u1-cq-09',
    question: 'Process patterns are:',
    options: [
      'Repeated solutions for process problems',
      'Hardware parts',
      'Testing bugs',
      'User manuals',
    ],
    correctAnswer: 0,
    explanation: 'Process patterns give reusable process solutions.',
  },
  {
    id: 'u1-cq-10',
    question: 'Process assessment is used to:',
    options: ['Check process effectiveness', 'Install software', 'Draw class diagrams', 'Create advertisements'],
    correctAnswer: 0,
    explanation: 'It evaluates how good the process is.',
  },
  {
    id: 'u1-cq-11',
    question: 'PSP stands for:',
    options: ['Personal Software Process', 'Process Software Program', 'Project System Plan', 'Personal System Pattern'],
    correctAnswer: 0,
    explanation: 'PSP means Personal Software Process.',
  },
  {
    id: 'u1-cq-12',
    question: 'TSP stands for:',
    options: ['Team Software Process', 'Testing System Process', 'Technical Software Plan', 'Team System Pattern'],
    correctAnswer: 0,
    explanation: 'TSP means Team Software Process.',
  },
  {
    id: 'u1-cq-13',
    question: 'Personal Software Process mainly focuses on:',
    options: [
      'Individual developer improvement',
      'Only customer meetings',
      'Only hardware testing',
      'Market research',
    ],
    correctAnswer: 0,
    explanation: 'PSP improves the work of individual developers.',
  },
  {
    id: 'u1-cq-14',
    question: 'Team Software Process mainly focuses on:',
    options: ['Team coordination and quality work', 'Only coding alone', 'Only documentation', 'Only deployment'],
    correctAnswer: 0,
    explanation: 'TSP supports teamwork and disciplined development.',
  },
  {
    id: 'u1-cq-15',
    question: 'Waterfall model follows:',
    options: ['Random development', 'Sequential phases', 'Only testing', 'Only coding'],
    correctAnswer: 1,
    explanation: 'Waterfall moves step by step in order.',
  },
  {
    id: 'u1-cq-16',
    question: 'Incremental model delivers software in:',
    options: ['One final step only', 'Small usable parts', 'Hardware modules', 'Random updates'],
    correctAnswer: 1,
    explanation: 'Incremental model gives software piece by piece.',
  },
  {
    id: 'u1-cq-17',
    question: 'RAD model is mainly known for:',
    options: ['Slow delivery', 'Rapid development', 'No planning', 'Only maintenance'],
    correctAnswer: 1,
    explanation: 'RAD focuses on fast development.',
  },
  {
    id: 'u1-cq-18',
    question: 'Prototype model is useful when:',
    options: ['Requirements are unclear', 'Project is finished', 'Hardware is broken', 'No users exist'],
    correctAnswer: 0,
    explanation: 'Prototyping helps clarify user requirements.',
  },
  {
    id: 'u1-cq-19',
    question: 'Spiral model mainly combines:',
    options: [
      'Risk analysis with development',
      'Only coding and printing',
      'Only testing and selling',
      'Hardware and networking',
    ],
    correctAnswer: 0,
    explanation: 'Spiral model is risk-driven.',
  },
  {
    id: 'u1-cq-20',
    question: 'Process technology theories mainly help to:',
    options: [
      'Understand and improve software processes',
      'Buy new computers',
      'Change monitor size',
      'Avoid documentation',
    ],
    correctAnswer: 0,
    explanation: 'They focus on improving development processes.',
  },
];

const unit2CompleteQuiz = [
  {
    id: 'u2-cq-01',
    question: 'Software engineering core principles mainly help to:',
    options: ['Increase software size', 'Build software properly', 'Avoid planning', 'Remove users'],
    correctAnswer: 1,
    explanation: 'Core principles guide proper software development.',
  },
  {
    id: 'u2-cq-02',
    question: 'Communication in software engineering is mainly used to:',
    options: ['Decorate software', 'Understand customer needs', 'Reduce coding speed', 'Delete requirements'],
    correctAnswer: 1,
    explanation: 'Communication helps understand the real problem.',
  },
  {
    id: 'u2-cq-03',
    question: 'Planning in software engineering includes:',
    options: ['Only coding', 'Time, cost, and resources', 'Only testing', 'Only design color'],
    correctAnswer: 1,
    explanation: 'Planning decides schedule, budget, and resources.',
  },
  {
    id: 'u2-cq-04',
    question: 'Modelling means:',
    options: ['Selling software', 'Creating a representation before coding', 'Installing software', 'Writing final report'],
    correctAnswer: 1,
    explanation: 'Modelling shows the system before implementation.',
  },
  {
    id: 'u2-cq-05',
    question: 'Construction principle mainly includes:',
    options: ['Coding and testing', 'Only requirement gathering', 'Only user training', 'Only deployment'],
    correctAnswer: 0,
    explanation: 'Construction turns design into working code.',
  },
  {
    id: 'u2-cq-06',
    question: 'Deployment means:',
    options: [
      'Writing requirements',
      'Delivering software for real use',
      'Drawing diagrams',
      'Creating classes only',
    ],
    correctAnswer: 1,
    explanation: 'Deployment makes software available to users.',
  },
  {
    id: 'u2-cq-07',
    question: 'Requirements Engineering answers:',
    options: [
      'Who will sell software?',
      'What should the software do?',
      'What color should software be?',
      'Where to buy hardware?',
    ],
    correctAnswer: 1,
    explanation: 'It focuses on user and system needs.',
  },
  {
    id: 'u2-cq-08',
    question: 'The first step in the requirement process is to:',
    options: ['Start coding', 'Understand the problem', 'Deploy the system', 'Remove stakeholders'],
    correctAnswer: 1,
    explanation: 'Requirement work starts by understanding the problem.',
  },
  {
    id: 'u2-cq-09',
    question: 'Stakeholders are:',
    options: ['Only programmers', 'People affected by the system', 'Only customers', 'Only testers'],
    correctAnswer: 1,
    explanation: 'Stakeholders include all affected people.',
  },
  {
    id: 'u2-cq-10',
    question: 'Software analysis is done to:',
    options: ['Sell the product', 'Understand requirements deeply', 'Print reports', 'Train users'],
    correctAnswer: 1,
    explanation: 'Analysis studies what the system must do.',
  },
  {
    id: 'u2-cq-11',
    question: 'An analysis model helps by:',
    options: [
      'Increasing confusion',
      'Showing system functions clearly',
      'Replacing coding',
      'Removing testing',
    ],
    correctAnswer: 1,
    explanation: 'It gives a clear structured view of requirements.',
  },
  {
    id: 'u2-cq-12',
    question: 'In data modelling, a real-world object is called:',
    options: ['Attribute', 'Entity', 'Method', 'Process'],
    correctAnswer: 1,
    explanation: 'Entity means the object about which data is stored.',
  },
  {
    id: 'u2-cq-13',
    question: 'In data modelling, a property of an entity is called:',
    options: ['Relationship', 'Method', 'Attribute', 'Class'],
    correctAnswer: 2,
    explanation: 'Attributes describe an entity.',
  },
  {
    id: 'u2-cq-14',
    question: 'Object-Oriented Analysis focuses on:',
    options: ['Objects and classes', 'Only hardware', 'Only data flow', 'Only deployment'],
    correctAnswer: 0,
    explanation: 'OOA studies classes, objects, and relationships.',
  },
  {
    id: 'u2-cq-15',
    question: 'A flow-oriented model mainly shows:',
    options: ['Color design', 'Data movement in the system', 'Salary details', 'Only class names'],
    correctAnswer: 1,
    explanation: 'It explains how data flows through processes.',
  },
  {
    id: 'u2-cq-16',
    question: 'A class-based model focuses on the:',
    options: [
      'Dynamic behavior only',
      'Static structure of the system',
      'User training process',
      'Final installation',
    ],
    correctAnswer: 1,
    explanation: 'Class-based model shows classes and relationships.',
  },
  {
    id: 'u2-cq-17',
    question: 'Behavioural model shows:',
    options: [
      'Database tables only',
      'How the system reacts to events',
      'Only module names',
      'Only coding rules',
    ],
    correctAnswer: 1,
    explanation: 'It explains dynamic system behavior.',
  },
  {
    id: 'u2-cq-18',
    question: 'Which is a software design approach?',
    options: ['Top-down design', 'Recovery testing', 'Beta testing', 'Debugging'],
    correctAnswer: 0,
    explanation: 'Top-down is a standard design approach.',
  },
  {
    id: 'u2-cq-19',
    question: 'Modularity means:',
    options: [
      'Making software bigger',
      'Dividing software into smaller parts',
      'Removing classes',
      'Avoiding design',
    ],
    correctAnswer: 1,
    explanation: 'Modularity breaks software into manageable modules.',
  },
  {
    id: 'u2-cq-20',
    question: 'Pattern-based design uses:',
    options: [
      'Random coding ideas',
      'Reusable design solutions',
      'Only testing methods',
      'Only user feedback',
    ],
    correctAnswer: 1,
    explanation: 'Design patterns are proven reusable solutions.',
  },
];

export const units = [1, 2, 3, 4, 5].map((number) => ({
  id: String(number),
  title:
    number === 1
      ? 'Unit 1: Introduction to Software Engineering'
      : number === 2
      ? 'Unit 2: Software Development Activities'
      : number === 3
        ? 'Unit 3: Software Testing Basics'
        : `Unit ${number}`,
  description: `Placeholder summary for Unit ${number}. Replace with your exact syllabus topics, outcomes, and priorities.`,
  completeQuiz:
    number === 1
      ? unit1CompleteQuiz
      : number === 2
        ? unit2CompleteQuiz
        : number === 3
          ? unit3CompleteQuiz
          : makeQuiz(number, 'complete'),
  pyqQuiz: makeQuiz(number, 'pyq'),
  cheatSheet: makeCheatSheet(number),
}));
