/* globals angular */
angular.module('churchForm')
  .component('home', {
    templateUrl: 'features/home.template.html',
    controller: function ($http, $window) {
      var ctrl = this
      $http({
        method: 'GET',
        url: '/api/details',
        headers: {
          email: $window.localStorage.email,
          auth_token: $window.localStorage.auth_token
        }
      })
        .then(function (res) {
          ctrl.details = res.data
        }, function (err) {
          if (err.data.error && err.status === 401) {
            $window.location.href = '/'
            return alert('You are not authorized for this page')
          }
          else alert('Unable to retrieve details')
        })
        
      ctrl.delete = function (id) {
          $http({
            method: 'DELETE',
            url: '/api/' + id,
            headers: {
              email: $window.localStorage.email,
              auth_token: $window.localStorage.auth_token
            }
          })
          .then(function () {
            $window.location.reload()
          }, function (err) {
            if (err.data.error) return alert('Error: ' + err.data.error)
            else return alert('Unable to delete, please contact administrator')
          })
      }
    }
  })
