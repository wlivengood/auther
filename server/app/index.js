'use strict';

var app = require('express')();
var path = require('path');
var session = require('express-session');
// var bodyParser = require('body-parser');

app.use(require('./logging.middleware'));

// app.use(bodyParser.json());

// app.use(bodyParser.urlencoded({ extended: false }));

app.use(session({
	secret: '$up3r$3cr3t',
	cookie: {maxAge: 1000 * 60 * 20}
}));

app.use(function (req, res, next) {
  console.log('session', req.session);
  next();
});

app.use(require('./request-state.middleware'));

app.use('/login', require('../login/login.router'));

app.use('/api', require('../api/api.router'));

var validFrontendRoutes = ['/', '/stories', '/users', '/stories/:id', '/users/:id', '/signup', '/login'];
var indexPath = path.join(__dirname, '..', '..', 'public', 'index.html');
validFrontendRoutes.forEach(function (stateRoute) {
  app.get(stateRoute, function (req, res) {
    res.sendFile(indexPath);
  });
});

app.use(require('./statics.middleware'));

app.use(require('./error.middleware'));

module.exports = app;
