function delegator() {
    $(document).on('keydown', function(event) {
	  var pressedKey = event.which
      keyboard.keydown(pressedKey)
    });
    $(document).on('keyup', function(event) {
	  var pressedKey = event.which
      keyboard.keyup(pressedKey)
    });
    $(document).on('move', function(event, action_object) {
        manager.update(event, action_object)
        //collision.checkCollision('player', 'chicken');
    });
    $(document).on('updateObject', function(event, dataObject) {
        manager.update(dataObject)
        //collision.checkCollision('player', 'chicken');
    });
}
