//config/passport.js

//load all the things we need

var LocalStrategy = require('passport-local').Strategy;

//load the user model
var User = require('../app/models/user');

//export this function to the app
module.exports = function(passport){

	//=============================================================
	// passport session setup ====================================
	//=============================================================

	//required for persistent login sessions
	//serialize and deserialize users ut of session

	//used to serialize the user for the session
	passport.serializeUser(function(user,done){
		done(null,user.id);
	});

	//used to deserialize the user
	passport.deserializeUser(function(id,done){
		User.findById(id,function(err,user){
			done(err,user);
		});
	});

	//=============================================================
	// LOCAL SIGNUP ===============================================
	//=============================================================

	passport.use('local-signup',new LocalStrategy({

		//by default, local strategy uses username and password
		usernameField : 'email',
		passwordField: 'password',
		passReqToCallback : true //allows us to passback the request the callback
	},

	function(req,email,password,done){
		//asynchronus
		//User.findOne wont fire unless data is sent back
		process.nextTick(function(){

			//find a user whose email is same as the forms email
			//we are checking if user is trying to login already exists
			User.findOne({'local.email' : email}, function(err,user){

				if(err)
					return done(err);

				//check if user exists
				if(user){
					return done(null,false,req.flash('signupMessage','That email is already taken'));
				} else {

					//if there is no user with that email
					//create the user
					var newUser = new User();

					//set the users local credentials
					newUser.local.email = email;
					newUser.local.password = newUser.generateHash(password);

					//save the user
					newUser.save(function(err){
						if(err)
							throw err;
						return done(null,newUser);

					});
				}
				
			});
		});
	

	}));

	//==============================================================================
	//LOCAL LOGIN =================================================================
	//we are using named strategies i.e 'local-login', 'local-signup' since we have 2 strategies
	//by default it would be called 'local' if there was a single strategy

	passport.use('local-login', new LocalStrategy({

		usernameField : 'email',
		passwordField: 'password',
		passReqToCallback : true //allows to pass the entire request to callback
	},

	function(req,email,passeord,done){//callback with email and password from our form
		//find a user whose email is the same as the forms email
		//we are checking to see if the user trying to login already exists
		User.findOne({'local.email' : email}, function(err,user){
			if(err)
				return done(err);

			//if no user found, return the flash message

			if(!user)
				return done(null,false,req.flash('loginMessage','No user found.'));//req.flash

			if (!user.validPassword(password))
				return done(null,false,req.flash('loginMessage','Oops! wrong password.'));//create login message to save it to session as flash

			return done(null,user);

		});

	}));

	//}))



};
