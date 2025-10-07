basic.forever(function () {
    basic.showLeds(`
        . . # . .
        . # . # .
        . # # # .
        . # . # .
        . # . # .
        `)
    basic.showIcon(IconNames.StickFigure)
    basic.showString("I love python")
    basic.clearScreen()
    basic.showArrow(ArrowNames.SouthEast)
})
