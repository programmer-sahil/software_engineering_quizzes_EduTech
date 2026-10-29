# Diploma CST — Internet of Things (507/2(N))

**Source papers checked:** March 2023, January 2024, December 2024 and January 2026.

**Source-label policy:** “PYQ” means the topic/question was verified in the named uploaded exam paper. When wording is adapted for clarity, this is still indicated. “Practice — Not verified PYQ” means an original revision question added to fill syllabus gaps. Year labels on long questions identify the corresponding exam topic; some combined answers expand the original subquestions.

**Solutions:** Independently prepared, not an official examination board answer key. MCQ explanation is usually one short sentence. Asterisks/notes flag imprecise original items.

# UNIT 4: Web of Things (WoT)
**Hours:** 10 | **Marks:** 10 | **Module:** B
**Syllabus:** WoT versus IoT; two pillars of the Web; architectural standardization; WoT middleware; unified multitier WoT architecture; WoT portals and business intelligence.

## Section A — 15 MCQs with answers and concise explanations

### MCQ 1. The main purpose of the Web of Things (WoT) is to:
**PYQ — Mar 2023, Dec 2024**
- **A.** Reduce interoperability
- **B.** Increase hardware weight
- **C.** Improve usability and interoperability
- **D.** Replace all sensors

**Answer:** C. Improve usability and interoperability  
**Explanation:** WoT makes connected devices easier to access using Web technologies.

### MCQ 2. WoT mainly uses existing:
**Practice — Not verified PYQ**
- **A.** Web technologies
- **B.** Printing mechanisms
- **C.** Battery chemistries
- **D.** Mechanical gears

**Answer:** A. Web technologies  
**Explanation:** WoT applies Web standards to connected things.

### MCQ 3. Which is a common Web identifier for a resource?
**Practice — Not verified PYQ**
- **A.** URI
- **B.** PWM
- **C.** RAM
- **D.** ADC

**Answer:** A. URI  
**Explanation:** A URI identifies a Web resource.

### MCQ 4. Which protocol is widely associated with Web interactions?
**Practice — Not verified PYQ**
- **A.** HTTP
- **B.** GPIO
- **C.** UART voltage
- **D.** USB power

**Answer:** A. HTTP  
**Explanation:** HTTP supports Web requests and responses.

### MCQ 5. Which HTTP method usually reads a Web resource?
**Practice — Not verified PYQ**
- **A.** GET
- **B.** POST
- **C.** DELETE
- **D.** PATCH

**Answer:** A. GET  
**Explanation:** GET retrieves a resource representation.

### MCQ 6. A standard WoT description helps applications:
**Practice — Not verified PYQ**
- **A.** Understand device capabilities
- **B.** Change screen color only
- **C.** Run without hardware
- **D.** Replace networking entirely

**Answer:** A. Understand device capabilities  
**Explanation:** Descriptions make capabilities and interaction mechanisms understandable.

### MCQ 7. What does WoT middleware mainly provide?
**Practice — Not verified PYQ**
- **A.** Device integration and common interfaces
- **B.** A physical battery
- **C.** Only a microphone
- **D.** A printer tray

**Answer:** A. Device integration and common interfaces  
**Explanation:** Middleware abstracts protocols and provides services to apps.

### MCQ 8. In WoT, interoperability means:
**Practice — Not verified PYQ**
- **A.** Different compatible systems can work together
- **B.** All sensors must have identical chips
- **C.** Devices cannot share data
- **D.** One vendor controls all devices

**Answer:** A. Different compatible systems can work together  
**Explanation:** Common Web interfaces connect heterogeneous devices.

### MCQ 9. A WoT portal is mainly a:
**Practice — Not verified PYQ**
- **A.** Web interface for monitoring or controlling things
- **B.** Power supply
- **C.** Physical temperature sensor
- **D.** Wireless antenna

**Answer:** A. Web interface for monitoring or controlling things  
**Explanation:** Portals show device status and allow authorized interactions.

### MCQ 10. Which feature is important in a WoT portal?
**Practice — Not verified PYQ**
- **A.** Device dashboard
- **B.** No authentication
- **C.** No networking
- **D.** Fixed printed report only

**Answer:** A. Device dashboard  
**Explanation:** A dashboard shows connected-device information.

