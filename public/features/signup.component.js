/* globals angular */
angular.module('churchForm')
    .component('signUp', {
        templateUrl: 'features/signup.template.html',
        controller: function ($http, $window) {
            var ctrl = this
            this.signUp = function () {
                if (!this.password || !this.passwordCfm) return alert('Password or Password Confirmation cannot be empty!')
                else if (this.password !== this.passwordCfm) return alert('Passwords must match!')
                else {
                    $http({
                    method: 'POST',
                    url: '/api/signup',
                    data: {
                        name: this.name,
                        email: this.email,
                        password: this.password,
                        signUpToken: this.signUpToken
                        }
                    }).then(function (result) {
                        alert('Successfully signed up! Please login')
                        $window.location.href = '/'
                    }, function (err) {
                        if (err.message) return alert('Error: ' + err.message)
                        else return alert ('Sign Up failed, please contact administrator')
                    })
                }
                
            }
        }
    })