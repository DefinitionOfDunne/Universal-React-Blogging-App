var express = require('express');
var mongoose = require('mongoose');
var app = express();
var api = require('./api/api');
var logger = require('./config/logger');
require('dotenv').config();


app.set('port', (process.env.PORT || 8080));

var connection = mongoose.connect(process.env.MLAB_URI);
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
mongoose.connection.once('open', function() {
    console.info('Connected to database!');
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Request-Headers", "*");
  res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

require('./middleware/appMiddleware')(app)

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