### MCQ 11. What does BI stand for in WoT portals and business analytics?
**Practice — Not verified PYQ**
- **A.** Business Intelligence
- **B.** Binary Interface
- **C.** Broadband Internet
- **D.** Business Input

**Answer:** A. Business Intelligence  
**Explanation:** BI analyzes collected data to support decisions.

### MCQ 12. Which is a simple WoT data flow?
**Practice — Not verified PYQ**
- **A.** Device → Web interface → user application
- **B.** Paper → transistor → fan
- **C.** Mouse → screen only
- **D.** No data exchanged

**Answer:** A. Device → Web interface → user application  
**Explanation:** WoT exposes devices to applications through Web interfaces.

### MCQ 13. Standardization mainly improves WoT:
**Practice — Not verified PYQ**
- **A.** Interoperability
- **B.** Screen brightness
- **C.** Motor speed
- **D.** Weight

**Answer:** A. Interoperability  
**Explanation:** Common specifications let systems use compatible descriptions and interactions.

### MCQ 14. Which is a practical WoT use case?
**Practice — Not verified PYQ**
- **A.** Web dashboard monitoring room sensors
- **B.** Painting a wall manually
- **C.** Typing offline text only
- **D.** Disconnecting a thermostat

**Answer:** A. Web dashboard monitoring room sensors  
**Explanation:** Web dashboards can monitor connected sensors.

### MCQ 15. Which component usually provides Web-facing APIs to mixed-protocol devices?
**Practice — Not verified PYQ**
- **A.** Gateway or middleware
- **B.** Cooling fan blade
- **C.** Display glass
- **D.** Battery case

**Answer:** A. Gateway or middleware  
**Explanation:** Gateway/middleware can translate device protocols for applications.

## Section B — 5 Important long questions with concise answers

### Long Q1. Differentiate Internet of Things (IoT) and Web of Things (WoT).
**PYQ — Jan 2024, Dec 2024, Jan 2026**

**IoT:** Connects physical objects using sensors, controllers and networks. **WoT:** Makes connected IoT devices accessible and interoperable using Web technologies.

| IoT | WoT |
|---|---|
| Focus on connected devices and networks | Focus on Web interfaces and integration |
| Uses Wi-Fi, Zigbee, MQTT, etc. | Uses URIs, Web APIs, HTTP/REST-style interactions |

**Example:** IoT connects a smart lamp; WoT lets a Web app discover and control it.

### Long Q2. Explain the two pillars of the Web and their role in WoT.
**PYQ — Jan 2024, Jan 2026**

Two basic Web principles used in WoT are **resource identification** and **standard interaction**.

1. **Identification:** a URI uniquely identifies a thing/resource.
2. **Interaction:** standard Web methods such as HTTP/REST allow clients to read or modify that resource.

**Example:** `/room/temperature` identifies a sensor; GET retrieves its reading.

*Note: The papers ask for “two pillars” but do not print the definition; this uses a common simplified Web-resource interpretation.*

### Long Q3. What is platform middleware in WoT? Explain its functions.
**PYQ — Dec 2024**

**WoT middleware** connects different devices and applications through common services.

**Functions:** (1) discovery, (2) protocol translation, (3) device abstraction, (4) data processing, (5) security, (6) API exposure.

**Example:** A gateway allows Zigbee sensors to be viewed through a Web dashboard.

### Long Q4. Explain a unified multitier WoT architecture.
**Practice — Not verified PYQ**

A **multitier WoT architecture** divides functions into levels: **(1) device tier**—sensors and actuators; **(2) gateway/network tier**—connectivity; **(3) middleware/service tier**—resource abstraction and data services; **(4) application tier**—Web applications; **(5) business tier**—analytics and decisions.

**Flow:** Devices → Gateway → Middleware → Applications → BI.

*Note: Syllabus-focused addition; no direct matching long question in the four uploaded papers.*

### Long Q5. What is a WoT portal? Explain its role in business intelligence.
**Practice — Not verified PYQ**

A **WoT portal** is a Web dashboard for connected devices. It shows sensor readings, alarms and device status, and may support authorized controls.

**BI role:** device data is collected, analyzed and displayed to support decisions.

**Example:** A factory portal tracks energy use to identify waste and lower costs.

---
**Reminder:** Revise the full listed syllabus; previous-paper questions do not guarantee the future exam.
