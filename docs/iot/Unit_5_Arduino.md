# Diploma CST — Internet of Things (507/2(N))

**Source papers checked:** March 2023, January 2024, December 2024 and January 2026.

**Source-label policy:** “PYQ” means the topic/question was verified in the named uploaded exam paper. When wording is adapted for clarity, this is still indicated. “Practice — Not verified PYQ” means an original revision question added to fill syllabus gaps. Year labels on long questions identify the corresponding exam topic; some combined answers expand the original subquestions.

**Solutions:** Independently prepared, not an official examination board answer key. MCQ explanation is usually one short sentence. Asterisks/notes flag imprecise original items.

# UNIT 5: Arduino
**Hours:** 6 | **Marks:** 6 | **Module:** C
**Syllabus:** Introduction to Arduino programming; integration of sensors and actuators with Arduino.

## Section A — 15 MCQs with answers and concise explanations

### MCQ 1. Arduino Uno is mainly a:
**PYQ — Mar 2023, Dec 2024**
- **A.** Network protocol
- **B.** Hardware development board
- **C.** Cloud database
- **D.** Web browser

**Answer:** B. Hardware development board  
**Explanation:** Arduino Uno is a microcontroller development board.

### MCQ 2. The original Arduino IDE 1.x was built mainly using which language?
**PYQ — Mar 2023, Dec 2024**
- **A.** Java
- **B.** C/C++ only
- **C.** Python
- **D.** SQL

**Answer:** A. Java  
**Explanation:** The classic IDE application used Java; Arduino sketches themselves use C/C++.

*Note: This is about the classic IDE; modern Arduino IDE 2.x has a different software architecture.*

### MCQ 3. Which statement correctly describes the Arduino platform?
**PYQ — Dec 2024**
- **A.** Open-source hardware/software ecosystem
- **B.** Only a text editor
- **C.** Cannot accept sensors
- **D.** Requires an operating system on Uno

**Answer:** A. Open-source hardware/software ecosystem  
**Explanation:** Arduino provides open hardware designs and development software.

*Note: Rephrased from an imprecise original MCQ about Arduino “IoT devices”.*

### MCQ 4. What type of touch sensing is widely used in smartphones?
**PYQ — Mar 2023**
- **A.** Capacitive touch
- **B.** Only infrared
- **C.** Mechanical relay
- **D.** Ultrasonic echo

**Answer:** A. Capacitive touch  
**Explanation:** Capacitive sensors detect touch through changes in electrical capacitance.

### MCQ 5. Which temperature sensor uses two different metals joined together?
**PYQ — Jan 2024**
- **A.** Thermocouple
- **B.** LDR
- **C.** PIR
- **D.** Hall sensor

**Answer:** A. Thermocouple  
**Explanation:** A thermocouple generates a small voltage from a temperature difference.

### MCQ 6. Which function runs once at the start of an Arduino sketch?
**Practice — Not verified PYQ**
- **A.** loop()
- **B.** setup()
- **C.** digitalRead()
- **D.** delay()

**Answer:** B. setup()  
**Explanation:** setup() is executed once after startup/reset.

### MCQ 7. Which function repeats while the Arduino runs?
**Practice — Not verified PYQ**
- **A.** loop()
- **B.** setup()
- **C.** start()
- **D.** halt()

**Answer:** A. loop()  
**Explanation:** loop() repeats after setup().

### MCQ 8. Which function configures pin 13 as an output?
**Practice — Not verified PYQ**
- **A.** pinMode(13, OUTPUT)
- **B.** digitalRead(13)
- **C.** delay(13)
- **D.** Serial.begin(13)

**Answer:** A. pinMode(13, OUTPUT)  
**Explanation:** pinMode sets pin direction.

### MCQ 9. Which command turns ON the built-in LED on a typical Uno R3?
**Practice — Not verified PYQ**
- **A.** digitalWrite(13, HIGH)
- **B.** digitalWrite(13, LOW)
- **C.** analogRead(13)
- **D.** delay(13)

**Answer:** A. digitalWrite(13, HIGH)  
**Explanation:** HIGH drives the LED output pin high.

### MCQ 10. How long does delay(1000) wait?
**Practice — Not verified PYQ**
- **A.** 1 millisecond
- **B.** 1 second
- **C.** 10 seconds
- **D.** 100 seconds

**Answer:** B. 1 second  
**Explanation:** delay() counts milliseconds.

