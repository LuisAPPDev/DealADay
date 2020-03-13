const express = require('express')
const router = express.Router()
const Deal = require('../models/Deal.model')
const User = require('../models/User.model')

router.get('/getAllDeals', (req, res, next) => {
  Deal.find({
      status: "active"
    }).populate('author')
    .then(allDeals => res.json(allDeals))
    .catch(err => console.log(err))
})

router.post('/getFilterDeals', (req, res, next) => {
  const DealSearch = req.body.input
  console.log(DealSearch)
  Deal.find({
      "name": {
        $regex: `.*${DealSearch}.*`,
        $options: 'i'
      }
    }).populate('author')
    .then(FilterDeals => res.json(FilterDeals))
    .catch(err => console.log(err))
})

router.get('/getOneDeal/:id', (req, res, next) => {

  Deal.findById(req.params.id)
    .then(theDeal => res.json(theDeal))
    .catch(err => console.log(err))
})

router.get('/giveLike/:id', (req, res, next) => {

  if (req.user.likes.includes(req.params.id)) {

    const userLike = {
      $pull: {
        likes: req.params.id
      }
    };

    User.findByIdAndUpdate(req.user.id, userLike)
    .then(UpdatedUser => res.json(UpdatedUser))
      .catch(err => next(err));

    const dealLike = {
      $pull: {
        likes: req.user.id
      }
    };

    Deal.findByIdAndUpdate(req.params.id, dealLike)
    .then(UpdatedDeal => res.json(UpdatedDeal))
      .catch(err => next(err));

  } else {

    const userLike = {
      $push: {
        likes: req.params.id
      }
    };
    User.findByIdAndUpdate(req.user.id, userLike)
      .catch(err => next(err));

    const dealLike = {
      $push: {
        likes: req.user.id
      }
    };

    Deal.findByIdAndUpdate(req.params.id, dealLike)
    .then(UpdatedDeal => res.json(UpdatedDeal))
      .catch(err => next(err));
  }

})

router.post('/edit/:id', (req, res, next) => {

  Deal.findByIdAndUpdate(req.params.id, req.body)
    .then(theDeal => res.json(theDeal))
    .catch(err => console.log(err))
})

router.post('/changeDealStatus/:id', (req, res, next) => {
  console.log(req.body)
  const status = {
      status: req.body.deal
    }
  Deal.findByIdAndUpdate(req.params.id, status,{new :true})
    .then(theDeal => res.json(theDeal))
    .catch(err => console.log(err))
})

router.post('/delete/:id', (req, res, next) => {
  console.log(req.params.id)
  Deal.deleteOne({_id : req.params.id})
    .then(theDeal => res.json(theDeal))
    .catch(err => console.log(err))
})

router.post('/getSimilarDeals', (req, res, next) => {
  
  Deal.find({category : req.body.cat}).populate("author")
    .then(theDeal => res.json(theDeal))
    .catch(err => console.log(err))
})





module.exports = router