export const servicesContact = {
  phone: '+91 8583058673',
  whatsappNumber: '918583058673',
  whatsappMessage: 'Hi dada, I am interested / need help in this domain. what is the fees?',
};

export const getServicesWhatsAppLink = () =>
  `https://wa.me/${servicesContact.whatsappNumber}?text=${encodeURIComponent(servicesContact.whatsappMessage)}`;

export const homeServiceCards = [
  {
    id: 'final-year-major-projects',
    title: 'Final-Year Major Projects',
    description:
      'Get help with complete project ideas, full application development, documentation, report, PPT, viva questions, and final submission guidance.',
    tags: ['Complete application', 'Report support', 'PPT support', 'Viva QA'],
  },
  {
    id: 'iot-project-development',
    title: 'IoT Project Development',
    description:
      'Build IoT-based academic projects using sensors, actuators, Arduino concepts, smart automation, monitoring systems, and practical hardware/software integration ideas.',
    tags: ['Arduino', 'Sensors', 'Smart systems', 'IoT applications'],
  },
  {
    id: 'full-stack-web-development',
    title: 'Full-Stack Web Development',
    description:
      'Create professional web applications using MERN Stack, MEAN Stack, ASP.NET, databases, authentication, admin panels, dashboards, and deployment-ready project structure.',
    tags: ['MERN Stack', 'MEAN Stack', 'ASP.NET', 'Admin dashboard'],
  },
  {
    id: 'data-ml-ai-training',
    title: 'Data, ML & AI Training',
    description:
      'Learn Data Analytics, Data Science, Machine Learning, AI tools, dashboards, prediction models, and portfolio-ready projects with 1:1 guidance.',
    tags: ['Data Analytics', 'Data Science', 'Machine Learning', 'AI tools'],
  },
];

export const services = [
  {
    id: 'final-year-projects',
    title: 'Final-Year Major Project Support',
    shortDescription:
      'Complete guidance for selecting, building, documenting, presenting, and explaining academic major projects.',
    includes: [
      'Project idea selection',
      'Full application development',
      'Source code structure',
      'Database design',
      'Report writing support',
      'PPT preparation',
      'Viva question-answer preparation',
      'Final submission guidance',
    ],
    projectIdeas: [],
  },
  {
    id: 'iot-projects',
    title: 'IoT Project Support',
    shortDescription:
      'Practical IoT project guidance for diploma and engineering students using sensors, actuators, Arduino-based concepts, monitoring systems, and smart automation.',
    includes: ['Sensors and actuator planning', 'Arduino-based concepts', 'Monitoring systems', 'Smart automation ideas'],
    projectIdeas: [
      'Smart Home Automation System',
      'IoT-Based Weather Monitoring System',
      'Smart Irrigation System',
      'IoT-Based Health Monitoring System',
      'Smart Attendance System',
      'Industrial IoT Monitoring Dashboard',
      'Smart Parking System',
      'Fire and Gas Detection System',
      'Water Level Monitoring System',
      'Smart Energy Meter Concept',
    ],
  },
  {
    id: 'full-stack-projects',
    title: 'Full-Stack Web Development Projects',
    shortDescription:
      'Professional full-stack web application development support using modern technologies for academic projects, portfolio building, and interview showcase.',
    includes: [
      'MERN Stack: MongoDB, Express.js, React.js, Node.js',
      'MEAN Stack: MongoDB, Express.js, Angular, Node.js',
      'ASP.NET / .NET: ASP.NET Core, C#, SQL Server, Web API',
    ],
    projectIdeas: [
      'E-commerce Web Application',
      'Student Management System',
      'Online Learning Platform',
      'Job Portal',
      'Hospital Management System',
      'Library Management System',
      'Hotel Booking System',
      'Inventory Management System',
      'Expense Tracker Dashboard',
      'Admin Dashboard with Authentication',
    ],
  },
  {
    id: 'data-projects',
    title: 'Data Science and Data Analytics Projects',
    shortDescription:
      'Project-based support for dashboards, data cleaning, visualization, analytics reports, and insight generation.',
    includes: ['Data cleaning', 'Visualization', 'Dashboard planning', 'Analytics report writing'],
    projectIdeas: [
      'Sales Dashboard',
      'Student Performance Analysis',
      'Customer Churn Analysis',
      'E-commerce Data Analysis',
      'Healthcare Data Dashboard',
      'Financial Expense Analysis',
      'Business Intelligence Dashboard',
      'Excel/Power BI/Tableau Dashboard Project',
      'Python Data Visualization Project',
      'SQL Data Analysis Project',
    ],
  },
  {
    id: 'ml-ai-projects',
    title: 'Machine Learning and AI Projects',
    shortDescription:
      'Guidance for ML/AI academic and portfolio projects with practical implementation, model explanation, report, and viva preparation.',
    includes: ['Model implementation', 'AI tool guidance', 'Model explanation', 'Report and viva preparation'],
    projectIdeas: [
      'Fake News Detection',
      'House Price Prediction',
      'Student Result Prediction',
      'Disease Prediction System',
      'Sentiment Analysis',
      'Phishing Website Detection',
      'Resume Screening System',
      'Chatbot Application',
      'Recommendation System',
      'AI-Based Content Generator',
    ],
  },
  {
    id: 'job-preparation',
    title: '1:1 Internship and Job Preparation',
    shortDescription:
      'Special one-to-one training for students who want to prepare for internships, jobs, interviews, CV improvement, and project explanation.',
    includes: [
      'CV project explanation',
      'GitHub project setup guidance',
      'Interview question practice',
      'Technical viva practice',
      'Project demo preparation',
      'LinkedIn/GitHub profile guidance',
      'Internship roadmap',
      'Job-focused skill planning',
    ],
    projectIdeas: [],
  },
];

export const projectDomains = [
  'Final-year major projects',
  'IoT projects',
  'Full-stack web apps',
  'MERN Stack projects',
  'MEAN Stack projects',
  'ASP.NET / .NET applications',
  'Data Science projects',
  'Data Analytics projects',
  'Machine Learning projects',
  'AI-based projects',
];

export const whyProjectsMatter = [
  {
    title: 'CV Showcase',
    description: 'Add practical projects to your CV to show real implementation skills.',
  },
  {
    title: 'Interview Explanation',
    description: 'Explain project architecture, features, database, challenges, and technical decisions confidently.',
  },
  {
    title: 'Internship Applications',
    description: 'Use projects to demonstrate practical readiness when applying for internships.',
  },
  {
    title: 'Viva Preparation',
    description: 'Prepare common viva questions, technical explanations, and project flow.',
  },
  {
    title: 'Portfolio and GitHub',
    description: 'Organize source code, screenshots, README files, and project documentation professionally.',
  },
];

export const projectWorkflow = [
  'Choose project domain',
  'Select project title',
  'Plan features and modules',
  'Build application or prototype',
  'Prepare database/design',
  'Create report',
  'Create PPT',
  'Prepare viva QA',
  'Final demo practice',
];

export const trainingServices = [
  'Complete report writing support',
  'PPT / presentation support',
  'Viva question-answer preparation',
  'Interview and CV project explanation',
  '1:1 special training for internship and job preparation',
];
