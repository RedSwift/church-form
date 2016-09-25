angular.module('churchForm')
  .component('fullForm', {
    templateUrl: 'features/form.template.html',
    controller: function () {
      var ctrl = this
      this.submitForm = function () {
        console.log(this.membership)
      }
    }
  })
