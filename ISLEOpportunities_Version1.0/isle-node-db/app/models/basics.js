var mongoose = require('mongoose');

var basicsSchema =	mongoose.Schema({

	user: String,
	session: {type:Schema.Types.ObjectId},

	title : String,
	description: String,
	entire_course: [{
			value:String,
			num : Number,
			title: String,	
			session: String,
			instr_last: String,
			instr_first: String,
			instr_middle: String,
			instr_email: String
				}],
			
	within_course: [{
			
			value:String,
			num : Number,
			title: String,	
			session: String,
			instr_last: String,
			instr_first: String,
			instr_middle: String,
			instr_email: String
				}],

	outside_course:String
});


		
var basicSchema=mongoose.model('Basic', basicsSchema);
module.exports=basicSchema;