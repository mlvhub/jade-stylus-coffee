define [
], () ->

  class TemplateGame
    constructor: (Phaser, gameWidth, gameHeight) ->
      templateGame = new Phaser.Game(gameWidth, gameHeight, Phaser.AUTO, '')
    run: ->
      console.log 'Running'
