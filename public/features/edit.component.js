/* globals angular */

angular.module('churchForm')
  .component('editDetails', {
    templateUrl: 'features/edit.template.html',
    controller: function ($http, $routeParams, $window) {
      var ctrl = this
      $http.get('/api/' + $routeParams.id)
        .then(function (res) {
          var detail = res.data
          ctrl.membershipNo = detail.membershipNo
          ctrl.date = detail.date
          ctrl.chiName = detail.chiName
          ctrl.icNo = detail.icNo
          ctrl.engName = detail.engName
          ctrl.dob = detail.dob
          ctrl.gender = detail.gender
          ctrl.bloodType = detail.bloodType
          ctrl.nationality = detail.nationality
          ctrl.email = detail.email
          ctrl.address = detail.address
          ctrl.postal = detail.postal
          ctrl.housePhone = detail.housePhone
          ctrl.officePhone = detail.officePhone
          ctrl.mobilePhone = detail.mobilePhone
          ctrl.marriage = detail.marriage
          ctrl.spouseName = detail.spouseName
          ctrl.spouseFaith = detail.spouseFaith
          ctrl.familyMembers = detail.familyMembers
          ctrl.siblingsRanking = detail.siblingsRanking
          ctrl.noOfChildren = detail.noOfChildren
          ctrl.occupation = detail.occupation
          ctrl.familyReligion = detail.familyReligion
          ctrl.education = detail.education
          ctrl.baptismDate = detail.baptismDate
          ctrl.baptismChurch = detail.baptismChurch
          ctrl.baptismPastor = detail.baptismPastor
          ctrl.transferDate = detail.transferDate
          ctrl.transferredFrom = detail.transferFrom
          ctrl.transferPastor = detail.transferPastor
        })
        
      ctrl.editDetails = function () {
        $http({
          method: 'PUT',
          url: '/api/edit/' + $routeParams.id,
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
        }).then(function () {
          $window.location.href = '/#/'
        })
      }
    }
  })

  
