const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session');
const app = express();
// const routes = 


const PORT  = process.env.PORT || 3001;

//app.get('/models', (req, res) => res.render('app'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH, OPTIONS");
    next();
});

require('./routes/accounts.js')(app)
// app.use('/', routes);

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/user_db");

mongoose.connect('mongodb://localhost/Users', { useNewUrlParser: true});

app.use(session({
    secret: 'work hard',
    resave: true,
    saveUninitialized: false
}))

app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});