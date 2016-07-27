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
people = [];
/*
* Define the socket to the node server
*/
socket = io('http://localhost:3000');

//the starting position has to match the css top/right attributes
player = new playerClass(0, 0, socket.id)
/*
* Start main game loop
*/
loop_id = loop()
//loop_id.start()

socket.on('update', function (data) {
    $(document).trigger('updateObject', [{'object': 'player', 'action': 'updatePosition'}]);
})
socket.on('add_person', function(data) {
    /*
    * Socket has some extra chars at front that break jquery
    */
    var person = new personClass(data.x, data.y, data.id.substr(2))
    people.push(person)
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
