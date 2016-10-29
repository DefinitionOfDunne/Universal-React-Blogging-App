var router = require('express').Router();
var passport = require('passport');
var localLogin = require('../../config/user-passport');
var requireLogin = passport.authenticate('user-login', { session: false });
var controller = require('./authController');

router.route('/register')
  .post(controller.register)

router.route('/login')
  .post(requireLogin, controller.login) 


module.exports = router;
