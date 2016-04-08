//set up

//getting all the tools needed

var express=require('express');
var app = express();
var port = process.env.port || 8080;
var mongoose = require('mongoose');
var passport = require('passport');
var flash = require ('connect-flash');
var nodemailer=require('nodemailer');
var bcrypt = require('bcrypt-nodejs'); //changed
var nev =require('email-verification')(mongoose);	//changed
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var configDB = require('./config/database.js');

//var opportunity = require('./app/models/opportunity');

//changes for authenticating user before login (3/30)

//getting our user model
/*var User = require('./app/models/user.js');

//sync version of hashing function

var myHasher = function(password,tempUserData,insertTempUser,callback){
	var hash = bcrypt.hashSync(password,bcrypt.genSaltSync(8),null);
	return insertTempUser(hash,tempUserData,callback);
};

//async version of hashing function
 myHasher = function(password,tempUserData,insertTempUser,callback){
 	bcrypt.genSalt(8,function(err,salt){
 		bcrypt.hash(password,salt,function(err,hash){
 			return insertTempUser(hash,tempUserData,callback);
 		});
 	});
 };

//NEV COnfiguration ===============================
nev.configure({
	persistentUserModel : User,
	expirationTime: 600, //10 mins

	verificationURL : 'http://localhost:8080/email-verification/${URL}',

	transportOptions: {
		service : 'Gmail',

		auth : {
			user : 'thecodercatlr@gmail.com',
			pass: 'thecodercatlr123'
		}
		},
		hashingFunction: myHasher,
		passwordFieldName: 'password',
	}, function(err,options){
		if(err){
			console.log(err);
			return;
		}
		console.log('confiured: '+(typeof options === 'object'));
	

});

nev.generateTempUserModel(User,function(err,tempUserModel){
	if(err){
		console.log(err);
		return;
	}
	console.log('generate temp user model: '+(typeof tempUserModel === 'function'));
});

*/


// Configuring nodemailer on SMTP server. SMTP is responsible for sending and recieving emails
/*var smtpTransport=nodemailer.createTransport("SMTP",{
	service : "Gmail",
	auth: {
		user : "thedesignercatlr@gmail.com",
		pass: "thedesignercatlr123"
	}
});

//var random, mailOptions, host, link;
//SEND EMAIL
app.get('/send',function(req,res){
	var mailOptions={
		to: "thecodercatlr@gmail.com",
		from: "thedesignercatlr@gmail.com",
		subject: 'Confirm your account'

	}
	console.log(mailOptions);
	smtpTransport.sendMail(mailOptions,function(error,response){
		if(error){
				console.log(error);
			res.end("error");
		}else{
				console.log("Message sent : "+response.message);
			res.end("sent");
		}

		});
	res.render('send.ejs');
	});

*/
/*===================================SMTP OVER===============================*/


//configuration ==========================================
mongoose.connect(configDB.url); //connecting to database

require('./config/passport')(passport);//configuring with passport

require('./config/nev')(nev);
//setting up the application

app.use(morgan('dev')); //log every request to the console
app.use(cookieParser()); //read cookies (needed for auth)
app.use(bodyParser.urlencoded()); //get information from html forms

app.set('view engine','ejs'); //setting up ejs for templating

//required for passport
app.use(session({secret : 'catlrisleapp'})); //session secret
app.use(passport.initialize());
app.use(passport.session()); //persistent login sessions
app.use(flash()); // using connect-flash for displaying messages stored in session

//required for express to serve static files
// Express Stuff=======================================================================
/*app.get('/signup',function(req,res){
	res.render('signup.ejs');/*,{
		root: __dirname
	});
	});
 app.post('/signup', function(req,res){

 	var email=req.body.email;
 	var fname= req.body.fname;
 	var lname=req.body.lname;

 	if(req.body.type==='submit'){
 		var password=req.body.password;
 		var newUser = new User({
 			fname : fname,
 			lname: lname,
 			email:email,
 			password:password
 			
 		});

 		nev.createTempUser(newUser,function(err,newTempUser){
 			if(err){
 				return res.status(404).send('ERROR : creating temp user FAILED');
 			}

 			if(newTempUser){
 				var URL = newTemUser[nev.options.URLFieldName];

 				nev.sendVerificationEmail(email,URL,function(err,info){
 					if(err){
 						return res.status(404).send('ERROR: sending verification email FAILED');
 					}

 					res.json({
 						msg: 'An email has been sent to you. Please check it to verify your account ',
 						info:info
 					});
 				});
 			}
 			else{
 				res.json({
 					msg: 'You have already signed up. Please check you email to verify your account'
 				});
 			}
 		});
       }
       //resend verification mail
       else{
       	nev.resendVerificationEmail(email,function(err,userFound){
       		if(err){
       			return res.status(404).send('ERROR: resending verification email FAILED');
       		}
       		if (userFound){
       			res.json({
       				msg: 'An email  has been sent to you yet again. Please check and verify your account'
       			});
       		}else{
       			res.json({
       				msg: 'Your verification code has expired please signup again'
       			});
       		}
       	});

       }


 	});*/

 	//register button was clicked

 


//routes=======================================================
require('./app/routes.js')(app,nev,passport); //load routes and pass in app and fully configured passport

//launch=======================================================
app.listen(port);
console.log('connected to port' + port);



