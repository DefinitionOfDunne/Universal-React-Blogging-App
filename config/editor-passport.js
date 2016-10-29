const passport = require('passport'),
      Editor = require('../api/editor/editorModel'),
      config = require('./main'),
      JwtStrategy = require('passport-jwt').Strategy,
      ExtractJwt = require('passport-jwt').ExtractJwt,
      LocalStrategy = require('passport-local');


const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeader(),
  secretOrKey: config.secret
};

passport.use('editor-login', new LocalStrategy( function(username, password, done) {
  Editor.findOne({ username: username }, function(err, editor) {
    if(err) { return done(err); }
    if(!editor) { return done(null, false, { error: 'Your login details could not be verified. Please try again.' }); }

    editor.comparePassword(password, function(err, isMatch) {
      if (err) { return done(err); }
      if (!isMatch) { return done(null, false, { error: "Your login details could not be verified. Please try again." }); }

      return done(null, editor);
    });
  });
}));

passport.use('editorJwt', new JwtStrategy(jwtOptions, function(payload, done) {
  Editor.findById(payload._id, function(err, editor) {
    if (err) { return done(err, false); }

    if (editor) {
      done(null, editor);
    } else {
      done(null, false);
    }
  });
}));