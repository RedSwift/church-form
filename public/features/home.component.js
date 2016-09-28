/* globals angular */
angular.module('churchForm')
  .component('home', {
    templateUrl: 'features/home.template.html',
    controller: function ($http) {
      var ctrl = this
      $http.get('/api/details')
        .then(function (res) {
          ctrl.details = res.data
        })
        
      ctrl.delete = function (id) {
        console.log('clicked', id)
        $http.delete('/api/' + id)
      }
    }
  })
