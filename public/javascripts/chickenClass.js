function chickenClass(chicken) {
    /*
    * Place new chicken on screen when created
    */
    $('body').append("<img src=\"/images/000.png\" id=\""+chicken.id+"\" class=\"chicken\">")
    $('#'+chicken.id).css('background', 'url("images/chickenSpriteSheet.png") 0px 0px');
    return {
        /*
        * Chicken state
        */
        speed : 8,
        animationRate : 100,
        x : chicken.x,
        y : chicken.y,
        /*
        * Need to track ID
        */
        id: chicken.id,
        /*
        * chicken functions
        */
        update : function(chicken) {
            this.x = chicken.x
            this.y = chicken.y
            $('#'+this.id).css('left', this.x+'px')
            $('#'+this.id).css('top', this.y+'px')
        }
    }
}
