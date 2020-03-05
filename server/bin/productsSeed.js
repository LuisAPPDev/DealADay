require('dotenv').config()
const mongoose = require('mongoose')
const Deals = require('../models/deal.model')
const deals = require('./articles.json')

mongoose
  .connect('mongodb://localhost/chollosdiarios', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });


// mongoose.connect(`mongodb://localhost/${process.env.DB_LOCAL}`, {
//     useUnifiedTopology: true,
//     useNewUrlParser: true
// })
Deals.create(deals)
    .then(created => console.log(created.name))
    .then(() => mongoose.disconnect())
    .catch(err => err)