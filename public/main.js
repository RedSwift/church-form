angular.module('churchForm', ['ngRoute'])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
      template: '<full-form></full-form>'
    })
    $locationProvider.html5Mode(true)
  })
