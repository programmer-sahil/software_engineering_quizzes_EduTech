/**
 * EduTech Diploma Learning Hub - IoT Long Questions Dataset
 * Single Source of Truth for Descriptive Exam Questions & Concise Model Answers
 *
 * Sourced directly from:
 * - docs/iot/Unit_1_Introduction_to_IoT.md
 * - docs/iot/Unit_2_IoT_Protocols.md
 * - docs/iot/Unit_3_IoT_Architecture.md
 * - docs/iot/Unit_4_Web_of_Things_WoT.md
 * - docs/iot/Unit_5_Arduino.md
 * - docs/iot/Unit_6_IoT_Applications.md
 *
 * Examination sessions verified against WBSCTE Diploma past papers:
 * - March 2023, January 2024, December 2024, January 2026
 */

export const IOT_LONG_QUESTIONS = [
  // =========================================================================
  // UNIT 1: INTRODUCTION TO IOT (8 Long Questions - All Verified PYQs)
  // =========================================================================
  {
    id: 'iot-u1-lq1',
    subjectId: 'iot',
    unitId: 1,
    questionNumber: 1,
    title: 'Define IoT. Explain its main characteristics and advantages.',
    type: 'PYQ',
    years: ['Mar 2023', 'Jan 2026'],
    marks: 5,
    category: 'Fundamentals',
    sourceFile: 'docs/iot/Unit_1_Introduction_to_IoT.md',
    definition:
      'IoT (Internet of Things) is an interconnected network of physical objects embedded with sensors, software, and network connectivity that collect and exchange data over the internet.',
    keyPoints: [
      'Connectivity: Enables diverse physical devices to communicate seamlessly across standard networks.',
      'Sensing & Identification: Things possess unique identifiers (IP/MAC/URI) and capture environmental changes.',
      'Automation & Intelligence: Processes real-time sensor streams to automate routine decisions without human intervention.',
      'Remote Monitoring & Control: Allows operators to monitor asset status and command equipment from any mobile device or cloud dashboard.',
    ],
    example:
      'A smart home lighting system that monitors ambient sunlight through an LDR and automatically turns lights on when darkness is detected, controllable via a mobile app.',
    visualFlow: {
      title: 'IoT System Data Flow',
      steps: ['Physical Thing', 'Sensor Input', 'Microcontroller / Gateway', 'Cloud / Dashboard', 'Actuator Action'],
    },
    conclusion:
      'IoT bridges the physical and digital worlds, converting inert objects into smart, communicative endpoints to optimize resource consumption and operational visibility.',
  },
  {
    id: 'iot-u1-lq2',
    subjectId: 'iot',
    unitId: 1,
    questionNumber: 2,
    title: 'Explain the main components of an IoT ecosystem.',
    type: 'PYQ',
    years: ['Mar 2023', 'Jan 2024', 'Dec 2024', 'Jan 2026'],
    marks: 8,
    category: 'Ecosystem',
    sourceFile: 'docs/iot/Unit_1_Introduction_to_IoT.md',
    definition:
      'An IoT ecosystem is an integrated multi-tier framework where hardware devices, communication networks, compute platforms, and user applications collaborate to collect, transfer, analyze, and act upon data.',
    keyPoints: [
      '1. Sensors / Devices: Physical components that sample environmental conditions (temperature, humidity, motion, gas).',
      '2. Actuators: Physical output devices that perform real-world actions (motors, relays, buzzers, valves).',
      '3. Embedded Controller: The on-device brain (e.g., Arduino, ESP32, ARM) executing firmware logic.',
      '4. Connectivity: Transmission media and protocols (Wi-Fi, Bluetooth, Zigbee, LoRaWAN, Cellular).',
      '5. Gateway: Bridges local sensor networks to external clouds, translating protocols and filtering raw data.',
      '6. Cloud Platform & Analytics: Centralized compute infrastructure that stores telemetry, runs algorithms, and triggers business rules.',
      '7. User Interface: Web portals and mobile apps providing human operators with dashboards, alerts, and remote control controls.',
    ],
    example:
      'In a connected weather station, sensors read barometric pressure, an ESP32 microcontroller digitizes readings, home Wi-Fi uploads them to ThingSpeak cloud, and a smartphone app displays live charts.',
    visualFlow: {
      title: 'Ecosystem Architecture',
      steps: ['Sensors / Actuators', 'Controller Board', 'IoT Gateway', 'Cloud Telemetry', 'User App'],
    },
    conclusion:
      'The harmonious interaction between all seven components ensures reliable, secure, and real-time end-to-end IoT operations.',
  },
  {
    id: 'iot-u1-lq3',
    subjectId: 'iot',
    unitId: 1,
    questionNumber: 3,
    title: 'What is an IoT gateway? Explain its primary roles.',
    type: 'PYQ',
    years: ['Mar 2023', 'Jan 2024', 'Dec 2024', 'Jan 2026'],
    marks: 5,
    category: 'Architecture',
    sourceFile: 'docs/iot/Unit_1_Introduction_to_IoT.md',
    definition:
      'An IoT gateway is an intermediate hardware appliance or software service connecting constrained local sensor networks to external broadband networks and cloud servers.',
    keyPoints: [
      'Protocol Translation: Converts lightweight local radio protocols (Zigbee, BLE, Modbus) into standard internet protocols (MQTT, HTTP, CoAP).',
      'Data Aggregation & Filtering: Pre-processes and deduplicates noisy raw sensor data locally to minimize expensive cloud bandwidth usage.',
      'Edge Intelligence: Runs localized threshold checks and control logic, enabling immediate actuator response even during internet blackouts.',
      'Security Shield: Acts as an isolated firewall, managing encryption (TLS), device authentication, and isolating sensors from public internet threats.',
    ],
    example:
      'A smart agriculture gateway collecting moisture readings from 50 Zigbee field nodes, filtering anomalous spikes, and forwarding hourly averages via 4G LTE to the farm management cloud.',
    visualFlow: {
      title: 'Gateway Protocol Translation',
      steps: ['Zigbee / BLE Sensor Nodes', 'Local Radio Receiver', 'Gateway Translation Engine', 'TLS Encryption', 'Cloud MQTT Broker'],
    },
    conclusion:
      'IoT gateways bridge architectural gaps between constrained edge nodes and cloud infrastructure while providing essential security and latency reduction.',
  },
  {
    id: 'iot-u1-lq4',
    subjectId: 'iot',
    unitId: 1,
    questionNumber: 4,
    title: 'Explain the main privacy and security challenges of IoT.',
    type: 'PYQ',
    years: ['Mar 2023', 'Jan 2024', 'Dec 2024', 'Jan 2026'],
    marks: 6,
    category: 'Security & Governance',
    sourceFile: 'docs/iot/Unit_1_Introduction_to_IoT.md',
    definition:
      'IoT security focuses on protecting interconnected devices, communication links, and cloud storage from unauthorized access; privacy guarantees that user identity, habits, and telemetry are guarded against unlawful exposure.',
    keyPoints: [
      'Default & Weak Credentials: Many commodity IoT gadgets ship with hardcoded credentials that users rarely change, inviting botnet takeover (e.g. Mirai).',
      'Constrained Hardware Resources: 8-bit/16-bit microcontrollers often lack hardware cryptoprocessors, making complex asymmetric TLS encryption difficult to run.',
      'Insecure Communication Channels: Transmission of cleartext telemetry over unencrypted channels permits eavesdropping and man-in-the-middle tampering.',
      'Lack of Firmware Lifecycle Management: Deployed remote devices often lack cryptographically signed Over-The-Air (OTA) patching capabilities.',
      'Pervasive Surveillance & Data Profiling: Continuous telemetry (cameras, GPS, smart speakers) risks exposing sensitive behavioral patterns.',
    ],
    example:
      'An unsecured IP surveillance camera with factory default credentials compromised by internet scrapers, exposing private room video feeds.',
    visualFlow: {
      title: 'Security Defense Layers',
      steps: ['Strong Unique Passwords', 'Hardware Crypto / TLS', 'Network Segmentation', 'Signed OTA Updates', 'Role-Based Access'],
    },
    conclusion:
      'Rigorous IoT governance requires defense-in-depth: zero-trust authentication, automated cryptographic patching, and strict data minimization policies.',
  },
  {
    id: 'iot-u1-lq5',
    subjectId: 'iot',
    unitId: 1,
    questionNumber: 5,
    title: 'Define sensors and actuators. Differentiate between them.',
    type: 'PYQ',
    years: ['Dec 2024', 'Jan 2026'],
    marks: 4,
    category: 'Hardware',
    sourceFile: 'docs/iot/Unit_1_Introduction_to_IoT.md',
    definition:
      'A sensor is an input transducer that detects physical changes in the environment and converts them into electrical signals; an actuator is an output transducer that converts electrical control signals into physical motion or action.',
    keyPoints: [
      'Role in System: Sensor serves as the input measuring device; actuator serves as the output action device.',
      'Direction of Energy: Sensor converts physical energy (heat, light, force) into electricity; actuator converts electrical signals into physical force (rotation, linear motion, heat).',
      'Placement: Sensor is placed at the monitoring point; actuator is placed at the control/effector point.',
      'Common Sensor Examples: LDR (light), DHT11 (temperature/humidity), PIR (infrared motion), MQ-2 (gas).',
      'Common Actuator Examples: DC Motor, Servo motor, Stepper motor, Solenoid valve, Electromechanical relay.',
    ],
    example:
      'In an air conditioner, a temperature sensor measures room heat (input), and an electromechanical relay engages the compressor motor (actuator output).',
    visualFlow: {
      title: 'Input to Output Signal Chain',
      steps: ['Physical Condition', 'Sensor (Input)', 'Microcontroller ADC', 'Firmware Decision', 'Actuator Driver', 'Physical Action'],
    },
    conclusion:
      'Sensors and actuators form the sensory and muscular organs of IoT systems, enabling intelligent machines to perceive and reshape their physical environment.',
  },
  {
    id: 'iot-u1-lq6',
    subjectId: 'iot',
    unitId: 1,
    questionNumber: 6,
    title: 'What is edge computing in IoT? Explain its key benefits.',
    type: 'PYQ',
    years: ['Jan 2024'],
    marks: 4,
    category: 'Architecture',
    sourceFile: 'docs/iot/Unit_1_Introduction_to_IoT.md',
    definition:
      'Edge computing is a distributed computing architecture where data processing, storage, and analytics occur close to the physical edge nodes and sensors rather than relying entirely on distant cloud data centers.',
    keyPoints: [
      'Ultra-Low Latency: Executes decisions in single-digit milliseconds, critical for industrial robotics, emergency braking, and medical telemetry.',
      'Bandwidth Conservation: Filters terabytes of high-frequency raw telemetry locally, transmitting only significant alerts and summaries over internet links.',
      'Offline Resilience: Local systems continue operating autonomously without disruption even when external internet or satellite links fail.',
      'Enhanced Data Privacy: Sensitive biometric and video data remains confined within local premises rather than traversing third-party clouds.',
    ],
    example:
      'An industrial gateway monitoring a high-speed CNC cutting spindle uses local vibration FFT analysis to shut down the machine in 2ms upon detecting bearing fracture, avoiding thousands of dollars in tool damage.',
    visualFlow: {
      title: 'Edge vs Cloud Routing',
      steps: ['Sensor Telemetry', 'Edge Gateway Analysis', 'Local Sub-millisecond Actuation', 'Summary Upload', 'Cloud Archive'],
    },
    conclusion:
      'Edge computing solves the latency, bandwidth, and availability limitations of pure cloud computing, creating responsive and resilient IoT installations.',
  },
  {
    id: 'iot-u1-lq7',
    subjectId: 'iot',
    unitId: 1,
    questionNumber: 7,
    title: 'What are the major technology drivers for IoT adoption?',
    type: 'PYQ',
    years: ['Jan 2026'],
    marks: 5,
    category: 'Fundamentals',
    sourceFile: 'docs/iot/Unit_1_Introduction_to_IoT.md',
    definition:
      'Technology drivers are the underlying advancements in microelectronics, networking, and cloud software that have made pervasive IoT deployment technically and commercially viable.',
    keyPoints: [
      'Inexpensive MEMS Sensors: Micro-Electro-Mechanical Systems drastically reduced the price, weight, and power consumption of precision sensors.',
      'Affordable High-Performance Microcontrollers: 32-bit SoCs with onboard radio transceivers (such as ESP32 and ARM Cortex-M) cost only a few dollars.',
      'Ubiquitous Wireless Connectivity: Proliferation of low-power WANs (LoRaWAN, NB-IoT, LTE-M) alongside high-speed Wi-Fi and 5G networks.',
      'Elastic Cloud Storage & Big Data: Scalable platforms capable of ingesting millions of messages per second and storing petabytes of telemetry cheaply.',
      'AI & Machine Learning at the Edge: Micro-frameworks (TinyML) allow microcontrollers to classify sound, vibration, and image patterns locally.',
    ],
    example:
      'Modern smartphones and home automation hubs pack multiple RF radios, multi-core processors, and MEMS gyroscopes at consumer-friendly price points.',
    visualFlow: {
      title: 'Convergence of Drivers',
      steps: ['Low-Cost MEMS', 'Ultra-Low Power SoCs', 'LPWAN / 5G Radio', 'Elastic Cloud', 'Embedded TinyML'],
    },
    conclusion:
      'The simultaneous convergence of low-cost silicon, robust low-power wireless, and scalable cloud compute has propelled IoT into mainstream industrial and consumer applications.',
  },
  {
    id: 'iot-u1-lq8',
    subjectId: 'iot',
    unitId: 1,
    questionNumber: 8,
    title: 'Explain sensing and actuation in an IoT system with an end-to-end example.',
    type: 'PYQ',
    years: ['Dec 2024', 'Jan 2026'],
    marks: 5,
    category: 'Hardware',
    sourceFile: 'docs/iot/Unit_1_Introduction_to_IoT.md',
    definition:
      'Sensing and actuation constitute the core closed-loop feedback mechanism of an IoT system, where physical inputs are captured, analyzed against control criteria, and converted into corrective physical actions.',
    keyPoints: [
      '1. Environment Detection: Sensors continuously sample environmental physical parameters (e.g., temperature, moisture, infrared).',
      '2. Signal Conversion: Transducers convert physical parameters into measurable analog voltages or digital I2C/SPI frames.',
      '3. Controller Decision: An embedded microcontroller or edge gateway executes programmed logic against calibrated thresholds.',
      '4. Actuation Trigger: The controller outputs a control signal through a driver circuit to power an output actuator (solenoid, motor, heater).',
    ],
    example:
      'Smart Greenhouse Irrigation: A capacitive soil sensor detects moisture dropping below 25%, the microcontroller triggers a 5V relay module, opening a 12V water solenoid valve until moisture reaches 65%.',
    visualFlow: {
      title: 'Closed-Loop Irrigation Flow',
      steps: ['Soil Moisture < 25%', 'Microcontroller ADC Read', 'Logic Evaluation', 'Relay Coil Energized', 'Solenoid Valve Opens Water'],
    },
    conclusion:
      'Without sensing, systems cannot perceive environmental shifts; without actuation, they cannot intervene—together they achieve autonomous closed-loop operation.',
  },

  // =========================================================================
  // UNIT 2: IOT PROTOCOLS (8 Long Questions - 7 PYQs, 1 Practice)
  // =========================================================================
  {
    id: 'iot-u2-lq1',
    subjectId: 'iot',
    unitId: 2,
    questionNumber: 1,
    title: 'Explain the layers of the IoT protocol stack and classify IoT protocols.',
    type: 'PYQ',
    years: ['Mar 2023', 'Jan 2024', 'Jan 2026'],
    marks: 8,
    category: 'Protocol Stack',
    sourceFile: 'docs/iot/Unit_2_IoT_Protocols.md',
    definition:
      'The IoT protocol stack is a layered communication architecture tailored for energy-constrained devices, lossy wireless links, and lightweight message exchange.',
    keyPoints: [
      '1. Physical & Data Link Layer: Governs physical transmission and local media access (IEEE 802.15.4, BLE, Wi-Fi 802.11, LoRaWAN).',
      '2. Network / Adaptation Layer: Handles packet addressing and routing across mesh topologies (IPv6, 6LoWPAN, RPL).',
      '3. Transport Layer: Delivers end-to-end message transmission (TCP for reliable delivery, UDP for lightweight low-latency datagrams).',
      '4. Application Layer: Manages device-to-device and device-to-cloud payload messaging (MQTT, CoAP, HTTP/REST, AMQP).',
      'Protocol Classification: (A) Data Link protocols (Zigbee, BLE), (B) Network/Routing protocols (6LoWPAN, RPL), (C) Session/Application protocols (MQTT, CoAP).',
    ],
    example:
      'A battery-powered wireless sensor node running IEEE 802.15.4 at the link layer, 6LoWPAN at the network layer, UDP at transport, and CoAP at the application layer.',
    visualFlow: {
      title: 'IoT Layered Protocol Architecture',
      steps: ['Application: MQTT / CoAP', 'Transport: TCP / UDP', 'Network: IPv6 / 6LoWPAN', 'Data Link: IEEE 802.15.4 MAC', 'Physical: RF Radio'],
    },
    conclusion:
      'By replacing bulky enterprise protocols with lightweight counterparts (like 6LoWPAN and CoAP), the IoT stack brings IP-level connectivity to microcontrollers with just a few kilobytes of RAM.',
  },
  {
    id: 'iot-u2-lq2',
    subjectId: 'iot',
    unitId: 2,
    questionNumber: 2,
    title: 'Write short notes on BACnet, Modbus, IEEE 802.15.4, and KNX.',
    type: 'PYQ',
    years: ['Mar 2023', 'Jan 2024', 'Dec 2024', 'Jan 2026'],
    marks: 8,
    category: 'Industrial & Building Standards',
    sourceFile: 'docs/iot/Unit_2_IoT_Protocols.md',
    definition:
      'These four standards represent foundational industrial, building automation, and low-rate wireless communication protocols widely implemented in automation and IoT systems.',
    keyPoints: [
      'BACnet (Building Automation and Control networks): An open ANSI/ISO protocol specifically tailored for heating, ventilating, air conditioning (HVAC), lighting, access control, and fire detection systems.',
      'Modbus: A simple, robust master-slave (client-server) industrial protocol running over RS-485 serial or TCP/IP, used to poll PLCs, temperature controllers, and energy meters.',
      'IEEE 802.15.4: A technical standard defining the Physical layer and MAC sublayer for Low-Rate Wireless Personal Area Networks (LR-WPANs), forming the foundation for Zigbee, 6LoWPAN, and Thread.',
      'KNX: A globally recognized European standard for intelligent commercial and residential building control, managing lighting, motorized blinds, security, and climate management.',
    ],
    example:
      'In a modern hospital, BACnet monitors the chiller plants, Modbus meters track substation electrical load, IEEE 802.15.4 sensors monitor patient room temperatures wirelessly, and KNX manages hallway lighting.',
    visualFlow: {
      title: 'Building Protocol Scope',
      steps: ['BACnet: HVAC & Fire', 'Modbus: Power & PLCs', 'IEEE 802.15.4: Wireless Sensors', 'KNX: Smart Building Controls'],
    },
    conclusion:
      'Understanding these standards is critical for industrial IoT engineers interfacing legacy facility management systems with modern IP dashboards.',
  },
  {
    id: 'iot-u2-lq3',
    subjectId: 'iot',
    unitId: 2,
    questionNumber: 3,
    title: 'Explain Zigbee and the components of a Zigbee network.',
    type: 'PYQ',
    years: ['Mar 2023', 'Dec 2024'],
    marks: 5,
    category: 'Wireless Standards',
    sourceFile: 'docs/iot/Unit_2_IoT_Protocols.md',
    definition:
      'Zigbee is an open global wireless standard built on IEEE 802.15.4, designed for low-power, low-data-rate, short-range mesh networking across monitoring and control devices.',
    keyPoints: [
      'Zigbee Coordinator (ZC): Exactly one per network; initializes the network, establishes parameters, stores security keys, and manages routing tables.',
      'Zigbee Router (ZR): Intermediary device that routes data packets between other nodes and extends the physical range of the mesh topology.',
      'Zigbee End Device (ZED): Constrained battery-powered leaf node that only communicates with its parent coordinator/router; can sleep to conserve battery for months.',
      'Network Topologies: Supports Star (direct to coordinator), Tree (hierarchical branching), and robust self-healing Mesh topologies.',
    ],
    example:
      'A residential smart lighting setup where switches and bulbs act as Zigbee routers repeating signals through walls, while a battery door sensor acts as a low-power end device.',
    visualFlow: {
      title: 'Zigbee Mesh Hierarchy',
      steps: ['Zigbee Coordinator (Gateway)', 'Zigbee Routers (AC Bulbs)', 'Zigbee End Devices (Battery Sensors)', 'Mesh Packet Forwarding'],
    },
    conclusion:
      'Zigbee mesh self-healing architecture ensures resilient indoor coverage without requiring heavy Wi-Fi power budgets.',
  },
  {
    id: 'iot-u2-lq4',
    subjectId: 'iot',
    unitId: 2,
    questionNumber: 4,
    title: 'What is MQTT? Explain its architecture and role in IoT.',
    type: 'PYQ',
    years: ['Dec 2024'],
    marks: 5,
    category: 'Messaging Protocols',
    sourceFile: 'docs/iot/Unit_2_IoT_Protocols.md',
    definition:
      'MQTT (Message Queuing Telemetry Transport) is an extremely lightweight, publish-subscribe network protocol designed for constrained devices and high-latency, low-bandwidth, or unreliable networks.',
    keyPoints: [
      'Publish-Subscribe Model: Decouples spatial and temporal dependencies; publishers send messages without knowing who subscribes, and subscribers receive only topics of interest.',
      'MQTT Broker: The central routing server that accepts published payloads, filters messages by topic hierarchy, and distributes them to active subscribers.',
      'Minimal Overhead: Features a compact fixed header of just 2 bytes, drastically minimizing network overhead and cellular data costs.',
      'Quality of Service (QoS): Offers 3 distinct delivery guarantees: QoS 0 (At most once), QoS 1 (At least once), and QoS 2 (Exactly once).',
    ],
    example:
      'A remote temperature sensor publishes reading `28.5` to topic `factory/bldg1/temp`. An MQTT broker forwards this reading instantly to a SCADA display and an alerting service subscribed to `factory/+/temp`.',
    visualFlow: {
      title: 'MQTT Pub-Sub Architecture',
      steps: ['Publisher (Sensor)', 'MQTT Publish to Topic', 'Central MQTT Broker', 'Filter Topics', 'Subscribers (App / DB)'],
    },
    conclusion:
      'MQTT has become the dominant application protocol for cloud ingestion due to its minimal footprint, bidirectional efficiency, and decoupled architecture.',
  },
  {
    id: 'iot-u2-lq5',
    subjectId: 'iot',
    unitId: 2,
    questionNumber: 5,
    title: 'Explain the working principle of SCADA in industrial systems.',
    type: 'PYQ',
    years: ['Dec 2024', 'Jan 2026'],
    marks: 6,
    category: 'Industrial Systems',
    sourceFile: 'docs/iot/Unit_2_IoT_Protocols.md',
    definition:
      'SCADA (Supervisory Control and Data Acquisition) is an industrial automation control system architecture used to monitor, gather, and process real-time telemetry from geographically dispersed industrial assets.',
    keyPoints: [
      '1. Field Instrumentation: Sensors, actuators, and transducers installed on factory equipment (valves, pumps, motors).',
      '2. RTUs and PLCs: Remote Terminal Units and Programmable Logic Controllers interface directly with field hardware to collect analog/digital inputs and execute local control loops.',
      '3. Communication Infrastructure: Transmits field data to master stations over serial RS-232/485, Ethernet, fiber optic, or industrial radio.',
      '4. Master Terminal Unit (MTU) / SCADA Server: Central computing system that aggregates field measurements, executes supervisory logic, and logs historical trends.',
      '5. Human-Machine Interface (HMI): Graphical display consoles allowing plant operators to view real-time schematics, acknowledge alarms, and issue manual setpoints.',
    ],
    example:
      'A municipal water treatment facility where flow sensors feed PLCs, which communicate with a central SCADA control room to automate chemical dosing and alert operators to pipe pressure drops.',
    visualFlow: {
      title: 'SCADA Functional Layers',
      steps: ['Field Transducers', 'PLCs / RTUs', 'Industrial Fieldbus / Ethernet', 'SCADA Host Server', 'Operator HMI & Alarms'],
    },
    conclusion:
      'SCADA provides supervisory oversight across critical infrastructure such as electrical grids, oil pipelines, water utilities, and manufacturing facilities.',
  },
  {
    id: 'iot-u2-lq6',
    subjectId: 'iot',
    unitId: 2,
    questionNumber: 6,
    title: 'What is M2M communication? Explain common communication models in IoT.',
    type: 'PYQ',
    years: ['Mar 2023', 'Dec 2024', 'Jan 2026'],
    marks: 6,
    category: 'Communication Models',
    sourceFile: 'docs/iot/Unit_2_IoT_Protocols.md',
    definition:
      'M2M (Machine-to-Machine) communication refers to automated data exchange between physical devices without manual human intervention over wired or wireless channels.',
    keyPoints: [
      'Request-Response Model: Client sends a request to a server; server processes and returns a response (synchronous or asynchronous, e.g. HTTP GET).',
      'Publish-Subscribe Model: Publishers push data to an intermediate broker under topics; subscribers receive updates asynchronously (e.g. MQTT).',
      'Push-Pull Model: Data producers push messages into a shared queue/buffer; consumers pull messages at their own processing pace (e.g. message queues).',
      'Exclusive Pair Model: Persistent, bi-directional, full-duplex communication channel between two endpoints over an established connection (e.g. WebSockets).',
    ],
    example:
      'An automated fleet vehicle GPS tracker sending location pings to a logistics logistics server via cellular M2M telemetry SIM without driver action.',
    visualFlow: {
      title: 'Four Core Communication Models',
      steps: ['Request-Response (HTTP)', 'Publish-Subscribe (MQTT)', 'Push-Pull (Queues)', 'Exclusive Pair (WebSockets)'],
    },
    conclusion:
      'Selecting the appropriate communication model depends directly on device power constraints, latency requirements, and network topology.',
  },
  {
    id: 'iot-u2-lq7',
    subjectId: 'iot',
    unitId: 2,
    questionNumber: 7,
    title: 'Explain RFID and WSN with suitable examples.',
    type: 'PYQ',
    years: ['Dec 2024', 'Jan 2026'],
    marks: 5,
    category: 'Hardware & Radios',
    sourceFile: 'docs/iot/Unit_2_IoT_Protocols.md',
    definition:
      'RFID uses electromagnetic fields to identify and track tags attached to objects without line of sight; WSN is a network of spatially distributed autonomous sensor nodes that collaboratively monitor physical or environmental conditions.',
    keyPoints: [
      'RFID System Components: Consists of an RFID tag (microchip + antenna), an RFID reader/interrogator, and host middleware software.',
      'Passive vs Active RFID: Passive tags have no battery and power up from reader radio waves; active tags have onboard batteries with extended ranges.',
      'WSN Architecture: Consists of multiple sensor nodes (sensing, microcontroller, radio, battery) communicating multi-hop to a centralized sink/gateway node.',
      'WSN Applications: Environmental monitoring (forest fire detection), structural health tracking, precision agriculture.',
    ],
    example:
      'RFID: FASTag automated highway toll collection. WSN: A network of 100 wireless nodes spread across a vineyard measuring soil humidity and microclimates.',
    visualFlow: {
      title: 'RFID vs WSN Working',
      steps: ['RFID: Reader RF Wave → Tag Response', 'WSN: Multi-Hop Sensor Mesh → Sink Gateway → Cloud'],
    },
    conclusion:
      'RFID provides instant contactless asset identification, whereas WSN enables collaborative continuous environmental perception over vast physical areas.',
  },
  {
    id: 'iot-u2-lq8',
    subjectId: 'iot',
    unitId: 2,
    questionNumber: 8,
    title: 'Explain IoT standardization and its importance across heterogeneous devices.',
    type: 'Practice',
    years: [],
    marks: 4,
    category: 'Standardization',
    sourceFile: 'docs/iot/Unit_2_IoT_Protocols.md',
    definition:
      'IoT standardization refers to the establishment of universally recognized technical specifications, protocols, data formats, and interfaces by international standards bodies (IEEE, IETF, ISO, ITU-T).',
    keyPoints: [
      'Interoperability: Guarantees that devices from different manufacturers can discover, communicate, and collaborate without custom proprietary adapters.',
      'Vendor Independence: Prevents commercial lock-in, enabling enterprises to mix-and-match best-of-breed hardware components.',
      'Cost Reduction & Economies of Scale: Mass manufacturing of standardized silicon transceivers (e.g. IEEE 802.15.4, Wi-Fi chips) drives unit costs down.',
      'Enhanced Security Baselines: Open standardization invites rigorous peer cryptographic review and formal compliance testing.',
    ],
    example:
      'Using the open MQTT standard allows an Arduino Uno, a Siemens PLC, and an iPhone application to exchange telemetry seamlessly through an open-source Mosquitto broker.',
    visualFlow: {
      title: 'Standardization Benefits',
      steps: ['Proprietary Silos', 'Open Standard Agreement (IEEE/IETF)', 'Interoperable Hardware', 'Ecosystem Growth'],
    },
    conclusion:
      'Without rigorous international standards, the Internet of Things would fragment into isolated, non-interoperable intranets.',
  },

  // =========================================================================
  // UNIT 3: IOT ARCHITECTURE (6 Long Questions - 4 PYQs, 2 Practice)
  // =========================================================================
  {
    id: 'iot-u3-lq1',
    subjectId: 'iot',
    unitId: 3,
    questionNumber: 1,
    title: 'What is IoTivity? Explain its architecture briefly.',
    type: 'PYQ',
    years: ['Mar 2023', 'Jan 2024', 'Dec 2024'],
    marks: 6,
    category: 'Architecture Frameworks',
    sourceFile: 'docs/iot/Unit_3_IoT_Architecture.md',
    definition:
      'IoTivity is an open-source software framework sponsored by the Open Connectivity Foundation (OCF) that provides seamless device-to-device and device-to-cloud connectivity across operating systems, transports, and manufacturers.',
    keyPoints: [
      'Application Layer: User applications that consume and command smart device capabilities via high-level APIs.',
      'Resource / Service Layer: Models smart device functionality as standard RESTful resources; manages device discovery, provisioning, and presence.',
      'Connectivity Abstraction Layer (CA): Decouples core logic from underlying physical transport media, offering a uniform messaging interface.',
      'Connectivity Layer: Implements transport-specific socket communication over Wi-Fi, Ethernet, Bluetooth LE, and Zigbee.',
    ],
    example:
      'An Android smartphone running an IoTivity controller app immediately discovers an IoTivity-compliant smart bulb over BLE or Wi-Fi without knowing its manufacturer brand.',
    visualFlow: {
      title: 'IoTivity Architectural Layers',
      steps: ['Application Layer', 'Resource Management Layer', 'Connectivity Abstraction (CA)', 'Transport Drivers (Wi-Fi/BLE)'],
    },
    conclusion:
      'IoTivity eliminates proprietary fragmentation by exposing all device abilities through a unified RESTful resource model independent of physical transport.',
  },
  {
    id: 'iot-u3-lq2',
    subjectId: 'iot',
    unitId: 3,
    questionNumber: 2,
    title: 'Explain the IoT resource model with a simple diagram.',
    type: 'PYQ',
    years: ['Mar 2023'],
    marks: 5,
    category: 'Resource Modeling',
    sourceFile: 'docs/iot/Unit_3_IoT_Architecture.md',
    definition:
      'The IoT resource model represents physical sensors, actuators, and device states as standardized Web-style resources identified by Uniform Resource Identifiers (URIs), accessible through uniform CRUD operations.',
    keyPoints: [
      'Resource URI: Every device function has a unique URI path (e.g. `/devices/lamp1/power`, `/sensors/temp1`).',
      'Resource Properties / Attributes: Contains key-value state representations serialized as JSON or CBOR (e.g. `{"state": "ON", "brightness": 75}`).',
      'REST Operations: Interacted with via standard verbs: GET (read state), PUT (update property), POST (trigger action), DELETE (remove resource).',
      'Resource Types & Interfaces: Defines standardized schemas so clients know what values can be safely read or written.',
    ],
    example:
      'Querying `GET /livingroom/light` returns `{"power": true, "color": "#FFCC00"}`; sending `PUT /livingroom/light` with `{"power": false}` switches it off.',
    visualFlow: {
      title: 'Resource Interaction Flow',
      steps: ['Client Request: GET /light/1', 'URI Lookup', 'Resource Representation: {state: ON}', 'Return JSON Response'],
    },
    conclusion:
      'By treating physical things as Web resources, IoT applications can inspect and manipulate real-world devices using familiar Web protocols.',
  },
  {
    id: 'iot-u3-lq3',
    subjectId: 'iot',
    unitId: 3,
    questionNumber: 3,
    title: 'Explain the open-source OIC architecture and its design principles.',
    type: 'PYQ',
    years: ['Dec 2024'],
    marks: 5,
    category: 'Standards & Alliances',
    sourceFile: 'docs/iot/Unit_3_IoT_Architecture.md',
    definition:
      'The OIC (Open Interconnect Consortium, later Open Connectivity Foundation - OCF) architecture defines standard communication specifications ensuring cross-industry, cross-vendor interoperability for IoT devices.',
    keyPoints: [
      'Device Discovery: Enables devices to automatically broadcast presence and discover adjacent smart objects on local networks without cloud brokers.',
      'Platform & OS Agnostic: Operates across Linux, Android, RTOS, Windows, and constrained bare-metal firmware.',
      'Standardized Data Models: Mandates JSON/CBOR schemas ensuring consistent attribute names across competing manufacturers.',
      'Comprehensive Security: Incorporates end-to-end asymmetric key exchange, DTLS, and role-based access control (RBAC).',
    ],
    example:
      'A smart home where a Samsung TV, an LG refrigerator, and an Intel-based gateway communicate securely using OIC protocols without custom brand apps.',
    visualFlow: {
      title: 'OIC Core Principles',
      steps: ['Discoverable Resources', 'Platform Independence', 'Standard Data Schemas', 'Built-in Security', 'Seamless Interoperability'],
    },
    conclusion:
      'OIC/OCF standards transformed IoT from fragmented proprietary ecosystems into a unified, secure consumer and industrial market.',
  },
  {
    id: 'iot-u3-lq4',
    subjectId: 'iot',
    unitId: 3,
    questionNumber: 4,
    title: 'Explain the four stages/layers of IoT architecture with a diagram.',
    type: 'PYQ',
    years: ['Jan 2024'],
    marks: 8,
    category: 'Architecture Stages',
    sourceFile: 'docs/iot/Unit_3_IoT_Architecture.md',
    definition:
      'A comprehensive four-stage IoT architecture partitions end-to-end data processing into physical perception, networking, edge computing, and cloud enterprise application layers.',
    keyPoints: [
      'Stage 1: Perception / Sensing Layer: Sensors capture environmental signals (temperature, vibration, pressure) and actuators enact physical changes.',
      'Stage 2: Internet Gateway & Data Acquisition Layer: Aggregates raw analog/digital data, converts protocols, and transmits frames over IP networks.',
      'Stage 3: Edge IT Processing Layer: Executes preliminary local analytics, anomaly filtering, and real-time control logic close to data sources.',
      'Stage 4: Data Center / Cloud Application Layer: Massive elastic compute tier executing historical deep analytics, machine learning training, and business dashboards.',
    ],
    example:
      'Smart Agriculture: (1) Soil moisture sensors, (2) Field LoRa gateway, (3) Edge controller deciding immediate valve cycling, (4) Cloud portal forecasting monthly crop yield.',
    visualFlow: {
      title: 'Four-Stage IoT Pipeline',
      steps: ['Stage 1: Sensors & Actuators', 'Stage 2: Gateways & Aggregation', 'Stage 3: Edge Computing', 'Stage 4: Cloud Data Center'],
    },
    conclusion:
      'This four-stage hierarchy ensures that time-critical actions occur rapidly at the edge while heavy computations and historical reporting happen in the cloud.',
  },
  {
    id: 'iot-u3-lq5',
    subjectId: 'iot',
    unitId: 3,
    questionNumber: 5,
    title: 'Explain IoT devices and common deployment models.',
    type: 'Practice',
    years: [],
    marks: 4,
    category: 'Deployment Models',
    sourceFile: 'docs/iot/Unit_3_IoT_Architecture.md',
    definition:
      'An IoT device is a physical asset embedded with compute, sensing, and network transceivers; deployment models describe how these devices interconnect with networks and end-users.',
    keyPoints: [
      'Device-to-Device (D2D): Devices communicate directly with one another over local radio protocols without internet routing (e.g. Zigbee light switch to bulb).',
      'Device-to-Cloud (D2C): Devices connect directly to an internet cloud service using standard IP connections (e.g. Wi-Fi thermostat to AWS IoT Core).',
      'Device-to-Gateway (D2G): Constrained devices communicate with an intermediary gateway that handles protocol translation and cloud forwarding.',
      'Back-End Data Sharing: Enterprise model where cloud backends federate and exchange device data with authorized third-party business systems.',
    ],
    example:
      'Bluetooth fitness band syncing data to a smartphone gateway (D2G), which then synchronizes daily workout summaries to the health cloud (D2C).',
    visualFlow: {
      title: 'Common Topology Models',
      steps: ['D2D: Direct Local Link', 'D2C: Direct Cloud Sockets', 'D2G: Gateway Mediated', 'Back-End Sharing: Cloud-to-Cloud'],
    },
    conclusion:
      'Selecting the correct deployment model depends on device power budgets, transmission range, and security isolation requirements.',
  },
  {
    id: 'iot-u3-lq6',
    subjectId: 'iot',
    unitId: 3,
    questionNumber: 6,
    title: 'Differentiate resource abstraction and connectivity abstraction in IoTivity.',
    type: 'Practice',
    years: [],
    marks: 4,
    category: 'Abstraction Layers',
    sourceFile: 'docs/iot/Unit_3_IoT_Architecture.md',
    definition:
      'Resource abstraction hides internal device implementation details by representing functions as uniform RESTful resources; connectivity abstraction hides differences between underlying physical network interfaces.',
    keyPoints: [
      'Resource Abstraction Focus: Standardizes the data model and interface (e.g. representing any dimmable light as `/light` with a `brightness` property).',
      'Connectivity Abstraction Focus: Standardizes packet transport (e.g. sending a payload across Wi-Fi, Ethernet, or BLE using a single unified API).',
      'Developer Impact of Resource Abstraction: Allows client applications to inspect and control smart devices without knowing hardware registers or vendor firmware.',
      'Developer Impact of Connectivity Abstraction: Eliminates the need to write separate networking code for different radio modules.',
    ],
    example:
      'An app calls `postResource("/lamp", payload)`; resource abstraction formats the JSON command, while connectivity abstraction automatically chooses Wi-Fi or BLE based on signal strength.',
    visualFlow: {
      title: 'Dual Abstraction Layers',
      steps: ['App Logic', 'Resource Abstraction (URI/JSON)', 'Connectivity Abstraction (Unified Transport)', 'Physical Hardware / Radio'],
    },
    conclusion:
      'Together, resource and connectivity abstractions enable true plug-and-play IoT interoperability across diverse hardware vendors.',
  },

  // =========================================================================
  // UNIT 4: WEB OF THINGS (5 Long Questions - 3 PYQs, 2 Practice)
  // =========================================================================
  {
    id: 'iot-u4-lq1',
    subjectId: 'iot',
    unitId: 4,
    questionNumber: 1,
    title: 'Differentiate Internet of Things (IoT) and Web of Things (WoT).',
    type: 'PYQ',
    years: ['Jan 2024', 'Dec 2024', 'Jan 2026'],
    marks: 5,
    category: 'IoT vs WoT',
    sourceFile: 'docs/iot/Unit_4_Web_of_Things_WoT.md',
    definition:
      'IoT provides network-level connectivity to physical objects using diverse communication protocols; WoT builds on top of IoT by using standard Web technologies (HTTP, REST, JSON, WebSockets) to make connected devices seamlessly interoperable at the application layer.',
    keyPoints: [
      'Architectural Focus: IoT focuses on lower-layer connectivity (OSI Layers 1–4: IEEE 802.15.4, BLE, IP); WoT focuses on the Application Layer (OSI Layer 7: Web standards).',
      'Protocol Diversity: IoT uses many fragmented protocols (Zigbee, Modbus, MQTT, CoAP); WoT exposes standard Web APIs (HTTP REST, WebSockets, JSON-LD).',
      'Interoperability: IoT devices often require custom manufacturer apps; WoT devices can be inspected and controlled directly via standard Web browsers and JavaScript.',
      'Addressing: IoT addresses endpoints by MAC or IP address; WoT identifies endpoints with globally unique Web URIs/URLs.',
    ],
    example:
      'IoT connects a smart air conditioner via a Zigbee gateway to the internet; WoT exposes `http://home.local/ac` so any web browser can adjust room temperature using standard HTTP PUT.',
    visualFlow: {
      title: 'IoT vs WoT Layering',
      steps: ['Physical World', 'IoT Connectivity (Zigbee / BLE / IP)', 'WoT Middleware', 'Web Browser / REST App'],
    },
    conclusion:
      'IoT creates the plumbing that connects physical things to networks; WoT provides the universal language that lets applications interact with them effortlessly.',
  },
  {
    id: 'iot-u4-lq2',
    subjectId: 'iot',
    unitId: 4,
    questionNumber: 2,
    title: 'Explain the two pillars of the Web and their role in WoT.',
    type: 'PYQ',
    years: ['Jan 2024', 'Jan 2026'],
    marks: 4,
    category: 'Web Principles',
    sourceFile: 'docs/iot/Unit_4_Web_of_Things_WoT.md',
    definition:
      'The two foundational pillars of the World Wide Web repurposed in WoT are Unique Resource Identification (URIs) and Standard Interaction Mechanisms (HTTP/REST verbs).',
    keyPoints: [
      'Pillar 1: Resource Identification (URIs): Every connected physical object or sub-component is assigned a globally unique URI (e.g. `http://factory.com/motors/spindle1/speed`).',
      'Pillar 2: Standard Interaction (HTTP Verbs): Interactions with things follow standardized RESTful semantics: GET (retrieve state), PUT/POST (modify state/trigger action), DELETE (deregister).',
      'Role in WoT: Guarantees that any web-connected client can discover, read, and control smart things without proprietary SDKs or binary drivers.',
      'Self-Describing Formats: Payloads are returned in structured, human- and machine-readable formats like JSON or JSON-LD.',
    ],
    example:
      'Sending an HTTP GET to `http://smartroom.org/sensors/temp` returns `{"temp_c": 24.2}`; sending HTTP POST with `{"state": "ON"}` to `/actuators/fan` activates the ventilation.',
    visualFlow: {
      title: 'Two Pillars in Action',
      steps: ['Pillar 1: URI (Unique Identity)', 'Pillar 2: HTTP Verb (Standard Action)', 'Payload Representation (JSON)', 'Device State Execution'],
    },
    conclusion:
      'Reusing proven Web pillars ensures that millions of Web developers can program IoT hardware using standard tools and libraries.',
  },
  {
    id: 'iot-u4-lq3',
    subjectId: 'iot',
    unitId: 4,
    questionNumber: 3,
    title: 'What is platform middleware in WoT? Explain its functions.',
    type: 'PYQ',
    years: ['Dec 2024'],
    marks: 5,
    category: 'Middleware',
    sourceFile: 'docs/iot/Unit_4_Web_of_Things_WoT.md',
    definition:
      'WoT platform middleware is an intermediate software layer that sits between heterogeneous physical IoT devices and high-level Web applications, providing unified abstraction, discovery, and protocol translation services.',
    keyPoints: [
      'Device Abstraction: Hides low-level hardware intricacies, exposing every sensor and actuator as a uniform Web resource.',
      'Protocol Translation: Converts non-IP or non-Web protocols (Zigbee, Modbus, CAN-bus) into clean RESTful HTTP or WebSocket APIs.',
      'Discovery & Directory Services: Maintains a registry of active things (Thing Descriptions - TD), allowing web apps to discover new hardware dynamically.',
      'Data Caching & Event Management: Caches frequent sensor readings locally and pushes asynchronous event notifications via WebSockets or Webhooks.',
      'Security & Authentication: Enforces API key verification, OAuth2 tokens, and fine-grained access control policies.',
    ],
    example:
      'A smart home hub running Mozilla WebThings Gateway software that detects Zigbee motion sensors and exposes them as clean W3C WoT REST endpoints on the local network.',
    visualFlow: {
      title: 'Middleware Integration Role',
      steps: ['Zigbee / Modbus Hardware', 'Platform Middleware Layer', 'Protocol Translation & Security', 'Unified REST / WebSocket API', 'Web Applications'],
    },
    conclusion:
      'Middleware bridges the gap between hardware fragmentation and modern Web development, accelerating application deployment.',
  },
  {
    id: 'iot-u4-lq4',
    subjectId: 'iot',
    unitId: 4,
    questionNumber: 4,
    title: 'Explain a unified multitier WoT architecture.',
    type: 'Practice',
    years: [],
    marks: 6,
    category: 'Architecture',
    sourceFile: 'docs/iot/Unit_4_Web_of_Things_WoT.md',
    definition:
      'A unified multi-tier WoT architecture organizes system responsibilities into hierarchical levels, extending from physical transducers to enterprise business intelligence.',
    keyPoints: [
      'Tier 1: Device / Embedded Tier: Physical hardware (sensors, actuators, microcontrollers) that interact directly with the environment.',
      'Tier 2: Gateway / Network Tier: Intermediary connectivity appliances that handle local radio communication, protocol conversion, and edge caching.',
      'Tier 3: Middleware / Service Tier: Centralized or distributed platform layer managing device directories, resource abstraction, and data processing.',
      'Tier 4: Application Tier: Web dashboards, smartphone apps, and user-facing consoles that allow operators to visualize and control devices.',
      'Tier 5: Business Intelligence (BI) Tier: Enterprise analytics layer that ingests long-term telemetry to optimize business workflows, forecast maintenance, and track costs.',
    ],
    example:
      'A modern smart grid where (1) smart meters measure power, (2) neighborhood gateways aggregate readings, (3) WoT middleware validates data, (4) consumer web apps show daily bills, and (5) grid BI software balances power distribution.',
    visualFlow: {
      title: 'Multi-Tier WoT Hierarchy',
      steps: ['Tier 1: Device', 'Tier 2: Gateway', 'Tier 3: Middleware', 'Tier 4: Application', 'Tier 5: Business Intelligence'],
    },
    conclusion:
      'The multi-tier architecture separates concerns cleanly, ensuring that edge nodes remain fast and simple while cloud tiers handle complex enterprise analytics.',
  },
  {
    id: 'iot-u4-lq5',
    subjectId: 'iot',
    unitId: 4,
    questionNumber: 5,
    title: 'What is a WoT portal? Explain its role in business intelligence.',
    type: 'Practice',
    years: [],
    marks: 4,
    category: 'Portals & BI',
    sourceFile: 'docs/iot/Unit_4_Web_of_Things_WoT.md',
    definition:
      'A WoT portal is an enterprise Web-based graphical dashboard that provides operators with a centralized, real-time interface to monitor, analyze, and manage distributed IoT assets.',
    keyPoints: [
      'Real-Time Visualization: Displays live sensor metrics, geographical asset locations, and operating states through charts, gauges, and heatmaps.',
      'Alerting & Alarm Management: Automatically flags threshold violations (e.g. machine overheating) via SMS, email, or automated audio alarms.',
      'Device Fleet Management: Enables remote firmware updates, reboot commands, and credential rotations across thousands of units.',
      'Role in Business Intelligence (BI): Aggregates historical telemetry into analytical reporting engines to identify operational bottlenecks, energy waste, and predictive maintenance schedules.',
    ],
    example:
      'A solar farm portal showing real-time kilowatt output for 10,000 solar inverters, alerting technicians to dust-covered panels and calculating daily revenue trends.',
    visualFlow: {
      title: 'Portal to BI Workflow',
      steps: ['Live Sensor Telemetry', 'WoT Portal Visualizer', 'Anomaly Alert Trigger', 'Historical Data Warehousing', 'BI Executive Analytics'],
    },
    conclusion:
      'WoT portals transform overwhelming volumes of raw hardware telemetry into actionable business intelligence that improves operational efficiency.',
  },

  // =========================================================================
  // UNIT 5: ARDUINO (5 Long Questions - All Verified PYQs)
  // =========================================================================
  {
    id: 'iot-u5-lq1',
    subjectId: 'iot',
    unitId: 5,
    questionNumber: 1,
    title: 'What is Arduino Uno? Explain its major components and pin configuration.',
    type: 'PYQ',
    years: ['Dec 2024', 'Jan 2026'],
    marks: 6,
    category: 'Hardware & Microcontrollers',
    sourceFile: 'docs/iot/Unit_5_Arduino.md',
    definition:
      'Arduino Uno is an open-source microcontroller board based on the Microchip ATmega328P, widely used for rapid prototyping, robotics, and educational IoT projects.',
    keyPoints: [
      'Core Microcontroller: 8-bit ATmega328P running at 16 MHz with 32 KB Flash memory, 2 KB SRAM, and 1 KB EEPROM.',
      'Digital I/O Pins (14 total, Pins 0–13): Can be configured as inputs or outputs via `pinMode()`; Pins 0 (RX) and 1 (TX) handle serial UART.',
      'PWM Pins (6 pins: 3, 5, 6, 9, 10, 11): Marked with a tilde (~), capable of generating 8-bit analog-like voltage levels via pulse-width modulation.',
      'Analog Input Pins (6 pins: A0–A5): Connect to an onboard 10-bit Analog-to-Digital Converter (ADC) that converts 0–5V inputs into digital values (0–1023).',
      'Power Components: 5V/3.3V voltage regulators, barrel jack DC power input (7–12V recommended), USB Type-B port, and a hardware reset button.',
    ],
    example:
      'Connecting an analog soil moisture probe to pin A0, an LED indicator to digital pin 13, and a 5V relay module to digital pin 8 to automate watering.',
    visualFlow: {
      title: 'Arduino Uno Architecture',
      steps: ['Power Jack (7-12V) / USB (5V)', 'ATmega328P 16MHz MCU', '14 Digital I/O (6 PWM)', '6 Analog ADC Inputs (A0-A5)', 'ICSP & Reset Header'],
    },
    conclusion:
      'The clean, standardized layout of the Arduino Uno makes it the industry standard reference platform for embedded sensor and actuator prototyping.',
  },
  {
    id: 'iot-u5-lq2',
    subjectId: 'iot',
    unitId: 5,
    questionNumber: 2,
    title: 'Explain an Arduino sketch structure with an LED-blinking program.',
    type: 'PYQ',
    years: ['Mar 2023'],
    marks: 6,
    category: 'Embedded C++',
    sourceFile: 'docs/iot/Unit_5_Arduino.md',
    definition:
      'An Arduino program is called a sketch, structured around two fundamental functions: `setup()` which executes once on startup to configure pins, and `loop()` which executes continuously to process logic.',
    keyPoints: [
      '`setup()` Function: Runs exactly once when the board powers up or is reset; used to initialize pin modes, serial baud rates, and libraries.',
      '`loop()` Function: Runs repeatedly in an infinite loop after `setup()` completes, handling sensor polling and output actuation.',
      'Built-in Functions: `pinMode(pin, mode)` sets pin direction; `digitalWrite(pin, value)` drives output HIGH (5V) or LOW (0V); `delay(ms)` pauses execution.',
      'Techniques to Reduce Sketch Size: Eliminate unused external libraries, replace large floating-point math with integer scaling, store string literals in Flash using `F("...")`, and optimize variable data types (e.g. `byte` instead of `int`).',
    ],
    example:
      'The classic Blink sketch that toggles the built-in LED on digital pin 13 once every second.',
    codeSnippet:
      '// Arduino Blink Sketch\nvoid setup() {\n  pinMode(13, OUTPUT); // Configure Pin 13 as Digital Output\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH); // Turn LED ON (5V)\n  delay(1000);            // Wait for 1000 milliseconds\n  digitalWrite(13, LOW);  // Turn LED OFF (0V)\n  delay(1000);            // Wait for 1000 milliseconds\n}',
    visualFlow: {
      title: 'Sketch Execution Lifecycle',
      steps: ['Board Power-Up / Reset', 'Run setup() Once', 'Enter loop()', 'digitalWrite(13, HIGH)', 'delay(1000)', 'digitalWrite(13, LOW)', 'Repeat loop()'],
    },
    conclusion:
      'The dual `setup()` and `loop()` structure simplifies embedded microprocessing into an accessible, deterministic programming model.',
  },
  {
    id: 'iot-u5-lq3',
    subjectId: 'iot',
    unitId: 5,
    questionNumber: 3,
    title: 'What is a sensor? Explain its interfacing and workflow with Arduino.',
    type: 'PYQ',
    years: ['Mar 2023', 'Jan 2024', 'Dec 2024'],
    marks: 5,
    category: 'Sensor Interfacing',
    sourceFile: 'docs/iot/Unit_5_Arduino.md',
    definition:
      'A sensor is an input device that measures a physical quantity (temperature, light, distance) and produces a proportional electrical signal that the Arduino can read and evaluate.',
    keyPoints: [
      'Wiring Connections: Most basic sensors require 3 pins: VCC (power, usually 5V or 3.3V), GND (ground reference), and Signal/Out (connected to an Arduino pin).',
      'Analog Sensor Interfacing: Connected to pins A0–A5; read via `analogRead()`, which returns an integer from 0 to 1023 (10-bit resolution representing 0 to 5V).',
      'Digital Sensor Interfacing: Connected to pins 0–13; read via `digitalRead()`, which returns either HIGH (1) or LOW (0) (e.g. PIR motion sensor).',
      'Signal Processing: Arduino firmware converts the raw numerical ADC value into engineering units (e.g. Celsius, Lux, centimeters) using calibration formulas.',
    ],
    example:
      'An LDR voltage divider connected to pin A0; as darkness falls, LDR resistance increases, voltage drops, and `analogRead(A0)` values decrease below threshold.',
    visualFlow: {
      title: 'Sensor Interfacing Pipeline',
      steps: ['Physical Condition', 'Sensor Transducer', 'Arduino Analog Pin A0', 'analogRead() (0-1023)', 'Firmware Scaling Formula', 'Action Logic'],
    },
    conclusion:
      'Proper sensor interfacing requires matching electrical voltage levels, configuring correct pin modes, and applying noise filtering in software.',
  },
  {
    id: 'iot-u5-lq4',
    subjectId: 'iot',
    unitId: 5,
    questionNumber: 4,
    title: 'What is an actuator? Explain its interfacing and workflow with Arduino.',
    type: 'PYQ',
    years: ['Dec 2024', 'Jan 2026'],
    marks: 5,
    category: 'Actuator Interfacing',
    sourceFile: 'docs/iot/Unit_5_Arduino.md',
    definition:
      'An actuator is an output device that converts low-power electrical commands from the Arduino into physical motion, mechanical displacement, sound, or heat.',
    keyPoints: [
      'Current Limitations: An Arduino I/O pin can safely deliver a maximum of 20–40 mA, which is insufficient to power heavy loads like DC motors, solenoids, or high-power LEDs directly.',
      'Driver Circuits: Heavy actuators require intermediary driver stages (transistors, MOSFETs, H-bridges like L298N, or optocoupled relays) to supply required voltage and current.',
      'Digital On/Off Control: Controlled using `digitalWrite(pin, HIGH/LOW)` to trigger relays, buzzers, and status LEDs.',
      'Variable Output Control (PWM): Controlled using `analogWrite(pin, 0-255)` to vary motor speeds or adjust LED brightness via high-frequency pulse modulation.',
      'Servo Control: Controlled using the standard `Servo.h` library, sending precision microsecond PWM pulses to set angular positions from 0° to 180°.',
    ],
    example:
      'An Arduino driving a 12V DC cooling fan through an NPN transistor driver connected to digital PWM pin 9, scaling fan speed according to room temperature.',
    visualFlow: {
      title: 'Actuator Control Chain',
      steps: ['Arduino Digital Pin', 'Low-Current Signal (5V, 10mA)', 'Driver Circuit / Relay / H-Bridge', 'External Power Supply (12V)', 'High-Power Actuator Action'],
    },
    conclusion:
      'Actuator integration safely isolates delicate microcontroller logic from high-voltage, high-current mechanical loads through dedicated driver stages.',
  },
  {
    id: 'iot-u5-lq5',
    subjectId: 'iot',
    unitId: 5,
    questionNumber: 5,
    title: 'Differentiate sensors and actuators with two examples each.',
    type: 'PYQ',
    years: ['Dec 2024', 'Jan 2026'],
    marks: 4,
    category: 'Hardware Comparison',
    sourceFile: 'docs/iot/Unit_5_Arduino.md',
    definition:
      'Sensors and actuators represent complementary input and output components of embedded systems: sensors convert physical phenomena into electrical signals, while actuators convert electrical signals into physical work.',
    keyPoints: [
      'Direction of Operation: Sensor provides input data to the microcontroller; actuator executes output commands received from the microcontroller.',
      'Energy Conversion: Sensor converts physical energy (temperature, light, pressure) into electrical signals; actuator converts electrical signals into physical energy (mechanical force, sound, heat).',
      'Signal Processing: Sensors interface with Analog-to-Digital Converters (ADCs) or digital input registers; actuators interface with digital output pins or PWM drivers.',
      'Sensor Examples: (1) LDR (Light Dependent Resistor) detecting illumination, (2) DHT11 sensor measuring temperature and humidity.',
      'Actuator Examples: (1) SG90 Micro Servo motor producing controlled angular movement, (2) 5V Electromechanical Relay switching mains AC appliances.',
    ],
    example:
      'In an automated incubator, an LM35 sensor measures temperature (input), and an incandescent heating lamp controlled via a relay acts as the actuator (output).',
    visualFlow: {
      title: 'Complementary Hardware Roles',
      steps: ['Input: Sensors (LDR, DHT11)', 'Microcontroller Logic (ATmega328P)', 'Output: Actuators (Relay, Servo)'],
    },
    conclusion:
      'Sensors observe the environment without altering it; actuators modify the environment based on sensor feedback.',
  },

  // =========================================================================
  // UNIT 6: IOT APPLICATIONS (7 Long Questions - 6 PYQs, 1 Practice)
  // =========================================================================
  {
    id: 'iot-u6-lq1',
    subjectId: 'iot',
    unitId: 6,
    questionNumber: 1,
    title: 'Explain Future Factory concepts in Industrial IoT (IIoT).',
    type: 'PYQ',
    years: ['Jan 2026'],
    marks: 6,
    category: 'Industrial IoT',
    sourceFile: 'docs/iot/Unit_6_IoT_Applications.md',
    definition:
      'A Future Factory (Smart Factory) is an advanced manufacturing facility where machinery, production lines, and supply chains are integrated through cyber-physical systems, IoT sensors, and autonomous robotics to achieve self-optimizing operations.',
    keyPoints: [
      'Cyber-Physical Systems (CPS): Integrates physical production machinery with virtual digital models that monitor and optimize operations in real time.',
      'Predictive Maintenance: High-frequency vibration and acoustic sensors detect micro-wear on mechanical bearings weeks before catastrophic failure.',
      'Digital Twin Technology: Creates a live, real-time virtual replica of the entire production floor to simulate scenarios and test schedule adjustments.',
      'Autonomous Mobile Robots (AMRs): Self-navigating vehicles that shuttle raw materials and finished parts between assembly cells without human drivers.',
      'End-to-End Traceability: RFID and barcode scanners record each component’s journey through the production line for zero-defect quality assurance.',
    ],
    example:
      'An automotive assembly plant where robotic arms detect tool wear automatically, order replacement parts through the cloud ERP, and adjust weld angles dynamically.',
    visualFlow: {
      title: 'Smart Factory Workflow',
      steps: ['Sensorized Machines', 'Real-Time Edge Analytics', 'Digital Twin Simulation', 'Predictive Maintenance Alert', 'Automated Production Optimization'],
    },
    conclusion:
      'Future factories transform traditional static assembly lines into dynamic, flexible, and automated production ecosystems.',
  },
  {
    id: 'iot-u6-lq2',
    subjectId: 'iot',
    unitId: 6,
    questionNumber: 2,
    title: 'What is Brownfield IoT? Explain with an industrial retrofit example.',
    type: 'PYQ',
    years: ['Jan 2026'],
    marks: 5,
    category: 'Industrial IoT',
    sourceFile: 'docs/iot/Unit_6_IoT_Applications.md',
    definition:
      'Brownfield IoT refers to the practice of retrofitting existing, legacy industrial machinery and infrastructure with modern sensors, edge gateways, and connectivity without replacing the expensive installed physical equipment.',
    keyPoints: [
      'Cost Efficiency: Protects massive capital investments by adding IoT capabilities to 20-year-old machines at a fraction of the cost of building a new plant (Greenfield).',
      'Non-Invasive Sensing: Uses external clamp-on current transformers, magnetic vibration probes, and optical sensors that require zero modifications to machine internals.',
      'Legacy Protocol Translation: Edge gateways ingest legacy serial data (RS-485 Modbus, Profibus) and convert it into modern MQTT/JSON cloud streams.',
      'Key Challenges: Physical space constraints, electrical noise in legacy environments, and dealing with undocumented proprietary serial interfaces.',
    ],
    example:
      'Mounting an external tri-axial vibration sensor and a non-invasive current clamp onto a 30-year-old factory stamping press to monitor motor health and stream telemetry to a cloud dashboard.',
    visualFlow: {
      title: 'Brownfield Retrofit Architecture',
      steps: ['Legacy Industrial Machine', 'External Clamp-on Sensor', 'Edge IoT Gateway', 'Protocol Conversion (Modbus to MQTT)', 'Modern Cloud Dashboard'],
    },
    conclusion:
      'Brownfield IoT enables established industries to adopt Industry 4.0 efficiency gains without millions in premature capital equipment write-offs.',
  },
  {
    id: 'iot-u6-lq3',
    subjectId: 'iot',
    unitId: 6,
    questionNumber: 3,
    title: 'What are smart objects? Explain their essential components.',
    type: 'PYQ',
    years: ['Dec 2024'],
    marks: 5,
    category: 'Smart Objects',
    sourceFile: 'docs/iot/Unit_6_IoT_Applications.md',
    definition:
      'A smart object is an everyday physical item augmented with embedded computing, sensing, actuation, and wireless communication capabilities, allowing it to interact intelligently with its environment and human users.',
    keyPoints: [
      '1. Unique Identifier: Possesses an electronic identity (IPv6 address, MAC address, RFID tag, or URI) enabling addressing across networks.',
      '2. Sensory Unit: Detects environmental context such as temperature, pressure, motion, or light.',
      '3. Processing Unit: An embedded microcontroller executing localized firmware rules and algorithms.',
      '4. Communication Transceiver: Radio interface (BLE, Wi-Fi, Zigbee, NFC) for exchanging telemetry and receiving commands.',
      '5. Power Source: Onboard battery, energy harvester (solar, thermal, kinetic), or mains power supply.',
      '6. Optional Actuator: Mechanism to affect the surrounding physical space (smart lock latch, display indicator).',
    ],
    example:
      'A smart electricity meter that continuously records power usage, detects voltage fluctuations, and transmits readings hourly to the utility over cellular networks.',
    visualFlow: {
      title: 'Smart Object Anatomy',
      steps: ['Physical Body', 'Sensors / Actuators', 'Embedded MCU', 'RF Transceiver', 'Unique Identity (URI/IP)'],
    },
    conclusion:
      'Smart objects turn inert physical goods into interactive, cooperative endpoints across commercial and industrial environments.',
  },
  {
    id: 'iot-u6-lq4',
    subjectId: 'iot',
    unitId: 6,
    questionNumber: 4,
    title: 'Explain IoT-A and Hydra. Differentiate between them.',
    type: 'PYQ',
    years: ['Dec 2024'],
    marks: 6,
    category: 'Architectural Frameworks',
    sourceFile: 'docs/iot/Unit_6_IoT_Applications.md',
    definition:
      'IoT-A is a foundational European research project that established the Architectural Reference Model (ARM) for designing interoperable IoT systems; Hydra is a service-oriented middleware software framework that connects heterogeneous embedded devices.',
    keyPoints: [
      'IoT-A Role: Acts as a conceptual design blueprint and reference methodology; does not provide a single executable software package.',
      'Hydra Role: Acts as a practical, deployable middleware software solution implementing Service-Oriented Architecture (SOA) and semantic web technologies.',
      'IoT-A Architectural Models: Defines reference models for domain, information, communication, trust, security, and functional views.',
      'Hydra Features: Provides device discovery, semantic service discovery, automatic proxy generation, and security wrappers for legacy embedded devices.',
      'Primary Goal: Both initiatives targeted overcoming vendor lock-in and fragmented proprietary standards in early European IoT research.',
    ],
    example:
      'Engineers use the IoT-A reference model to plan a city-wide smart utility architecture, and deploy Hydra-like middleware to bridge smart energy meters with billing portals.',
    visualFlow: {
      title: 'Conceptual Model vs Middleware',
      steps: ['IoT-A: Architectural Blueprint & Guidelines', 'Hydra: Service-Oriented Middleware Software', 'Unified Interoperable Smart System'],
    },
    conclusion:
      'IoT-A defines the architectural principles and guidelines, whereas Hydra implements the tangible middleware runtime to achieve device interoperability.',
  },
  {
    id: 'iot-u6-lq5',
    subjectId: 'iot',
    unitId: 6,
    questionNumber: 5,
    title: 'Explain common IoT applications in Smart Cities, Smart Homes, and Healthcare.',
    type: 'PYQ',
    years: ['Mar 2023', 'Jan 2024', 'Dec 2024', 'Jan 2026'],
    marks: 8,
    category: 'Real-World Applications',
    sourceFile: 'docs/iot/Unit_6_IoT_Applications.md',
    definition:
      'IoT applications apply connected sensing, edge computing, and cloud automation across municipal infrastructure, residential living, and personal healthcare to improve efficiency, convenience, and safety.',
    keyPoints: [
      'Smart Cities: (1) Smart Street Lighting that dims during empty hours and brightens when vehicles approach; (2) Intelligent Waste Management with ultrasonic bin fill-level monitors optimizing garbage truck routes; (3) Traffic Monitoring using road sensors to dynamically adjust signal timings and reduce congestion.',
      'Smart Homes: (1) Connected Climate Control with smart thermostats learning occupant habits to cut power bills; (2) Automated Security with smart locks, PIR motion sensors, and remote video alerts; (3) Smart Lighting controlled via voice assistants and motion sensors.',
      'Healthcare IoT (IoMT): (1) Remote Patient Telemetry with wearable monitors tracking pulse, ECG, and blood oxygen levels; (2) Smart Insulin Pens recording injection timestamps and dosage history; (3) Hospital Asset Tracking with RFID tracking defibrillators and mobile beds.',
    ],
    example:
      'During a heatwave, smart home air conditioners optimize energy use based on grid load, smart city water monitors flag pipe leaks, and wearable monitors alert doctors to patient dehydration.',
    visualFlow: {
      title: 'Cross-Domain IoT Implementations',
      steps: ['Smart Cities: Lighting & Waste', 'Smart Homes: Energy & Security', 'Healthcare: Remote Telemetry', 'Cloud Analytics & Public Services'],
    },
    conclusion:
      'By linking physical assets to automated digital services, IoT improves urban sustainability, domestic comfort, and lifesaving medical responses.',
  },
  {
    id: 'iot-u6-lq6',
    subjectId: 'iot',
    unitId: 6,
    questionNumber: 6,
    title: 'How does Industry 4.0 benefit modern industries? What key challenges does it face?',
    type: 'PYQ',
    years: ['Jan 2024'],
    marks: 6,
    category: 'Industry 4.0',
    sourceFile: 'docs/iot/Unit_6_IoT_Applications.md',
    definition:
      'Industry 4.0 represents the Fourth Industrial Revolution, characterized by the convergence of Industrial IoT, cloud analytics, artificial intelligence, and autonomous robotics to create intelligent, self-monitoring factories.',
    keyPoints: [
      'Key Benefits:',
      '1. Minimized Downtime: Predictive maintenance detects mechanical fatigue early, preventing catastrophic machine breakdowns.',
      '2. Greater Agility & Customization: Modular assembly lines allow rapid reconfiguration for personalized batch manufacturing without stopping production.',
      '3. Enhanced Quality & Waste Reduction: Machine vision cameras inspect parts at microsecond speeds, reducing scrap rates and defect escapes.',
      'Critical Challenges:',
      '1. Cybersecurity Vulnerabilities: Connecting operational technology (OT) to the internet exposes critical physical plant machinery to malware and ransomware.',
      '2. Legacy Equipment Fragmentation: Integrating decades-old machinery that lacks digital communication interfaces requires costly retrofitting.',
      '3. Workforce Skills Gap: Demands advanced cross-disciplinary technicians skilled in both mechanical engineering and cloud data analytics.',
    ],
    example:
      'A semiconductor fabrication cleanroom where automated chemical delivery and automated wafer inspections maintain 99.98% yield while alerting engineers to air filter degradation.',
    visualFlow: {
      title: 'Industry 4.0 Opportunities vs Risks',
      steps: ['Connected Cyber-Physical Plant', 'Predictive Maintenance & Yield Gains', 'Challenges: Cyber Threat & OT/IT Skills Gap', 'Resilient Zero-Downtime Operations'],
    },
    conclusion:
      'Industry 4.0 delivers unmatched operational efficiency, but requires robust industrial cybersecurity and workforce reskilling to succeed.',
  },
  {
    id: 'iot-u6-lq7',
    subjectId: 'iot',
    unitId: 6,
    questionNumber: 7,
    title: 'What are IoT platforms and middleware? Explain their essential roles.',
    type: 'Practice',
    years: [],
    marks: 4,
    category: 'Cloud Platforms',
    sourceFile: 'docs/iot/Unit_6_IoT_Applications.md',
    definition:
      'An IoT platform is a comprehensive cloud software suite that manages device connectivity, data ingestion, security, and application deployment; middleware provides the software glue that allows heterogeneous devices to communicate seamlessly.',
    keyPoints: [
      'Device Connectivity & Management: Maintains secure cryptographic device registries, provisions credentials, and delivers Over-The-Air (OTA) firmware updates.',
      'Data Ingestion & Routing: Scalable message brokers (MQTT, HTTP, CoAP) that receive millions of telemetry packets per second without loss.',
      'Rules Engine & Processing: Evaluates streaming telemetry against configured business logic (e.g., `IF temp > 80°C THEN send SMS alert`).',
      'Integration APIs: Exposes RESTful endpoints and Webhooks that feed clean data into ERP, CRM, and machine learning models.',
      'Representative Examples: AWS IoT Core, Microsoft Azure IoT Hub, Google Cloud IoT, and open-source ThingsBoard.',
    ],
    example:
      'A fleet of 5,000 smart refrigerated delivery trucks reporting temperatures to AWS IoT Core; if any truck exceeds 4°C, the rules engine sends an instant alert to the driver and flags the logistics dispatch.',
    visualFlow: {
      title: 'IoT Platform Pipeline',
      steps: ['Fleet Edge Devices', 'Device Gateway / Auth', 'Message Broker', 'Streaming Rules Engine', 'Storage & Business Dashboards'],
    },
    conclusion:
      'IoT platforms abstract away low-level networking, scaling, and database plumbing, allowing enterprises to focus entirely on application logic.',
  },
];
