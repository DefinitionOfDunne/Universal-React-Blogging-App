'use strict'

var Post = require('../posts/postModel');
var _ = require('lodash');
var logger = require('../../config/logger');
var jwt = require('jsonwebtoken');
var Editor = require('../editor/editorModel');
var config = require('../../config/main');


function generateToken(editor) {
  return jwt.sign(editor, config.secret, {
    expiresIn: 10080 
  });
}

function setUserInfo(request) {
  let getUserInfo = {
    _id: request._id,
    username: request.username
  };

  return getUserInfo;
}

exports.params = function(req, res, next, id) {
  Post.findById(id)
    .populate('username')
    .exec()
    .then(function(post) {
      if (!post) {
        next(new Error('No post with that id'));
      } else {
        req.post = post;
        next();
      }
    }, function(err) {
      next(err);
    });
};

exports.put = function(req, res, next) {
  var post = req.post;
  var update = req.body;

  _.merge(post, update);

  post.save(function(err, saved) {
    if (err) {
      next(err);
    } else {
      res.json(saved);
    }
  })
};

exports.login = function(req, res, next) {

  let editorInfo = setUserInfo(req.user);

  res.status(200).json({
    token: 'JWT ' + generateToken(editorInfo),
    editor: editorInfo
  });
};

exports.register = function(req, res, next) {

  const editorname = req.body.username;
  const password = req.body.password;

  if (!editorname) {
    return res.status(422).send({ error: 'You must enter an editorname.'});
  }

  if (!password) {
    return res.status(422).send({ error: 'You must enter a password.' });
  }

  Editor.findOne({ editorname: editorname }, function(err, existingUser) {
      if (err) { return next(err); }

      if (existingUser) {
        return res.status(422).send({ error: 'That editorname is already in use.' });
      }

      let editor = new Editor({
        editorname: editorname,
        password: password
      });

      editor.save(function(err, editor) {
        if (err) { return next(err); }

        let editorInfo = setUserInfo(editor);

        res.status(201).json({
          token: 'JWT ' + generateToken(editorInfo),
          editor: editorInfo
        });
      });
  });
}
exports.post = function(req, res, next) {
  var newpost = req.body;
  Post.create(newpost)
    .then(function(post) {
      res.json(post);
    }, function(err) {
      logger.error(err);
      next(err);
    });
};

exports.delete = function(req, res, next) {
  req.post.remove(function(err, removed) {
    if (err) {
      next(err);
    } else {
      res.json(removed);
    }
  });
};