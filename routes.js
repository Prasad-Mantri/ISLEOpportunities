//app/routes.js

module.exports=function(app,passport){
	//===========================================
	//INDEX PAGE
	//===========================================
	app.get('/',function(req,res){
		res.render('index.ejs');//load the index page
	});


//===========================================
//LOGIN PAGE
//===========================================
//show the login form
app.get('/login', function(req,res){
	//render the login page and flash data
	res.render('login.ejs', {message : req.flash('loginMessage')});
});

//processing the login form
app.post('/login', passport.authenticate('local-login', {

	successRedirect : '/home', //redirect to the secure home section
	failureRedirect : '/login', //redirect back to the signup page if there is an error	
	failureFlash : true //allow flash messages);
}));

//===============================================
//SIGN UP =================
//================================================
//show the signup form

app.get('/signup',function(req,res){
	//render the page and pass any flash data
	res.render('signup.ejs', {message: req.flash('signupMessage')});
});

//processing the signup form

app.post('/signup', passport.authenticate('local-signup',{
	successRedirect : '/home', //redirect to home page
	failureRedirect : '/signup', //redirect back to the signup if error
	failureFlash : true //allow flash message
}));

// ========================================================== 
//HOME SECTION ==========================================
//===========================================================
//we want this protected so you have to be logged in
// we will use route middleware to verify this (the isLoggedIn function)
app.get('/home',isLoggedIn,function(req,res){
	res.render('home.ejs',{
		user : req.user //get the user out of session and pass to template

	});
});

//===========================================================
//LOGOUT=================================================
//===========================================================
app.get('/logout',function(req,res){
	req.logout();
	res.redirect('/');
	});
};

//route middleware to make sure the user is logged in
function isLoggedIn(req,res,next){

	//if user is authenticated in the session, carry on
	if(req.isAuthenticated())
		return next();

	//if they aren't redirect them to the home page
	res.redirect('/');
}


//};