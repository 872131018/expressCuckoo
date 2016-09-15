/*
* The client chicken class
*/
function Chicken(chicken) {
    /*
    * Place new chicken on screen when created
    */
    $('body').append("<img src=\"/images/000.png\" id=\""+chicken.id+"\" class=\"chicken\">")
    $('#'+chicken.id).css('background', 'url("images/chickenSpriteSheet.png") 0px 0px');
    /*
    * Chicken variables
    */
    this.id = chicken.id;
    this.speed = 8;
    this.animationRate = 100;
    this.x = chicken.x;
    this.y = chicken.y;
}
/*
* Update the chickens position
*/
Chicken.prototype.update = function(chicken) {
    this.x = chicken.x;
    this.y = chicken.y;
    $('#'+this.id).css('left', chicken.x+'px');
    $('#'+this.id).css('top', chicken.y+'px');
}
