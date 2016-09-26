const mongoose = require('mongoose')

const detailSchema = new mongoose.Schema({
  membershipNo: String,
  date: String,
  chiName: String,
  icNo: String,
  engName: String,
  dob: String,
  gender: String,
  bloodType: String,
  nationality: String,
  email: String,
  address: String,
  postal: String,
  housePhone: String,
  officePhone: String,
  mobilePhone: String,
  marriage: String,
  spouseName: String,
  spouseFaith: String,
  familyMembers: String,
  siblingsRanking: String,
  noOfChildren: Number,
  occupation: String,
  familyReligion: String,
  education: String,
  baptismDate: String,
  baptismChurch: String,
  baptismPastor: String,
  transferDate: String,
  transferredFrom: String,
  transferPastor: String
})

let Detail = mongoose.model('Detail', detailSchema)
module.exports = Detail
