/* globals angular */

angular.module('churchForm')
  .component('showDetails', {
    templateUrl: 'features/show.template.html',
    controller: function ($http, $routeParams) {
      var ctrl = this
      $http.get('/api/' + $routeParams.id)
        .then(function (res) {
          ctrl.detail = res.data
          console.log(res.data)
        })
    }
  })
