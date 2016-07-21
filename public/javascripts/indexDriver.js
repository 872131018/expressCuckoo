$(document).ready(function() {
    /*
    * Instantiate the keyboard controller
    */
    keyboard = keyboardController()
	/*
	* All events handled by the global delegator
	*/
	delegator = delegator()

	//the starting position has to match the css top/right attributes
	player = new player(0, 0)

	var socket = io('//localhost:3000');
	socket.on('socketToMe', function (data) {
		console.log(data);
	});









	/*
	//the starting position has to match the css top/right attributes
	player = new playerClass(0, 0);
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
