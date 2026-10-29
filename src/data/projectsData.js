/**
 * EduTech Project Development Portfolio Dataset
 * High-definition project showcases across IoT, Full-Stack, Data Science, and AI.
 */

import project1 from '../../assets/projects/project1.jpg';
import project2 from '../../assets/projects/project2.jpg';
import project3 from '../../assets/projects/project3.jpg';
import project4 from '../../assets/projects/project4.jpg';
import project5 from '../../assets/projects/project5.jpg';
import project6 from '../../assets/projects/project6.jpg';

export const SHOWCASE_PROJECTS = [
  {
    id: 'proj-01',
    title: 'IoT Environmental Automation & Gas Detection System',
    domain: 'Internet of Things',
    image: project1,
    description:
      'Real-time environmental telemetry device using ESP32/Arduino with MQ-2 gas and DHT11 sensors, automated cooling relay actuation, and MQTT cloud monitoring.',
    fullDescription:
      'A complete IoT final-year hardware and software project. Features real-time sensor sampling, analog-to-digital signal conversion, threshold-based relay triggers, MQTT broker communication, and an interactive web telemetry dashboard.',
    techStack: ['ESP32 / Arduino', 'DHT11 Sensor', 'MQ-2 Gas Sensor', 'Relay Module', 'MQTT Protocol', 'React Dashboard'],
    deliverables: [
      'Tested Hardware Circuit Schematics',
      'Clean C++ Firmware Source Code',
      'React Telemetry Web Interface',
      'IEEE-Format Final Year Project Report',
      'Project Presentation (PPT)',
      'Viva QA Preparation Guide',
    ],
  },
  {
    id: 'proj-02',
    title: 'Full-Stack Student Learning & Examination SaaS Portal',
    domain: 'Full-Stack Web Development',
    image: project2,
    description:
      'Scalable diploma examination portal featuring student authentication, timed MCQ test engine, instant scoring, and administrator question-bank management.',
    fullDescription:
      'Production-ready web application built on modern MERN architecture. Supports timed quiz sessions, instant answer explanations, secure JWT authentication, responsive mobile interface, and detailed progress analytics.',
    techStack: ['React.js', 'Node.js / Express', 'MongoDB', 'Tailwind CSS', 'JWT Authentication', 'RESTful APIs'],
    deliverables: [
      'Full Application Source Code',
      'REST API Documentation',
      'Database Schema & ER Diagram',
      'Final Submission Project Report',
      'Project Demo Slide Deck (PPT)',
      'Technical Viva Q&A Script',
    ],
  },
  {
    id: 'proj-03',
    title: 'Predictive Analytics & Student Performance Dashboard',
    domain: 'Data Science & Machine Learning',
    image: project3,
    description:
      'Machine learning system analyzing attendance, assignment scores, and semester trends to forecast academic performance and identify students needing intervention.',
    fullDescription:
      'Comprehensive data science project covering data cleaning, exploratory data analysis (EDA), predictive model training with Scikit-Learn, and an interactive business intelligence dashboard built with FastAPI and modern charts.',
    techStack: ['Python', 'Pandas & NumPy', 'Scikit-Learn', 'FastAPI', 'Chart.js / Power BI', 'PostgreSQL'],
    deliverables: [
      'Documented Jupyter Notebooks',
      'Trained Machine Learning Model (.pkl)',
      'Interactive Web Analytics Dashboard',
      'Comprehensive Project Report',
      'Viva Explanation & Methodology Prep',
      'PPT Presentation with Data Charts',
    ],
  },
  {
    id: 'proj-04',
    title: 'Smart Industrial Energy Metering & Power Management',
    domain: 'IoT & Industrial Automation',
    image: project4,
    description:
      'Connected energy metering device logging electrical power consumption in real-time, detecting overload faults, and transmitting telemetry over Modbus RS-485.',
    fullDescription:
      'Industry-focused IoT prototype measuring voltage, current, and active power. Includes fault-detection logic, automated circuit tripping via relays, and supervisory telemetry logging for energy auditing.',
    techStack: ['ATmega328P / Arduino', 'CT Current Sensor', 'Voltage Sensor', 'Modbus RS-485', 'Relay Module', 'Python Logging'],
    deliverables: [
      'Working Hardware Prototype Design',
      'Firmware Code with Comments',
      'Circuit Diagram & Component List',
      'Complete Academic Project Report',
      'PowerPoint Presentation',
      'Viva Question & Answer Sheet',
    ],
  },
  {
    id: 'proj-05',
    title: 'Enterprise E-Commerce & Inventory Management Platform',
    domain: 'Full-Stack Web Development',
    image: project5,
    description:
      'Enterprise web solution featuring product catalog, customer cart checkout, automated invoice generation, role-based admin panel, and live stock tracking.',
    fullDescription:
      'Enterprise application built with ASP.NET Core and React. Demonstrates layered architecture, Entity Framework Core ORM, SQL Server database design, secure payment gateway integration, and stock ledger tracking.',
    techStack: ['ASP.NET Core', 'C#', 'SQL Server', 'Entity Framework', 'React.js', 'Stripe Payment API'],
    deliverables: [
      'Clean Modular Backend & Frontend Code',
      'Database Schema & Migration Scripts',
      'API Endpoints Documentation',
      'Full College Project Report',
      'Project Presentation (PPT)',
      'Viva Defense & Code Walkthrough',
    ],
  },
  {
    id: 'proj-06',
    title: 'AI Resume Screening & Technical Candidate Matcher',
    domain: 'Artificial Intelligence & NLP',
    image: project6,
    description:
      'Automated NLP tool parsing resume PDFs, extracting skill entities, and calculating cosine-similarity scores against technical job descriptions.',
    fullDescription:
      'Advanced AI application leveraging natural language processing and transformer embeddings. Automates the parsing of student CVs, ranks candidate suitability against job requirements, and provides skill gap recommendations.',
    techStack: ['Python', 'spaCy & NLTK', 'HuggingFace Transformers', 'FastAPI', 'Tailwind CSS', 'Docker'],
    deliverables: [
      'Python NLP Pipeline Source Code',
      'Model Evaluation & Accuracy Metrics',
      'System Architecture & Flow Diagrams',
      'Final Submission Project Report',
      'Slide Presentation (PPT)',
      'Viva Answer Guide for AI Models',
    ],
  },
];
