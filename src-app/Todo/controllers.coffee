define ['angular'], (angular) ->

  angular.module 'todo.controllers', []
    .controller 'TodoCtrl', ['$scope', 'Todo', ($scope, Todo) ->

      $scope.loadTodos = ->
        $scope.todos = Todo.query()

      $scope.loadTodos()

      $scope.save = (todoData) ->
        todo = new Todo(todoData)
        todo.isDone = false;
        todo.$save().then ->
          $scope.loadTodos()

      $scope.delete = (todoId) ->
        Todo.$delete({todoId: todoId}).then ->
          $scope.loadTodos()
    ]

