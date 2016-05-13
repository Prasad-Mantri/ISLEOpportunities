//set up

//getting all the tools needed

var express=require('express');
var port = process.env.port || 8080;
var mongoose = require('mongoose');

//importing the all the models
var Basic = require('./app/models/basic.js');
var Skill= require('./app/models/skill.js');
var Dimension=require('./app/models/dimension.js');

var passport = require('passport');
var flash = require ('connect-flash');
var nodemailer=require('nodemailer');
var bcrypt = require('bcrypt-nodejs'); //changed
//var nev =require('email-verification')(mongoose);	//changed
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var path = require('path');
var MongoStore = require('connect-mongo')(session);

var configDB = require('./config/database.js');
//configuration ==========================================
mongoose.connect(configDB.url); //connecting to database


var app = express();


/*var Opportunity = require('./app/models/opportunity.js');

var d=new Date();

var form = new Opportunity({title: 'ABC', 
							date_pulished:d.setFullYear(2015,0,14), 
							start_date: d.setFullYear(2016,4,17), 
							end_date: d.setFullYear(2017,4,16),
							last_update: d.setFullYear(2016,2,14),
							last_updated_by:'msd@123',
							status:'open',
							action:'view'});
form.save(function(err){
	if(err)
		throw err;
	//return done(null,form);
}); */

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




require('./config/passport')(passport);//configuring with passport

//require('./config/nev')(nev);
//setting up the application

app.use(morgan('dev')); //log every request to the console
app.use(cookieParser()); //read cookies (needed for auth)
app.use(bodyParser.urlencoded()); //get information from html forms

app.set('view engine','ejs'); //setting up ejs for templating
app.engine('html', require('ejs').renderFile);

//required for passport
app.use(session({secret : 'catlrisleapp',
				 store : new MongoStore({
				 	db:'isle',
				 	host: '127.0.0.1',
				 	port :'27017',

				 	collection :'session',
				 	mongooseConnection: mongoose.connection
				 })})); //session secret

app.use(passport.initialize());
app.use(passport.session()); //persistent login sessions
app.use(flash()); // using connect-flash for displaying messages stored in session

app.use(express.static(__dirname+'/views'));
app.use(express.static(__dirname+'/public'));

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
//


//transfering from dashboard to main form
app.get("/form",function(req,res){
	res.sendFile(path.join(__dirname+'/views/basics.html'));
});

app.get("/basic",function(req,res){
	res.sendFile(path.join(__dirname+'/views/basics.html'));
});

app.get("/dimskill",function(req,res){
	res.sendFile(path.join(__dirname+'/views/dimensions.html'));
});

app.get("/role",function(req,res){
	res.sendFile(path.join(__dirname+'/views/role.html'));
});

app.get("/reqt",function(req,res){
	res.sendFile(path.join(__dirname+'/views/requirements.html'));
});


//transfering from basics to dimension and skills
app.post("/basics",function(req,res){

	var selection=req.body.OppType;
	console.log(selection);

	if (selection === "An experience within a course"){

		var entire_course=[];
		var within_course=[];
		within_course.push({
			value: selection,
			num: req.body.CourseNumberWithin,
			title:req.body.CourseTitleWithin,
			session:req.body.sessionOpt,
			instr_last:req.body.last,
			instr_last:req.body.first,
			instr_last:req.body.middle,
			instr_email:req.body.InstructorEmailAddress
		});

		var outside_course=undefined;
		var sid=req.session;
		var user=req.session.email;
		var basic = new Basic({
			user:user,
			session:sid,
			entire_course:entire_course,
			within_course: within_course,
			outside_course:outside_course
		});

		basic.save(function(err){
			if(err)
				console.log(err);
			else//return done(null,basics);
				console.log("basics saved successfully in within course");
		});


	}
	else if(selection === "An experience outside courses"){
		var entire_course=[];
		var within_course=[];
		var sid=req.session;
		console.log(sid);
		var user=req.session.email;
		var basic = new Basic({
			user:user,
			session:sid,
			
			entire_course:entire_course,
			within_course: within_course,
			outside_course:selection
		});

		basic.save(function(err){
			if(err)
				console.log(err);
			else//return done(null,basics);
				console.log("basics saved successfully outside course");
		});


	}
 
	//checking if entire course is selected
	else{

		//var value = document.getElementById('entirecourse').value;
		var entire_course=[];
		entire_course.push({
			value: selection,
			num: req.body.CourseNumber,
			title:req.body.CourseTitle,
			session:req.body.sessionOpt,
			instr_last:req.body.last,
			instr_last:req.body.first,
			instr_last:req.body.middle,
			instr_email:req.body.InstructorEmailAddress
		});

		var within_course=[];
		var outside_course=undefined;
		var sid=req.session;
		var user=req.session.email;
		var basic = new Basic({
			user:user,
			session:sid,
			
			entire_course:entire_course,
			within_course: within_course,
			outside_course:outside_course

		});

		basic.save(function(err){
			if(err)
				console.log(err);
			else//return done(null,basics);
				console.log("basics saved successfully");
		});

	}
	
	
	res.sendFile(path.join(__dirname+'/views/dimensions.html'));
});

//transfering from basics to skill to dimension
app.post("/skills",function(req,res){

	var skill = new Skill({
		user:req.session.email,
		session:req.session,
		skill1:req.body.Skill1,
		skill2:req.body.Skill2,
		skill3:req.body.Skill3

	});

	skill.save(function(err){
		if(err){throw err;}
		else console.log("skills inseted");
	});

	res.sendFile(path.join(__dirname+'/views/role.html'));
});

//transfering from dimensin to role
app.post("/dimensions",function(req,res){

	var dimension = new Dimension({
		user:req.session.email,
		session:req.session,
		primary:req.body.PrimDimension,
		secondary:req.body.SecDimension
	});

	dimension.save(function(err){
		if(err){throw err}
		else console.log("dimensions inserted");
	});
	
	res.sendFile(path.join(__dirname+'/views/skills.html'));
});

//transfering from role to requirements and logistics
app.post("/role",function(req,res){
	res.sendFile(path.join(__dirname+'/views/requirements.html'));
});



//routes=======================================================
require('./app/routes.js')(app,passport); //load routes and pass in app and fully configured passport

//launch=======================================================
app.listen(port);
console.log('connected to port' + port);
console.log(__dirname);



/* <!--<tr>
					<td><%= opportunity.action%></td>
					<td><%= opportunity.title%></td>
					<td><%= opportunity.status%></td>
					<td><%= opportunity.date_published %></td>
					<td><%= opportunity.start_date %></td>
					<td><%= opportunity.end_date %></td>
				</tr>-->*========================================= PART OF HOME*/ 