var express = require('express');
var router = express.Router();
var controller = require('./commentsController');

router.route('/')
  .get(controller.get)
  .post(controller.post)

  router.route('/:id')
    .get(controller.getOne) 
    .put(controller.put)

module.exports = router;