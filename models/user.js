var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var etymSchema = new Schema({
  origin: String
}, {
  timestamps: true
});

var wordSchema = new Schema({
    text: String,
    origins: [etymSchema]
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