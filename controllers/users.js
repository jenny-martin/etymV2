const User = require('../models/user');

module.exports = {
  index,
  addWord,
  deleteWord
};

function index(req, res, next) {
  console.log(req.query)
  let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
  let sortKey = req.query.sort || 'name';
  User.find(modelQuery)
  .sort(sortKey).exec(function(err, users) {
    if (err) return next(err);
    res.render('users/index', { 
      users, 
      user: req.user,
      name: req.query.name, 
      sortKey 
    });
  });
}

function addWord(req, res, next) {
  req.user.words.push(req.body);
  req.user.save(function(err) {
    res.redirect('/users');
  });
}

function deleteWord(req, res, next) {
  User.findOne({'words._id': req.params.id}, function(err, user) {
    user.words.id(req.params.id).remove();
    user.save(function(err) {
      res.redirect('/users');
    });
  });
}
