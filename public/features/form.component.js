/* globals angular alert */
angular.module('churchForm')
  .component('fullForm', {
    templateUrl: 'features/form.template.html',
    controller: function ($http, $window) {
      if (!$window.localStorage.email || !$window.localStorage.auth_token) {
        alert('You are not authorized for this page')
        $window.location.href = '/'
      }
      var ctrl = this
      this.submitForm = function () {
        $http({
          method: 'POST',
          url: '/api/new',
          headers: {
            email: $window.localStorage.email,
            auth_token: $window.localStorage.auth_token
          },
          data: {
            membershipNo: ctrl.membershipNo,
            date: ctrl.date,
            chiName: ctrl.chiName,
            icNo: ctrl.icNo,
            engName: ctrl.engName,
            dob: ctrl.dob,
            gender: ctrl.gender,
            bloodType: ctrl.bloodType,
            nationality: ctrl.nationality,
            email: ctrl.email,
            address: ctrl.address,
            postal: ctrl.postal,
            housePhone: ctrl.housePhone,
            officePhone: ctrl.officePhone,
            mobilePhone: ctrl.mobilePhone,
            marriage: ctrl.marriage,
            spouseName: ctrl.spouseName,
            spouseFaith: ctrl.spouseFaith,
            familyMembers: ctrl.familyMembers,
            siblingsRanking: ctrl.siblingsRanking,
            noOfChildren: ctrl.noOfChildren,
            occupation: ctrl.occupation,
            familyReligion: ctrl.familyReligion,
            education: ctrl.education,
            baptismDate: ctrl.baptismDate,
            baptismChurch: ctrl.baptismChurch,
            baptismPastor: ctrl.baptismPastor,
            transferDate: ctrl.transferDate,
            transferredFrom: ctrl.transferredFrom,
            transferPastor: ctrl.transferPastor
          }
        }).then(function (res) {
          $window.location.href = '/#/'
        }, function (err) {
          alert('Save failed!', err)
        })
      }
    }
  })
