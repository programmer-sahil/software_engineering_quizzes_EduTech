export const iotSubjectInfo = {
  subject: 'Internet of Things',
  semester: 'Diploma 5th Semester',
  aim: 'Develop basic concepts of IoT and its applications.',
  courseObjectives:
    'The Internet is evolving to connect people to physical things and also physical things to other physical things all in real time. It is becoming the Internet of Things (IoT). The course enables students to understand the basics of Internet of Things and protocols. It introduces some of the application areas where Internet of Things can be applied. Students will learn about the middleware for Internet of Things and understand the concepts of Web of Things.',
};

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

const getTopicFocus = (topic) => {
  const lowerTopic = topic.toLowerCase();

  if (lowerTopic.includes('arduino')) {
    return {
      concept: 'Arduino connects IoT logic with physical input and output devices.',
      example: 'A sensor reading can be processed by Arduino and used to switch a relay, motor, buzzer, or display.',
      examHint: 'In exams, connect Arduino answers with board basics, pins, sensors, actuators, and simple control flow.',
    };
  }
  if (lowerTopic.includes('sensor') || lowerTopic.includes('sensing')) {
    return {
      concept: 'Sensing captures real-world physical data so an IoT system can understand its environment.',
      example: 'Temperature, humidity, gas, motion, light, and water-level sensors are common IoT input devices.',
      examHint: 'Mention input, measurement, data collection, and decision-making when writing about sensing.',
    };
  }
  if (lowerTopic.includes('actuator') || lowerTopic.includes('actuation')) {
    return {
      concept: 'Actuation converts IoT decisions into physical action.',
      example: 'Motors, relays, LEDs, buzzers, valves, and locks are common actuators in smart systems.',
      examHint: 'Explain actuation as output/control and pair it with a real IoT example.',
    };
  }
  if (lowerTopic.includes('security') || lowerTopic.includes('privacy')) {
    return {
      concept: 'Security and privacy protect IoT devices, networks, data, and users from misuse.',
      example: 'Authentication, encryption, secure firmware, access control, and safe data handling reduce IoT risk.',
      examHint: 'Write about confidentiality, integrity, authentication, device safety, and user privacy.',
    };
  }
  if (lowerTopic.includes('protocol') || lowerTopic.includes('zigbee') || lowerTopic.includes('modbus') || lowerTopic.includes('bacnet') || lowerTopic.includes('knx') || lowerTopic.includes('ieee')) {
    return {
      concept: 'IoT protocols define how devices communicate, exchange data, and remain interoperable.',
      example: 'Zigbee, IEEE 802.15.4, Modbus, BACNet, and KNX support different IoT and automation communication needs.',
      examHint: 'Mention communication rules, layers, interoperability, low power, reliability, and standardization.',
    };
  }
  if (lowerTopic.includes('architecture') || lowerTopic.includes('stack') || lowerTopic.includes('resource model') || lowerTopic.includes('abstraction')) {
    return {
      concept: 'IoT architecture organizes devices, connectivity, services, data, and applications into a working system.',
      example: 'A device layer collects data, a network layer transfers it, and an application layer presents useful services.',
      examHint: 'Use layered explanation and show how devices, resources, middleware, and applications connect.',
    };
  }
  if (lowerTopic.includes('web of things') || lowerTopic.includes('wot') || lowerTopic.includes('middleware') || lowerTopic.includes('portal') || lowerTopic.includes('business intelligence')) {
    return {
      concept: 'Web of Things applies web standards and middleware ideas to make IoT resources easier to access and integrate.',
      example: 'A web portal can expose sensor data and dashboards through standard web interfaces.',
      examHint: 'Compare WoT with IoT using web standards, portals, middleware, APIs, and data access.',
    };
  }
  if (lowerTopic.includes('application') || lowerTopic.includes('industry') || lowerTopic.includes('factory') || lowerTopic.includes('smart')) {
    return {
      concept: 'IoT applications solve practical problems by connecting devices, data, automation, and analytics.',
      example: 'Smart homes, health monitoring, industrial dashboards, parking systems, and energy meters are common IoT applications.',
      examHint: 'For application answers, write problem, IoT devices used, data flow, automation, and benefit.',
    };
  }
  if (lowerTopic.includes('ecosystem') || lowerTopic.includes('driver') || lowerTopic.includes('governance') || lowerTopic.includes('trends')) {
    return {
      concept: 'An IoT ecosystem combines devices, networks, platforms, people, policies, and business goals.',
      example: 'Technology drivers such as cheap sensors and cloud platforms make connected solutions easier to build.',
      examHint: 'Connect ecosystem answers with stakeholders, devices, connectivity, data, business value, and governance.',
    };
  }

  return {
    concept: `${topic} is an important IoT syllabus concept that helps explain how connected systems are planned, built, or used.`,
    example: `A practical answer for ${topic} should connect the concept with devices, data, communication, and real-world IoT use.`,
    examHint: 'Use definition, key points, one example, and one benefit for a clean exam-ready answer.',
  };
};

