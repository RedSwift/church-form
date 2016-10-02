/* globals angular */

angular.module('churchForm')
  .component('showDetails', {
    templateUrl: 'features/show.template.html',
    controller: function ($http, $routeParams, $window) {
      if (!$window.localStorage.email || !$window.localStorage.auth_token) {
        alert('You are not authorized for this page')
        $window.location.href = '/'
      }
      var ctrl = this
      $http({
        method: 'GET',
        url: '/api/' + $routeParams.id,
        headers: {
          email: $window.localStorage.email,
          auth_token: $window.localStorage.auth_token
        }
      }).then(function (res) {
          ctrl.detail = res.data
        }, function (err) {
          if (err.message) return alert('Error: ' + err.message)
          else return alert('Unable to show details, please contact administrator')
        })
    }
  })
