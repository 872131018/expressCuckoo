/*
* the player class
*/
var playerClass = function(id, socket, x, y) {
	this.id = id;
    this.socket_id = socket;
    this.x = x;
    this.y = y;
}
module.exports = playerClass;
