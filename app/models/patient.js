// app/models/patient.js
// grab the mongoose module
var mongoose = require('mongoose');
// var mongoose = require('mongoose').Mongoose;

// define our patient model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Patient', {
    name : {type : String, default: ''},
    day: {type: String, default: ''},
    visits: {type: Number, default: 0},
});