export const unit1LongAnswers = [
  {
    id: 'what-is-iot',
    emoji: '🌐',
    title: 'What is IoT? Explain why IoT is important.',
    teachingFocus: 'Definition + simple examples + importance points',
    visual: {
      title: 'IoT Flow',
      steps: ['Thing', 'Sensor', 'Internet', 'Cloud/App', 'Action'],
    },
    intro: [
      'IoT stands for Internet of Things. It is a modern technology where physical objects are connected to the internet so that they can collect data, share data, and work automatically.',
      'In simple words, IoT connects physical things with the internet. These things can sense information from the environment and send it to other devices or cloud systems.',
      'For example, a smart AC can be controlled using a mobile phone. A smart watch can measure heartbeat and send health data. A smart irrigation system can detect soil moisture and automatically water plants.',
    ],
    sections: [
      {
        heading: 'Importance of IoT',
        bullets: [
          'Automation: IoT helps devices work automatically without much human effort.',
          'Remote Monitoring: Users can monitor devices from anywhere using mobile apps or dashboards.',
          'Better Decision-Making: Real-time data helps people and organizations make better decisions.',
          'Saves Time and Cost: IoT reduces manual work and helps save electricity, fuel, water, and maintenance cost.',
          'Improves Safety and Security: IoT is used in CCTV cameras, fire alarms, gas detectors, and smart locks.',
          'Useful in Many Fields: IoT is used in smart homes, hospitals, agriculture, transport, industries, education, and smart cities.',
        ],
      },
    ],
    conclusion:
      'IoT is important because it connects real-world objects to the internet and makes them smart. It helps in automation, monitoring, safety, and better use of resources.',
  },
  {
    id: 'iot-ecosystem-components',
    emoji: '🧩',
    title: 'Explain the elements/components of an IoT ecosystem.',
    teachingFocus: 'Explain every component with one example',
    visual: {
      title: 'Ecosystem Blocks',
      steps: ['Sensors', 'Actuators', 'Device', 'Network', 'Cloud', 'User'],
    },
    intro: [
      'An IoT ecosystem is a complete system where different devices, networks, software, and users work together to collect, send, process, and use data.',
      'Each part has an important role in making IoT work properly.',
    ],
    sections: [
      {
        heading: 'Main Components',
        bullets: [
          'Sensors: Devices that collect data from the environment, such as temperature, humidity, light, motion, pressure, gas, or distance.',
          'Actuators: Devices that perform actions based on commands, such as motor, fan, relay, buzzer, or water pump.',
          'IoT Devices: Physical objects connected to the internet, such as smart watches, smart bulbs, smart cameras, or Arduino-based devices.',
          'Connectivity / Network: Transfers data through Wi-Fi, Bluetooth, Zigbee, RFID, mobile network, or Ethernet.',
          'Data Processing: Converts raw data into useful information on the device, local server, or cloud.',
          'Cloud Platform: Stores and processes large amounts of IoT data and allows access from anywhere.',
          'User Interface: Mobile app, website, or dashboard used to view data and control devices.',
          'Security: Protects devices, networks, and data through passwords, encryption, and secure login.',
        ],
      },
    ],
    conclusion:
      'An IoT ecosystem includes sensors, actuators, devices, networks, cloud, data processing, user interface, and security. These components work together to make IoT systems useful and smart.',
  },
  {
    id: 'technology-business-drivers',
    emoji: '🚀',
    title: 'Explain technology drivers and business drivers of IoT.',
    teachingFocus: 'Separate technology reasons from business reasons',
    visual: {
      title: 'IoT Growth Drivers',
      steps: ['Low-cost sensors', 'Internet', 'Cloud', 'AI/Data', 'Productivity'],
    },
    intro: [
      'IoT is growing rapidly because of many technology and business reasons. These reasons are called drivers of IoT.',
      'Drivers are factors that help IoT develop and become popular. There are mainly two types: technology drivers and business drivers.',
    ],
    sections: [
      {
        heading: 'Technology Drivers of IoT',
        bullets: [
          'Low-Cost Sensors: Sensors have become cheaper and smaller, so they can be used in many devices.',
          'Internet Connectivity: Fast internet and wireless networks help IoT devices send and receive data easily.',
          'Cloud Computing: Cloud helps store and process large amounts of IoT data.',
          'Smartphones: Smartphones act as controllers for many IoT devices through mobile apps.',
          'Artificial Intelligence and Data Analytics: AI and analytics help understand IoT data and make smart decisions.',
          'Embedded Systems: Microcontrollers like Arduino and Raspberry Pi help connect sensors and actuators.',
        ],
      },
      {
        heading: 'Business Drivers of IoT',
        bullets: [
          'Cost Reduction: IoT reduces manual work, energy usage, and maintenance cost.',
          'Better Customer Service: Companies can monitor products and fix issues early.',
          'New Business Opportunities: IoT creates smart homes, smart cars, and health monitoring products.',
          'Improved Productivity: Industries can monitor machines and production in real time.',
          'Real-Time Monitoring: Businesses can track vehicles, products, machines, and workers.',
          'Competitive Advantage: Companies using IoT can provide better services and stay ahead.',
        ],
      },
    ],
    conclusion:
      'Technology drivers make IoT technically possible, while business drivers make IoT useful for companies and customers. Both are important for the growth of IoT.',
  },
  {
    id: 'privacy-security-issues',
    emoji: '🔐',
    title: 'Explain privacy and security issues in IoT.',
    teachingFocus: 'Privacy = personal data, security = protection from attacks',
    visual: {
      title: 'IoT Protection Map',
      steps: ['Data', 'Device', 'Network', 'Cloud', 'User'],
    },
    intro: [
      'IoT devices collect and share a large amount of data. This data may include personal, health, location, business, or financial information.',
      'Privacy means protecting personal information. Security means protecting devices, networks, and data from unauthorized access and attacks.',
    ],
    sections: [
      {
        heading: 'Privacy Issues in IoT',
        bullets: [
          'Collection of Personal Data: IoT devices collect location, health details, daily habits, and voice recordings.',
          'Data Misuse: If personal data is not protected, it may be misused by companies or hackers.',
          'Location Tracking: Location data can create privacy problems if shared without permission.',
          'Lack of User Control: Users may not know what data is collected or how it is used.',
          'Data Sharing with Third Parties: Some companies may share user data for marketing or analysis.',
        ],
      },
      {
        heading: 'Security Issues in IoT',
        bullets: [
          'Weak Passwords: Default or weak passwords make devices easy to attack.',
          'Unauthorized Access: Hackers may control IoT devices without permission.',
          'Data Theft: Data can be stolen if communication is not encrypted.',
          'Malware Attacks: IoT devices can be infected and used for cyber attacks.',
          'Lack of Software Updates: Devices without updates become vulnerable.',
        ],
      },
      {
        heading: 'Ways to Improve IoT Security',
        bullets: [
          'Use strong passwords and change default passwords.',
          'Use encryption and secure networks.',
          'Update device software regularly.',
          'Give minimum required access to devices.',
          'Use authentication and authorization.',
        ],
      },
    ],
    conclusion:
      'Privacy and security are major challenges in IoT. Strong security methods are necessary to protect personal data, devices, networks, and users.',
  },
  {
    id: 'sensing-actuation',
    emoji: '📡',
    title: 'Explain sensing and actuation in IoT with examples.',
    teachingFocus: 'Sensor collects data, actuator performs action',
    visual: {
      title: 'Sense → Decide → Act',
      steps: ['Sensor reads', 'Data processed', 'Command sent', 'Actuator acts'],
    },
    intro: [
      'Sensing and actuation are two very important parts of an IoT system. IoT devices use sensing to collect information and actuation to perform actions.',
    ],
    sections: [
      {
        heading: 'Sensing in IoT',
        bullets: [
          'Sensing means collecting data from the physical environment using sensors.',
          'A sensor detects changes in the surroundings and converts them into electrical signals or digital data.',
          'Examples of sensors include temperature sensor, humidity sensor, motion sensor, light sensor, gas sensor, and soil moisture sensor.',
          'Example: In smart agriculture, a soil moisture sensor checks whether soil is dry or wet.',
        ],
      },
      {
        heading: 'Actuation in IoT',
        bullets: [
          'Actuation means performing an action based on sensor data or commands.',
          'An actuator receives a signal and performs physical work.',
          'Examples of actuators include motor, relay, buzzer, water pump, LED light, and fan.',
          'Example: In smart irrigation, when dry soil is detected, the water pump turns on automatically.',
        ],
      },
      {
        heading: 'Difference Between Sensing and Actuation',
        bullets: [
          'Sensing is used to collect information.',
          'Actuation is used to perform an action.',
          'Example: A temperature sensor senses high temperature, and a fan turns on automatically.',
        ],
      },
    ],
    conclusion:
      'Sensing and actuation make IoT systems smart. Sensors collect data, and actuators perform actions based on that data.',
  },
  {
    id: 'trends-implications',
    emoji: '📈',
    title: 'Explain trends and implications of IoT.',
    teachingFocus: 'Trends = future direction, implications = effects',
    visual: {
      title: 'IoT Impact Areas',
      steps: ['Home', 'City', 'Industry', 'Health', 'Agriculture', 'Vehicles'],
    },
    intro: [
      'IoT is becoming one of the most important technologies in the modern world. It is changing how people live, work, travel, learn, and do business.',
      'The growth and future direction of IoT are called trends. The effects of IoT on society, industry, and daily life are called implications.',
    ],
    sections: [
      {
        heading: 'Trends of IoT',
        bullets: [
          'Smart Homes: Smart lights, fans, locks, TVs, and ACs can be controlled using mobile apps.',
          'Smart Cities: IoT supports traffic monitoring, smart street lights, waste management, pollution monitoring, and public safety.',
          'Industrial IoT: Industries monitor machines, production, energy usage, and safety conditions.',
          'Healthcare IoT: Devices monitor heartbeat, blood pressure, oxygen level, and medicine reminders.',
          'Smart Agriculture: Farmers use IoT for soil monitoring, weather monitoring, smart irrigation, and crop management.',
          'Connected Vehicles: IoT supports GPS tracking, fuel monitoring, safety alerts, and vehicle health monitoring.',
          'Use of AI with IoT: IoT data can be analyzed using AI for predictions and automatic decisions.',
        ],
      },
      {
        heading: 'Implications of IoT',
        bullets: [
          'Improved Lifestyle: IoT makes daily life easier through automation.',
          'Better Efficiency: IoT improves efficiency in homes, offices, industries, and transport.',
          'More Data Generation: IoT devices generate huge amounts of data that must be managed properly.',
          'Security Risks: More connected devices increase the risk of hacking and data theft.',
          'Job and Skill Changes: IoT creates new opportunities in hardware, software, networking, data analytics, and cybersecurity.',
          'Dependence on Technology: People and organizations may become highly dependent on connected systems.',
        ],
      },
    ],
    conclusion:
      'IoT trends show that connected devices will become more common in the future. IoT has many benefits, but it also creates challenges related to security, privacy, and technology dependence.',
  },
  {
    id: 'governance-in-iot',
    emoji: '⚖️',
    title: 'Explain governance in IoT.',
    teachingFocus: 'Rules, policies, standards, responsibility',
    visual: {
      title: 'Governance Pillars',
      steps: ['Data', 'Privacy', 'Security', 'Standards', 'Risk'],
    },
    intro: [
      'Governance in IoT means the rules, policies, standards, and responsibilities used to manage IoT systems properly.',
      'Since IoT devices collect data, communicate through networks, and control real-world objects, proper governance is necessary.',
    ],
    sections: [
      {
        heading: 'Need for Governance in IoT',
        bullets: [
          'Data Protection: Governance helps protect user data from misuse.',
          'Privacy Protection: It ensures personal information is collected and used with permission.',
          'Security Management: Rules protect IoT devices from hacking, malware, and unauthorized access.',
          'Standardization: Standards help devices from different companies communicate properly.',
          'Responsibility: Governance defines responsibility if an IoT system fails or causes damage.',
          'Ethical Use: IoT should be used fairly and should not harm people or violate privacy.',
        ],
      },
      {
        heading: 'Important Areas of IoT Governance',
        bullets: [
          'Device Management: Devices should be registered, monitored, updated, and protected.',
          'Access Control: Only authorized users should access IoT devices and data.',
          'Data Management: Data should be collected, stored, processed, and deleted properly.',
          'Security Policies: Organizations should follow strong passwords, encryption, and regular updates.',
          'Legal Compliance: IoT systems should follow government rules and data protection laws.',
          'Risk Management: Possible risks should be identified and reduced before using IoT systems.',
        ],
      },
    ],
    conclusion:
      'Governance in IoT is important because it provides rules and responsibilities for safe and proper use of IoT. It helps protect data, privacy, devices, and users.',
  },
  {
    id: 'short-notes',
    emoji: '📝',
    title: 'Write short notes on IoT ecosystem, sensing, actuation, and IoT security.',
    teachingFocus: 'Short-answer revision for multiple concepts',
    visual: {
      title: 'Quick Revision Set',
      steps: ['Ecosystem', 'Sensing', 'Actuation', 'Security'],
    },
    intro: ['These short notes are useful for quick revision and short-answer exam preparation.'],
    sections: [
      {
        heading: 'IoT Ecosystem',
        bullets: [
          'An IoT ecosystem is a complete environment where IoT devices, sensors, actuators, networks, cloud platforms, software, and users work together.',
          'Example: In a smart home, lights, fans, cameras, sensors, Wi-Fi, cloud, and mobile apps together form an IoT ecosystem.',
        ],
      },
      {
        heading: 'Sensing',
        bullets: [
          'Sensing means collecting information from the physical environment using sensors.',
          'Sensors detect temperature, humidity, light, motion, gas, pressure, or distance.',
          'Example: A temperature sensor senses room temperature.',
        ],
      },
      {
        heading: 'Actuation',
        bullets: [
          'Actuation means performing an action based on sensor data or user command.',
          'Motors, relays, buzzers, fans, pumps, and LEDs are common actuators.',
          'Example: If a soil moisture sensor detects dry soil, a water pump turns on automatically.',
        ],
      },
      {
        heading: 'IoT Security',
        bullets: [
          'IoT security means protecting IoT devices, networks, and data from unauthorized access and cyber attacks.',
          'Common methods include strong passwords, encryption, software updates, secure networks, authentication, and access control.',
          'Example: A smart camera should be protected with a strong password.',
        ],
      },
    ],
    conclusion:
      'IoT ecosystem, sensing, actuation, and security are basic but very important concepts of IoT. Sensors collect data, actuators perform actions, and security protects the whole IoT system.',
  },
];
