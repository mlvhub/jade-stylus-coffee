define [
  'angular',
  'angularMocks',
  'routes',
  'angularRoute'
], (angular, mocks, routes, ngRoute) ->

  i = 0
  console.log i++

  routeMock = null
  beforeEach(inject (_$route_) ->
    console.log i++
    routeMock = _$route_
    console.log i++
  )

  ###
  i = 0
  describe 'routes', ->
    console.log i++
    module 'app.routes'
    console.log i++
    route = routeMock.routes['/']
    expect(route.templateUrl).toBe('templates/login.html')
    console.log i++
    ###
