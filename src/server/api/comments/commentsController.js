;const _ = require('lodash');
const logger = require('../../config/logger');
const Comment = require('./commentModel');


  exports.get = function(req, res) {
    Comment.find(function(err, comments) {
      if (!err) {
        res.json(comments);
      } else {
        console.log(err);
      }
    });
  };

  exports.post = function(req, res) {
    const comment = new Comment({
      name: req.body.name,
      description: req.body.description,
    });
    comment.save(function(err) {
      if (!err) {
        console.log('Created!');
      } else {
        console.log(err);
      }
    });
    res.json(comment);
  };

  exports.getOne = function(req, res) {
      Comment.findById(req.params.id, function(err, comment) {
        if (!err) {
          res.json(comment);
        } else {
          console.log(err);
        }
      })
    };

    exports.put = function(req, res) {
      Comment.findById(req.params.id, function(err, comment) {
        if (err) {
          console.log(err);
        }

        comment.name = req.body.name;
        comment.description = req.body.description;
        comment.save(function(err) {
          if (!err) {
            console.log('Updated!');
          } else {
            console.log(err);
          }
        });
        res.json(comment);
      })
    };