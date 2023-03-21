const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');
const database = require('./src/db');
const bodyParser = require('body-parser');
const { check } = require('express-validator');
const session = require('express-session');

//Sequelize

database
  .sync()
  .then(() => console.log(`Conectado ao DB: ${process.env.DB_NAME}🐳`));

const app = express();

app.use(cookieParser());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.set('scripts', path.join(__dirname, 'scripts'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({ secret: 'Nome do site', resave: false, saveUninitialized: true })
);
app.use(check());
app.use('/', indexRouter);
app.use('/user', usersRouter);
app.use('/product', productsRouter);

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
  res.render('error');
});

module.exports = app;
