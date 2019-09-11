var createError  = require('http-errors');
var express      = require('express');
var path         = require('path');
var cookieParser = require('cookie-parser');
var logger       = require('morgan');

var userRouter   = require('./routes/user');

var app = express();

const username = "db-user";
const token    = "7fKDcA2RC9gcufb1agxSd2ncucNaD3f42R8EQBHP6QysgHwaA4XWgeHdbNYIjUou";

const hostname = "localhost";
const userPort = "27017";

// set environment variables
app.set('hostname', hostname);
app.set('username', username);
app.set('token',    token);
app.set('userPort', userPort);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/user', userRouter);

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
