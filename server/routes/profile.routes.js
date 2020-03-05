const express = require('express')
const router = express.Router()

const Deal = require('../models/deal.model')


router.get('/getDealsPending', (req, res, next) => {
  Deal.find({status : "pending"})
    .then(DealsPending => res.json(DealsPending))
    .catch(err => console.log(err))
})

router.get('/getDealsApproved', (req, res, next) => {
  Deal.find({status : "active"})
    .then(DealsActive => res.json(DealsActive))
    .catch(err => console.log(err))
})

router.post('/new', (req, res, next) => {
    Deal.create(req.body)
      .then(theDeal => res.json(theDeal))
      .catch(err => console.log(err))
  })

  module.exports = router