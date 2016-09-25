angular.module('churchForm', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
    .when('/', {
      template: '<full-form></full-form>'
    })
  })
