const express = require('express');
const router = express.Router() //use the router part of the express

router.get('/', (req, res)=>{
  res.render('index')
})

module.exports = router;//export the router
