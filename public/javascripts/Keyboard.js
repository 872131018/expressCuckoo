/*
* A place to manage the keyboard stuff
*/
function Keyboard() {

}
/*
* Keydown for when you press a key
*/
Keyboard.prototype.keydown = function(key) {
    switch(key) {
        case 83: //s
            player.goDown();
            break;
        case 87: //w
            player.goUp();
            break;
        case 65: //a
            player.goLeft();
            break;
        case 68: //d
            player.goRight();
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
            player.stopDown();
            break;
        case 87: //w
            player.stopUp();
            break;
        case 65: //a
            player.stopLeft();
            break;
        case 68: //d
            player.stopRight();
            break;
        default: // all other keys
            //console.log(pressedKey);
            break;
    }
}
