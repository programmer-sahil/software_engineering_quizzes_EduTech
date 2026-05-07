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

const unit1CheatSheet = [
  {
    id: 'u1-cs-01',
    heading: 'Unit 1 Cheat Sheet - Introduction to Software Engineering',
    keyTerms: ['Software Engineering', 'Quality', 'Process', 'Evolution'],
    points: [
      'Software is used in banking, health, education, business, and transport.',
      'Modern software must be reliable, maintainable, scalable, and secure.',
      'Software changes due to new needs, technology updates, bug fixes, and feature additions.',
      'Software evolves continuously throughout its lifecycle.',
    ],
    quickBox: 'Exam Focus: Begin answers with definition, then explain need, quality goals, and one real-world example.',
  },
  {
    id: 'u1-cs-02',
    heading: 'Software Engineering Basics',
    keyTerms: ['Systematic', 'Disciplined', 'Measurable', 'Budget'],
    points: [
      'Software Engineering is a systematic, disciplined, and measurable approach to software development.',
      'Primary goal: build quality software on time and within budget.',
      'A good process reduces rework, delays, and project risk.',
    ],
    quickBox: 'Write in exam: "Right software + Right time + Right cost + Right quality."',
  },
  {
    id: 'u1-cs-03',
    heading: 'Layered Technology Approach',
    keyTerms: ['Quality Focus', 'Process', 'Methods', 'Tools'],
    points: [
      'Quality Focus: foundation for all engineering activities.',
      'Process: framework that organizes development work.',
      'Methods: technical how-to for analysis, design, coding, and testing.',
      'Tools: automated or semi-automated support for process and methods.',
    ],
    quickBox: 'Memory Hook: Quality -> Process -> Methods -> Tools.',
  },
  {
    id: 'u1-cs-04',
    heading: 'Process Framework Activities',
    keyTerms: ['Communication', 'Planning', 'Modelling', 'Construction', 'Deployment'],
    points: [
      'Communication: gather and clarify customer requirements.',
      'Planning: estimate effort, schedule tasks, and allocate resources.',
      'Modelling: create analysis and design representations.',
      'Construction: coding plus testing activities.',
      'Deployment: deliver software, collect feedback, and improve.',
    ],
    quickBox: 'Framework Flow: Communication -> Planning -> Modelling -> Construction -> Deployment.',
  },
  {
    id: 'u1-cs-05',
    heading: 'Project Control, Maturity, and Team Discipline',
    keyTerms: ['Tracking', 'Control', 'CMMI', 'PSP', 'TSP'],
    points: [
      'Project tracking and control monitors progress, compares with plan, and controls delay/cost.',
      'CMMI (Capability Maturity Model Integration) improves process maturity and software quality.',
      'Process patterns are reusable process solutions for common project situations.',
      'Process assessment evaluates process effectiveness and improvement needs.',
      'PSP = Personal Software Process (individual discipline).',
      'TSP = Team Software Process (team-level planning and quality discipline).',
      'Process technology combines methods, tools, and techniques to improve software processes.',
    ],
    quickBox: 'Remember: PSP is individual-focused, TSP is team-focused, CMMI is organization maturity-focused.',
  },
  {
    id: 'u1-cs-06',
    heading: 'Process Models at a Glance',
    keyTerms: ['Waterfall', 'Incremental', 'RAD', 'Prototype', 'Spiral'],
    points: [
      'Waterfall: sequential phases executed step-by-step.',
      'Incremental: software delivered in small usable parts.',
      'RAD: emphasizes rapid development and quick delivery.',
      'Prototype: useful when requirements are unclear.',
      'Spiral: risk-driven model with iterative refinement.',
    ],
    quickBox:
      'Quick Revision Box: Software engineering = disciplined development | CMMI improves process maturity | PSP = individual | TSP = team | Waterfall = sequential | Spiral = risk-based',
  },
];

const unit2CheatSheet = [
  {
    id: 'u2-cs-01',
    heading: 'Unit 2 Cheat Sheet - Software Development Activities',
    keyTerms: ['Core Principles', 'Planning', 'Testing', 'Documentation'],
    points: [
      'Understand the problem clearly before writing any solution.',
      'Plan first, then implement with milestones.',
      'Divide work into modules for easier development and maintenance.',
      'Keep design simple and easy to understand.',
      'Test continuously and prepare for requirement changes.',
      'Maintain documentation throughout the project lifecycle.',
    ],
    quickBox: 'Core Rule: Understand -> Plan -> Build in modules -> Test continuously -> Document.',
  },
  {
    id: 'u2-cs-02',
    heading: 'Communication and Planning',
    keyTerms: ['Communication', 'Scope', 'Time', 'Cost', 'Risk', 'Milestones'],
    points: [
      'Communication: understand customer needs, ask questions, confirm requirements, and record key points.',
      'Planning covers scope, time, cost, resources, risks, and milestones.',
      'Good communication reduces rework and improves delivery confidence.',
    ],
    quickBox: 'Exam Tip: Communication gathers correct needs; planning converts needs into an actionable roadmap.',
  },
  {
    id: 'u2-cs-03',
    heading: 'Modelling, Construction, and Deployment',
    keyTerms: ['Modelling', 'Construction', 'Deployment'],
    points: [
      'Modelling is representation before coding.',
      'Common models: data model, flow model, behavioral model, object-oriented model.',
      'Construction phase includes coding, testing, and debugging.',
      'Deployment includes installation, user training, feedback collection, and maintenance.',
    ],
    quickBox: 'Flow: Model first -> Construct with quality -> Deploy and improve from feedback.',
  },
  {
    id: 'u2-cs-04',
    heading: 'Requirements Engineering',
    keyTerms: ['Inception', 'Elicitation', 'Elaboration', 'Negotiation', 'Validation', 'Management'],
    points: [
      'Requirements Engineering phases: inception, elicitation, elaboration, negotiation, specification, validation, and management.',
      'Requirement initiation identifies stakeholders, defines goals, asks basic questions, and sets project scope.',
      'Software analysis studies requirements deeply before design and coding.',
    ],
    quickBox: 'Remember: Clear requirements are the foundation of quality software.',
  },
  {
    id: 'u2-cs-05',
    heading: 'Analysis and Data Modelling',
    keyTerms: ['Analysis Model', 'Function', 'Data', 'Behavior', 'Processing'],
    points: [
      'Analysis model shows functions, data, behavior, and processing.',
      'Data modelling focuses on entity, attribute, and relationship.',
      'A strong analysis model reduces ambiguity in later phases.',
    ],
    quickBox: 'Use diagrams + keywords together to make answers complete in exams.',
  },
  {
    id: 'u2-cs-06',
    heading: 'OOA and Flow-Oriented Model',
    keyTerms: ['Object', 'Class', 'Attribute', 'Method', 'DFD'],
    points: [
      'OOA includes object, class, attribute, method, and relationship.',
      'Flow-oriented model includes external entity, process, data flow, and data store.',
      'DFD explains how information moves through the system.',
    ],
    quickBox: 'Quick Recall: OOA = object/class view, Flow-oriented = data movement view.',
  },
  {
    id: 'u2-cs-07',
    heading: 'Class-Based and Behavioural Models',
    keyTerms: ['Class-Based', 'Behavioral', 'State', 'Sequence', 'Activity'],
    points: [
      'Class-based model includes classes, attributes, methods, and relationships.',
      'Behavioural model captures dynamic behavior using state, sequence, and activity diagrams.',
      'Behavioral diagrams explain how the system reacts over time.',
    ],
    quickBox: 'Static view: class-based model | Dynamic view: behavioral model.',
  },
  {
    id: 'u2-cs-08',
    heading: 'Design Approaches and Concepts',
    keyTerms: ['Top-Down', 'Bottom-Up', 'Modularity', 'Abstraction', 'Patterns'],
    points: [
      'Design approaches: top-down, bottom-up, structured, and object-oriented.',
      'Design concepts: abstraction, refinement, modularity, information hiding, functional independence, architecture, and patterns.',
      'These concepts improve maintainability and scalability.',
    ],
    quickBox: 'Maintainability improves when design is modular, abstract, and well-structured.',
  },
  {
    id: 'u2-cs-09',
    heading: 'Design Model and Pattern-Based Design',
    keyTerms: ['Data Design', 'Architecture', 'Interface', 'Component', 'Deployment', 'Patterns'],
    points: [
      'Design model includes data design, architectural design, interface design, component-level design, and deployment design.',
      'Pattern-based design uses reusable solutions like Singleton, Factory, and Observer.',
      'Patterns speed up development and improve consistency.',
    ],
    quickBox:
      'Quick Revision Box: Communication = understand needs | Construction = coding + testing | Deployment = real use | DFD = data flow | Behavioral model = dynamic view | Design concepts improve maintainability',
  },
];

