/* globals angular */
angular.module('churchForm')
  .component('home', {
    templateUrl: 'features/home.template.html',
    controller: function ($http) {
      var ctrl = this
      $http.get('/api/details')
        .then((res) => {
          ctrl.details = res.data
        })
    }
  })
