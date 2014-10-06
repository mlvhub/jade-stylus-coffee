define ['angular', 'Todo/services', 'Todo/controllers'], (angular, todoServices, todoControllers) ->

  angular.module 'todo', [
    'todo.services',
    'todo.controllers'
  ]
