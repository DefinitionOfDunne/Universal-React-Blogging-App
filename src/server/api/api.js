var router = require('express').Router();

router.use('/users', require('./users/userRoutes'));
router.use('/editor', require('./editor/editorRoutes'));
router.use('/posts', require('./posts/postRoutes'));
router.use('/comments', require('./comments/commentRoutes'));

module.exports = router;
