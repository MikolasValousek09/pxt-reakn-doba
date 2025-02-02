let startTime = 0
let lightThreshold = 0

function startMeasurement() {
    lightThreshold = input.lightLevel()
    let delay = randint(2000, 7000)
    basic.pause(delay)

    music.playTone(700, 150)
    startTime = input.runningTime()
}

input.onButtonPressed(Button.A, function () {
    startMeasurement()
})

input.onButtonPressed(Button.B, function () {
    basic.clearScreen() 
    startMeasurement() 
})

basic.forever(function () {
    if (startTime > 0 && input.lightLevel() < lightThreshold) {
        let reactionTime = input.runningTime() - startTime 
        basic.showNumber(reactionTime)

        music.playTone(400, 150)
        startTime = 0 
    }
})
