var app = require('./server/server');

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
