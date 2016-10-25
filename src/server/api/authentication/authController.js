'use strict'

const jwt = require('jsonwebtoken'),
      User = require('../users/userModel'),
      config = require('../../config/main');

function generateToken(user) {
  return jwt.sign(user, config.secret, {
    expiresIn: 10080 
  });
}

function setUserInfo(request) {
  let getUserInfo = {
    _id: request._id,
    username: request.username,
    role: request.role,
  };

  return getUserInfo;
}

exports.login = function(req, res, next) {

  let userInfo = setUserInfo(req.user);

  res.status(200).json({
    token: 'JWT ' + generateToken(userInfo),
    user: userInfo
  });
}


exports.register = function(req, res, next) {

  const username = req.body.username;
  const password = req.body.password;

  if (!username) {
    return res.status(422).send({ error: 'You must enter an username.'});
  }

  if (!password) {
    return res.status(422).send({ error: 'You must enter a password.' });
  }

  User.findOne({ username: username }, function(err, existingUser) {
      if (err) { return next(err); }

      if (existingUser) {
        return res.status(422).send({ error: 'That username is already in use.' });
      }

      let user = new User({
        username: username,
        password: password
      });

      user.save(function(err, user) {
        if (err) { return next(err); }

        let userInfo = setUserInfo(user);

        res.status(201).json({
          token: 'JWT ' + generateToken(userInfo),
          user: userInfo
        });
      });
  });
}

exports.roleAuthorization = function(role) {
  return function(req, res, next) {
    const user = req.user;

    User.findById(user._id, function(err, foundUser) {
      if (err) {
        res.status(422).json({ error: 'No user was found.' });
        return next(err);
      }

      if (foundUser.role == role) {
        return next();
      }

      res.status(401).json({ error: 'You are not authorized to view this content.' });
      return next('Unauthorized');
    })
  }
}

exports.verifyToken = function(req, res, next) {
  User.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, function(err, resetUser) {

      if(!resetUser) {
        res.status(422).json({ error: 'Your token has expired. Please attempt to reset your password again.' });
      }

      resetUser.password = req.body.password;
      resetUser.resetPasswordToken = undefined;
      resetUser.resetPasswordExpires = undefined;

      resetUser.save(function(err) {
        if (err) { return next(err); }

        res.status(200).json({ message: 'Password changed successfully. Please login with your new password.'});
        next();
      });
  });
}