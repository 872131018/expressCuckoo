function delegator() {
    $(document).on('keydown', function(event) {
	  var pressedKey = event.which
      keyboard.keydown(pressedKey)
    });
    $(document).on('keyup', function(event) {
	  var pressedKey = event.which
      keyboard.keyup(pressedKey)
    });

    $(document).on('updateObject',
        function(e, dataObject)
        {
            switch(dataObject['object'])
            {
                case 'player':
                    switch(dataObject['action'])
                    {
                        case 'goUp':
                            player.goUp();
                            break;
                        case 'goDown':
                            player.goDown();
                            break;
                        case 'goLeft':
                            player.goLeft();
                            break;
                        case 'goRight':
                            player.goRight();
                            break;
                        case 'stopUp':
                            player.stopUp();
                            break;
                        case 'stopDown':
                            player.stopDown();
                            break;
                        case 'stopLeft':
                            player.stopLeft();
                            break;
                        case 'stopRight':
                            player.stopRight();
                            break;
                        default:
                            player.updatePosition({'x': dataObject['x'], 'y': dataObject['y']});
                            break;
                    }
                    break;
                case 'chicken':
                    switch(dataObject['action'])
                    {
                        case 'randomMove':
                            chicken.randomMove();
                            break;
                    }
                    break;
                default:
                    console.log('game object not implemented');
                    break;
            }
            collision.checkCollision('player', 'chicken');
        }
    );
};
