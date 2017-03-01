$(document).on('loaded', function() {
    /*
    * Instantiate the keyboard controller
    */
    keyboard = new Keyboard();
    /*
    * Add the document listeners for the key events
    */
    $(document).on('keydown', function(event) {
        keyboard.keydown(event.which);
    });
    $(document).on('keyup', function(event) {
        keyboard.keyup(event.which);
    });
    /*
    * Other players live in here
    */
    people = {};
    /*
    * Store the chickens locally
    */
    chickens = {};
    /*
    * Define the socket to the node server
    */
    socket = io('http://localhost:3000');
    /*
    * When you join register with the server
    */
    socket.on('connected', function(data) {
        player = new Player(data.x, data.y, data.id);
        /*
        * Construct the other players in the game
        */
        var local_scope_people = data.people;
        for(person in local_scope_people) {
            var person = local_scope_people[person];
            /*
            * Skip self in list to prevent duplicates
            */
            if(person.id == player.id) {
                continue;
            }
            person = new Player(person.x, person.y, person.id);
            people[person.id] = person;
        }
        /*
        * Construct the chickens in the game
        */
        var local_scope_chickens = data.chickens;
        for(chicken in local_scope_chickens) {
            var chicken = new Chicken(local_scope_chickens[chicken]);
            chickens[chicken.id] = chicken;
        }
    });
    /*
    * Register other players when someone else joins
    */
    socket.on('new_player', function(data) {
        var new_player = data.player;
        people[new_player.id] = new Player(new_player.x, new_player.y, new_player.id);
    });
    /*
    * Update the a player when a move is made
    */
    socket.on('update_position', function(data) {
        people[data.id].update_position({
            x : data.x,
            y : data.y
        });
    });
    /*
    * Find and remove the player who disconnected
    */
    socket.on('player_quit', function(data) {
        $('#'+data.id).remove();
        delete people[data.id];
    });
    /*
    * Update the chickens when they move
    */
    socket.on('update_chickens', function(data) {
        for(chicken in data) {
            chicken = data[chicken]
            chickens[chicken.id].update(chicken)
        }
    });
/*
* Start main game loop
*/
//loop_id = loop()
//loop_id.start()

/*
chicken = new chickenClass(100, 100);
collision = new collisionDetect();

//set timer for chicken action
setInterval(
	function()
	{
		 $(document).trigger('updateObject', [{'object': 'chicken', 'action': 'randomMove'}]);
	},
	1000
);
*/
});
