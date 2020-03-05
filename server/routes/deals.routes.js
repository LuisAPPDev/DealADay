const express = require('express')
const router = express.Router()
const Deal = require('../models/deal.model')
const User = require('../models/user.model')

router.get('/getAllDeals', (req, res, next) => {
  Deal.find({status : "active"})
    .then(allDeals => res.json(allDeals))
    .catch(err => console.log(err))
})

router.get('/getOneDeal/:id', (req, res, next) => {
  
  Deal.findById(req.params.id)
    .then(theDeal => res.json(theDeal))
    .catch(err => console.log(err))
})

router.get('/giveLike/:id', (req, res, next) =>{
  
  if (req.user.favs.includes(req.params.id)) {

    const userLike = { $pull: { favs: req.params.id } };

    User.findByIdAndUpdate(req.user.id, userLike)
      .catch(err => next(err));

    const dealLike = { $pull : {favs : req.user.id}};

    Deal.findByIdAndUpdate(req.params.id, dealLike)
    .catch(err => next(err));

  } else {

    const userLike = { $push: { favs: req.params.id } };
    User.findByIdAndUpdate(req.user.id, userLike)
      .catch(err => next(err));

      const dealLike = { $push : {likes : req.user.id}};
      
      Deal.findByIdAndUpdate(req.params.id, dealLike)
      .catch(err => next(err));
  }

})

router.get('/giveDisLike/:id', (req, res, next) =>{
  
  if (req.user.favs.includes(req.params.id)) {
    const userLike = { $pull: { favs: req.params.id } };
    User.findByIdAndUpdate(req.user.id, userLike)
      .catch(err => next(err));
    const dealLike = { $pull : {favs : req.user.id}};
    Deal.findByIdAndUpdate(req.params.id, dealLike)
    .catch(err => next(err));
  } else {
    const userLike = { $push: { favs: req.params.id } };
    User.findByIdAndUpdate(req.user.id, userLike)
      .catch(err => next(err));
      const dealLike = { $push : {likes : req.user.id}};
    Deal.findByIdAndUpdate(req.params.id, dealLike)
    .catch(err => next(err));
  }

})

// router.get('/getTotalLikes/:id', (req, res, next) =>{
  
//     Deal.findOne
// //     .catch(err => next(err));
// //   } else {
// //     const userLike = { $push: { favs: req.params.id } };
// //     User.findByIdAndUpdate(req.user.id, userLike)
// //       .catch(err => next(err));
// //       const dealLike = { $push : {likes : req.user.id}};
// //     Deal.findByIdAndUpdate(req.params.id, dealLike)
// //     .catch(err => next(err));
// //   }

//   //HAY QUE AÑADIR LOS LIKES A LA BBDD DE LOS PRODUCTOS PORQUE SOLO LOS ESTOY HACIENDO EN LA DE LOS USERS.


// })







module.exports = router