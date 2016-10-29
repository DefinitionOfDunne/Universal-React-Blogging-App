var router = require('express').Router();
var passport = require('passport');
var passportService = require('../../config/editor-passport');
var requireLogin = passport.authenticate('editor-login', { session: false });
var controller = require('./editorController');

router.param('id', controller.params);

router.route('/')
	.post(controller.post)

router.route('/login')
  .post(requireLogin, controller.login)

router.route('/register')
  .post(controller.register)	

router.route('/:id')
  .put(controller.put)
  .delete(controller.delete)

module.exports = router;