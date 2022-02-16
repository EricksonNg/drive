function stop () {
    radio.sendValue("none", 4)
    basic.showIcon(IconNames.Duck)
}
function checkLeft () {
    if (input.buttonIsPressed(Button.B)) {
        radio.sendNumber(0)
        basic.showIcon(IconNames.Sad)
    } else {
        stop()
    }
}
function checkRight () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendString("R")
        basic.showIcon(IconNames.Heart)
        return true
    }
    return false
}
radio.setGroup(33)
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        basic.showIcon(IconNames.Silly)
        radio.sendValue("both", 3)
    } else {
        checkRight()
        if (!(checkRight())) {
            checkLeft()
        }
    }
})
