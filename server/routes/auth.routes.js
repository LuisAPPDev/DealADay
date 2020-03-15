const express = require("express");
const passport = require('passport');
const authRoutes = express.Router();
const User = require("../models/User.model");

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

const mailer = require("../configs/nodemailer.config")

authRoutes.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, theUser, failureDetails) => {
    if (err) {
      res.status(500).json({
        message: 'Something went wrong authenticating user'
      });
      return;
    }

    if (!theUser) {
      // "failureDetails" contains the error messages
      // from our logic in "LocalStrategy" { message: '...' }.
      res.status(401).json(failureDetails);
      return;
    }

    // save user in session
    req.login(theUser, (err) => {
      if (err) {
        res.status(500).json({
          message: 'Session save went bad.'
        });
        return;
      }

      // We are now logged in (that's why we can also send req.user)
      res.status(200).json(theUser);
    });
  })(req, res, next);
});

authRoutes.post('/signup', (req, res, next) => {

  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;


  if (!username || !password) {
    res.status(400).json({
      message: 'Provide username and password'
    });
    return;
  }

  if (password.length < 7) {
    res.status(400).json({
      message: 'Please make your password at least 8 characters long for security purposes.'
    });
    return;
  }

  User.findOne({
    username
  }, (err, foundUser) => {

    if (err) {
      res.status(500).json({
        message: "Username check went bad."
      });
      return;
    }

    if (foundUser) {
      res.status(400).json({
        message: 'Username taken. Choose another one.'
      });
      return;
    }

    const salt = bcrypt.genSaltSync(10);
    const hashPass = bcrypt.hashSync(password, salt);

    const NewUser = {
      username: username,
      password: hashPass,
      email,
      confirmationCode: getConfirmCode()
    };

    User.create(NewUser)
      .then(() => {
        let enlace = `Bienvenido a Deal a Day ${username}!!!!! <br><br><a href="http://localhost:3000/api/auth/confirm/${NewUser.confirmationCode}">Pincha aqui para activar tu cuenta</a>`
        let text = `localhost:3000/api/auth/confirm/${NewUser.confirmationCode}`
        mailer.sendMail({
            from: '"Ironhacker Email 👻" <myawesome@project.com>',
            to: NewUser.email,
            subject: "DealADay-.-Activación tu cuenta",
            text: text,
            html: enlace
          })
          .then(() => res.json({
            message: 'Email Sent'
          }))
          .catch(error => console.log(error));
      })
      .catch(err => console.log(err))



  });
});


authRoutes.get("/confirm/:confirmCode", (req, res) => {
  
  User.findOne({
      confirmationCode: req.params.confirmCode
    })
    .then(user => User.findByIdAndUpdate(user._id, {
      status: "Active"
    }))
    .then(user => res.redirect(`http://localhost:5000/login`))
    .catch(err => console.log(err))
})


authRoutes.post('/logout', (req, res, next) => {
  // req.logout() is defined by passport
  req.logout();
  res.status(200).json({
    message: 'Log out success!'
  });
});



authRoutes.get('/loggedin', (req, res, next) => {
  // req.isAuthenticated() is defined by passport
  if (req.isAuthenticated()) {
    res.status(200).json(req.user);
    return;
  }
  res.status(403).json({
    message: 'Unauthorized'
  });
});


function getConfirmCode() {

  const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let token = '';
  for (let i = 0; i < 25; i++) {
    token += characters[Math.floor(Math.random() * characters.length)];
  }
  return token
}

module.exports = authRoutes;