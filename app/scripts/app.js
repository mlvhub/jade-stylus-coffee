(function() {
  define(['angular', 'routes', 'todo/module'], function(angular, routes) {
    return angular.module('app', ['app.routes', 'todo']);
  });

}).call(this);
