var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://parikshit:parikshit152@ds161493.mlab.com:61493/parikshittodoapp",{useNewUrlParser:true});

module.exports = {mongoose};
