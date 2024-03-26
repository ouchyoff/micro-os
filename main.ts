input.onButtonPressed(Button.A, function () {
    music.play(music.createSoundExpression(WaveShape.Square, 2174, 2174, 255, 255, 50, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    Cursor.move(1)
})
input.onButtonPressed(Button.B, function () {
    Cursor.turn(Direction.Right, 90)
})
let Cursor: game.LedSprite = null
flexFX.playFlexFX(flexFX.builtInFlexFX(flexFX.BuiltInFlexFX.Ting), false, 0, 200, 800)
Cursor = game.createSprite(2, 2)
Cursor.set(LedSpriteProperty.Direction, 0)
