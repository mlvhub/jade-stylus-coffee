define ['angular', 'todo/services', 'todo/controllers'], (angular, todoServices, todoControllers) ->

  angular.module 'todo', [
    'todo.services',
    'todo.controllers'
  ]
