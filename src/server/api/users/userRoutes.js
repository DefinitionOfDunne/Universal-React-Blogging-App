const router = require('express').Router();
const passport = require('passport');
var passportService = require('../../config/index');
const requireAuth = passport.authenticate('jwt', { session: false });
const controller = require('./userController');

router.param('id', controller.params);

router.route('/:id')
  .get(controller.getOne)
  .put(controller.put)
  .delete(controller.delete)

router.route('/protected')
	.get(requireAuth, controller.test)

module.exports = router;
