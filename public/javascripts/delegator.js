function delegator() {
	$(document).on('keydown', function(event) {
	  var pressedKey = event.which
	  switch(pressedKey) {
      case 83: //s
          $(document).trigger('updateObject', [{'object': 'player', 'action': 'goDown'}]);
          break;
      case 87: //w
          $(document).trigger('updateObject', [{'object': 'player', 'action': 'goUp'}]);
          break;
      case 65: //a
          $(document).trigger('updateObject', [{'object': 'player', 'action': 'goLeft'}]);
          break;
      case 68: //d
          $(document).trigger('updateObject', [{'object': 'player', 'action': 'goRight'}]);
          break;
      default: // all other keys
          console.log(pressedKey);
          break;
	  }
  }
    );
    $(document).on('keyup',
        function(e)
        {
            var pressedKey = e.keyCode || e.which;
            switch(pressedKey)
            {
                //s
                case 83:
                    $(document).trigger('updateObject', [{'object': 'player', 'action': 'stopDown'}]);
                    break;
                //w
                case 87:
                    $(document).trigger('updateObject', [{'object': 'player', 'action': 'stopUp'}]);
                    break;
                //a
                case 65:
                    $(document).trigger('updateObject', [{'object': 'player', 'action': 'stopLeft'}]);
                    break;
                //d
                case 68:
                    $(document).trigger('updateObject', [{'object': 'player', 'action': 'stopRight'}]);
                    break;
                default:
                    console.log(pressedKey);
                    break;
            }
        }
    );
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
