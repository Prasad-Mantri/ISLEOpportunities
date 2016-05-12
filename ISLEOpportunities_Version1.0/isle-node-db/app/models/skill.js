var mongoose= require('mongoose');
var Schema = mongoose.Schema;

var skillsSchema = new Schema({
	user:String,
	session:{type:Object},
	fname:String,
	lname:String

});

var skillSchema= mongoose.model('Skill',skillsSchema);
module.exports=skillSchema;