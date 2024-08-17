const mongoose = require('mongoose')
const Schema = mongoose.Schema

photoSchema = new Schema({
  title: String,
  description: String,
  url: String
})

const Photo = mongoose.model('Photo', photoSchema)

module.exports = Photo
