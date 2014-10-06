(function() {
  define(['angular', 'config/routes', 'Todo/module'], function(angular, routes) {
    console.log('app');
    return angular.module('app', ['app.routes', 'todo']);
  });

}).call(this);
