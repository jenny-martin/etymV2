var express = require('express');
var router = express.Router();
var usersCtrl = require('../controllers/users');

// GET /users
router.get('/users', usersCtrl.index);

//POST /words
router.post('/words', isLoggedIn, usersCtrl.addWord);



// DELETE /words/:id
 router.delete('/words/:id', isLoggedIn, usersCtrl.deleteWord);


function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }

module.exports = router;
