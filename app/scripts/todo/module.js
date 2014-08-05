(function() {
  define(['angular', 'todo/services', 'todo/controllers'], function(angular, todoServices, todoControllers) {
    return angular.module('todo', ['todo.services', 'todo.controllers']);
  });

}).call(this);