const makeTopicRevision = (unit, topic, index) => {
  const focus = getTopicFocus(topic);
  const topicId = `${unit.id}-topic-${index + 1}-${slugify(topic)}`;

  return {
    id: topicId,
    title: topic,
    flashcards: [
      {
        id: `${topicId}-flashcard-1`,
        front: `What should you remember about ${topic}?`,
        back: focus.concept,
      },
      {
        id: `${topicId}-flashcard-2`,
        front: `Give one exam-friendly example of ${topic}.`,
        back: focus.example,
      },
      {
        id: `${topicId}-flashcard-3`,
        front: `How should you write ${topic} in an exam answer?`,
        back: focus.examHint,
      },
    ],
    questions: [
      {
        id: `${topicId}-mcq-1`,
        question: `Which statement best explains "${topic}" in IoT?`,
        options: [
          focus.concept,
          'It is only used for drawing decorative diagrams.',
          'It removes the need for devices, data, and networks.',
          'It is unrelated to connected systems and automation.',
        ],
        correctAnswer: 0,
        explanation: focus.concept,
      },
      {
        id: `${topicId}-mcq-2`,
        question: `For "${topic}", which exam approach is most suitable?`,
        options: [
          'Write definition, key points, example, and benefit.',
          'Write only the full form and stop.',
          'Avoid examples and diagrams completely.',
          'Discuss only unrelated programming syntax.',
        ],
        correctAnswer: 0,
        explanation: focus.examHint,
      },
      {
        id: `${topicId}-mcq-3`,
        question: `Which example fits the revision of "${topic}"?`,
        options: [
          focus.example,
          'A standalone notebook page without any system connection.',
          'A topic with no relation to devices or data.',
          'A random file name used only for storage.',
        ],
        correctAnswer: 0,
        explanation: focus.example,
      },
    ],
  };
};

