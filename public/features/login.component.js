/* globals angular */
angular.module('churchForm')
    .component('login', {
        templateUrl: 'features/login.template.html',
        controller: function ($http, $window) {
            var ctrl = this
            this.login = function () {
                $http({
                method: 'POST',
                url: '/api/login',
                data: {
                    email: this.email,
                    password: this.password
                }
                }).then(function () {
                    $window.location.href = '/#/home'
                }, function (err) {
                    if (err.message) alert('Error: ' + err.message)
                    else alert('Error, Please contact administrator')
                })
            }
        }
    })