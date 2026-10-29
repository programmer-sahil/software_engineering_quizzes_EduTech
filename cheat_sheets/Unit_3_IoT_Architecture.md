---
id: "iot-unit-3"
subjectId: "iot"
unitId: "3"
title: "Unit 3: IoT Architecture — Exam Cheat Sheet"
topics: ["IoT Architecture Models", "OIC Architecture", "IoTivity Stack", "Resource Model", "Resource Abstraction", "Deployment Models"]
status: "published"
---

# Unit 3: IoT Architecture — Exam Cheat Sheet

## 1. Open IoT Architecture & OIC Overview
Modern IoT systems must connect diverse devices regardless of manufacturer, operating system, or wireless chip.

- **OIC (Open Interconnect Consortium)**: An industry standards consortium (later renamed to Open Connectivity Foundation - OCF) formed by Intel, Samsung, Cisco, and others to create unified communication specifications for the Internet of Things.
- **Core OIC Goal**: Seamless device-to-device connectivity across smart home, industrial automation, healthcare, and automotive sectors without vendor lock-in.
- **OIC Design Principles**:
  - *Multi-Transport Independence*: Works over Wi-Fi, Ethernet, Zigbee, Bluetooth, and cellular.
  - *Resource-Oriented Model*: Treats every physical sensor and actuator as a RESTful resource.
  - *Lightweight Footprint*: Scalable from constrained microcontrollers to multi-core cloud servers.
  - *Built-in Security*: Mutual cryptographic identity, access control lists (ACLs), and DTLS/TLS encryption.

## 2. IoTivity Open-Source Software Stack
IoTivity is the open-source reference implementation of the OIC/OCF specifications sponsored by the Linux Foundation.

- **Architecture Layers**:
  1. **Base Services / Core Framework**: Device discovery, resource management, onboarding, and subscription observers.
  2. **Connectivity Abstraction Layer (CAL)**: Decouples upper application layers from underlying network interfaces (Wi-Fi, Bluetooth LE, IP, 6LoWPAN).
  3. **Security Layer**: Cryptographic engine handling hardware credential storage, DTLS handshakes, and access control policies.
  4. **Device Discovery & Provisioning**: Allows new smart bulbs, thermostats, or meters to broadcast presence and bind safely to a home controller.

## 3. Four-Stage IoT Architecture Comparison
Diploma exam questions often ask you to delineate the four operational stages in an end-to-end IoT platform:

| Stage | Name | Key Hardware / Software | Primary Responsibility |
| :--- | :--- | :--- | :--- |
| **Stage 1** | Sensors & Actuators (Perception) | Thermocouples, Accelerometers, Relays, ATmega328P | Emits analog signals or captures digital state from the physical environment |
| **Stage 2** | Internet Gateway & Data Acquisition (DAQ) | ESP32, Raspberry Pi, Industrial Gateways | Aggregates raw analog/digital data, converts signals to IP packets, filters noise |
| **Stage 3** | Edge IT Processing | Local edge servers, fog computing gateways | Pre-processes telemetry, extracts anomalies in near real-time, reduces cloud payload |
| **Stage 4** | Cloud Data Center & Analytics | AWS IoT Core, Azure IoT Hub, Hadoop/Spark | Massive historical storage, predictive deep learning, ERP integration, web dashboards |

## 4. OIC / IoTivity Resource Model
The resource model is the foundational paradigm of IoTivity. Everything in the physical world is modeled as a **Resource**.

- **Uniform Resource Identifier (URI)**: Every physical feature has a unique addressing path (e.g. `/a/light`, `/a/thermostat`).
- **Resource Properties**:
  - `rt` (*Resource Type*): Identifies the semantic schema of the resource (e.g., `oic.r.light.switch`).
  - `if` (*Interfaces*): Defines which operational facets can be queried (e.g., `oic.if.baseline`, `oic.if.a`).
  - `p` (*Observable*): Flag indicating whether the client can observe/subscribe to state changes.
- **REST Operations Supported**:
  - `GET`: Read current sensor value or device state.
  - `PUT`: Update/modify state (e.g., switch light ON).
  - `POST`: Create a new child resource or invoke an action.
  - `DELETE`: Remove a resource instance.

### Example OIC Resource Representation
```json
{
  "href": "/sensor/ambient_temperature",
  "rt": ["oic.r.temperature"],
  "if": ["oic.if.baseline", "oic.if.s"],
  "value": 26.5,
  "units": "Celsius",
  "status": "active"
}
```

## 5. IoT Deployment Models
Depending on privacy, latency, and networking conditions, IoT architectures are deployed across three common topologies:

1. **Device-to-Device (D2D)**: Direct communication between local devices without cloud traversal (e.g., light switch communicating with a smart ceiling lamp via Zigbee or CoAP). Lowest latency.
2. **Device-to-Gateway**: Connected nodes transmit telemetry through a local border router/gateway that performs protocol bridging (e.g., BLE beacon sending data to an edge gateway).
3. **Device-to-Cloud**: Objects connect directly or via router to a centralized public or private cloud service via MQTT/HTTPS over cellular or Wi-Fi. Enables global analytics and remote mobile app control.

