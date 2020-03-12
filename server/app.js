require('dotenv').config();
const express      = require('express');

    
const app = express();

 // Database connection
require('./configs/mongoose.config')

// Configs
require('./configs/locals.config')(app)
require('./configs/middleware.config')(app)
require('./configs/session.config')(app)


require('./passport')(app);

app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/deals', require('./routes/deals.routes'));
app.use('/api/profile', require('./routes/profile.routes'));
app.use('/api/files', require('./routes/files.routes'));
app.use('/api/comments', require('./routes/comments.routes'));
app.use('/api/category', require ('./routes/category.routes'))

app.use((req,res) => {

    res.sendFile(__dirname + "./public/index.html");
});



module.exports = app;
