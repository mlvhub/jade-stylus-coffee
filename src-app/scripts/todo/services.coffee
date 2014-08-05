define ['angular', 'lodash'], (angular, _) ->

  angular.module 'todo.services', []
    .factory 'Todo', ->
      todos = [{id:1,title:'Todo1',done:false}]

      all: -> todos
      save: (todo) -> todos.push(todo)
      delete: (todo) ->
        todos = _.reject todos, (storedTodo) ->
          storedTodo.id == todo.id
      get: (todo) -> _.find storedTodo, ->
        storedTodo.id == todo.id
