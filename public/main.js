angular.module('churchForm', ['ngRoute'])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
      template: '<full-form></full-form>'
    })
    .when('/new', {
      template: '<h1>This is new</h1>'
    })
  })
