var express = require('express');
var mongoose = require('mongoose');
var app = express();
var api = require('./api/api');
var logger = require('./util/logger');

mongoose.connect('mongodb://localhost/final-blog');
require('./middleware/appMiddleware')(app);

app.use(logger);
app.use(express.static('public'));
app.use(function(err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401).send('Invalid password');
    return;
  }
  	logger.error(err.stack);
  	res.status(500).send('Oops');
});

app.use('/api', api);

module.exports = app;