export const iotUnits = [
  {
    id: '1',
    title: 'Unit 1: IoT',
    shortTitle: 'IoT',
    hours: 10,
    marks: 10,
    module: 'A',
    description:
      'Introduction to IoT, IoT ecosystem, technology drivers, business drivers, governance, privacy, security, sensing, and actuation.',
    summary:
      'Introduction to IoT, IoT ecosystem, technology drivers, business drivers, governance, privacy, security, sensing, and actuation.',
    topics: [
      'What is IoT and why is it important?',
      'Elements of an IoT ecosystem',
      'Technology drivers',
      'Business drivers',
      'Trends and implications',
      'Overview of governance',
      'Privacy and security issues',
      'Sensing',
      'Actuation',
    ],
  },
  {
    id: '2',
    title: 'Unit 2: IoT Protocols',
    shortTitle: 'IoT Protocols',
    hours: 14,
    marks: 14,
    module: 'A',
    description:
      'Protocol standardization for IoT, M2M, WSN, SCADA, RFID, unified data standards, and major IoT communication protocols.',
    summary:
      'Protocol standardization for IoT, M2M, WSN, SCADA, RFID, unified data standards, and major IoT communication protocols.',
    topics: [
      'Protocol standardization for IoT',
      'Standardization efforts',
      'M2M protocols',
      'WSN protocols',
      'SCADA protocols',
      'RFID protocols',
      'Issues with IoT standardization',
      'Unified data standards',
      'IEEE 802.15.4',
      'BACNet protocol',
      'Modbus',
      'KNX',
      'Zigbee',
      'Network layer',
      'APS layer',
      'Security',
    ],
  },
  {
    id: '3',
    title: 'Unit 3: IoT Architecture',
    shortTitle: 'IoT Architecture',
    hours: 10,
    marks: 10,
    module: 'B',
    description:
      'Open-source IoT architecture, OIC architecture, design principles, IoT devices, deployment models, and IoTivity stack.',
    summary:
      'Open-source IoT architecture, OIC architecture, design principles, IoT devices, deployment models, and IoTivity stack.',
    topics: [
      'IoT open-source architecture',
      'OIC architecture',
      'OIC design principles',
      'IoT devices',
      'IoT deployment models',
      'IoTivity: An open-source IoT stack',
      'Overview of IoTivity',
      'IoTivity stack architecture',
      'Resource model',
      'Abstraction',
    ],
  },
  {
    id: '4',
    title: 'Unit 4: Web of Things',
    shortTitle: 'Web of Things',
    hours: 10,
    marks: 10,
    module: 'B',
    description:
      'Web of Things concepts, WoT versus IoT, architecture standardization, middleware, multitier architecture, portals, and business intelligence.',
    summary:
      'Web of Things concepts, WoT versus IoT, architecture standardization, middleware, multitier architecture, portals, and business intelligence.',
    topics: [
      'Web of Things versus Internet of Things',
      'Two pillars of the Web',
      'Architecture standardization for WoT',
      'Platform middleware for WoT',
      'Unified multitier WoT architecture',
      'WoT portals',
      'Business intelligence',
    ],
  },
  {
    id: '5',
    title: 'Unit 5: Arduino',
    shortTitle: 'Arduino',
    hours: 6,
    marks: 6,
    module: 'C',
    description: 'Arduino programming basics and integration of sensors and actuators with Arduino.',
    summary: 'Arduino programming basics and integration of sensors and actuators with Arduino.',
    topics: [
      'Introduction to Arduino programming',
      'Arduino board basics',
      'Sensor integration with Arduino',
      'Actuator integration with Arduino',
      'Simple IoT hardware control concepts',
      'Practical Arduino-based examples',
    ],
  },
  {
    id: '6',
    title: 'Unit 6: IoT Applications',
    shortTitle: 'IoT Applications',
    hours: 10,
    marks: 10,
    module: 'C',
    description:
      'Industrial IoT applications, future factory concepts, smart objects, smart applications, and existing IoT platforms and middleware.',
    summary:
      'Industrial IoT applications, future factory concepts, smart objects, smart applications, and existing IoT platforms and middleware.',
    topics: [
      'IoT applications for industry',
      'Future factory concepts',
      'Brownfield IoT',
      'Smart objects',
      'Smart applications',
      'Study of existing IoT platforms',
      'IoT middleware',
      'IoT-A',
      'Hydra',
    ],
  },
].map((unit) => ({
  ...unit,
  topicRevision: unit.topics.map((topic, index) => makeTopicRevision(unit, topic, index)),
  completeQuiz: [],
  pyqQuiz: [],
  cheatSheet: [],
  commonQuestions: [],
  placeholders: {
    completeQuiz: 'Quiz content will be added soon.',
    pyqQuiz: 'PYQ practice will be added soon.',
    cheatSheet: 'Cheat sheet will be added soon.',
    commonQuestions: 'Important common questions will be added soon.',
  },
}));
