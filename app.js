var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose'); //require in Mongoose for connection to Mongoose
mongoose.connect('mongodb+srv://surveyAdmin:test123@cluster0-nmqxz.mongodb.net/test?retryWrites=true&w=majority', 
{
  useNewUrlParser: true 
});

var db = mongoose.connection;
db.on('error', err => console.error(err));
db.once('open', () => console.log('Connected to Mongoose'));

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var surveysRouter = require('./routes/surveys');
var authorsRouter = require('./routes/authors');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/surveys',surveysRouter);
app.use('/authors',authorsRouter);
app.use('/', indexRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
