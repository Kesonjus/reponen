var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const basicAuth = require('express-basic-auth');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const bookRouter = require('./routes/book');
const borrowerRouter = require('./routes/borrower');
const userRouter = require('./routes/user');
var app = express();

app.use(basicAuth({users: { 'admin': '1234' }}))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/users/:name',usersRouter);
app.use('/users/:firstName/:lastName', usersRouter);
app.use('/users/xd', usersRouter);

app.use('/book', bookRouter);
app.use('/borrower', borrowerRouter);
app.use('/user', userRouter);

app.use(helmet());
app.use(cors());

module.exports = app;
