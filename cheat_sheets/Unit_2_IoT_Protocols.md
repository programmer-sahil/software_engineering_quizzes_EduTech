---
id: "iot-unit-2"
subjectId: "iot"
unitId: "2"
title: "Unit 2: IoT Protocols — Exam Cheat Sheet"
topics: ["Protocol Standardization", "IEEE 802.15.4", "BACnet & Modbus", "KNX & Zigbee", "MQTT & CoAP", "SCADA & WSN"]
status: "published"
---

# Unit 2: IoT Protocols — Exam Cheat Sheet

## 1. Protocol Standardization & The Need for Standards
Traditional Internet protocols (HTTP/1.1 over TCP) carry heavy byte overheads (headers > 1 KB) and maintain continuous handshakes that quickly drain constrained battery-powered IoT devices.

- **Standardization Bodies**: IEEE, IETF, ISO/IEC, and OASIS publish standard communication profiles to guarantee vendor interoperability.
- **Key Challenges in IoT Standardization**: Heterogeneous physical radios, constrained bandwidth, variable packet loss, and legacy proprietary fieldbuses.
- **Unified Protocol Stack**:
  - *Application / Messaging*: MQTT, CoAP, AMQP, HTTP/REST
  - *Transport*: TCP, UDP
  - *Network / Adaptation*: IPv6, 6LoWPAN, RPL
  - *Link / MAC & Physical*: IEEE 802.15.4, BLE, Wi-Fi (802.11), LoRaWAN

## 2. IEEE 802.15.4 Low-Rate Wireless Standard
IEEE 802.15.4 defines the Physical (PHY) and Media Access Control (MAC) layers for Low-Rate Wireless Personal Area Networks (LR-WPANs).

- **Frequency Bands**: 2.4 GHz ISM band (16 channels globally, data rate up to 250 kbps), 868 MHz (Europe, 1 channel), and 915 MHz (North America, 10 channels).
- **Device Roles**:
  - *FFD (Full Function Device)*: Capable of acting as PAN Coordinator, router, or leaf node; communicates with any other node.
  - *RFD (Reduced Function Device)*: Extremely low complexity and power footprint; only communicates with a designated FFD parent (leaf sensor).
- **Channel Access**: CSMA/CA (Carrier Sense Multiple Access with Collision Avoidance), operating in beacon-enabled (slotted) or non-beacon-enabled (unslotted) modes.

## 3. Industrial & Building Automation Protocols Comparison
Diploma semester exams frequently test differences between legacy industrial fieldbuses and modern wireless automation standards:

| Protocol | Physical Layer | Primary Domain | Topology | Key Characteristic |
| :--- | :--- | :--- | :--- | :--- |
| **Modbus** | RS-485 / RS-232 / TCP (Port 502) | Industrial process control & PLCs | Master-Slave / Client-Server | Open, deterministic, simple register addressing (Holding/Input registers) |
| **BACnet** | Ethernet, MS/TP (RS-485), Zigbee | Building Automation & Control (HVAC, fire) | Peer-to-Peer object network | Object-oriented representation of building systems (Analog Input, Binary Output) |
| **Zigbee** | IEEE 802.15.4 (2.4 GHz) | Smart home & commercial sensor mesh | Mesh, Star, Tree | High reliability via self-healing mesh; low power consumption |
| **KNX** | Twisted Pair (TP-1), Powerline, IP | Commercial building electrical automation | Decentralized multi-master | Standardized European installation bus; certified device interoperability |

## 4. Zigbee Architecture & Layer Breakdown
Zigbee builds on top of IEEE 802.15.4 layers to provide robust, self-healing wireless mesh networking:

1. **Physical & MAC Layers**: Directly provided by IEEE 802.15.4 (radio modulation and channel access).
2. **Network (NWK) Layer**: Handles network formation, dynamic routing (AODV protocol), address assignment (16-bit short addresses), and neighbor discovery.
3. **Application Support Sub-layer (APS)**: Binds devices, matches clusters, and provides reliable end-to-end transport between application endpoints.
4. **Zigbee Device Objects (ZDO)**: Manages device roles (Coordinator, Router, End Device), service discovery, and security key exchange.
5. **Security Framework**: 128-bit AES encryption with Trust Center key management.

## 5. MQTT vs CoAP Messaging Protocols
Understanding when to deploy MQTT vs CoAP is a staple semester exam question:

| Feature | MQTT (Message Queuing Telemetry Transport) | CoAP (Constrained Application Protocol) |
| :--- | :--- | :--- |
| **Architecture** | Publish / Subscribe via Central Broker | Request / Response (Client - Server) |
| **Transport Protocol** | TCP (Connection-oriented, reliable streaming) | UDP (Connectionless, low-overhead datagram) |
| **Header Overhead** | Extremely compact (Fixed header is only 2 Bytes) | Extremely compact (Base header is 4 Bytes) |
| **QoS Support** | 3 Levels: QoS 0 (at most once), QoS 1 (at least once), QoS 2 (exactly once) | 2 Modes: Confirmable (CON) with ACK or Non-confirmable (NON) |
| **Security Standard** | TLS / SSL (Port 8883) | DTLS (Datagram TLS, Port 5684) |
| **Best Used For** | Continuous real-time telemetry streaming and event alerts | Asynchronous RESTful resource querying on sleep-cycle microcontrollers |

### MQTT JSON Telemetry Example
```json
{
  "device_id": "iot-sensor-temp-01",
  "unit": 2,
  "temperature_c": 24.8,
  "humidity_pct": 58.2,
  "timestamp": 1740000000,
  "status": "normal"
}
```

## 6. SCADA & WSN in Industrial IoT
- **SCADA (Supervisory Control and Data Acquisition)**: High-level supervisory computer system interfacing with PLCs and RTUs (Remote Terminal Units) for plant-wide control.
- **WSN (Wireless Sensor Networks)**: Spatially distributed autonomous wireless nodes monitoring physical or environmental conditions (vibration, acoustics, gas concentrations).

