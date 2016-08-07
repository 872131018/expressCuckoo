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
var player_count = 0;
var people = [];
var chickens = [];
/*
* Build out the chickens in the beginning
*/
for(i = 0; i < 1; i++) {
    var chicken = new chickenClass(i*20, i*20)
    chickens.push(chicken)
}

/*
* Set update the socket data when a person connects
*/
io.on('connection', function (socket) {
    /*
    * When a new player connects send back the registered player
    */
    //the starting position has to match the css top/right attributes
    var person = new playerClass(player_count, 0, 0);
    people.push(person);
    player_count++;
    /*
    * Send back player information
    */
    socket.emit('connected', {
        x : person.x,
        y : person.y,
        id : person.id
    });
    update_players();
    /*
    * Player position update
    */
    socket.on('update_position', function(data) {
        socket.broadcast.emit('update_position', data);
    });
    /*
    * When a player connects show send them the chickens!
    */
    socket.emit('init_chickens', chickens);
    /*
    socket.on('update', function (data) {
        socket.broadcast.emit('update', data);
        //console.log(data);
    });
    /*
    * On disconnect remove from player list
    */
    socket.on('disconnect', function(socket) {
        for(player in people) {
            if(player.id == socket.id) {
                people.splice(player, 1);
            }
        }
    });
  //socket.emit('update', { hello: 'world' });
});
/*
* Update all the players in the game
*/
function update_players() {
    io.sockets.emit('connections', {
        people : people
    });
}
/*
* Init the main loop for chicken behavior
*/
var interval = setInterval(function () {
    for(chicken in chickens) {
        chicken = chickens[chicken];
        chicken.randomMove();
    }
    /*
    * emit the chicken updates
    */
    io.sockets.emit('chickens_update', chickens);
}, 1000);
/*
* Set up the template engine
*/
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
