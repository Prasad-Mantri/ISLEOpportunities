var mongoose= require('mongoose');
var Schema = mongoose.Schema;

var skillsSchema = new Schema({
	user:String,
	session:{type:Object},
	skill1:String,
	skill2:String,
	skill3:String

});

var skillSchema= mongoose.model('Skill',skillsSchema);
module.exports=skillSchema;