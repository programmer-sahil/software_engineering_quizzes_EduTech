# Diploma CST — Internet of Things (507/2(N))

**Source papers checked:** March 2023, January 2024, December 2024 and January 2026.

**Source-label policy:** “PYQ” means the topic/question was verified in the named uploaded exam paper. When wording is adapted for clarity, this is still indicated. “Practice — Not verified PYQ” means an original revision question added to fill syllabus gaps. Year labels on long questions identify the corresponding exam topic; some combined answers expand the original subquestions.

**Solutions:** Independently prepared, not an official examination board answer key. MCQ explanation is usually one short sentence. Asterisks/notes flag imprecise original items.

# UNIT 3: IoT Architecture
**Hours:** 10 | **Marks:** 10 | **Module:** B
**Syllabus:** OIC open-source IoT architecture and design principles; IoT devices/deployment models; IoTivity open-source stack; resource model; resource and connectivity abstraction.

## Section A — 15 MCQs with answers and concise explanations

### MCQ 1. What does OIC stand for in the original IoT architecture specification?
**Practice — Not verified PYQ**
- **A.** Open Interconnect Consortium
- **B.** Open Internal Controller
- **C.** Online Internet Cloud
- **D.** Optical Interface Channel

**Answer:** A. Open Interconnect Consortium  
**Explanation:** OIC promoted open specifications for interoperable IoT devices.

### MCQ 2. The primary aim of OIC architecture is:
**Practice — Not verified PYQ**
- **A.** Faster CPU clocks
- **B.** Device interoperability
- **C.** More display pixels
- **D.** Local file compression

**Answer:** B. Device interoperability  
**Explanation:** OIC aimed to let devices from different manufacturers communicate.

### MCQ 3. IoTivity is best described as a/an:
**Practice — Not verified PYQ**
- **A.** Open-source IoT software framework
- **B.** Hardware sensor
- **C.** Spreadsheet application
- **D.** Mechanical actuator

**Answer:** A. Open-source IoT software framework  
**Explanation:** IoTivity provides software to support device discovery and resource communication.

### MCQ 4. In IoTivity, a light bulb can be represented as a:
**Practice — Not verified PYQ**
- **A.** Resource
- **B.** Compiler
- **C.** Network cable
- **D.** Hard disk sector

**Answer:** A. Resource  
**Explanation:** A resource provides a standard representation for device capabilities.

### MCQ 5. Which resource URI could identify an IoT light?
**Practice — Not verified PYQ**
- **A.** /light/1
- **B.** 192.168 only
- **C.** GPIO voltage
- **D.** CPU-clock

**Answer:** A. /light/1  
**Explanation:** Resource URIs identify accessible resources.

### MCQ 6. Which operation commonly retrieves the current state of a resource?
**Practice — Not verified PYQ**
- **A.** GET
- **B.** DELETE
- **C.** FLASH
- **D.** RESET

**Answer:** A. GET  
**Explanation:** GET reads resource data in REST-style interaction.

### MCQ 7. What is meant by resource abstraction?
**Practice — Not verified PYQ**
- **A.** Representing diverse hardware with common resource interfaces
- **B.** Removing sensors physically
- **C.** Disabling networks
- **D.** Increasing RAM

**Answer:** A. Representing diverse hardware with common resource interfaces  
**Explanation:** It hides device-specific details behind a uniform interface.

### MCQ 8. What is connectivity abstraction?
**Practice — Not verified PYQ**
- **A.** Hiding differences between communication transports
- **B.** Replacing all wireless links with wires
- **C.** Encrypting screen text
- **D.** Turning off Bluetooth

**Answer:** A. Hiding differences between communication transports  
**Explanation:** Applications need not directly handle every network technology.

### MCQ 9. Device discovery means:
**Practice — Not verified PYQ**
- **A.** Finding available devices/resources on a network
- **B.** Replacing damaged hardware
- **C.** Deleting old settings
- **D.** Creating new processors

**Answer:** A. Finding available devices/resources on a network  
**Explanation:** Discovery lets applications locate accessible devices.

### MCQ 10. Which is an example of device-to-gateway deployment?
**Practice — Not verified PYQ**
- **A.** Zigbee sensor → hub → cloud
- **B.** Sensor → no connection
- **C.** Cloud → keyboard only
- **D.** Only local paper records

**Answer:** A. Zigbee sensor → hub → cloud  
**Explanation:** A gateway links a local device network to other systems.

