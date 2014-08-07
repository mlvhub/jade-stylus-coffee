(function() {
  define(['angular', 'angularResource'], function(angular, ngResource) {
    return angular.module('todo.services', ['ngResource']).factory('Todo', [
      '$resource', function($resource) {
        var url;
        url = 'http://localhost:1337/todo/:todoId';
        return $resource(url, {
          todoId: '@todoId'
        }, {
          update: {
            method: 'PUT'
          }
        });
      }
    ]);
  });

}).call(this);
