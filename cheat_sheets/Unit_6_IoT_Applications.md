---
id: "iot-unit-6"
subjectId: "iot"
unitId: "6"
title: "Unit 6: IoT Applications — Exam Cheat Sheet"
topics: ["Industrial IoT (IIoT)", "Future Factory / Industry 4.0", "Brownfield vs Greenfield IoT", "Smart Objects", "IoT Middleware Platforms", "IoT-A & Hydra"]
status: "published"
---

# Unit 6: IoT Applications — Exam Cheat Sheet

## 1. Industrial IoT (IIoT) & The Future Factory
Industrial IoT (IIoT) applies IoT sensors, networked machines, and advanced data analytics to industrial production environments, forming the core pillar of **Industry 4.0**.

- **Core Factory Objectives**:
  - *Predictive Maintenance*: Vibration and acoustic sensors detect bearing defects weeks before catastrophic failure.
  - *Overall Equipment Effectiveness (OEE)*: Real-time telemetry monitoring machine availability, performance speed, and quality yield.
  - *Digital Twins*: Virtual digital simulation models mirroring real-time operating conditions of physical factory machinery.
  - *Automated Guided Vehicles (AGVs)*: Autonomous robotic carts transporting materials across warehouse floors via LIDAR and Wi-Fi/5G telemetry.

## 2. Brownfield IoT vs Greenfield IoT Comparison
A high-probability diploma examination question: compare retrofitting legacy installations against modern ground-up deployments.

| Comparison Factor | Brownfield IoT | Greenfield IoT |
| :--- | :--- | :--- |
| **Infrastructure Base** | Existing legacy industrial machinery, legacy PLCs, analog sensors | Brand-new smart factory built completely from scratch |
| **Integration Strategy** | Retrofitting external non-intrusive sensor clamps and protocol gateways | Built-in smart digital sensors, native OPC-UA and MQTT interfaces |
| **Capital Cost (CapEx)** | Low to moderate CapEx (reutilizes expensive mechanical assets) | High initial CapEx (requires purchasing brand-new automated systems) |
| **Deployment Complexity** | High protocol complexity; requires bridging proprietary legacy buses | Low protocol complexity; uses uniform open Industry 4.0 standards |
| **Interruption Risk** | Must be deployed without interrupting ongoing 24/7 manufacturing | Commissioned and thoroughly benchmarked prior to live production |
| **Typical Industry Usage** | Steel mills, legacy chemical processing plants, textile factories | Modern semiconductor fabrication plants, modern EV gigafactories |

## 3. Smart Objects & Domain Applications
A **Smart Object** is a physical device possessing four fundamental capabilities: identification (RFID/MAC), sensing/actuation, embedded computation, and network communication.

- **Smart Agriculture**:
  - Soil moisture sensors (capacitive) paired with automated solenoid drip-irrigation valves.
  - Environmental monitoring (ambient humidity, solar radiation) optimizing greenhouse crop yields.
- **Smart Grid & Energy**:
  - Automated Smart Meters (AMI) reporting two-way power usage to utility companies every 15 minutes.
  - Automatic load balancing shedding non-essential circuits during peak grid stress.
- **Smart Healthcare (IoMT - Internet of Medical Things)**:
  - Wearable pulse oximeters and ECG monitors transmitting telemetry to hospital nurse stations.
  - Smart medicine dispensers ensuring patient prescription adherence.
- **Smart Logistics & Cold Chain**:
  - Temperature and GPS loggers tracking vaccine shipments to verify refrigeration standards were never violated.

## 4. IoT Middleware: IoT-A and Hydra
IoT Middleware acts as the unifying software bridge separating heterogeneous hardware drivers from enterprise software applications.

### IoT-A (Internet of Things - Architecture)
- A European Union Seventh Framework Programme (FP7) flagship project.
- Created the foundational **Architectural Reference Model (ARM)** for IoT.
- Uses domain models, information models, and communication models to guarantee cross-industry system interoperability.

### Hydra Middleware
- Open-source middleware project focused on **Ambient Intelligence** and Semantic Web technologies.
- Uses OWL (Web Ontology Language) to semantically describe device capabilities.
- Allows embedded devices to automatically discover each other and form collaborative workflows without central reprogramming.

## 5. Key Industry 4.0 Challenges
When answering 5-mark or 10-mark semester exam questions regarding industrial deployment hurdles, highlight:
1. **Cybersecurity & Air-Gap Breaches**: Connecting operational technology (OT) to IT networks exposes PLCs to ransomware and sabotage.
2. **Deterministic Latency**: Mission-critical robotic cells require sub-millisecond real-time response (Time-Sensitive Networking - TSN).
3. **Data Silos**: Proprietary protocols between different machinery vendors prevent seamless cross-plant analytics.
4. **Harsh Environments**: Factory dust, electromagnetic interference (EMI), and extreme temperatures requiring ruggedized IP67/IP68 enclosures.

