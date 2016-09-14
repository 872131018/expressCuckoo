/*
* Include package for generating unique ids
*/
var uuid = require('node-uuid');

function Chicken(x, y) {
    /*
    * Chickens need to have unique ID
    */
    this.id = uuid.v4();
    /*
    * Chicken state stuff
    */
    this.speed = 8;
    this.animationRate = 100;
    this.x = x;
    this.y = y;
    /*
    * Store the chickens current action
    */
    this.currentMove = 'down';
}
/*
* Pick a random way to go
*/
Chicken.prototype.randomMove = function() {
    switch(Math.floor(Math.random() * 10)) {
        case 0:
            this.currentMove = 'left';
            this.updatePosition({
                'x': this.x - this.speed,
                'y': this.y
            });
            break;
        case 1:
            this.currentMove = 'right';
            this.updatePosition({
                'x': this.x + this.speed,
                'y': this.y
            });
            break;
        case 2:
            this.currentMove = 'up';
            this.updatePosition({
                'x': this.x,
                'y': this.y - this.speed
            });
            break;
        case 3:
            this.currentMove = 'down';
            this.updatePosition({
                'x': this.x,
                'y': this.y + this.speed
            });
            break;
    }
}
/*
* Update the chickens position
*/
Chicken.prototype.updatePosition = function(position) {
    this.x = position.x;
    this.y = position.y;
}

module.exports = Chicken;
