const express = require('express');
const router = express.Router();
const User = require('../models/User.model')
const Deal = require('../models/Deal.model')

const uploader = require('../configs/cloudinary.config');

router.post('/upload', uploader.single("imageUrl"), (req, res, next) => {
    
    if (!req.file) {
        next(new Error('No file uploaded!'));
        return;
    }

    res.json({
        secure_url: req.file.secure_url
    });
})

router.post('/upload/avatar', uploader.single("imageUrl"), (req, res, next) => {
    
    if (!req.file) {
        next(new Error('No file uploaded!'));
        return;
    }

    
    const NewAvatar ={

    avatar : req.file.secure_url

    }

    User.findByIdAndUpdate(req.user._id,NewAvatar,{new:true})
    .then(response => console.log(response.data))
    .catch(err => next(err))


    res.json({
        secure_url: req.file.secure_url
    });
})

module.exports = router;