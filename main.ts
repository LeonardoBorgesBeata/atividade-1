input.onButtonPressed(Button.A, function () {
    contador += 1
    basic.showNumber(contador)
    if (contador == 5) {
        music.playMelody("B A G A G F A C5 ", 120)
        contador += -1
        basic.showNumber(contador)
        basic.clearScreen()
        contador += -1
        basic.showNumber(contador)
        basic.clearScreen()
        contador += -1
        basic.showNumber(contador)
        basic.clearScreen()
        contador += -1
        basic.showNumber(contador)
        basic.clearScreen()
        contador += -1
        basic.showNumber(contador)
        basic.clearScreen()
    }
})
let contador = 0
contador = 0
