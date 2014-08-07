(function() {
  define(['angular'], function(angular) {
    return angular.module('todo.controllers', []).controller('TodoCtrl', [
      '$scope', 'Todo', function($scope, Todo) {
        $scope.loadTodos = function() {
          return $scope.todos = Todo.query();
        };
        $scope.loadTodos();
        $scope.save = function(todoData) {
          var todo;
          todo = new Todo(todoData);
          return todo.$save().then(function() {
            return $scope.loadTodos();
          });
        };
        return $scope["delete"] = function(todoId) {
          return Todo.$delete({
            todoId: todoId
          }).then(function() {
            return $scope.loadTodos();
          });
        };
      }
    ]);
  });

}).call(this);