### MCQ 11. Which command reads an analog input on Arduino Uno?
**Practice — Not verified PYQ**
- **A.** analogRead(A0)
- **B.** digitalWrite(A0, HIGH)
- **C.** pinMode(A0, OUTPUT)
- **D.** Serial.end()

**Answer:** A. analogRead(A0)  
**Explanation:** analogRead measures analog voltage on an ADC-capable pin.

### MCQ 12. How many digital I/O pins are on the traditional Arduino Uno R3?
**Practice — Not verified PYQ**
- **A.** 6
- **B.** 8
- **C.** 14
- **D.** 20

**Answer:** C. 14  
**Explanation:** Uno R3 has digital pins 0 through 13.

### MCQ 13. What is the main role of a sensor?
**Practice — Not verified PYQ**
- **A.** Measure a physical condition
- **B.** Move a motor shaft
- **C.** Store program code
- **D.** Increase CPU frequency

**Answer:** A. Measure a physical condition  
**Explanation:** Sensors provide inputs such as temperature or light.

### MCQ 14. Which of these is an actuator?
**Practice — Not verified PYQ**
- **A.** Servo motor
- **B.** LDR
- **C.** Temperature probe
- **D.** PIR sensor

**Answer:** A. Servo motor  
**Explanation:** A servo creates controlled mechanical movement.

### MCQ 15. Which library supports servo control in basic Arduino examples?
**Practice — Not verified PYQ**
- **A.** Servo.h
- **B.** WirePrinter.h
- **C.** TimerServer.h
- **D.** TextUtils.h

**Answer:** A. Servo.h  
**Explanation:** Servo.h provides functions for controlling hobby servos.

## Section B — 5 Important long questions with concise answers

### Long Q1. What is Arduino Uno? Explain its major components and pins.
**PYQ — Dec 2024, Jan 2026**

**Arduino Uno** is a development board commonly using the **ATmega328P** microcontroller (Uno R3).

**Components:** USB connector, reset button, power input, microcontroller, digital I/O pins and analog input pins.

**Pin types:** digital pins (0–13), analog inputs (A0–A5), power pins (5V/3.3V/GND) and PWM-capable digital pins.

**Uses:** lights, sensors, motors and automation.

### Long Q2. Explain an Arduino sketch with an LED-blinking program.
**PYQ — Mar 2023**

An Arduino program is called a **sketch**. `setup()` runs once; `loop()` repeats.

```cpp
void setup() { pinMode(13, OUTPUT); }
void loop() {
  digitalWrite(13, HIGH); delay(1000);
  digitalWrite(13, LOW);  delay(1000);
}
```

**Output:** The Uno built-in LED blinks once per second. **To reduce sketch size:** remove unused libraries, strings and duplicate code and use suitable data types.

*Note: March 2023 asks what a sketch is and how its size can be reduced; blinking is a syllabus-based illustration.*

### Long Q3. What is a sensor? Explain integration with Arduino.
**PYQ — Mar 2023, Jan 2024, Dec 2024**

A **sensor** measures a physical condition and provides Arduino with an input signal.

**Steps:** connect sensor to the correct power and input pins → use `digitalRead()` or `analogRead()` → process the reading → display/control output.

**Examples:** LDR, temperature sensor, PIR motion sensor and ultrasonic sensor.

**Flow:** Sensor → Arduino → Decision → Output.

*Note: Past papers ask sensors/types and sensor–actuator comparison rather than this exact combined title.*

### Long Q4. What is an actuator? Explain integration with Arduino.
**PYQ — Dec 2024, Jan 2026**

An **actuator** performs a physical action after receiving Arduino control signals.

**Examples:** servo, motor, buzzer and relay; LEDs are simple output indicators.

**Steps:** connect an appropriate driver/power supply if needed → configure output pin → send `digitalWrite()`/PWM/servo command.

**Flow:** Sensor → Arduino → Driver/Actuator → Action.

*Note: The actual papers ask the sensor–actuator difference; this is a separate revision answer.*

### Long Q5. Differentiate sensors and actuators with two examples each.
**PYQ — Dec 2024, Jan 2026**

| Sensor | Actuator |
|---|---|
| Input device | Output device |
| Detects physical conditions | Produces an action |
| LDR, temperature sensor | Servo, motor |

**Example:** A temperature sensor detects heat; Arduino switches a fan using a suitable driver.

---
**Reminder:** Revise the full listed syllabus; previous-paper questions do not guarantee the future exam.
