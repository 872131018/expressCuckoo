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

	//the starting position has to match the css top/right attributes
	player = new player(0, 0)
    /*
    * Define the socket to the node server
    */
	socket = io('//localhost:3000');
    /*
    * Start main game loop
    */
    setInterval(function() {
        socket.emit('update', player);
    }, 200);

	socket.on('update', function (data) {
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
