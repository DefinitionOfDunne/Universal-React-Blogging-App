var router = require('express').Router();

const Auth = require('./authentication/authRoutes'),
      User = require('./users/userRoutes'),
      Editor = require('./editor/editorRoutes'),
      Posts = require('./posts/postRoutes'),
      Comments = require('./comments/commentRoutes');


const REQUIRE_ADMIN = 'Admin',
      REQUIRE_MEMBER = 'Member';      

router.use('/auth', Auth);
router.use('/users', User);
router.use('/editor', Editor);
router.use('/posts', Posts);
router.use('/comments', Comments);

module.exports = router;
