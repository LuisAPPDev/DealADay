require('dotenv').config();
const express      = require('express');
const flash      = require("connect-flash");
    
const app = express();

 // Database connection
require('./configs/mongoose.config')

// Configs
require('./configs/locals.config')(app)
require('./configs/middleware.config')(app)
require('./configs/session.config')(app)

app.use(flash());
require('./passport')(app);

app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/deals', require('./routes/deals.routes'));
app.use('/api/profile', require('./routes/profile.routes'));
app.use('/api/files', require('./routes/files.routes'));

module.exports = app;
