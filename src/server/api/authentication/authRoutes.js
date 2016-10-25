var router = require('express').Router();
var passport = require('passport');
var passportService = require('../../config/index');
var requireLogin = passport.authenticate('local', { session: false });
var controller = require('./authController');

router.route('/register')
  .post(controller.register)

router.route('/login')
  .post(requireLogin, controller.login)


module.exports = router;
