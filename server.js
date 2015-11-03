var env = ( function () {
  var Habitat = require('habitat');
  Habitat.load();
  return new Habitat();
}() );

var fs = require('fs');

var common = new (require('./static/common'))();
common.env = env;
common.fs = fs;
require('./common_server')(common);
var Log = common.log(__filename, 'server');

// If you make changes to the .env file, you must update expected_env_version to match!
var expected_env_version = '0.0.1';
var env_version = env.get('ENV_VERSION');
if (!env_version || env_version != expected_env_version) {
  var err = "Error: ENV_VERSION is mismatched!  Make sure .env is up-to-date!" +
            "\nExpected .env Version: \t" + expected_env_version +
            "\nActual .env Version: \t" + env_version;
  Log.console(err, 2);
  return;
}

var express = require('express');
var app = express();
app.use(require('morgan')("combined")); // logger
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var sassMiddleware = require('node-sass-middleware');
app.use(sassMiddleware({
  src: __dirname + '/sass',
  dest: __dirname + '/static/gen/css',
  debug: true,
  outputStyle: 'compressed',
  prefix: '/gen/css'
}));
app.use(express.static(__dirname + '/static', {
  index: false
}));
app.use(express.static(__dirname + '/node_modules/react-coast', {
  index: false
}));

var helmet = require('helmet');
app.use(helmet.xssFilter());
app.use(helmet.noSniff());
app.use(helmet.noCache());
app.use(require('method-override')());
app.use(require('cookie-parser')(env.get('COOKIE_SECRET')));

app.use(require('express-session')({
  secret: env.get('SESSION_SECRET'),
    /*
  cookie: {
    proxy: true,
    httpOnly: true,
    secure: common.isDev,
  },
  */
  resave: true,
  saveUninitialized: false,
}));


common.middleware = {};
common.middleware.restHeaders = require('./middleware/restHeaders')();

// Authentication
var basicAuth = require('basic-auth');
common.auth = function (req, res, next) {
  function unauthorized(res) {
    res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
    return res.send(401);
  }

  var user = basicAuth(req);

  if (!user || !user.name || !user.pass) {
    return unauthorized(res);
  }

  if (user.name === 'admin' && user.pass === 'password') {
    return next();
  } else {
    return unauthorized(res);
  }
};

var server = app.listen(env.get('HTTP_PORT'), function () {
Log.console("Listening on port " + server.address().port.toString() + " for HTTP");
});

app.get(common.routes.homepage,
  function(request, response) {
    //response.redirect(common.routes.example);
    response.sendfile('static/fansoffan/index.html');
  });


app.get(common.routes.blog,
    function(request, response) {
      //response.redirect(common.routes.example);
      response.sendfile('static/fansoffan/blog.html');
    });

app.get('/favicon.png',
  function (request, response) {
    response.sendfile('static/img/favicon.png');
  });

//app.use(common.routes.public, require('./routes/public/public')(common, express.Router()));
