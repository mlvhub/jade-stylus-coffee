(function() {
  define(['angular', 'angularRoute'], function(angular, ngRoute) {
    var routes;
    console.log('routes');
    routes = angular.module('app.routes', ['ngRoute']);
    return routes.config([
      '$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        var template;
        template = function(fileName) {
          return '../' + fileName + '.html';
        };
        $routeProvider.when('/todos', {
          templateUrl: template('Todo/index'),
          controller: 'TodoCtrl'
        });
        $routeProvider.otherwise({
          redirectTo: '/todos'
        });
        return $locationProvider.html5Mode(true);
      }
    ]);
  });

}).call(this);
