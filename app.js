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
var Player = require('./bin/Player');
var Chicken = require('./bin/Chicken');
/*
* Server variables to hold players and objects
*/
var player_count = 0;
var people = {};
var chickens = [];
/*
* Build out the chickens in the beginning
*/
for(i = 0; i < 1; i++) {
    var chicken = new Chicken(Math.random()*1000, Math.random()*1000)
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
    var player = new Player(player_count, socket.id, 0, 0);
    people[player.id] = player;
    player_count++;
    /*
    * Send back player information
    */
    socket.emit('connected', {
        x : player.x,
        y : player.y,
        id : player.id,
        people : people,
        chickens : chickens
    });
    socket.broadcast.emit('new_player', {
        player : player
    });
    /*
    * Player position update
    */
    socket.on('update_position', function(data) {
        /*
        * Updates the player
        */
        people[data.id].x = data.x;
        people[data.id].y = data.y;
        /*
        * Push updates to other players
        */
        socket.broadcast.emit('update_position', data);
    });
    /*
    * On disconnect remove from player list
    */
    socket.on('disconnect', function(data) {
        for(player in people) {
            var player = people[player];
            if(player.socket_id == socket.id) {
                /*
                * Remove player from other screens and game
                */
                socket.broadcast.emit('player_quit', {
                    id : player.id
                });
                delete people[player.id];
                break;
            }
        }
    });
  //socket.emit('update', { hello: 'world' });
});
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
    io.sockets.emit('update_chickens', chickens);
}, 1000);
/*
* Set up the template engine
*/
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

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
