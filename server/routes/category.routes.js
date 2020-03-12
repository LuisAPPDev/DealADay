const express = require('express')
const router = express.Router()
const Deal = require('../models/Deal.model')



router.get('/:id', (req, res, next) => {
  console.log("el params del back",req.params.id)
  Deal.find({
    category: req.params.id
  }).populate('author')
    .then(DealsbyCat => res.json(DealsbyCat))
    .catch(err => console.log(err))
})

module.exports = router