
/**
 * Module dependencies
 */

var express = require('express'),
  methodOverride = require('method-override'),
  morgan = require('morgan'),
  http = require('http'),
  path = require('path');

var app = module.exports = express();

var routes = {
  index: function(req, res) {
    res.sendfile('app/index.html');
  }
};


/**
 * Configuration
 */

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/app/templates');
app.set('view engine', 'html');
app.use(morgan('dev'));
app.use(methodOverride());
app.use(express.static(path.join(__dirname, 'app')));

var env = process.env.NODE_ENV || 'development';

// development only
if (env === 'development') {
  // TODO
}

// production only
if (env === 'production') {
  // TODO
}


/**
 * Routes
 */

// serve index and view partials
app.get('/', routes.index);

// redirect all others to the index (HTML5 history)
app.get('*', routes.index);


/**
 * Start Server
 */

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
