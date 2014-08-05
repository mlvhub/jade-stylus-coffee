(function() {
  define(['angular'], function(angular) {
    return angular.module('todo.controllers', []).controller('TodoCtrl', [
      '$scope', 'Todo', function($scope, Todo) {
        $scope.todos = Todo.all();
        $scope.save = function(todo) {
          return Todo.save(todo);
        };
        return $scope["delete"] = function(todo) {
          return Todo["delete"](todo);
        };
      }
    ]);
  });

}).call(this);