### MCQ 11. Which deployment sends a device’s data directly to a cloud service?
**Practice — Not verified PYQ**
- **A.** Device-to-cloud
- **B.** Paper-to-cloud
- **C.** No-network
- **D.** Only device-to-device

**Answer:** A. Device-to-cloud  
**Explanation:** Device-to-cloud connects an IoT endpoint to an online service.

### MCQ 12. Which property supports growth to more IoT devices?
**Practice — Not verified PYQ**
- **A.** Scalability
- **B.** Isolation from all networks
- **C.** No addressing
- **D.** Fixed single-device design

**Answer:** A. Scalability  
**Explanation:** Scalability supports an expanding number of devices and services.

### MCQ 13. Where is IoT device data typically processed in an architecture?
**Practice — Not verified PYQ**
- **A.** At the edge or cloud
- **B.** Only in a keyboard
- **C.** Only inside a display
- **D.** Nowhere

**Answer:** A. At the edge or cloud  
**Explanation:** Processing can take place in embedded controllers, gateways and cloud platforms.

### MCQ 14. Why are common IoT architectures useful?
**Practice — Not verified PYQ**
- **A.** They reduce compatibility problems
- **B.** They guarantee zero security threats
- **C.** They eliminate electricity use
- **D.** They remove software

**Answer:** A. They reduce compatibility problems  
**Explanation:** Common standards improve integration and maintainability.

### MCQ 15. Which part of an IoTivity-like stack handles protocol-specific networking?
**Practice — Not verified PYQ**
- **A.** Connectivity layer
- **B.** Font layer
- **C.** Spreadsheet layer
- **D.** Printing layer

**Answer:** A. Connectivity layer  
**Explanation:** The connectivity layer deals with network transports.

## Section B — 6 Important long questions with concise answers

### Long Q1. What is IoTivity? Explain its architecture briefly.
**PYQ — Mar 2023, Jan 2024, Dec 2024**

**IoTivity** is an open-source framework designed for interoperable communication between IoT devices.

**Simplified layers:** (1) application uses device services; (2) service/resource layer manages discovery and resources; (3) connectivity abstraction provides a common interface; (4) connectivity layer communicates over supported networks.

**Example:** A phone application discovers and controls a compatible smart light.

### Long Q2. Explain the IoT resource model with a simple diagram.
**PYQ — Mar 2023**

The **resource model** represents a physical device or function as a Web-style resource identified by a URI, containing properties and operations.

**Diagram:** Smart Light → `/light/1` → `{state: ON, brightness: 70}`.

**Operations:** GET reads state; PUT/POST can change a property according to the interface.

**Benefit:** Different devices can expose capabilities consistently.

### Long Q3. Explain the open-source OIC architecture and its design principles.
**PYQ — Dec 2024**

**OIC** (Open Interconnect Consortium) promoted standards allowing products from different manufacturers to work together.

**Principles:** interoperability, platform independence, discoverable resources, secure exchange, standardized interfaces and scalability.

**Example:** A controller discovers a compatible light and sends a control request without relying on proprietary device-specific commands.

### Long Q4. Explain four stages/layers of IoT architecture with a diagram.
**PYQ — Jan 2024**

A common **four-layer model** is: (1) **Perception/device layer**—sensors and actuators; (2) **Network layer**—communication and gateways; (3) **Processing/service layer**—edge/cloud computing and storage; (4) **Application layer**—dashboards and user services.

**Diagram:** Sensors/Actuators → Network/Gateway → Processing → Application.

**Example:** Soil sensor → Wi-Fi gateway → cloud rules → farmer dashboard.

*Note: The paper asks for four stages but does not prescribe a named reference diagram; this is a common teaching model.*

### Long Q5. Explain IoT devices and common deployment models.
**Practice — Not verified PYQ**

An **IoT device** combines sensors/actuators, a controller, power and communication.

**Deployment models:** (1) device-to-device, (2) device-to-cloud, (3) device-to-gateway, (4) back-end data sharing between services.

**Example:** A door sensor sends readings to a smart-home hub, which forwards them to an app.

### Long Q6. Differentiate resource abstraction and connectivity abstraction in IoTivity.
**Practice — Not verified PYQ**

**Resource abstraction:** hides device hardware details using a standard resource interface. Example: a lamp exposed as `/light/1`.

**Connectivity abstraction:** hides differences between supported network transports. Example: an application uses a common API instead of coding Wi-Fi/Bluetooth details separately.

**Result:** simpler development and better interoperability.

---
**Reminder:** Revise the full listed syllabus; previous-paper questions do not guarantee the future exam.
