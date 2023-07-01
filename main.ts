basic.forever(function () {
    mbit_小車類.CarCtrl(mbit_小車類.CarState.Car_Run)
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
    basic.pause(1000)
    mbit_小車類.CarCtrl(mbit_小車類.CarState.Car_Back)
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
    basic.pause(1000)
    mbit_小車類.CarCtrl(mbit_小車類.CarState.Car_Left)
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
    basic.pause(1000)
    mbit_小車類.CarCtrl(mbit_小車類.CarState.Car_Right)
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
    basic.pause(1000)
})