const unit3CheatSheet = [
  {
    id: 'u3-cs-01',
    heading: 'Unit 3 Cheat Sheet - Software Testing Basics',
    keyTerms: ['Correctness', 'Defects', 'Quality', 'Reliability'],
    points: [
      'Testing checks software correctness and finds defects.',
      'Testing improves overall software quality.',
      'Testing increases software reliability in real use.',
    ],
    quickBox: 'Testing Goal: Build confidence that software works correctly and consistently.',
  },
  {
    id: 'u3-cs-02',
    heading: 'Strategic Testing Order',
    keyTerms: ['Unit', 'Integration', 'Validation', 'System'],
    points: [
      'Recommended order: unit testing -> integration testing -> validation testing -> system testing.',
      'This order moves from smallest parts to full-system behavior.',
    ],
    quickBox: 'Remember sequence: Unit first, System last.',
  },
  {
    id: 'u3-cs-03',
    heading: 'Unit and Integration Testing',
    keyTerms: ['Smallest Part', 'Logic', 'I/O', 'Top-Down', 'Bottom-Up'],
    points: [
      'Unit testing checks the smallest software part.',
      'It verifies logic, input/output handling, loops, and conditions.',
      'Integration testing checks module interaction and data exchange.',
      'Common integration approaches: top-down and bottom-up.',
    ],
    quickBox: 'Unit = single module quality, Integration = module connection quality.',
  },
  {
    id: 'u3-cs-04',
    heading: 'Regression and Smoke Testing',
    keyTerms: ['Regression', 'Updates', 'Smoke', 'Build Stability'],
    points: [
      'Regression testing is done after bug fixes or updates.',
      'It confirms old features still work after changes.',
      'Smoke testing is a quick basic build check.',
    ],
    quickBox: 'After every change, do smoke first, then deeper regression as needed.',
  },
  {
    id: 'u3-cs-05',
    heading: 'Validation, Alpha, Beta, and System Testing',
    keyTerms: ['Validation', 'Alpha', 'Beta', 'System'],
    points: [
      'Validation testing checks whether software meets user needs.',
      'Alpha testing is internal testing at developer side.',
      'Beta testing is done by real users in real environments.',
      'System testing verifies the complete integrated system.',
    ],
    quickBox: 'Alpha = internal release check, Beta = real-world user check.',
  },
  {
    id: 'u3-cs-06',
    heading: 'Types of System Testing',
    keyTerms: ['Recovery', 'Security', 'Stress', 'Performance'],
    points: [
      'Recovery testing checks recovery from failures and crashes.',
      'Security testing checks protection from unauthorized access.',
      'Stress testing checks behavior under extreme load.',
      'Performance testing checks speed, throughput, and responsiveness.',
    ],
    quickBox: 'System testing ensures software is stable, safe, and efficient.',
  },
  {
    id: 'u3-cs-07',
    heading: 'Black Box vs White Box Testing',
    keyTerms: ['Input/Output', 'Internal Logic', 'Paths', 'Conditions'],
    points: [
      'Black box testing is input/output based and does not require code knowledge.',
      'White box testing checks internal logic and code structure.',
      'White box techniques often verify paths and conditions.',
    ],
    quickBox: 'Black box = external behavior, White box = internal logic.',
  },
  {
    id: 'u3-cs-08',
    heading: 'Debugging and Strategies',
    keyTerms: ['Root Cause', 'Brute Force', 'Backtracking', 'Cause Elimination'],
    points: [
      'Debugging means finding and fixing the root cause of errors.',
      'Brute force: use logs/prints and inspect execution behavior.',
      'Backtracking: trace backward from failure point to source.',
      'Cause elimination: form and test hypotheses to isolate error source.',
    ],
    quickBox:
      'Quick Revision Box: Unit = smallest part | Integration = module connection | Regression = after change | Smoke = basic stability | Alpha = internal | Beta = external users | Black box = external behavior | White box = internal logic',
  },
];

const unit4CheatSheet = [
  {
    id: 'u4-cs-01',
    heading: 'Unit 4 Cheat Sheet - Project Management',
    keyTerms: ['Management Spectrum', 'People', 'Product', 'Process', 'Project'],
    points: [
      'Management spectrum includes people, product, process, and project.',
      'People: teamwork, communication, leadership, and coordination drive project success.',
      'Product: features, goals, scope, and constraints must be clear.',
      'Process: organized development activities guide quality execution.',
      'Project: planning, scheduling, monitoring, and controlling are essential.',
    ],
    quickBox: 'Core Formula: People + Product + Process + Project = Effective project management.',
  },
  {
    id: 'u4-cs-02',
    heading: 'Project Scheduling Essentials',
    keyTerms: ['Task', 'Milestone', 'Deliverable', 'Dependency', 'Timeline'],
    points: [
      'Project scheduling defines tasks, milestones, deliverables, dependencies, and timeline.',
      'A milestone marks a major checkpoint in progress.',
      'Dependencies show which tasks must finish before others can begin.',
      'Timeline keeps the project time-bound and trackable.',
    ],
    quickBox: 'Scheduling organizes work in the right order at the right time.',
  },
  {
    id: 'u4-cs-03',
    heading: 'People and Effort Management',
    keyTerms: ['Effort', 'Communication Overhead', 'Phases', 'Distribution'],
    points: [
      'More people do not always reduce project time.',
      'As team size grows, communication overhead increases.',
      'Effort distribution spans requirements, design, coding, testing, and maintenance.',
      'Balanced effort allocation improves delivery predictability.',
    ],
    quickBox: 'Exam Point: Adding people to a late project can make it later due to coordination costs.',
  },
  {
    id: 'u4-cs-04',
    heading: 'Task Definition and Task Network',
    keyTerms: ['Objective', 'Input', 'Output', 'Owner', 'Duration', 'Dependency'],
    points: [
      'A well-defined task includes name, objective, input, output, responsible person, duration, and dependency.',
      'Task network shows order and dependency among tasks.',
      'Task network helps identify critical flow and bottlenecks.',
    ],
    quickBox: 'Clear task definitions reduce confusion and improve accountability.',
  },
  {
    id: 'u4-cs-05',
    heading: 'Risk Management Workflow',
    keyTerms: ['Identification', 'Projection', 'Refinement', 'Monitoring', 'Management'],
    points: [
      'Risk management steps: identification, projection, refinement, monitoring, and management.',
      'Reactive strategy responds after a problem appears.',
      'Proactive strategy acts before problems occur and is generally better.',
      'Software risks include project risk, technical risk, and business risk.',
    ],
    quickBox: 'Prefer proactive risk handling to reduce impact and cost.',
  },
  {
    id: 'u4-cs-06',
    heading: 'Change Management and SCM',
    keyTerms: ['Change Control', 'SCM', 'Repository', 'Versioning'],
    points: [
      'Change management controls changes in requirements, code, design, and documentation.',
      'SCM stands for Software Configuration Management.',
      'SCM includes scenario, repository, and process.',
      'SCM repository stores code, documents, versions, and test files.',
    ],
    quickBox: 'SCM ensures every change is tracked, controlled, and recoverable.',
  },
  {
    id: 'u4-cs-07',
    heading: 'Formal Methods and Cleanroom',
    keyTerms: ['Mathematics', 'Verification', 'Defect Prevention', 'Independent Testing'],
    points: [
      'Formal methods use mathematical specification and verification.',
      'Cleanroom development emphasizes defect prevention.',
      'Cleanroom uses disciplined development with independent testing.',
      'These approaches increase software reliability for critical systems.',
    ],
    quickBox:
      'Quick Revision Box: Management spectrum = people, product, process, project | Scheduling organizes work | Proactive risk strategy is better | SCM controls versions and changes | Cleanroom focuses on defect prevention',
  },
];

