(function() {
  define(['angular', 'Todo/services', 'Todo/controllers'], function(angular, todoServices, todoControllers) {
    return angular.module('todo', ['todo.services', 'todo.controllers']);
  });

}).call(this);
