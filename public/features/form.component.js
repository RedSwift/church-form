/* globals angular alert */
angular.module('churchForm')
  .component('fullForm', {
    templateUrl: 'features/form.template.html',
    controller: function ($http, $window) {
      var ctrl = this
      
      $http.get('/api/login').then(null, function (err) {
        if (err.data.error && err.status === 401) {
          $window.location.href = "/"
          return alert('You are not authorized for this page')
        }
      })
      
      this.submitForm = function () {
        var formattedDate, formattedDob, formattedBaptismDate, formattedTransferDate
        if (ctrl.date) formattedDate = ctrl.date.toLocaleDateString()
        if (ctrl.dob) formattedDob = ctrl.dob.toLocaleDateString()
        if (ctrl.baptismDate) formattedBaptismDate = ctrl.baptismDate.toLocaleDateString()
        if (ctrl.transferDate) formattedTransferDate = ctrl.transferDate.toLocaleDateString()
        
        $http({
          method: 'POST',
          url: '/api/new',
          headers: {
            email: $window.localStorage.email,
            auth_token: $window.localStorage.auth_token
          },
          data: {
            membershipNo: ctrl.membershipNo,
            date: formattedDate || ctrl.date,
            chiName: ctrl.chiName,
            icNo: ctrl.icNo,
            engName: ctrl.engName,
            dob: formattedDob || ctrl.dob,
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
            baptismDate: formattedBaptismDate || ctrl.baptismDate,
            baptismChurch: ctrl.baptismChurch,
            baptismPastor: ctrl.baptismPastor,
            transferDate: formattedTransferDate || ctrl.transferDate,
            transferredFrom: ctrl.transferredFrom,
            transferPastor: ctrl.transferPastor
          }
        }).then(function (res) {
          $window.location.href = '/#/home'
        }, function (err) {
          if (err.data.error && err.status === 401) {
            $window.location.href = '/'
            return alert('You are not authorized for this page')
          }
          else alert('Unable to save details')
        })
      }
    }
  })
