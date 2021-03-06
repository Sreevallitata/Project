var createError = require('http-errors');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/betterfit')
  .then(() => console.log('connection successful'))
  .catch((err) => console.error(err));

var apiRouter = require('./routes/registration');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'dist/MashUp')));
app.use('/account', express.static(path.join(__dirname, 'dist/MashUp')));
app.use('/account/:emailid', express.static(path.join(__dirname, 'dist/MashUp')));
app.use('/login', express.static(path.join(__dirname, 'dist/MashUp')));
app.use('/Macros', express.static(path.join(__dirname, 'dist/MashUp')));
app.use('/cheatsheet', express.static(path.join(__dirname, 'dist/MashUp')));
app.use('/Protein', express.static(path.join(__dirname, 'dist/MashUp')));
app.use('/registration', express.static(path.join(__dirname, 'dist/MashUp')));
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err.status);
});

module.exports = app;
