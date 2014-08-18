(function() {
  require.config({
    baseUrl: 'scripts',
    paths: {
      lodash: '../bower_components/lodash/dist/lodash.min',
      phaser: '../bower_components/phaser-official/build/phaser.min'
    }
  });

  require(['templateGame', 'phaser'], function(TemplateGame) {
    var game, gameHeight, gameWidth;
    gameWidth = window.innerWidth;
    gameHeight = window.innerHeight;
    game = new TemplateGame(Phaser, gameWidth, gameHeight);
    return game.run();
  });

}).call(this);
