require.config(
  baseUrl: 'scripts'

  paths:
    lodash: '../bower_components/lodash/dist/lodash.min'
    phaser: '../bower_components/phaser-official/build/phaser.min'
)

require [
  'templateGame',
  'phaser'
], (TemplateGame) ->

  gameWidth = window.innerWidth
  gameHeight = window.innerHeight

  game = new TemplateGame(Phaser, gameWidth, gameHeight)
  game.run()
