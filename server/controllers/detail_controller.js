'use strict'
const Detail = require('../models/detail')

let newDetail = (req, res) => {
  var createDetail = new Detail()

  createDetail.membershipNo = req.body.membershipNo
  createDetail.date = req.body.date
  createDetail.chiName = req.body.chiName
  createDetail.icNo = req.body.icNo
  createDetail.engName = req.body.engName
  createDetail.dob = req.body.dob
  createDetail.gender = req.body.gender
  createDetail.bloodType = req.body.bloodType
  createDetail.nationality = req.body.nationality
  createDetail.email = req.body.email
  createDetail.address = req.body.address
  createDetail.postal = req.body.postal
  createDetail.housePhone = req.body.housePhone
  createDetail.officePhone = req.body.officePhone
  createDetail.mobilePhone = req.body.mobilePhone
  createDetail.marriage = req.body.marriage
  createDetail.spouseName = req.body.spouseName
  createDetail.spouseFaith = req.body.spouseFaith
  createDetail.familyMembers = req.body.familyMembers
  createDetail.siblingsRanking = req.body.siblingsRanking
  createDetail.noOfChildren = req.body.noOfChildren
  createDetail.occupation = req.body.occupation
  createDetail.familyReligion = req.body.familyReligion
  createDetail.education = req.body.education
  createDetail.baptismDate = req.body.baptismDate
  createDetail.baptismChurch = req.body.baptismChurch
  createDetail.baptismPastor = req.body.baptismPastor
  createDetail.transferDate = req.body.transferDate
  createDetail.transferredFrom = req.body.transferredFrom
  createDetail.transferPastor = req.body.transferPastor

  createDetail.save((err, result) => {
    if (err) return res.status(401).json({error: err})
    else return res.status(201).json(result)
  })
}

module.exports = {
  newDetail: newDetail
}
