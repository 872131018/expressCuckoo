$(document).ready(function() {
/*
* Instantiate the keyboard controller
*/
keyboard = keyboardController()
/*
* All events handled by the global delegator
*/
delegator = delegator()
/*
* Manage objects when they recieve events
*/
manager = objectManager()
/*
* Other players live in here
*/
people = []
/*
* Store the chickens locally
*/
chickens = {}
/*
* Define the socket to the node server
*/
socket = io('http://localhost:3000');
/*
* When you join register with the server
*/
socket.on('connected', function(data) {
    /*
    * Socket has some extra chars at front that break jquery
    */
    player = new playerClass(data.x, data.y, data.id)
    /*
    * When a player connects show other players in game
    */
    var others = data.people
    for(other in others) {
        var other = others[other]
        /*
        * Skip self in list to prevent duplicates
        */
        if(other.id == player.id) {
            continue;
        }
        people.push(new playerClass(other.x, other.y, other.id))
    }
})
/*
* Register other players when someone else joins
*/
socket.on('new_connection', function(data) {
    var other = data.person
    /*
    * Init the new players in the game
    */
    people.push(new playerClass(other.x, other.y, other.id))
})
socket.on('update_position', function(data) {
    /*
    * Find the player to move and update their position on screen
    */
    for(person in people) {
        if(people[person].id == data.id) {
            people[person].update_position({
                x : data.x,
                y : data.y
            })
            break;
        }
    }
})
socket.on('disconnected', function(data) {
    /*
    * Find player who disconnected
    */
    for(person in people) {
        if(people[person].id == data.id) {
            /*
            * Remove player from screen
            */
            $('#'+people[person].id).remove()
            /*
            * Remove player from game
            */
            people.splice(person, 1)
            break;
        }
    }
})
socket.on('chickens', function(data) {
    for(chicken in data) {
        var chicken = new chickenClass(data[chicken])
        chickens[chicken.id] = chicken
    }
})
socket.on('update_chickens', function(data) {
    for(chicken in data) {
        chicken = data[chicken]
        chickens[chicken.id].update(chicken)
    }
})
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
