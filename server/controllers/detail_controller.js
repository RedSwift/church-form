'use strict'
const Detail = require('../models/detail')

let getDetail = (req, res) => {
  Detail.find({}, (err, details) => {
    if (err) return res.status(401).json({error: err})
    else res.status(200).json(details)
  })
}

let showDetail = (req, res) => {
  Detail.findOne({_id: req.params.id}, (err, result) => {
    return err ? res.status(401).json({errorr: err}) : res.status(200).json(result)
  })
}

let editDetail = (req, res) => {
  Detail.findOne({_id: req.params.id}, (err, result) => {
    if (err) return res.status(401).json({error: err})
    else {
        result.membershipNo = req.body.membershipNo
        result.date = req.body.date
        result.chiName = req.body.chiName
        result.icNo = req.body.icNo
        result.engName = req.body.engName
        result.dob = req.body.dob
        result.gender = req.body.gender
        result.bloodType = req.body.bloodType
        result.nationality = req.body.nationality
        result.email = req.body.email
        result.address = req.body.address
        result.postal = req.body.postal
        result.housePhone = req.body.housePhone
        result.officePhone = req.body.officePhone
        result.mobilePhone = req.body.mobilePhone
        result.marriage = req.body.marriage
        result.spouseName = req.body.spouseName
        result.spouseFaith = req.body.spouseFaith
        result.familyMembers = req.body.familyMembers
        result.siblingsRanking = req.body.siblingsRanking
        result.noOfChildren = req.body.noOfChildren
        result.occupation = req.body.occupation
        result.familyReligion = req.body.familyReligion
        result.education = req.body.education
        result.baptismDate = req.body.baptismDate
        result.baptismChurch = req.body.baptismChurch
        result.baptismPastor = req.body.baptismPastor
        result.transferDate = req.body.transferDate
        result.transferredFrom = req.body.transferredFrom
        result.transferPastor = req.body.transferPastor
      
        result.save((err, result) => {
          if (err) return res.status(401).json({error: err})
          else return res.status(201).json(result)
        })
    }
  })
}

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
  newDetail: newDetail,
  getDetail: getDetail,
  showDetail: showDetail,
  editDetail: editDetail
}
