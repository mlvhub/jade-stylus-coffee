tests = []

for file of window.__karma__.files
  console.log file
  if  /Spec\.js$/.test(file)
    tests.push file

requirejs.config
  baseUrl: '/base/app/dist/scripts'

  paths:
    lodash: '../bower_components/lodash/dist/lodash.min'

  shim:
    'lodash':
      exports: '_'

  deps: tests

  callback: window.__karma__.start
