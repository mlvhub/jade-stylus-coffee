(function() {
  define([], function() {
    var TemplateGame;
    return TemplateGame = (function() {
      function TemplateGame(Phaser, gameWidth, gameHeight) {
        var templateGame;
        templateGame = new Phaser.Game(gameWidth, gameHeight, Phaser.AUTO, '');
      }

      TemplateGame.prototype.run = function() {
        return console.log('Running');
      };

      return TemplateGame;

    })();
  });

}).call(this);
