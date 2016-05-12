var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var dimensionsSchema= new Schema({
	user:String,
	session:Object,
	primary:String,
	secondary:String
});

var dimensionSchema=mongoose.model('Dimension',dimensionsSchema);
module.exports=dimensionSchema;