# Diploma CST — Internet of Things (507/2(N))

**Source papers checked:** March 2023, January 2024, December 2024 and January 2026.

**Source-label policy:** “PYQ” means the topic/question was verified in the named uploaded exam paper. When wording is adapted for clarity, this is still indicated. “Practice — Not verified PYQ” means an original revision question added to fill syllabus gaps. Year labels on long questions identify the corresponding exam topic; some combined answers expand the original subquestions.

**Solutions:** Independently prepared, not an official examination board answer key. MCQ explanation is usually one short sentence. Asterisks/notes flag imprecise original items.

# UNIT 2: IoT Protocols
**Hours:** 14 | **Marks:** 14 | **Module:** A
**Syllabus:** IoT standardization; M2M and WSN; SCADA, RFID; unified data standards; IEEE 802.15.4, BACnet, Modbus, KNX, Zigbee, network and APS layers, security.

## Section A — 15 MCQs with answers and concise explanations

### MCQ 1. What is the full form of MQTT?
**PYQ — Mar 2023, Dec 2024**
- **A.** Message Queuing Telemetry Transport
- **B.** Media Query Transport
- **C.** Multiple Queue Terminal Transfer
- **D.** Mobile Quality Transport

**Answer:** A. Message Queuing Telemetry Transport  
**Explanation:** MQTT is a lightweight messaging protocol used in IoT.

*Note: This expanded wording follows the exam options; MQTT is also described as “MQ Telemetry Transport”.*

### MCQ 2. Which standard underlies Zigbee radio/MAC communication?
**PYQ — Jan 2026**
- **A.** IEEE 802.11
- **B.** IEEE 802.15.4
- **C.** IEEE 802.3
- **D.** IEEE 802.16

**Answer:** B. IEEE 802.15.4  
**Explanation:** Zigbee builds on IEEE 802.15.4 for low-power wireless networking.

### MCQ 3. Which IEEE standard is used for low-rate wireless personal-area networks?
**PYQ — Mar 2023**
- **A.** IEEE 802.15.4
- **B.** IEEE 802.11ac
- **C.** IEEE 802.3
- **D.** IEEE 11073

**Answer:** A. IEEE 802.15.4  
**Explanation:** IEEE 802.15.4 specifies low-rate WPAN physical and MAC layers.

### MCQ 4. How many common Zigbee network topologies are taught?
**PYQ — Jan 2026**
- **A.** Two
- **B.** Three
- **C.** Four
- **D.** Five

**Answer:** B. Three  
**Explanation:** Star, tree and mesh are the three common Zigbee topologies.

### MCQ 5. Modbus commonly operates using which communication model?
**PYQ — Jan 2026**
- **A.** Client–server
- **B.** Publish–subscribe only
- **C.** Peer-to-peer only
- **D.** No request/response

**Answer:** A. Client–server  
**Explanation:** A Modbus client requests data or actions from a Modbus server.

### MCQ 6. KNX is mainly used for:
**PYQ — Jan 2026**
- **A.** Satellite navigation
- **B.** Spacecraft control
- **C.** Building automation
- **D.** Video streaming

**Answer:** C. Building automation  
**Explanation:** KNX controls building systems such as lighting and HVAC.

### MCQ 7. SCADA is used mainly for:
**PYQ — Jan 2026**
- **A.** Supervisory monitoring and control
- **B.** Word processing
- **C.** Image editing
- **D.** Online gaming

**Answer:** A. Supervisory monitoring and control  
**Explanation:** SCADA supervises industrial equipment and collects operating data.

### MCQ 8. What is the full form of RFID?
**PYQ — Mar 2023**
- **A.** Radio Frequency Identification
- **B.** Rapid Frequency Internet Device
- **C.** Remote File Identification Data
- **D.** Radio Field Internet Design

**Answer:** A. Radio Frequency Identification  
**Explanation:** RFID identifies tagged objects using radio signals.

### MCQ 9. What is the full form of DHCP?
**PYQ — Dec 2024**
- **A.** Dynamic Host Communication Protocol
- **B.** Dynamic Host Configuration Protocol
- **C.** Domain Host Configuration Process
- **D.** Digital Hardware Control Protocol

**Answer:** B. Dynamic Host Configuration Protocol  
**Explanation:** DHCP automatically assigns IP configuration to devices.

### MCQ 10. Which layer provides end-to-end transport between devices?
**PYQ — Mar 2023**
- **A.** Physical layer
- **B.** Transport layer
- **C.** Application layer
- **D.** Data-link layer

**Answer:** B. Transport layer  
**Explanation:** The transport layer carries end-to-end data using protocols such as TCP/UDP.

### MCQ 11. Which is NOT a recognized IoT communication pattern?
**PYQ — Mar 2023**
- **A.** Push producer
- **B.** Request–response
- **C.** Exclusive pairs
- **D.** Publish–subscribe

**Answer:** A. Push producer  
**Explanation:** “Push producer” is not the usual model name; request–response, publish–subscribe, push–pull and exclusive pair are common models.

### MCQ 12. Which protocol suite connects devices across IP networks?
**PYQ — Mar 2023, Jan 2024, Dec 2024**
- **A.** TCP/IP
- **B.** HTML
- **C.** JPEG
- **D.** USB charging

