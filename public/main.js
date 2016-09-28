angular.module('churchForm', ['ngRoute'])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
      template: '<home></home>'
    })
    .when('/new', {
      template: '<full-form></full-form>'
    })
    .when('/:id', {
      template: '<show-detail></show-detail>'
    })
  })
