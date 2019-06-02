var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var wordSchema = new Schema({
    text: String
  }, {
    timestamps: true
  });
  
  var userSchema = new Schema({
    name: String,
    email: String,
    cohort: String,
    avatar: String,
    words: [wordSchema],
    googleId: String,
  }, {
    timestamps: true
  });
  
  module.exports = mongoose.model('User', userSchema);