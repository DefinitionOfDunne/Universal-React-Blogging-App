const router = require('express').Router();
const controller = require('./userController');

router.param('id', controller.params);

router.route('/:id')
  .get(controller.getOne)
  .put(controller.put)
  .delete(controller.delete)


module.exports = router;
