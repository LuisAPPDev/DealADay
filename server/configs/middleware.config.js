const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const favicon = require('serve-favicon');
const logger = require('morgan');
const path = require('path');
const express = require('express')
const cors = require('cors')
const session = require("express-session");
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo")(session);



module.exports = app => {

    
    // Middleware Setup
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());

    // Express View engine setup
    app.use(require('node-sass-middleware')({
        src: path.join(__dirname, '..', 'public'),
        dest: path.join(__dirname, '..', 'public'),
        sourceMap: true
    }));

    // Enable authentication using session + passport
app.use(session({
    secret: 'irongenerator',
    resave: true,
    saveUninitialized: true,
    store: new MongoStore( { mongooseConnection: mongoose.connection })
  }))

    const whitelist = ['http://localhost:5000']
    const corsOptions = {
        origin: (origin, cb) => {
            const originWhitelisted = whitelist.includes(origin)
            cb(null, originWhitelisted)
        },
        credentials: true        // RUTAS PERSISTENTES
    }
    app.use(cors(corsOptions))


    app.set('views', path.join(__dirname, '..', 'views'));
    app.set('view engine', 'hbs');
    app.use(express.static(path.join(__dirname, '..', 'public')));
    app.use(favicon(path.join(__dirname, '..', 'public', 'images', 'favicon.ico')));
}