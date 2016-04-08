//getting our user model
var User = require('../app/models/user.js');

//sync version of hashing function
module.exports=function(nev){
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

}