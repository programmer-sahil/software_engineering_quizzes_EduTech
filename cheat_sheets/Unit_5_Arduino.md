---
id: "iot-unit-5"
subjectId: "iot"
unitId: "5"
title: "Unit 5: Arduino — Exam Cheat Sheet"
topics: ["Arduino Architecture", "ATmega328P Microcontroller", "Pinout & Memory", "Sketch Structure", "Sensor & Actuator Interfacing", "C++ Code Examples"]
status: "published"
---

# Unit 5: Arduino — Exam Cheat Sheet

## 1. Arduino Uno Hardware Architecture & Specifications
The Arduino Uno is an open-source electronics prototyping platform based on the 8-bit Microchip ATmega328P AVR RISC microcontroller.

| Parameter | Arduino Uno Specification |
| :--- | :--- |
| **Microcontroller** | Microchip ATmega328P (8-bit AVR RISC) |
| **Operating Voltage** | 5V DC (Input recommended: 7–12V via Barrel Jack) |
| **Digital I/O Pins** | 14 pins (D0 to D13) |
| **PWM Output Pins** | 6 pins (D3, D5, D6, D9, D10, D11 — marked with `~`) |
| **Analog Input Channels** | 6 channels (A0 to A5) multiplexed to a 10-bit ADC |
| **ADC Resolution** | 10-bit ($2^{10} = 1024$ levels: 0 to 1023, $\approx 4.88$ mV per step at 5V reference) |
| **DC Current per I/O Pin** | 20 mA (Absolute maximum: 40 mA) |
| **Flash Memory** | 32 KB (0.5 KB used by Optiboot bootloader) |
| **SRAM** | 2 KB (Static RAM for volatile variables and stack) |
| **EEPROM** | 1 KB (Non-volatile storage surviving power cycles) |
| **Clock Speed** | 16 MHz Ceramic Resonator / Quartz Crystal |

## 2. Arduino C++ Sketch Lifecycle
Every Arduino program consists of two mandatory functions executed sequentially by the bootloader:

```cpp
void setup() {
  // Executed exactly ONCE when the board powers up or is reset.
  // Used to configure pin modes, initialize serial communications, and start libraries.
  pinMode(13, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  // Runs continuously in an infinite cycle as long as power is applied.
  // Contains the main real-time control logic, sensor sampling, and actuation.
  digitalWrite(13, HIGH);
  delay(1000);
  digitalWrite(13, LOW);
  delay(1000);
}
```

## 3. Essential Digital and Analog I/O Functions
- `pinMode(pin, mode)`: Configures specified pin as `INPUT`, `OUTPUT`, or `INPUT_PULLUP`.
- `digitalWrite(pin, value)`: Sets digital output pin to `HIGH` (5V) or `LOW` (0V).
- `digitalRead(pin)`: Reads logical state from a digital input (`HIGH` or `LOW`).
- `analogRead(pin)`: Samples 10-bit voltage (0–1023) from analog channels A0–A5.
- `analogWrite(pin, value)`: Generates an 8-bit PWM square wave (0–255 duty cycle, approx 490 Hz or 980 Hz) to simulate analog voltage output.
- `Serial.begin(baudRate)`: Opens serial UART channel (commonly 9600 or 115200 bps) on D0(RX) and D1(TX).

## 4. Practical Code Example: LM35 Temperature Sensor & Relay Control
This is a standard diploma practical question: read temperature from an analog sensor and trigger an actuator (cooling relay) when the threshold is exceeded.

```cpp
// Pin Definitions
const int sensorPin = A0;   // LM35 connected to analog pin A0
const int relayPin  = 8;    // Relay control connected to digital pin 8
const float thresholdTemp = 30.0; // Threshold in degrees Celsius

void setup() {
  pinMode(relayPin, OUTPUT);
  digitalWrite(relayPin, LOW); // Keep relay OFF initially
  Serial.begin(9600);
  Serial.println("EduTech IoT - LM35 Temperature Monitor Active");
}

void loop() {
  // Read raw 10-bit ADC value (0 - 1023)
  int rawADC = analogRead(sensorPin);

  // Convert ADC value to input voltage (0.0V - 5.0V)
  float voltage = (rawADC * 5.0) / 1024.0;

  // LM35 scale factor: 10 mV per degree Celsius (0.01V / °C)
  float temperatureC = voltage * 100.0;

  Serial.print("Temp: ");
  Serial.print(temperatureC);
  Serial.println(" °C");

  // Actuation Logic
  if (temperatureC > thresholdTemp) {
    digitalWrite(relayPin, HIGH); // Turn cooling fan / relay ON
    Serial.println("ALERT: Threshold exceeded! Relay activated.");
  } else {
    digitalWrite(relayPin, LOW);  // Turn relay OFF
  }

  delay(1000); // Wait 1 second before next sample
}
```

## 5. Sensors & Actuators Interfacing Guidelines
- **Pull-Up Resistors**: Floating input pins pick up ambient electromagnetic noise. Use `pinMode(pin, INPUT_PULLUP)` to engage the internal 20k–50k$\Omega$ pull-up resistor.
- **Relay Modules**: Inductive loads (motors, coils) generate high flyback reverse-voltage spikes. Never connect a relay coil directly to an ATmega328P pin without an optocoupler or flyback diode (1N4007).
- **Voltage Dividers**: When interfacing 3.3V sensors (e.g. ESP8266 RX pin) with Arduino 5V TX pin, always use a resistor divider ($1\text{ k}\Omega / 2\text{ k}\Omega$) to prevent damaging the 3.3V logic circuit.

