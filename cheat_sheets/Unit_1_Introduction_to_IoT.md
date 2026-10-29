---
id: "iot-unit-1"
subjectId: "iot"
unitId: "1"
title: "Unit 1: Introduction to IoT — Exam Cheat Sheet"
topics: ["IoT Fundamentals", "Characteristics", "Sensing & Actuation", "Ecosystem Elements", "Drivers & Governance", "Security & Privacy"]
status: "published"
---

# Unit 1: Introduction to IoT — Exam Cheat Sheet

## 1. IoT Fundamentals & Core Definition
IoT (Internet of Things) refers to an interconnected network of physical devices, vehicles, appliances, and embedded electronics embedded with sensors, actuators, software, and network connectivity that enables them to collect, exchange, and act on data without requiring direct human-to-computer intervention.

- **Origin**: Coined by Kevin Ashton in 1999 during his work at Procter & Gamble regarding RFID supply chain tracking.
- **Core Principle**: Bridging the physical world with digital cyber-systems through unique IP identification and automated telemetry.
- **Value Proposition**: Real-time visibility, automated process control, predictive maintenance, and optimized resource allocation.

### Exam Reminder
Always define IoT by emphasizing both hardware (sensors, actuators) and software (networking, protocols, analytics) functioning together over standard IP networks.

## 2. Key Characteristics of IoT
In diploma semester exams, you are frequently asked to state four to six essential characteristics of IoT systems:

- **Dynamic & Self-Adapting**: Devices dynamically adapt to changing contexts and operating environments (e.g., a surveillance camera adjusting frame rates based on lighting or motion).
- **Self-Configuring**: Nodes automatically configure networking, fetch firmware updates, and join mesh clusters without manual network setup.
- **Interoperable Communication Protocols**: Devices support standard protocols across heterogeneous physical media (Ethernet, Wi-Fi, Zigbee, Bluetooth).
- **Unique Identity**: Every physical node possesses an IP address (IPv6 / IPv4) or URI identifying it across the network.
- **Integrated into Information Network**: Connected objects participate directly in business analytics and enterprise IT backbones.
- **Enormous Scale**: The number of devices managed is orders of magnitude larger than traditional human-operated desktop computers.

## 3. Sensors vs Actuators Comparison
Sensors and actuators represent the physical interface between the digital computing domain and the real world.

| Parameter | Sensors (Input Transducers) | Actuators (Output Transducers) |
| :--- | :--- | :--- |
| **Primary Function** | Converts physical real-world phenomena into electrical signals | Converts electrical control signals into physical action or mechanical motion |
| **Signal Flow Direction** | Physical environment $\rightarrow$ Digital controller / processor | Digital controller / processor $\rightarrow$ Physical environment |
| **Operating Examples** | DHT11 (temperature & humidity), LDR (light), PIR (motion), Ultrasonic | Relay module, DC motor, Solenoid valve, Servo motor, Piezo buzzer |
| **Role in Feedback Loop** | Measurement & Telemetry phase | Correction & Execution phase |
| **Output Type** | Analog voltage (0–5V) or Digital pulse streams | Mechanical movement, heat, light, audible sound, fluid valve opening |

### Exam Tip
Remember: **Sensors observe**, while **Actuators execute**. A complete closed-loop IoT system requires both.

## 4. Elements of an IoT Ecosystem
A comprehensive IoT architecture spans four critical operational stages:

1. **Perception / Physical Layer**: Sensors, actuators, RFID tags, microcontrollers (Arduino, ESP32) sensing environmental parameters.
2. **Connectivity / Network Layer**: Gateways, routers, Wi-Fi (802.11), Zigbee (802.15.4), Cellular (4G/5G/NB-IoT), LoRaWAN transferring collected data.
3. **Data Processing & Middleware Layer**: Cloud infrastructure (AWS IoT, Azure IoT), message brokers (MQTT Mosquitto), edge servers filtering raw signals.
4. **Application Layer**: User dashboards, smart agriculture monitors, industrial SCADA interfaces, predictive alert pipelines.

## 5. Technology Drivers & Business Drivers
IoT growth is propelled by technological advancements on the supply side and economic incentives on the demand side:

### Technology Drivers
- **Miniaturization of Microelectronics**: MEMS (Micro-Electro-Mechanical Systems) allow microscopic, inexpensive sensors.
- **Ubiquitous Low-Power Connectivity**: Bluetooth Low Energy (BLE), LoRaWAN, and 6LoWPAN enable battery operation for years.
- **IPv6 Adoption**: Provides $2^{128}$ unique IP addresses, overcoming IPv4 address exhaustion for billions of smart objects.
- **Cloud & Edge Computing**: Elastic computing power capable of ingesting massive telemetry streams.

### Business Drivers
- **Predictive Maintenance**: Detecting mechanical bearing wear before disastrous factory downtime occurs.
- **Asset Tracking & Logistics**: Real-time supply-chain monitoring reducing inventory loss.
- **Resource Conservation**: Smart energy meters, water leak detectors, and smart street lighting reducing municipal overhead.

## 6. Privacy & Security Challenges in IoT
Because IoT objects are resource-constrained and deployed in open physical spaces, they introduce significant vulnerability vectors:

- **Hardware Constraints**: Microcontrollers (e.g. 8-bit ATmega328P) lack the RAM and clock speed needed to run complex RSA-4096 or TLS handshakes.
- **Default Hardcoded Credentials**: Insecure factory default passwords leave devices exposed to botnet exploits (e.g., Mirai botnet).
- **Eavesdropping & Man-in-the-Middle (MitM)**: Unencrypted wireless transmission allows rogue sniffing of sensitive telemetry.
- **Data Privacy & Governance**: Sensitive telemetry (patient vitals, household occupancy patterns) transmitted across third-party cloud servers without uniform global compliance.
- **Countermeasures**: Hardware crypto chips (ATECC608A), mutual TLS authentication, encrypted firmware updates (OTA), and role-based access control (RBAC).

