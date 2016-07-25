function delegator() {
    $(document).on('keydown', function(event) {
	  var pressedKey = event.which
      keyboard.keydown(pressedKey)
    });
    $(document).on('keyup', function(event) {
	  var pressedKey = event.which
      keyboard.keyup(pressedKey)
    });
    $(document).on('updateObject', function(e, dataObject) {
        manager.update(dataObject)
        collision.checkCollision('player', 'chicken');
    });
}
