const express = require('express')
const router = express.Router()

const Deal = require('../models/Deal.model')


router.get('/getDealsPending', (req, res, next) => {

  req.user.role == "admin" ?
  Deal.find({
      status: "pending",
    }).populate("author")
    .then(DealsPending => res.json(DealsPending))
    .catch(err => console.log(err))
    :
    Deal.find({
      status: "pending",author : req.user._id
    }).populate("author")
    .then(DealsPending => res.json(DealsPending))
    .catch(err => console.log(err))
    
})



router.get('/getDealsApproved', (req, res, next) => {

  req.user.role == "admin" ?
  Deal.find({
      status: "active",
    }).populate("author")
    .then(DealsActive => res.json(DealsActive))
    .catch(err => console.log(err))

    :
    Deal.find({
      status: "active",author : req.user._id
    }).populate("author")
    .then(DealsActive => res.json(DealsActive))
    .catch(err => console.log(err))
})

router.post('/new', (req, res, next) => {
  Deal.create(req.body)
    .then(theDeal => res.json(theDeal))
    .catch(err => console.log(err))
})

module.exports = router