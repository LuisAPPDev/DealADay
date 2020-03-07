const express = require('express')
const router = express.Router()

const Comment = require('../models/comments.model')

router.post('/getAllComments/:id', (req, res, next) => {
   
  Comment.find({deal: req.params.id}).populate('author')
    .then(AllComments => res.json(AllComments))
    .catch(err => console.log(err))
})

router.post('/create-comment', (req, res, next) => {
       Comment.create(req.body)
      .then(theComment => res.json(theComment))
      .catch(err => console.log(err))
  })

  module.exports = router