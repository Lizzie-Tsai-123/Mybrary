const express = require('express');
const router = express.Router() //use the router part of the express
const Book = require('../models/book')

router.get('/',(req, res)=>{

  res.render('flowchart')
})

module.exports = router;//export the router
