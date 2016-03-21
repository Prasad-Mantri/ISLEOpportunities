//set up

//getting all the tools needed

var express=require('express');
var app = express();
var port = process.env.port || 8080;
var mongoose = require('mongoose');
var passport = require('passport');
var flash = require ('connect-flash');

var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var configDB = require('./config/database.js');

//configuration ==========================================
mongoose.connect(configDB.url); //connecting to database

require('./config/passport')(passport);//configuring with passport

//setting up the application

app.use(morgan('dev')); //log every request to the console
app.use(cookieParser()); //read cookies (needed for auth)
app.use(bodyParser()); //get information from html forms

app.set('view engine','ejs'); //setting up ejs for templating

//required for passport
app.use(session({secret : 'catlrisleapp'})); //session secret
app.use(passport.initialize());
app.use(passport.session()); //persistent login sessions
app.use(flash()); // using connect-flash for displaying messages stored in session

//required for express to serve static files


//routes=======================================================
require('./app/routes.js')(app,passport); //load routes and pass in app and fully configured passport

//launch=======================================================
app.listen(port);
console.log('connected to port' + port);



