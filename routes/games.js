const express = require('express');
const router = express.Router() //use the router part of the express
const Book = require('../models/book')

router.get('/',(req, res)=>{

  res.render('games/index')
})

router.get('/bird',(req, res)=>{

  res.render('games/games/bird')
})

router.get('/fillmore',(req, res)=>{

  res.render('games/games/fillmore')
})


router.get('/childhood',(req, res)=>{

  res.render('games/games/childhood')
})

module.exports = router;//export the router
