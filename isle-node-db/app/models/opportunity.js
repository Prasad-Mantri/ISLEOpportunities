var mongoose = require('mongoose');

var opportunitySchema =	mongoose.Schema({

	title: String,
	date_published: Date,
	start_date: Date,
	end_date: Date,
	last_update: Date,
	last_updated_by: String,
	status: String,
	action: String
});

module.exports=mongoose.model('Opportunity',opportunitySchema);