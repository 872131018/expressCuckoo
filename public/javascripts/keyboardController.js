function keyboardController() {
    return {
        keydown : function(pressedKey) {
            switch(pressedKey) {
                case 83: //s
                    $(document).trigger('move', {action:'goDown'});
                    break;
                case 87: //w
                    $(document).trigger('move', {action:'goUp'});
                    break;
                case 65: //a
                    $(document).trigger('move', {action:'goLeft'});
                    break;
                case 68: //d
                    $(document).trigger('move', {action:'goRight'});
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
                    $(document).trigger('move', {action:'stopDown'});
                    break;
                //w
                case 87:
                    $(document).trigger('move', {action:'stopUp'});
                    break;
                //a
                case 65:
                    $(document).trigger('move', {action:'stopLeft'});
                    break;
                //d
                case 68:
                    $(document).trigger('move', {action:'stopRight'});
                    break;
                default:
                    //console.log(pressedKey);
                    break;
            }
        }
    }
}
