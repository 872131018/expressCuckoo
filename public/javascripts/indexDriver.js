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
people = {}
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
})
/*
* When register other players when someone else joins
*/
socket.on('connections', function(data) {
    var others = data.people
    /*
    * Init the other players in the game
    */
    for(other in others) {
        var other = others[other]
        /*
        * Skip self in list to prevent duplicates
        */
        if(other.id == player.id) {
            continue;
        }
        people[other.id] = new playerClass(other.x, other.y, other.id)
    }
})
socket.on('update_position', function(data) {
    people[data.id].update_position({
        x : data.x,
        y : data.y
    })
})
socket.on('disconnect', function(data) {
    for(player in people) {
        if(player.id == data.id) {
            people.splice(player, 1);
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
