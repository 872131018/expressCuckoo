/*
* A place to manage the keystrokes
*/
function Keyboard() {

}
/*
* Keydown for when you press a key
*/
Keyboard.prototype.keydown = function(key) {
    switch(key) {
        case 83: //s
            $(document).trigger('move', {action:'goDown'})
            break;
        case 87: //w
            $(document).trigger('move', {action:'goUp'})
            break;
        case 65: //a
            $(document).trigger('move', {action:'goLeft'})
            break;
        case 68: //d
            $(document).trigger('move', {action:'goRight'})
            break;
        default: // all other keys
            //console.log(pressedKey);
            break;
    }
}
/*
* Key up for when you release a key
*/
Keyboard.prototype.keyup = function(key) {
    switch(key) {
        case 83: //s
            $(document).trigger('move', {action:'stopDown'});
            break;
        case 87: //w
            $(document).trigger('move', {action:'stopUp'});
            break;
        case 65: //a
            $(document).trigger('move', {action:'stopLeft'});
            break;
        case 68: //d
            $(document).trigger('move', {action:'stopRight'});
            break;
        default: // all other keys
            //console.log(pressedKey);
            break;
    }
}
