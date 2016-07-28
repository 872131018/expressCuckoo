var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();
/*
* Create server for socket and get socket to use it
*/
var server = require('http').Server(app);
var io = require('socket.io')(server);
/*
* Tell the socket to listen to the server
*/
io.listen(server);
/*
* Pull the server side classes
*/
var playerClass = require('./bin/playerClass');
var chickenClass = require('./bin/chickenClass');
/*
* Server variables to hold players and objects
*/
var players = [];
var chickens = [];
/*
* Build out the chickens in the beginning
*/
for(i = 0; i < 10; i++) {
    var chicken = new chickenClass(i*20, i*20)
    chickens.push(chicken)
}

/*
* Set update the socket data when a person connects
*/
io.on('connection', function (socket) {
    //console.log("a user connected");
    /*
    * When a player connects show send them the chicken states
    */
    socket.emit('chickens', chickens);
    /*
    * When a new player connected broadcast to other players
    */
    var person = new playerClass(socket.id, 0, 0);
    players.push(person);
    socket.broadcast.emit('add_person', person);

    socket.on('update', function (data) {
        socket.broadcast.emit('update', data);
        //console.log(data);
    });
    /*
    * On disconnect remove from player list
    */
    socket.on('disconnect', function(socket) {
        for(player in players) {
            if(player.id == socket.id) {
                players.splice(player, 1);
            }
        }
    });
  //socket.emit('update', { hello: 'world' });
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

/*
* Attach socket to main event loop
*/
app.use(function(req, res, next){
  res.io = io; //Not sure if I need this???
  next();
});

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

/*
* Export server since since scope for socket is here
*/
//module.exports = app;
module.exports = {app: app, server: server};
