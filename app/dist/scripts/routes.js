(function() {
  define(['app'], function(app) {
    return app.config([
      '$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
          templateUrl: 'templates/home.html',
          controller: 'HomeController'
        });
        return $routeProvider.otherwise({
          redirectTo: '/'
        });
      }
    ]);
  });

}).call(this);
