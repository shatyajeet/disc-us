/**
 * Created by shatyajeet on 07/06/16.
 */

var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var path = require('path');

var config = {
  DB_URL: 'mongodb://localhost:27017/disc_us'
};

mongoose.connect(config.DB_URL);

var app = express();

var renderRoutes = require('./routes/index');
var apiRoutes = require('./routes/api');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, '..', 'dist')));

app.use('/', apiRoutes);
app.use('/', renderRoutes);

app.use(function (req, res, next) {
  var err = new Error('Not found');
  err.status = 404;
  next(err);
});

if (process.env.NODE_ENV === 'development') {
  app.use(function (err, req, res) {
    res.status(err.status || 500);
    res.send({
      message: err.message,
      error: err
    });
  });
}

app.use(function (err, req, res) {
  console.log('Server error: ', err.message);
  res.status(err.status || 500);
  res.send({
    message: err.message,
    error: {}
  });
});

module.exports = app;
