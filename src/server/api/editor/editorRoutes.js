var router = require('express').Router();
var logger = require('../../util/logger');
var controller = require('./editorController');

router.param('id', controller.params);

router.route('/')
  .post(controller.post)

router.route('/:id')
  .put(controller.put)
  .delete(controller.delete)

module.exports = router;