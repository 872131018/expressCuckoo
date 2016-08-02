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
socket.on('connection', function(data) {
    var person = data.person
    var others = data.people
    /*
    * Socket has some extra chars at front that break jquery
    */
    person.id = person.id.substr(2)
    player = new playerClass(person.x, person.y, person.id)
    /*
    * Init the other players in the game
    */
    for(other in others) {
        var other = others[other]
        other.id = other.id.substr(2)
        people[other.id] = new personClass(other.x, other.y, other.id)
    }
})
socket.on('position_update', function(data) {
    people[data.id].updatePosition({
        x : data.x,
        y : data.y
    })
})
/*
* Start main game loop
*/
//loop_id = loop()
//loop_id.start()

socket.on('update', function (data) {
    $(document).trigger('updateObject', [{'object': 'player', 'action': 'updatePosition'}]);
})
socket.on('add_person', function(data) {
    /*
    * Socket has some extra chars at front that break jquery
    */
    data.id = data.id.substr(2)
    var person = new personClass(data.x, data.y, data.id)
    people.push(person)
})
socket.on('init_chickens', function(data) {
    for(chicken in data) {
        var chicken = new chickenClass(data[chicken])
        chickens[chicken.id] = chicken
    }
})
socket.on('chickens_update', function(data) {
    for(chicken in data) {
        chicken = data[chicken]
        chickens[chicken.id].update(chicken)
    }
})
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