**Answer:** A. TCP/IP  
**Explanation:** TCP/IP is a communication suite used for interconnected networks.

### MCQ 13. Which layer supports wireless link framing/MAC control?
**PYQ — Mar 2023, Dec 2024**
- **A.** Application
- **B.** Data link
- **C.** Presentation
- **D.** Session

**Answer:** B. Data link  
**Explanation:** Wi-Fi and IEEE 802.15.4 use data-link/MAC mechanisms.

*Note: Wireless transmission also requires a physical layer; the papers phrase this imprecisely.*

### MCQ 14. CoAP is especially designed for:
**PYQ — Jan 2024**
- **A.** Constrained IoT devices and networks
- **B.** Desktop video editing
- **C.** Only fiber-optic networks
- **D.** Online spreadsheets

**Answer:** A. Constrained IoT devices and networks  
**Explanation:** CoAP supports lightweight communication on constrained devices.

### MCQ 15. Which tool commonly translates domain names to IP addresses?
**PYQ — Mar 2023**
- **A.** DNS
- **B.** NFC
- **C.** PWM
- **D.** GPIO

**Answer:** A. DNS  
**Explanation:** DNS resolves domain names into IP addresses.

## Section B — 8 Important long questions with concise answers

### Long Q1. Explain the layers of the IoT protocol stack and classify IoT protocols.
**PYQ — Mar 2023, Jan 2024, Jan 2026**

A simplified IoT protocol stack has: **(1) Physical**—radio/signals; **(2) Data link**—local frames/MAC (IEEE 802.15.4); **(3) Network**—addressing/routing (IP/IPv6); **(4) Transport**—end-to-end delivery (TCP/UDP); **(5) Application**—device messaging (MQTT, CoAP, HTTP).

**Classification:** access/link protocols (Wi-Fi, Zigbee), network protocols (IP), transport protocols (TCP/UDP), application protocols (MQTT/CoAP/HTTP).

### Long Q2. Write short notes on BACnet, Modbus, IEEE 802.15.4 and KNX.
**PYQ — Mar 2023, Jan 2024, Dec 2024, Jan 2026**

- **BACnet:** standard communication protocol for building automation and HVAC.
- **Modbus:** simple industrial protocol used by PLCs, controllers and sensors; often client–server.
- **IEEE 802.15.4:** low-power WPAN physical/MAC standard used by Zigbee.
- **KNX:** standard for intelligent building control such as lighting, blinds and heating.

### Long Q3. Explain Zigbee and the components of a Zigbee network.
**PYQ — Mar 2023, Dec 2024**

**Zigbee** is a low-power wireless networking technology based on IEEE 802.15.4.

**Devices:** (1) coordinator—starts/manages network, (2) router—passes messages, (3) end device—senses/acts with low power.

**Topologies:** star, tree and mesh.

**Application:** smart lighting and home sensors.

*Note: December 2024 asks a short note on Zigbee; March 2023 asks for its network components.*

### Long Q4. What is MQTT? Explain its role in IoT.
**PYQ — Dec 2024**

**MQTT** is a lightweight publish–subscribe messaging protocol. Devices publish readings to a **broker** under a **topic**, and interested clients subscribe to receive them.

**Flow:** Sensor → MQTT Broker → Subscriber/App.

**Benefits:** small overhead, efficient for low-bandwidth networks and scalable data delivery.

### Long Q5. Explain the working principle of SCADA.
**PYQ — Jan 2026, Dec 2024**

**SCADA** (Supervisory Control and Data Acquisition) monitors and controls industrial processes.

**Working:** Sensors/PLCs measure equipment → communication network carries values → supervisory computer/HMI displays status → operator or control logic issues commands.

**Uses:** power grids, factories and water treatment.

*Note: December 2024 asks SCADA with RFID; January 2026 explicitly asks SCADA working.*

### Long Q6. What is M2M communication? Explain common communication models in IoT.
**PYQ — Mar 2023, Dec 2024, Jan 2026**

**M2M** means devices exchange information automatically with limited human involvement.

**Communication models:** (1) request–response, (2) publish–subscribe, (3) push–pull, (4) exclusive pair (persistent one-to-one communication).

 **Example:** Smart meter sends readings to a monitoring platform.

*Note: The March 2023 paper uses “Push Producer” as the non-model option; exclusive pairs is one of the recognized models.*

### Long Q7. Explain RFID and WSN with suitable examples.
**PYQ — Dec 2024, Jan 2026**

**RFID:** Radio Frequency Identification uses a tag and reader to identify objects without direct contact; used in inventory tracking.

**WSN:** Wireless Sensor Network consists of sensor nodes that measure conditions and communicate readings to a sink/gateway; used in environmental and industrial monitoring.

*Note: RFID appears with SCADA in December 2024; WSN appears in January 2026.*

### Long Q8. Explain IoT standardization and its importance.
**Practice — Not verified PYQ**

**Standardization** means using agreed technical rules for device communication and data exchange. Examples: IEEE 802.15.4, MQTT, CoAP, BACnet and KNX.

**Importance:** interoperability, vendor independence, reliable communication, security and easier integration.

**Challenges:** different vendors, device limitations and competing protocols.

*Note: Syllabus-focused addition; no corresponding standalone long question found in the four papers.*

---
**Reminder:** Revise the full listed syllabus; previous-paper questions do not guarantee the future exam.
