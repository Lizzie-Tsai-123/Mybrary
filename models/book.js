const mongoose = require('mongoose')

// as "table" in normal SQL database
const bookSchema = new mongoose.Schema({
  title:{
    type: String,
    required: true
  },
  description:{
    type: String
  },
  publishDate:{
    type: Date,
    required: true,
  },
  pageCount:{
    type: String,
    required: true
  },
  createdAt:{
    type: Date,
    required: true,
    default: Date.now
  },
  coverImage:{
    type: Buffer,
    required: true
  },
  coverImageType:{
    type: String,
    required: true
  },
  author:{
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Author'
  },
  link1:{
    type: String,
    required: false
  },
  linkDes1:{
    type: String,
    required: false
  },
  link2:{
    type: String,
    required: false
  },
  linkDes2:{
    type: String,
    required: false
  },
  game:{
    type: String,
    required: false
  }
})

bookSchema.virtual('coverImagePath').get(function(){
  if(this.coverImage != null && this.coverImageType != null){
    return `data:${this.coverImageType};charset=utf-8;base64,${this.coverImage.toString('base64')}`
  }
})

module.exports = mongoose.model('Book', bookSchema)
