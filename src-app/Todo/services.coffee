define ['angular', 'angularResource'], (angular, ngResource) ->

  angular.module 'todo.services', ['ngResource']
    .factory 'Todo', [
      '$resource', 
      ($resource) ->
        url = 'http://localhost:1337/todo/:todoId'
        $resource(url, {todoId: '@todoId'},
          update: {method: 'PUT'}
        )
    ]

