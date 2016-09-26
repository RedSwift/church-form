angular.module('churchForm', ['ngRoute'])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
      template: '<a href="#/new">New</a>'
    })
    .when('/new', {
      template: '<full-form></full-form>'
    })
  })
