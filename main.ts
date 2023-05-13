let Y = 0
input.onButtonPressed(Button.A, function () {
    Y = 4
    for (let index = 0; index < 5; index++) {
        basic.clearScreen()
        led.plot(0, Y)
        Y += -1
        basic.pause(100)
    }
})
input.onButtonPressed(Button.B, function () {
    Y = 0
    for (let index = 0; index < 5; index++) {
        basic.clearScreen()
        led.plot(0, Y)
        Y += 1
        basic.pause(100)
    }
})
