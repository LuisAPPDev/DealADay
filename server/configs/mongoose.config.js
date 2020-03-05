const mongoose = require('mongoose');

mongoose
.connect(`mongodb://localhost/${process.env.DB_SERVER}`, {useNewUrlParser: true})
.then(x => {
  console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
})
.catch(err => {
  console.error('Error connecting to mongo', err)
});

module.exports = mongoose;