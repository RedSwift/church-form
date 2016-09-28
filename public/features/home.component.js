/* globals angular */
angular.module('churchForm')
  .component('home', {
    templateUrl: 'features/home.template.html',
    controller: function ($http, $window) {
      var ctrl = this
      $http.get('/api/details')
        .then(function (res) {
          ctrl.details = res.data
        })
        
      ctrl.delete = function (id) {
        $http.delete('/api/' + id)
          .then(function () {
            $window.location.reload()
          })
      }
    }
  })