const unit5CheatSheet = [
  {
    id: 'u5-cs-01',
    heading: 'Unit 5 Cheat Sheet - Software Quality Management & Estimation',
    keyTerms: ['Correctness', 'Reliability', 'Efficiency', 'Usability', 'Maintainability', 'Portability'],
    points: [
      'Basic quality concepts include correctness, reliability, efficiency, usability, maintainability, and portability.',
      'Quality software should be dependable, easy to use, and easy to maintain.',
    ],
    quickBox: 'Quality in one line: Correct + Reliable + Efficient + Maintainable software.',
  },
  {
    id: 'u5-cs-02',
    heading: 'SQA and Statistical SQA',
    keyTerms: ['SQA', 'Defect Prevention', 'Metrics', 'Data Analysis'],
    points: [
      'SQA (Software Quality Assurance) includes planned activities to ensure software quality.',
      'SQA focuses on defect prevention, not only defect detection.',
      'Statistical SQA uses data and defect analysis to improve quality.',
    ],
    quickBox: 'Exam Memory: SQA prevents defects; Statistical SQA measures and improves using data.',
  },
  {
    id: 'u5-cs-03',
    heading: 'Six Sigma and DMAIC',
    keyTerms: ['Six Sigma', 'Define', 'Measure', 'Analyze', 'Improve', 'Control'],
    points: [
      'Six Sigma is a defect-reduction strategy.',
      'DMAIC steps: Define, Measure, Analyze, Improve, and Control.',
      'DMAIC provides a structured path to improve process quality.',
    ],
    quickBox: 'DMAIC order: Define -> Measure -> Analyze -> Improve -> Control.',
  },
  {
    id: 'u5-cs-04',
    heading: 'Reliability, ISO 9000, and McCall Quality Factors',
    keyTerms: ['Reliability', 'ISO 9000', 'McCall'],
    points: [
      'Software reliability is the probability of failure-free operation.',
      'ISO 9000 provides international quality standards and improves process discipline.',
      'McCall quality factors: correctness, reliability, efficiency, integrity, usability, maintainability, flexibility, testability, portability, reusability, interoperability.',
    ],
    quickBox: 'Reliability = failure-free working under expected conditions.',
  },
  {
    id: 'u5-cs-05',
    heading: 'Estimation and Scope',
    keyTerms: ['Estimation', 'Effort', 'Cost', 'Time', 'Scope'],
    points: [
      'Estimation predicts effort, cost, and time.',
      'Early estimates are usually less accurate and improve with better requirement clarity.',
      'Software scope defines project boundaries and what is included/excluded.',
    ],
    quickBox: 'Good estimation starts with clear scope and realistic assumptions.',
  },
  {
    id: 'u5-cs-06',
    heading: 'Feasibility and Resources',
    keyTerms: ['Technical', 'Economic', 'Operational', 'Schedule', 'Resources'],
    points: [
      'Feasibility dimensions: technical, economic, operational, and schedule.',
      'Resource categories: human, software, hardware, reusable, and financial.',
      'Feasibility helps decide whether a project is practical before major investment.',
    ],
    quickBox: 'Feasibility checks "Can we do it?" before asking "How fast can we do it?"',
  },
  {
    id: 'u5-cs-07',
    heading: 'Decomposition, COCOMO II, and Make/Buy',
    keyTerms: ['Decomposition', 'Problem-Based', 'Process-Based', 'COCOMO II', 'Make/Buy'],
    points: [
      'Decomposition techniques break projects into smaller parts for better estimation.',
      'Common decomposition approaches: problem-based and process-based.',
      'COCOMO II is a model for cost, effort, and schedule estimation.',
      'Make/Buy decision: make = build internally, buy = purchase externally.',
      'Decision factors include cost, time, customization needs, and available skills.',
    ],
    quickBox:
      'Quick Revision Box: SQA prevents defects | Statistical SQA uses data | Six Sigma reduces defects | Reliability = failure-free working | ISO 9000 = quality standards | COCOMO II = estimation model | Make/Buy = build or purchase',
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

const unit1PyqQuiz = [
  {
    id: 'u1-pyq-01',
    question:
      'PYQ [July 2023][SAQ]: Define Process, Project and Product. Which statement is correct?',
    options: [
      'A process defines activities; a project applies the process; a product is the final software output.',
      'A product defines activities; a process is the final deliverable; a project is optional.',
      'A project is only coding; a process is only testing; a product is documentation only.',
      'All three terms mean the same thing in software engineering.',
    ],
    correctAnswer: 0,
    explanation:
      'Process = structured workflow, Project = planned execution effort, Product = resulting software/system.',
  },
  {
    id: 'u1-pyq-02',
    question: 'PYQ [July 2023][SAQ]: What are umbrella activities?',
    options: [
      'Activities done only after deployment.',
      'Cross-cutting activities performed throughout all software process phases.',
      'Activities limited to coding standards only.',
      'Activities used only for hardware projects.',
    ],
    correctAnswer: 1,
    explanation:
      'Umbrella activities (like SQA, SCM, risk management) span the entire project lifecycle.',
  },
  {
    id: 'u1-pyq-03',
    question: 'PYQ [July 2023][SAQ]: What are the limitations of Waterfall Model?',
    options: [
      'It supports late requirement changes very easily.',
      'It is ideal when requirements are unclear and evolving.',
      'It has poor flexibility for changing requirements and late testing feedback.',
      'It never requires documentation.',
    ],
    correctAnswer: 2,
    explanation:
      'Waterfall is rigid and sequential, so requirement changes and late defect discovery are major issues.',
  },
  {
    id: 'u1-pyq-04',
    question: 'PYQ [July 2023][SAQ]: What are the drawbacks of RAD Model?',
    options: [
      'Needs highly skilled teams, strong user involvement, and is harder for very large/complex projects.',
      'Cannot produce prototypes.',
      'Never supports modular development.',
      'Only works without tools.',
    ],
    correctAnswer: 0,
    explanation:
      'RAD is fast but depends heavily on skilled resources, reusable components, and continuous user input.',
  },
  {
    id: 'u1-pyq-05',
    question: 'PYQ [July 2023][SAQ]: Define Framework.',
    options: [
      'A framework is random code snippets collected from projects.',
      'A framework is a structured skeleton of activities, tasks, and deliverables guiding development.',
      'A framework is only a UI design template.',
      'A framework means final executable software.',
    ],
    correctAnswer: 1,
    explanation:
      'In software engineering process context, framework provides organized structure for development work.',
  },
  {
    id: 'u1-pyq-06',
    question: 'PYQ [July 2023][SAQ]: Define Software Crisis.',
    options: [
      'Software crisis is when systems are built too quickly with zero documentation.',
      'Software crisis is the inability to deliver quality software on time and within budget as complexity grows.',
      'Software crisis is a hardware shortage in data centers.',
      'Software crisis means avoiding testing.',
    ],
    correctAnswer: 1,
    explanation:
      'Software crisis refers to schedule, cost, quality, and maintainability failures in complex software projects.',
  },
  {
    id: 'u1-pyq-07',
    question:
      'PYQ [July 2023][Long]: What is Software Engineering? Define Framework. Define Software Crisis. How can Software Crisis be avoided? Which is the best prevention approach?',
    options: [
      'Use systematic engineering process, standards, reviews, and disciplined project management.',
      'Skip requirement analysis to save time.',
      'Reduce testing to cut costs.',
      'Avoid documentation and change control.',
    ],
    correctAnswer: 0,
    explanation:
      'Software crisis is reduced by disciplined process, quality assurance, documentation, estimation, and risk control.',
  },
  {
    id: 'u1-pyq-08',
    question:
      'PYQ [July 2023][Long]: Define Iterative Process Model. Explain Spiral Model. Explain Software Prototyping. Which statement is correct?',
    options: [
      'Iterative and spiral are both refinement-based; spiral adds explicit risk analysis; prototyping clarifies requirements.',
      'Iterative model runs only once and never revisits previous work.',
      'Spiral model is purely sequential with no risk evaluation.',
      'Prototyping is used only after final deployment.',
    ],
    correctAnswer: 0,
    explanation:
      'Iterative models refine through cycles; spiral is risk-driven; prototyping helps requirement understanding.',
  },
  {
    id: 'u1-pyq-09',
    question:
      'PYQ [July 2023][Long]: Describe Layered Technology approach of Software Engineering. Write different phases used to develop software. Which order is correct for layers?',
    options: [
      'Tools -> Methods -> Process -> Quality Focus',
      'Quality Focus -> Process -> Methods -> Tools',
      'Methods -> Quality Focus -> Tools -> Process',
      'Process -> Tools -> Quality Focus -> Methods',
    ],
    correctAnswer: 1,
    explanation:
      'Layered technology is commonly described as Quality Focus foundation, then Process, Methods, and Tools.',
  },
  {
    id: 'u1-pyq-10',
    question:
      'PYQ [May 2025][Long]: What do you mean by Software Crisis? What are phases of Waterfall Model? What do you mean by Software Process? Which is a valid Waterfall flow?',
    options: [
      'Requirements -> Design -> Implementation -> Testing -> Deployment/Maintenance',
      'Testing -> Requirements -> Coding -> Maintenance -> Design',
      'Deployment -> Coding -> Requirements -> Design',
      'Maintenance -> Requirements -> Deployment -> Testing',
    ],
    correctAnswer: 0,
    explanation:
      'Waterfall follows ordered phases from requirements to maintenance with limited backtracking.',
  },
  {
    id: 'u1-pyq-11',
    question:
      'PYQ [May 2025][Long]: Advantage of Spiral Model, pros/cons of Prototype Model, shortcomings of Iterative Waterfall. Which is a key Spiral advantage?',
    options: [
      'No documentation needed.',
      'Risk identification and mitigation in every cycle.',
      'Works only for tiny projects.',
      'Eliminates need for user feedback.',
    ],
    correctAnswer: 1,
    explanation:
      'Spiral\'s major strength is explicit risk management through iterative loops.',
  },
  {
    id: 'u1-pyq-12',
    question:
      'PYQ [June 2024][Long]: What is Software Crisis? Discuss main reasons and results. Which pair best matches this?',
    options: [
      'Reasons: growing complexity/poor process. Results: delays, cost overrun, low quality, maintenance issues.',
      'Reasons: too much testing. Results: perfect reliability.',
      'Reasons: fewer users. Results: guaranteed success.',
      'Reasons: modern tools. Results: no defects.',
    ],
    correctAnswer: 0,
    explanation:
      'Poor estimation, weak requirements, and weak process lead to deadline, budget, and quality failures.',
  },
  {
    id: 'u1-pyq-13',
    question:
      'PYQ [June 2024][Long]: Explain Spiral Model with a diagram and state advantages/disadvantages. Which best describes one limitation?',
    options: [
      'Spiral is simple and cheapest for all small projects.',
      'Spiral may be costly/complex and needs strong risk expertise.',
      'Spiral does not support iteration.',
      'Spiral cannot involve customers.',
    ],
    correctAnswer: 1,
    explanation:
      'Though powerful for risk handling, spiral can be expensive and management-intensive.',
  },
  {
    id: 'u1-pyq-14',
    question:
      'PYQ [November 2022][Long]: What is Prototype Model? Differentiate Classical Waterfall and Iterative Waterfall. Which difference is correct?',
    options: [
      'Classical Waterfall allows regular feedback loops; Iterative Waterfall never revisits phases.',
      'Both models are exactly identical with no phase behavior difference.',
      'Classical Waterfall is rigidly linear; Iterative Waterfall permits limited backtracking/feedback between phases.',
      'Iterative Waterfall removes requirements phase.',
    ],
    correctAnswer: 2,
    explanation:
      'Classical model is strict sequential flow; iterative variant introduces controlled feedback and refinement.',
  },
];

const unit2PyqQuiz = [
  {
    id: 'u2-pyq-01',
    question: 'PYQ [July 2023][SAQ]: What is SRS?',
    options: [
      'A document that clearly specifies functional and non-functional software requirements.',
      'A source-code optimization technique.',
      'A testing method used only after deployment.',
      'A project cost estimation formula.',
    ],
    correctAnswer: 0,
    explanation:
      'SRS (Software Requirements Specification) is the formal requirement document used by stakeholders and developers.',
  },
  {
    id: 'u2-pyq-02',
    question: 'PYQ [July 2023][SAQ]: Distinguish between DFD and Flowchart.',
    options: [
      'DFD shows data movement in a system; flowchart shows control/logic sequence of operations.',
      'DFD and flowchart are exactly the same diagrams.',
      'DFD is only for coding and flowchart is only for hardware.',
      'Flowchart shows data stores, while DFD shows only algorithms.',
    ],
    correctAnswer: 0,
    explanation:
      'DFD focuses on what data flows where; flowchart focuses on procedural flow and decision logic.',
  },
  {
    id: 'u2-pyq-03',
    question:
      'PYQ [July 2023][SAQ]: Differentiate between Structured Analysis and Object-Oriented Analysis.',
    options: [
      'Structured analysis is function/data-flow centric; OOA is object/class/responsibility centric.',
      'Structured analysis uses only classes; OOA uses only DFD.',
      'Both approaches are always identical in modeling.',
      'OOA cannot model behavior.',
    ],
    correctAnswer: 0,
    explanation:
      'Structured analysis emphasizes processes and flows; OOA models objects, attributes, methods, and relationships.',
  },
  {
    id: 'u2-pyq-04',
    question: 'PYQ [November 2022][SAQ]: Write the characteristics of SRS.',
    options: [
      'Good SRS is correct, complete, consistent, unambiguous, verifiable, modifiable, and traceable.',
      'Good SRS must be very short and skip constraints.',
      'Good SRS should avoid measurable requirements.',
      'Good SRS is only a UI sketch.',
    ],
    correctAnswer: 0,
    explanation:
      'Standard SRS qualities include correctness, completeness, consistency, clarity, verifiability, and traceability.',
  },
  {
    id: 'u2-pyq-05',
    question: 'PYQ [November 2022][SAQ]: What is Coupling and Cohesion?',
    options: [
      'Coupling is inter-module dependency; cohesion is how strongly related elements are within a module.',
      'Both terms mean the same thing.',
      'Coupling is internal quality; cohesion is external hardware relation.',
      'Cohesion must be minimized and coupling maximized.',
    ],
    correctAnswer: 0,
    explanation:
      'Desired design goal: low coupling and high cohesion.',
  },
  {
    id: 'u2-pyq-06',
    question:
      'PYQ [July 2023][Long]: What is SRS? Difference between Structured Analysis and OOA. Difference between Verification and Validation. Which statement is correct?',
    options: [
      'Verification checks if we build the product right; validation checks if we build the right product.',
      'Verification and validation are synonyms.',
      'Validation is done only before requirements.',
      'Structured analysis and OOA always produce identical models and artifacts.',
    ],
    correctAnswer: 0,
    explanation:
      'Verification is conformance-focused; validation is need/user-goal focused.',
  },
  {
    id: 'u2-pyq-07',
    question:
      'PYQ [May 2025][Long]: What is Data Modelling? What is Context Diagram? What is the main objective of Software Project Planning?',
    options: [
      'Plan scope, schedule, resources, cost, and risk to achieve predictable delivery and control.',
      'Project planning is mainly for choosing UI colors.',
      'Context diagram shows internal algorithms only.',
      'Data modelling is unrelated to requirements analysis.',
    ],
    correctAnswer: 0,
    explanation:
      'Project planning primarily targets realistic execution control across time, cost, quality, and risk.',
  },
  {
    id: 'u2-pyq-08',
    question:
      'PYQ [May 2025][Long]: What is DFD? What do you mean by Structure Chart? Write short notes on Cohesion. Which is the best cohesion target in design?',
    options: [
      'Low cohesion across unrelated tasks.',
      'Temporal cohesion only.',
      'High functional cohesion within each module.',
      'Coincidental cohesion for flexibility.',
    ],
    correctAnswer: 2,
    explanation:
      'Functional cohesion is strongest and most desirable, where all elements contribute to one clear task.',
  },
  {
    id: 'u2-pyq-09',
    question:
      'PYQ [June 2024][Long]: What is SRS? State characteristics of a good SRS. Differentiate between cohesion and coupling. Which quality pair is preferred?',
    options: [
      'High coupling + low cohesion',
      'Low coupling + high cohesion',
      'High coupling + high cohesion',
      'Low coupling + low cohesion',
    ],
    correctAnswer: 1,
    explanation:
      'Well-designed software aims for low interdependence and strong internal module focus.',
  },
  {
    id: 'u2-pyq-10',
    question: 'PYQ [June 2024][Long]: What is cohesion? Explain different types of cohesion. Which is weakest?',
    options: [
      'Functional cohesion',
      'Sequential cohesion',
      'Coincidental cohesion',
      'Communicational cohesion',
    ],
    correctAnswer: 2,
    explanation:
      'Coincidental cohesion is weakest because module parts are unrelated.',
  },
  {
    id: 'u2-pyq-11',
    question:
      'PYQ [November 2022][Long]: Differentiate between Object-Oriented Design and Function-Oriented Design. What is Coupling and Cohesion? Which pairing is right?',
    options: [
      'OOD organizes around objects/classes; function-oriented design organizes around functions/processes.',
      'OOD is only for testing and function-oriented is only for deployment.',
      'Function-oriented design has no decomposition.',
      'OOD cannot represent relationships.',
    ],
    correctAnswer: 0,
    explanation:
      'OOD centers around objects and interactions, while function-oriented design decomposes by functional processing.',
  },
  {
    id: 'u2-pyq-12',
    question:
      'PYQ [November 2022][Long]: Characteristics of SRS, utility of structured design, and whether structured design is always effective. Which statement is correct?',
    options: [
      'Structured design is universally best in every scenario without limitation.',
      'Structured design is useful for clarity and modularity, but not always best for every complex/object-rich context.',
      'Structured design eliminates need for requirements and SRS.',
      'Structured design means no coupling concerns.',
    ],
    correctAnswer: 1,
    explanation:
      'Structured design is valuable, but approach selection should match system nature, complexity, and maintainability goals.',
  },
];

const unit3PyqQuiz = [
  {
    id: 'u3-pyq-01',
    question:
      'PYQ [July 2023][SAQ]: Differentiate between White Box Testing and Black Box Testing.',
    options: [
      'White box checks internal logic/code paths; black box checks external behavior against requirements.',
      'White box and black box are exactly the same method.',
      'Black box requires full source-code visibility, white box does not.',
      'White box is only for UI testing.',
    ],
    correctAnswer: 0,
    explanation:
      'White box is structure-oriented, while black box is specification/behavior-oriented.',
  },
  {
    id: 'u3-pyq-02',
    question: 'PYQ [July 2023][SAQ]: What is Regression Testing?',
    options: [
      'Testing done only before first coding.',
      'Retesting changed software to ensure existing features still work after modifications.',
      'A method to estimate development cost.',
      'A user-acceptance test after release only.',
    ],
    correctAnswer: 1,
    explanation:
      'Regression testing confirms that fixes/changes did not introduce new defects in previously working parts.',
  },
  {
    id: 'u3-pyq-03',
    question: 'PYQ [July 2023][SAQ]: Define Smoke Testing.',
    options: [
      'Detailed exhaustive testing of every module.',
      'A quick build-level check to verify critical functionalities before deeper testing.',
      'A maintenance metric for reliability.',
      'Random manual testing with no plan.',
    ],
    correctAnswer: 1,
    explanation:
      'Smoke testing acts as a preliminary gate to confirm build stability.',
  },
  {
    id: 'u3-pyq-04',
    question: 'PYQ [November 2022][SAQ]: Is Mutation Testing a type of White Box Testing Method?',
    options: [
      'Yes, mutation testing is generally treated as a white-box technique.',
      'No, mutation testing is purely black-box.',
      'Mutation testing is unrelated to software testing.',
      'Mutation testing is only for requirement gathering.',
    ],
    correctAnswer: 0,
    explanation:
      'Mutation testing evaluates test-suite strength by injecting small code changes (mutants), which is white-box oriented.',
  },
  {
    id: 'u3-pyq-05',
    question: 'PYQ [November 2022][SAQ]: What is alpha testing and beta testing?',
    options: [
      'Alpha is internal/pre-release testing by developers or in-house team; beta is field testing by selected external users.',
      'Alpha is after production and beta is before coding.',
      'Both are unit-testing methods.',
      'Both happen only after maintenance ends.',
    ],
    correctAnswer: 0,
    explanation:
      'Alpha testing is controlled internal validation, while beta testing captures real-user feedback in a limited release.',
  },
  {
    id: 'u3-pyq-06',
    question:
      'PYQ [July 2023][Long]: Explain Regression Testing. Define Smoke Testing. Discuss different types of Maintenance. Which list correctly represents maintenance types?',
    options: [
      'Corrective, Adaptive, Perfective, Preventive',
      'Only Corrective and Deployment',
      'Alpha, Beta, Gamma, Delta',
      'Unit, Integration, System, Acceptance',
    ],
    correctAnswer: 0,
    explanation:
      'Standard maintenance categories are corrective, adaptive, perfective, and preventive.',
  },
  {
    id: 'u3-pyq-07',
    question:
      'PYQ [July 2023][Long]: Relationship between testing and debugging, why maintenance is required, and Six Sigma in software quality. Which statement is correct?',
    options: [
      'Testing identifies defects; debugging finds/fixes root causes; maintenance keeps software useful over change; Six Sigma targets defect reduction and process quality.',
      'Debugging happens before testing and eliminates need for maintenance.',
      'Six Sigma is only a hardware assembly method.',
      'Maintenance is required only when software crashes completely.',
    ],
    correctAnswer: 0,
    explanation:
      'Testing and debugging are complementary; maintenance ensures long-term relevance; Six Sigma improves quality via process discipline.',
  },
  {
    id: 'u3-pyq-08',
    question:
      'PYQ [May 2025][Long]: Differentiate between Black Box Testing and White Box Testing. Which pairing is correct?',
    options: [
      'Black box = behavior/spec focus; White box = code path/logic focus.',
      'Black box = code coverage; White box = UI behavior only.',
      'Black box requires source code; white box does not.',
      'Both ignore test-case design principles.',
    ],
    correctAnswer: 0,
    explanation:
      'Black box derives tests from requirements; white box derives tests from internal implementation.',
  },
  {
    id: 'u3-pyq-09',
    question:
      'PYQ [May 2025][Long]: Different levels of testing, testing strategy, and differences between Verification and Validation. Which statement is correct?',
    options: [
      'Verification checks conformance (build right), validation checks user need (build right product).',
      'Verification and validation are identical.',
      'Validation is done only at coding phase.',
      'Testing strategy excludes unit/integration/system/acceptance planning.',
    ],
    correctAnswer: 0,
    explanation:
      'A strong testing strategy covers levels and clarifies verification vs validation objectives.',
  },
  {
    id: 'u3-pyq-10',
    question:
      'PYQ [June 2024][Long]: Differentiate Verification and Validation; also Black Box and White Box Testing. Which mapping is accurate?',
    options: [
      'Verification -> process/spec compliance; Validation -> user need fulfillment; Black box -> external behavior; White box -> internal logic.',
      'Verification is user acceptance only; validation is code review only.',
      'White box tests only UI; black box tests internal branches.',
      'All four terms describe one same activity.',
    ],
    correctAnswer: 0,
    explanation:
      'These are distinct but complementary quality concepts.',
  },
  {
    id: 'u3-pyq-11',
    question:
      'PYQ [November 2022][Long]: Short note on Regression Testing; difference between Equivalence Class Partitioning (ECP) and Boundary Value Analysis (BVA). Which is correct?',
    options: [
      'ECP divides input domain into valid/invalid classes; BVA targets edge values around boundaries.',
      'ECP is only for white-box path testing.',
      'BVA ignores limits and focuses on random mid values.',
      'Regression testing is unrelated to software changes.',
    ],
    correctAnswer: 0,
    explanation:
      'ECP reduces test cases by class grouping; BVA catches edge defects at limits.',
  },
  {
    id: 'u3-pyq-12',
    question:
      'PYQ [November 2022][Long]: Differentiate White Box and Black Box Testing. What is Alpha and Beta Testing? Which statement is correct?',
    options: [
      'Alpha testing is internal pre-release; beta testing is limited external user testing in real environments.',
      'Alpha and beta are both white-box path coverage techniques.',
      'Beta testing is done before unit testing.',
      'Alpha testing replaces all functional/system testing.',
    ],
    correctAnswer: 0,
    explanation:
      'Alpha/beta are acceptance-oriented release stages with different environments and participants.',
  },
  {
    id: 'u3-pyq-13',
    question:
      'PYQ [November 2022][Long]: Cyclomatic complexity for 4 branch conditions, utility of Smoke Testing, and Software Reliability Metrics. What is cyclomatic complexity?',
    options: ['4', '5', '6', '8'],
    correctAnswer: 1,
    explanation:
      'Using the decision-point form, cyclomatic complexity = number of branch/predicate nodes + 1 = 4 + 1 = 5.',
  },
];

const unit4PyqQuiz = [
  {
    id: 'u4-pyq-01',
    question: 'PYQ [July 2023][SAQ]: Difference between Risk and Uncertainty.',
    options: [
      'Risk can be identified/estimated with probability; uncertainty is unknown or hard to quantify.',
      'Risk and uncertainty are always identical.',
      'Uncertainty always has exact probability but risk does not.',
      'Risk exists only after project completion.',
    ],
    correctAnswer: 0,
    explanation:
      'Risk is a potential event with estimable impact/probability; uncertainty is broader unknown variability.',
  },
  {
    id: 'u4-pyq-02',
    question: 'PYQ [July 2023][SAQ]: What is SCM?',
    options: [
      'Software Configuration Management: controls changes, versions, baselines, and integrity of software artifacts.',
      'Schedule Cost Matrix for budgeting.',
      'System Coding Method used only for testing.',
      'Security Compliance Model only for deployment.',
    ],
    correctAnswer: 0,
    explanation:
      'SCM manages identification, versioning, change control, status accounting, and audits.',
  },
  {
    id: 'u4-pyq-03',
    question: 'PYQ [July 2023][SAQ]: What activities are required for proper scheduling of a project?',
    options: [
      'Task decomposition, dependency mapping, effort estimation, resource allocation, milestones, and monitoring.',
      'Only assigning final deadline.',
      'Only coding and testing without planning.',
      'Skipping risk and resource checks.',
    ],
    correctAnswer: 0,
    explanation:
      'Good scheduling includes tasks, order, estimates, resources, milestones, and control mechanisms.',
  },
  {
    id: 'u4-pyq-04',
    question: 'PYQ [May 2025][SAQ]: What is Scope Management?',
    options: [
      'Defining, validating, and controlling what is included and excluded in the project.',
      'Managing office hardware inventory only.',
      'Estimating only project budget.',
      'A technique to skip requirement baselines.',
    ],
    correctAnswer: 0,
    explanation:
      'Scope management prevents uncontrolled expansion and keeps work aligned to objectives.',
  },
  {
    id: 'u4-pyq-05',
    question: 'PYQ [May 2025][SAQ]: What is Resource Management?',
    options: [
      'Planning, allocating, and optimizing people, tools, time, and budget resources.',
      'Only purchasing servers.',
      'Only tracking developer attendance.',
      'Only documenting requirements.',
    ],
    correctAnswer: 0,
    explanation:
      'Resource management ensures availability and efficient use of project assets.',
  },
  {
    id: 'u4-pyq-06',
    question:
      'PYQ [July 2023][Long]: Objective of SQA, scheduling activities, SCM, and COCOMO. Which statement is correct about COCOMO?',
    options: [
      'COCOMO is a software cost/effort estimation model based on project size and factors.',
      'COCOMO is a testing-only smoke checklist.',
      'COCOMO is a source control branching strategy.',
      'COCOMO replaces project planning completely.',
    ],
    correctAnswer: 0,
    explanation:
      'COCOMO helps estimate effort, cost, and schedule using calibrated parameters.',
  },
  {
    id: 'u4-pyq-07',
    question:
      'PYQ [May 2025][Long]: Construct a network diagram and determine critical path and total duration. Which path defines project duration?',
    options: [
      'The path with maximum total duration through dependent activities (critical path).',
      'The path with minimum number of activities.',
      'Any path chosen by project manager preference.',
      'Only the testing path, regardless of duration.',
    ],
    correctAnswer: 0,
    explanation:
      'Critical path is the longest-duration path and determines minimum project completion time.',
  },
  {
    id: 'u4-pyq-08',
    question:
      'PYQ [May 2025][Long]: Scope Management, Six Sigma Strategy, and Resource Management. Which combination is most appropriate?',
    options: [
      'Control scope creep, reduce defects with Six Sigma, and optimize people/tools/time allocation.',
      'Ignore scope baseline and rely only on final testing.',
      'Use Six Sigma only for UI styling.',
      'Resource management is unnecessary when schedule exists.',
    ],
    correctAnswer: 0,
    explanation:
      'These three together support predictability, quality, and efficient execution.',
  },
  {
    id: 'u4-pyq-09',
    question:
      'PYQ [June 2024][Long]: Construct network diagram and determine critical path and total project duration. What is true about critical activities?',
    options: [
      'Critical activities have zero float/slack; delay in them delays the whole project.',
      'Critical activities always have highest cost only.',
      'Critical activities can be delayed without affecting timeline.',
      'Critical activities exist only in agile projects.',
    ],
    correctAnswer: 0,
    explanation:
      'Zero-slack tasks on the critical path directly affect finish date.',
  },
  {
    id: 'u4-pyq-10',
    question:
      'PYQ [June 2024][Long]: What do you mean by Software Risk? Discuss risk management activities during development. Which sequence is correct?',
    options: [
      'Risk identification -> analysis/prioritization -> planning responses -> monitoring/control.',
      'Deployment -> coding -> requirement collection -> closure.',
      'Testing -> uninstall -> redesign -> stop.',
      'Ignore risks until failure occurs.',
    ],
    correctAnswer: 0,
    explanation:
      'Risk management is continuous: identify, assess, respond, and monitor.',
  },
  {
    id: 'u4-pyq-11',
    question:
      'PYQ [November 2022][Long]: What is Software Risk? Types of risk? Differentiate Reactive and Proactive risk strategy. Which statement is correct?',
    options: [
      'Reactive responds after issue occurs; proactive anticipates and mitigates before occurrence.',
      'Reactive and proactive are same approaches.',
      'Proactive means no need for monitoring.',
      'Reactive always prevents all risks in advance.',
    ],
    correctAnswer: 0,
    explanation:
      'Proactive strategy is preventive and planned; reactive strategy is corrective post-occurrence.',
  },
];

const unit5PyqQuiz = [
  {
    id: 'u5-pyq-01',
    question: 'PYQ [July 2023][SAQ]: What are the factors to measure the Quality of Software?',
    options: [
      'Correctness, reliability, efficiency, integrity, usability, maintainability, flexibility, portability, reusability, interoperability.',
      'Only programming language popularity.',
      'Only number of screens and colors used.',
      'Only project team size.',
    ],
    correctAnswer: 0,
    explanation:
      "Software quality is assessed by quality attributes (for example McCall's factors), not by a single metric.",
  },
  {
    id: 'u5-pyq-02',
    question: 'PYQ [July 2023][SAQ]: Define COCOMO.',
    options: [
      'COCOMO is a constructive cost model used to estimate software effort, schedule, and cost.',
      'COCOMO is a code refactoring technique.',
      'COCOMO is a UI testing framework.',
      'COCOMO is a version-control branching rule.',
    ],
    correctAnswer: 0,
    explanation:
      'COCOMO (Constructive Cost Model) is an empirical model for software project estimation.',
  },
  {
    id: 'u5-pyq-03',
    question: 'PYQ [July 2023][SAQ]: Explain Six Sigma related to Software Quality.',
    options: [
      'Six Sigma is a data-driven quality improvement approach to reduce process variation and defects.',
      'Six Sigma means writing six modules only.',
      'Six Sigma replaces testing completely.',
      'Six Sigma is used only for hardware manufacturing and never software.',
    ],
    correctAnswer: 0,
    explanation:
      'In software, Six Sigma supports defect reduction, process control, and measurable quality improvement.',
  },
  {
    id: 'u5-pyq-04',
    question: 'PYQ [November 2022][SAQ]: Write a note on Software Quality Assurance.',
    options: [
      'SQA ensures process and product quality through standards, audits, reviews, testing oversight, and continuous improvement.',
      'SQA is only final testing after release.',
      'SQA is only documentation formatting.',
      'SQA has no relation to defect prevention.',
    ],
    correctAnswer: 0,
    explanation:
      'SQA is process-oriented and preventive, covering the full software lifecycle.',
  },
  {
    id: 'u5-pyq-05',
    question: 'PYQ [November 2022][SAQ]: What is Software Reliability Metric?',
    options: [
      'A measure of software failure behavior and dependability (for example failure rate, MTTF, MTBF).',
      'The total number of developers in a project.',
      'A metric that counts only documentation pages.',
      'A UI satisfaction score only.',
    ],
    correctAnswer: 0,
    explanation:
      'Reliability metrics quantify probability and frequency of failure-free operation.',
  },
  {
    id: 'u5-pyq-06',
    question: 'PYQ [July 2023][Long]: Explain Six Sigma related to Software Quality. Which statement is correct?',
    options: [
      'Six Sigma uses disciplined methods (like DMAIC) to reduce defects and improve process capability.',
      'Six Sigma is unrelated to measurable quality outcomes.',
      'Six Sigma means skipping root-cause analysis.',
      'Six Sigma is only a deployment tool.',
    ],
    correctAnswer: 0,
    explanation:
      'Six Sigma emphasizes measurement, analysis, control, and continuous quality improvement.',
  },
  {
    id: 'u5-pyq-07',
    question:
      'PYQ [May 2025][Long]: Different types of Feasibility Study and COCOMO II. Which feasibility types are standard?',
    options: [
      'Technical, Economic, Operational, Schedule (and often Legal).',
      'Only coding feasibility.',
      'Only budget feasibility.',
      'No feasibility is required if COCOMO is used.',
    ],
    correctAnswer: 0,
    explanation:
      'Feasibility assesses practicality from multiple angles before deep investment.',
  },
  {
    id: 'u5-pyq-08',
    question: 'PYQ [June 2024][Long]: Discuss COCOMO II and McCall’s Quality Factors. Which is correct?',
    options: [
      'COCOMO II estimates effort/cost; McCall factors evaluate software quality attributes.',
      'COCOMO II is a testing-level classification model.',
      'McCall factors are only financial estimation parameters.',
      'Both are identical project scheduling algorithms.',
    ],
    correctAnswer: 0,
    explanation:
      'COCOMO II focuses on estimation; McCall focuses on multidimensional quality characteristics.',
  },
  {
    id: 'u5-pyq-09',
    question:
      'PYQ [June 2024][Long]: ISO 9000, Six Sigma, and SQA short notes. Which statement best fits ISO 9000?',
    options: [
      'ISO 9000 is a family of quality management standards ensuring process consistency and continual improvement.',
      'ISO 9000 is a defect-counting formula only.',
      'ISO 9000 is only for source-code formatting.',
      'ISO 9000 replaces all testing and review activities.',
    ],
    correctAnswer: 0,
    explanation:
      'ISO 9000 guides quality management systems and process discipline across organizations.',
  },
  {
    id: 'u5-pyq-10',
    question: "PYQ [November 2022][Long]: Explain McCall's Quality Factors. Which grouping is valid?",
    options: [
      'Product Operation, Product Revision, Product Transition.',
      'Frontend, Backend, Database only.',
      'Planning, Coding, Hosting only.',
      'Requirement, Sprint, Demo only.',
    ],
    correctAnswer: 0,
    explanation:
      "McCall's model commonly groups factors into operation, revision, and transition categories.",
  },
  {
    id: 'u5-pyq-11',
    question:
      'PYQ [November 2022][Long]: Explain Six Sigma and write note on SQA. Which joint objective is correct?',
    options: [
      'Reduce defects and institutionalize quality through defined, auditable, continuously improved processes.',
      'Increase rework intentionally to improve team learning.',
      'Avoid metrics because quality is subjective only.',
      'Limit quality activities to post-release bug fixing.',
    ],
    correctAnswer: 0,
    explanation:
      'Six Sigma and SQA both promote measurable quality control and defect prevention.',
  },
  {
    id: 'u5-pyq-12',
    question:
      'PYQ [November 2022][Long]: How decomposition helps estimation, parameters affecting cost, and opinion on expert judgment. Which statement is correct?',
    options: [
      'Decomposition improves estimate granularity; cost is affected by size, complexity, team capability, tools, risk, schedule, and quality constraints; expert judgment is useful when calibrated with data.',
      'Decomposition increases uncertainty in all cases.',
      'Cost depends only on lines of code.',
      'Expert judgment should be used without any historical reference.',
    ],
    correctAnswer: 0,
    explanation:
      'Work breakdown improves controllability; robust estimation combines models, context drivers, and experienced judgment.',
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

const unit4CompleteQuiz = [
  {
    id: 'u4-cq-01',
    question: 'The management spectrum includes:',
    options: [
      'People, product, process, project',
      'CPU, RAM, keyboard, mouse',
      'Input, output, storage, power',
      'Design, painting, printing, shipping',
    ],
    correctAnswer: 0,
    explanation: 'These are the four main parts of management spectrum.',
  },
  {
    id: 'u4-cq-02',
    question: 'In project management, people are important because they:',
    options: [
      'Replace requirements',
      'Perform and manage project work',
      'Only buy software',
      'Only create hardware',
    ],
    correctAnswer: 1,
    explanation: 'Projects depend on teamwork and human effort.',
  },
  {
    id: 'u4-cq-03',
    question: 'Project scheduling mainly decides:',
    options: ['Software color', 'Task timing and sequence', 'Only testing tools', 'Only hardware cost'],
    correctAnswer: 1,
    explanation: 'Scheduling sets when tasks will happen.',
  },
  {
    id: 'u4-cq-04',
    question: 'A milestone in project scheduling is:',
    options: [
      'A project checkpoint',
      'A coding language',
      'A user manual',
      'A hardware device',
    ],
    correctAnswer: 0,
    explanation: 'A milestone marks important progress.',
  },
  {
    id: 'u4-cq-05',
    question: 'Effort in software project means:',
    options: [
      'Decoration cost',
      'Amount of work required',
      'Number of computers',
      'Internet speed',
    ],
    correctAnswer: 1,
    explanation: 'Effort is the work needed to finish the project.',
  },
  {
    id: 'u4-cq-06',
    question: 'Adding more people to a late project may:',
    options: [
      'Always finish it faster',
      'Increase communication overhead',
      'Remove all risks',
      'Stop testing',
    ],
    correctAnswer: 1,
    explanation: 'More people can increase coordination problems.',
  },
  {
    id: 'u4-cq-07',
    question: 'Effort distribution means:',
    options: [
      'Dividing project work among phases',
      'Deleting extra tasks',
      'Increasing coding only',
      'Selling modules separately',
    ],
    correctAnswer: 0,
    explanation: 'Effort is spread across analysis, design, coding, testing.',
  },
  {
    id: 'u4-cq-08',
    question: 'A task in a software project should be:',
    options: ['Unclear', 'Specific and measurable', 'Random', 'Hidden from team'],
    correctAnswer: 1,
    explanation: 'A good task must be clearly defined.',
  },
  {
    id: 'u4-cq-09',
    question: 'Task network shows:',
    options: ['Internet speed', 'Task dependencies and order', 'User passwords', 'Source code format'],
    correctAnswer: 1,
    explanation: 'It shows how tasks are connected.',
  },
  {
    id: 'u4-cq-10',
    question: 'Risk in software project is:',
    options: [
      'A guaranteed success',
      'A possible future problem',
      'A design color',
      'A programming language',
    ],
    correctAnswer: 1,
    explanation: 'Risk is an uncertain event that may cause loss.',
  },
  {
    id: 'u4-cq-11',
    question: 'Proactive risk strategy means:',
    options: [
      'Acting before risk happens',
      'Ignoring all risks',
      'Solving only after failure',
      'Avoiding project planning',
    ],
    correctAnswer: 0,
    explanation: 'Proactive strategy prepares in advance.',
  },
  {
    id: 'u4-cq-12',
    question: 'Reactive risk strategy means:',
    options: [
      'Preventing all risks early',
      'Taking action after problem occurs',
      'Avoiding monitoring',
      'Ending the project',
    ],
    correctAnswer: 1,
    explanation: 'Reactive strategy responds after the issue appears.',
  },
  {
    id: 'u4-cq-13',
    question: 'Risk identification means:',
    options: [
      'Hiding project problems',
      'Finding possible risks',
      'Fixing only code bugs',
      'Releasing software',
    ],
    correctAnswer: 1,
    explanation: 'It is the process of discovering risks.',
  },
  {
    id: 'u4-cq-14',
    question: 'Risk projection is used to estimate:',
    options: [
      'Probability and impact of risk',
      'Only coding speed',
      'Only screen size',
      'Only project name',
    ],
    correctAnswer: 0,
    explanation: 'Projection measures chance and effect.',
  },
  {
    id: 'u4-cq-15',
    question: 'Change management is used to:',
    options: [
      'Control software changes',
      'Stop all updates',
      'Remove documentation',
      'Increase hardware price',
    ],
    correctAnswer: 0,
    explanation: 'It handles changes in a controlled way.',
  },
  {
    id: 'u4-cq-16',
    question: 'SCM stands for:',
    options: [
      'Software Configuration Management',
      'System Coding Method',
      'Software Control Mechanism',
      'System Configuration Model',
    ],
    correctAnswer: 0,
    explanation: 'SCM manages software changes and versions.',
  },
  {
    id: 'u4-cq-17',
    question: 'SCM repository stores:',
    options: [
      'Only hardware devices',
      'Code, documents, and versions',
      'Only project bills',
      'Only emails',
    ],
    correctAnswer: 1,
    explanation: 'Repository keeps all software items.',
  },
  {
    id: 'u4-cq-18',
    question: 'Formal methods are based on:',
    options: ['Guesswork', 'Mathematics and logic', 'Random coding', 'Only graphics'],
    correctAnswer: 1,
    explanation: 'Formal methods use mathematical specifications.',
  },
  {
    id: 'u4-cq-19',
    question: 'Cleanroom software development mainly focuses on:',
    options: [
      'Defect prevention',
      'More typing speed',
      'Bigger screen design',
      'User advertisement',
    ],
    correctAnswer: 0,
    explanation: 'Cleanroom tries to prevent defects early.',
  },
  {
    id: 'u4-cq-20',
    question: 'Independent testing is associated with:',
    options: [
      'Cleanroom approach',
      'Only waterfall model',
      'Only RAD',
      'Only maintenance',
    ],
    correctAnswer: 0,
    explanation: 'Cleanroom uses independent testing for certification.',
  },
];

const unit5CompleteQuiz = [
  {
    id: 'u5-cq-01',
    question: 'Software quality mainly means software is:',
    options: ['Colorful', 'Correct and reliable', 'Expensive', 'Very large'],
    correctAnswer: 1,
    explanation: 'Quality means correct, reliable, and useful software.',
  },
  {
    id: 'u5-cq-02',
    question: 'Software Quality Assurance mainly focuses on:',
    options: ['Preventing defects', 'Selling software', 'Designing hardware', 'Increasing file size'],
    correctAnswer: 0,
    explanation: 'SQA aims to prevent problems early.',
  },
  {
    id: 'u5-cq-03',
    question: 'SQA stands for:',
    options: [
      'Software Quality Assurance',
      'System Query Analysis',
      'Software Quick Access',
      'Secure Quality Application',
    ],
    correctAnswer: 0,
    explanation: 'This is the full form of SQA.',
  },
  {
    id: 'u5-cq-04',
    question: 'Statistical SQA uses:',
    options: ['Random guessing', 'Data and defect analysis', 'Only coding', 'Only graphics'],
    correctAnswer: 1,
    explanation: 'It improves quality using measurements.',
  },
  {
    id: 'u5-cq-05',
    question: 'Six Sigma strategy is mainly used to:',
    options: ['Increase defects', 'Reduce defects', 'Remove planning', 'Avoid testing'],
    correctAnswer: 1,
    explanation: 'Six Sigma focuses on defect reduction.',
  },
  {
    id: 'u5-cq-06',
    question: 'In DMAIC, the letter A stands for:',
    options: ['Apply', 'Analyze', 'Arrange', 'Assess'],
    correctAnswer: 1,
    explanation: 'DMAIC includes Define, Measure, Analyze, Improve, Control.',
  },
  {
    id: 'u5-cq-07',
    question: 'Software reliability means:',
    options: [
      'Software looks attractive',
      'Software works without failure',
      'Software uses more memory',
      'Software has more screens',
    ],
    correctAnswer: 1,
    explanation: 'Reliability means dependable operation.',
  },
  {
    id: 'u5-cq-08',
    question: 'ISO 9000 is related to:',
    options: ['Quality standards', 'Game design', 'Programming language', 'Network cable'],
    correctAnswer: 0,
    explanation: 'ISO 9000 defines quality management standards.',
  },
  {
    id: 'u5-cq-09',
    question: 'McCall’s quality factors are used to:',
    options: [
      'Evaluate software quality',
      'Buy computers',
      'Draw diagrams',
      'Test internet speed',
    ],
    correctAnswer: 0,
    explanation: 'They measure different aspects of quality.',
  },
  {
    id: 'u5-cq-10',
    question: 'Which is a McCall quality factor?',
    options: ['Reliability', 'Electricity', 'Packaging', 'Shipping'],
    correctAnswer: 0,
    explanation: 'Reliability is one of McCall’s factors.',
  },
  {
    id: 'u5-cq-11',
    question: 'Estimation in software engineering is used to predict:',
    options: ['Screen color', 'Effort, cost, and time', 'Only program name', 'Only user password'],
    correctAnswer: 1,
    explanation: 'Estimation predicts project needs.',
  },
  {
    id: 'u5-cq-12',
    question: 'Early software estimates are usually:',
    options: ['Completely exact', 'Less accurate', 'Always final', 'Always wrong'],
    correctAnswer: 1,
    explanation: 'Early estimates are rough and less accurate.',
  },
  {
    id: 'u5-cq-13',
    question: 'Software scope defines:',
    options: ['Project boundaries', 'Monitor size', 'Keyboard type', 'Network speed'],
    correctAnswer: 0,
    explanation: 'Scope tells what is included and excluded.',
  },
  {
    id: 'u5-cq-14',
    question: 'Feasibility study checks whether the project is:',
    options: ['Possible and practical', 'Colorful', 'Already complete', 'Free of cost only'],
    correctAnswer: 0,
    explanation: 'Feasibility checks if the project can be done.',
  },
  {
    id: 'u5-cq-15',
    question: 'Human resources in project planning include:',
    options: ['Developers and testers', 'Only servers', 'Only buildings', 'Only software licenses'],
    correctAnswer: 0,
    explanation: 'Human resources are the people working on the project.',
  },
  {
    id: 'u5-cq-16',
    question: 'Decomposition technique means:',
    options: [
      'Breaking project into smaller parts',
      'Deleting requirements',
      'Removing quality',
      'Changing hardware',
    ],
    correctAnswer: 0,
    explanation: 'Decomposition makes estimation easier.',
  },
  {
    id: 'u5-cq-17',
    question: 'COCOMO II is used for:',
    options: [
      'Cost and effort estimation',
      'Drawing UML only',
      'Security testing only',
      'User training only',
    ],
    correctAnswer: 0,
    explanation: 'COCOMO II estimates software project effort and cost.',
  },
  {
    id: 'u5-cq-18',
    question: 'Make/Buy decision means deciding whether to:',
    options: [
      'Build or purchase software',
      'Test or deploy software',
      'Design or debug software',
      'Print or scan documents',
    ],
    correctAnswer: 0,
    explanation: 'It compares in-house development with buying.',
  },
  {
    id: 'u5-cq-19',
    question: 'Buying software is often useful when:',
    options: [
      'quick solution is needed',
      'no software is available',
      'only custom code is possible',
      'requirements never change',
    ],
    correctAnswer: 0,
    explanation: 'Buying saves time when ready-made software is available.',
  },
  {
    id: 'u5-cq-20',
    question: 'Making software is often useful when:',
    options: [
      'customization is needed',
      'no team exists',
      'time is zero',
      'quality is not needed',
    ],
    correctAnswer: 0,
    explanation: 'Making software is better for special needs.',
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
          : number === 4
            ? unit4CompleteQuiz
            : number === 5
              ? unit5CompleteQuiz
          : makeQuiz(number, 'complete'),
  pyqQuiz:
    number === 1
      ? unit1PyqQuiz
      : number === 2
        ? unit2PyqQuiz
        : number === 3
          ? unit3PyqQuiz
          : number === 4
            ? unit4PyqQuiz
            : number === 5
              ? unit5PyqQuiz
              : makeQuiz(number, 'pyq'),
  cheatSheet:
    number === 1
      ? unit1CheatSheet
      : number === 2
        ? unit2CheatSheet
        : number === 3
          ? unit3CheatSheet
          : number === 4
            ? unit4CheatSheet
            : number === 5
              ? unit5CheatSheet
        : makeCheatSheet(number),
}));
