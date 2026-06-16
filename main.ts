OLED.init(128, 64)
let soilMoisture = 0
let lightIntensity = 0
let strip = neopixel.create(DigitalPin.P1, 1, NeoPixelMode.RGB)
basic.forever(function () {
    soilMoisture = pins.analogReadPin(AnalogReadWritePin.P0)
    lightIntensity = pins.analogReadPin(AnalogReadWritePin.P2)
    OLED.writeString("Moisture ")
    OLED.writeNumNewLine(soilMoisture)
    OLED.writeString("Light level: ")
    OLED.writeNumNewLine(lightIntensity)
    basic.pause(500)
    OLED.clear()
    if (soilMoisture < 180) {
        pins.digitalWritePin(DigitalPin.P15, 1024)
    } else {
        pins.digitalWritePin(DigitalPin.P15, 0)
    }
    if (lightIntensity <= 500) {
        strip.showColor(neopixel.colors(NeoPixelColors.Purple))
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
})
