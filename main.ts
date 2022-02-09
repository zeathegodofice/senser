basic.forever(function () {
    basic.showNumber(input.temperature())
    basic.pause(1000)
})
basic.forever(function () {
    serial.writeValue("celsius", input.temperature())
    basic.pause(1000)
})
