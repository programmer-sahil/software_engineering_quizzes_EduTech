---
id: "iot-unit-4"
subjectId: "iot"
unitId: "4"
title: "Unit 4: Web of Things — Exam Cheat Sheet"
topics: ["IoT vs WoT", "Two Web Pillars", "WoT Architecture Standardization", "Platform Middleware", "Unified Multi-Tier Architecture", "WoT Portals & BI"]
status: "published"
---

# Unit 4: Web of Things — Exam Cheat Sheet

## 1. Web of Things (WoT) vs Internet of Things (IoT)
The core conceptual distinction between IoT and WoT is one of the most heavily verified semester exam topics.

| Comparison Parameter | Internet of Things (IoT) | Web of Things (WoT) |
| :--- | :--- | :--- |
| **OSI / Architectural Layer** | Network & Transport Layer focus (Layers 3 & 4) | Application Layer focus (Layer 7) |
| **Primary Goal** | Connecting physical objects to IP networks | Reusing standard Web standards to make things discoverable and programmable |
| **Protocols Used** | Diverse heterogeneous field protocols (Zigbee, Modbus, BLE, CoAP, MQTT) | Uniform Web standards (HTTP/HTTPS, WebSockets, REST, JSON-LD) |
| **Interoperability Barrier** | High fragmentation; siloed vendor gateways and proprietary protocols | Universal; any web browser or HTTP client can interact with smart things |
| **Standardization Body** | IEEE, IETF, ITU-T | W3C (World Wide Web Consortium) |

### Key Takeaway Formula
$$\text{WoT} = \text{IoT} + \text{Web Standards (URIs, HTTP, REST, JSON)}$$

## 2. The Two Pillars of the Web in WoT
The Web owes its universal scalability to two foundational architectural pillars, which WoT adopts:

1. **Pillar 1: URIs (Uniform Resource Identifiers)**
   - Every physical entity, sensor channel, and actuator is addressed using a globally unique, human-readable URI.
   - Example: `http://factory-floor.local/api/v1/sensors/conveyor_belt_speed`
2. **Pillar 2: HTTP & REST Architectural Style**
   - Interactions use standard stateless HTTP verbs:
     - `GET`: Read real-time telemetry from a sensor.
     - `PUT` / `POST`: Update actuator state or trigger a hardware routine.
     - `DELETE`: Unregister a device or clear an alarm history.

### RESTful Device Interaction Example
```http
GET /api/v1/devices/living-room-fan HTTP/1.1
Host: smart-home.local
Accept: application/json

HTTP/1.1 200 OK
Content-Type: application/json

{
  "device": "living-room-fan",
  "power": "ON",
  "speed_rpm": 1200,
  "oscillating": true
}
```

## 3. Unified Multi-Tier WoT Architecture
The W3C WoT architecture organizes smart spaces into a standardized four-tier hierarchy:

1. **Device Tier (Perception)**: Physical sensors, microcontrollers, and actuators exposing hardware interfaces or local fieldbus endpoints.
2. **Gateway / Edge Tier**: Smart proxies running embedded HTTP/WebSocket servers that translate constrained protocols (e.g. Zigbee or Bluetooth LE) into web-friendly REST APIs.
3. **Cloud & Middleware Tier**: Distributed platform middleware managing directory registries (Thing Descriptions), authentication (OAuth2), semantic search, and streaming pipelines.
4. **Application / Enterprise Tier**: End-user dashboards, mobile applications, mashups, and automated business workflows.

## 4. Platform Middleware for WoT
Because billions of devices join and leave networks dynamically, middleware bridges the gap between heterogeneous hardware and enterprise applications:

- **Abstraction**: Conceals whether a device is wired, wireless, battery-powered, or grid-tied.
- **Thing Description (TD)**: W3C standard JSON-LD document describing a Thing's metadata, available properties, actions, and events.
- **Service Discovery**: Allows client applications to locate nearby smart resources using mDNS, SSDP, or Web Thing registries.
- **Security & Authorization**: Enforces role-based API keys and encrypted HTTPS sessions for every actuator call.

## 5. WoT Portals & Business Intelligence (BI)
- **WoT Portals**: Unified web interfaces where students, engineers, or operators configure rules, inspect telemetry graphs, and orchestrate device interactions without writing low-level firmware.
- **Business Intelligence (BI)**: Transforms raw telemetry streams into actionable commercial decisions:
  - *Descriptive Analytics*: Historical energy consumption trends.
  - *Predictive Analytics*: Forecasting machine failure based on thermal sensor trends.
  - *Prescriptive Analytics*: Automatically throttling assembly line motors when ambient factory temperatures exceed safety thresholds.

