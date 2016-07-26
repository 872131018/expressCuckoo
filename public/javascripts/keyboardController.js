function keyboardController() {
    return {
        keydown : function(pressedKey) {
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
                    //console.log(pressedKey);
                    break;
            }
        },
        keyup : function(pressedKey) {
            switch(pressedKey) {
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
                    //console.log(pressedKey);
                    break;
            }
        }
    }
}
