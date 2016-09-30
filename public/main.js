angular.module('churchForm', ['ngRoute', 'ngMessages'])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
      template: '<home></home>'
    })
    .when('/new', {
      template: '<full-form></full-form>'
    })
    .when('/:id', {
      template: '<show-details></show-details>'
    })
    .when('/edit/:id', {
      template: '<edit-details></edit-details>'
    })
  })
