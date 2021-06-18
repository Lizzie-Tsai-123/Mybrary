const mongoose = require('mongoose')

// as "table" in normal SQL database
const authorSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Author', authorSchema)
