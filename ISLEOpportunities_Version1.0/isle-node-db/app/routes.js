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
	failureFlash : true //allow flash message {message: req.flash('signupMessage')}
}));
///TAKEN FROM SIGNUP
/*<!-- show any message that come back with authentication 		
	<% if (message.length > 0) { %>
		<div class = "alert alert-danger"><%= message %></div>
		<% } %> -->*/



 

// THIS SECTION HAS CODE FOR EMAIL VERIFICATIONS. BUGS PRESENT
/* app.get('/signup',function(req,res){
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

 			console.log(newTempUser);

 			if(newTempUser){
 				var URL = newTempUser[nev.options.URLFieldName];

 				console.log(URL);

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


 	}); */


// ========================================================== 
//HOME SECTION ==========================================
//===========================================================
//we want this protected so you have to be logged in
// we will use route middleware to verify this (the isLoggedIn function)
app.get('/home',isLoggedIn,function(req,res){

	//res.sendFile(path.join(__dirname+'/views/info.html')/*{
		//user:req.user
	//}*/);
	res.render('info.html');
});

//===========================================================
//LOGOUT=================================================
//===========================================================
app.get('/logout',function(req,res){
	req.logout();
	res.redirect('/');
	});

app.get('/dashboard',isLoggedIn,function(req,res){
	res.render('home.ejs',{
		user:req.user
	});
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

