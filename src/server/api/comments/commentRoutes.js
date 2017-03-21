const express = require('express');
const router = express.Router();
const controller = require('./commentsController');

router.route('/')
    .get(controller.get)
    .post(controller.post)

router.route('/:id')
    .get(controller.getOne)
    .put(controller.put)

module.exports = router;