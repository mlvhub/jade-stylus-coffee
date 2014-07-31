(function() {
  define(['angular', 'angularMocks', 'routes', 'angularRoute'], function(angular, mocks, routes, ngRoute) {
    var i, routeMock;
    i = 0;
    console.log(i++);
    routeMock = null;
    return beforeEach(inject(function(_$route_) {
      console.log(i++);
      routeMock = _$route_;
      return console.log(i++);
    }));

    /*
    i = 0
    describe 'routes', ->
      console.log i++
      module 'app.routes'
      console.log i++
      route = routeMock.routes['/']
      expect(route.templateUrl).toBe('templates/login.html')
      console.log i++
     */
  });

}).call(this);
