(function() {
  define(['angular', 'lodash'], function(angular, _) {
    return angular.module('todo.services', []).factory('Todo', function() {
      var todos;
      todos = [
        {
          id: 1,
          title: 'Todo1',
          done: false
        }
      ];
      return {
        all: function() {
          return todos;
        },
        save: function(todo) {
          return todos.push(todo);
        },
        "delete": function(todo) {
          return todos = _.reject(todos, function(storedTodo) {
            return storedTodo.id === todo.id;
          });
        },
        get: function(todo) {
          return _.find(storedTodo, function() {
            return storedTodo.id === todo.id;
          });
        }
      };
    });
  });

}).call(this);
