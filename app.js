var createError = require('http-errors');
var express = require('express');
var path = require('path');

var logger = require('morgan');

const indexRouter = require('./routes/index');

const cursosRouter = require('./routes/cursos');
const estudiantesRouter = require('./routes/estudiantes');
const guiasRouter = require('./routes/guias');
const homeRouter = require('./routes/home');
const laboratoriosRouter = require('./routes/laboratorios');

var app = express();


app.use(express.static(path.join(__dirname, 'public')));

app.use(logger('dev'));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.set('port', process.env.PORT ||4000);


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/cursos', cursosRouter);
app.use('/estudiantes', estudiantesRouter);
app.use('/guias', guiasRouter);
app.use('/home', homeRouter);
app.use('/laboratorios', laboratoriosRouter);

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

app.listen(app.get('port'),()=>{
    console.log(`Servidor Web corriendo en el puerto ${app.get('port')}`)
});

module.exports = app;
