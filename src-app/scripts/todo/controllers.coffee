define ['angular'], (angular) ->

  angular.module 'todo.controllers', []
    .controller 'TodoCtrl', ['$scope', 'Todo', ($scope, Todo) ->
      $scope.todos = Todo.all()

      $scope.save = (todo) -> Todo.save(todo)
      $scope.delete = (todo) -> Todo.delete(todo)
    ]

