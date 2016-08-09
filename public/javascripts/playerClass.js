function playerClass(x, y, id) {
    /*
    * Place player on screen when created
    */
    $('body').append("<img src=\"/images/000.png\" id=\""+id+"\" class=\"player\">")
    $('#'+id).css('background', 'url("images/linkSpriteSheet.png") 0px 0px');
    $('#'+id).css('left', x+'px')
    $('#'+id).css('top', y+'px')
    return {
        /*
        * Player state
        */
        speed : 12,
        animationRate : 100,
        x : x,
        y : y,
        /*
        * Need to track ID for other players
        */
        id : id,
        /*
        * Used for stopping key repeat events
        */
        isKeyDown : false,
        /*
        * Player functions
        */
        move : function(move_object) {
            this.x = move_object.x
            this.y = move_object.y
            $('#'+id).css('left', move_object.x+'px')
            $('#'+id).css('top', move_object.y+'px')
            /*
            * Send the update down the pipe
            */
            socket.emit('update_position', this)
        },
        update_position : function(positionObject) {
            this.x = positionObject['x']
            this.y = positionObject['y']
            $('#'+id).css('left', this.x+'px')
            $('#'+id).css('top', this.y+'px')
        },
        goUp : function() {
            if(this.isKeyDown == false) {
                this.intervalId = setInterval(function() {
                    var backgroundArray= $('#'+id).css('background').split(' ')
                    var currentFrameX = backgroundArray[7]
                    var currentFrameY = backgroundArray[8]
                    switch(currentFrameX) {
                        case '0px':
                            $('#'+id).css('background', 'url("images/linkSpriteSheet.png") -90px -180px')
                            break;
                        case '-90px':
                            $('#'+id).css('background', 'url("images/linkSpriteSheet.png") -180px -180px')
                            break;
                        case '-180px':
                            $('#'+id).css('background', 'url("images/linkSpriteSheet.png") -270px -180px')
                            break;
                        case '-270px':
                            $('#'+id).css('background', 'url("images/linkSpriteSheet.png") -360px -180px')
                            break;
                        default:
                           $('#'+id).css('background', 'url("images/linkSpriteSheet.png") 0px -180px')
                            break;
                    }
                    this.player.move({
                        'x': this.player.x,
                        'y': this.player.y-this.player.speed
                    })
                }, this.animationRate)
                this.isKeyDown = true
            }
        },
        goDown : function() {
            if(this.isKeyDown == false) {
                this.intervalId = setInterval(function() {
                    var backgroundArray= $('#'+id).css('background').split(' ');
                    var currentFrameX = backgroundArray[7];
                    var currentFrameY = backgroundArray[8];
                    switch(currentFrameX) {
                        case '0px':
                            $('#'+id).css('background', 'url("images/linkSpriteSheet.png") -90px -270px');
                            break;
                        case '-90px':
                            $('#'+id).css('background', 'url("images/linkSpriteSheet.png") -180px -270px');
                            break;
                        case '-180px':
                            $('#'+id).css('background', 'url("images/linkSpriteSheet.png") -270px -270px');
                            break;
                        case '-270px':
                            $('#'+id).css('background', 'url("images/linkSpriteSheet.png") -360px -270px');
                            break;
                        default:
                           $('#'+id).css('background', 'url("images/linkSpriteSheet.png") 0px -270px');
                            break;
                    }
                    this.player.move({
                        'x': this.player.x,
                        'y': this.player.y+this.player.speed
                    })
                }, this.animationRate)
            this.isKeyDown = true;
            }
        },
        goLeft : function goLeft() {
            if(this.isKeyDown == false) {
                this.intervalId = setInterval(function() {
                    var backgroundArray= $('#'+id).css('background').split(' ');
                    var currentFrameX = backgroundArray[7];
                    var currentFrameY = backgroundArray[8];
                    switch(currentFrameX)
                    {
                        case '0px':
                            $('#'+id).css('background', 'url("images/linkSpriteSheet.png") -90px 0px');
                            break;
                        case '-90px':
                            $('#'+id).css('background', 'url("images/linkSpriteSheet.png") -180px 0px');
                            break;
                        case '-180px':
                            $('#'+id).css('background', 'url("images/linkSpriteSheet.png") -270px 0px');
                            break;
                        case '-270px':
                            $('#'+id).css('background', 'url("images/linkSpriteSheet.png") -360px 0px');
                            break;
                        default:
                           $('#'+id).css('background', 'url("images/linkSpriteSheet.png") 0px 0px');
                            break;
                    }
                    this.player.move({
                        'x': this.player.x-this.player.speed,
                        'y': this.player.y
                    })
                }, this.animationRate)
                this.isKeyDown = true
            }
        },
        goRight : function() {
            if(this.isKeyDown == false) {
                this.intervalId = setInterval(function() {
                    var backgroundArray= $('#'+id).css('background').split(' ');
                    var currentFrameX = backgroundArray[7];
                    var currentFrameY = backgroundArray[8];
                    switch(currentFrameX)
                    {
                        case '-360px':
                            $('#'+id).css('background', 'url("images/linkSpriteSheet.png") 0px -90px');
                            break;
                        case '0px':
                            $('#'+id).css('background', 'url("images/linkSpriteSheet.png") -90px -90px');
                            break;
                        case '-90px':
                            $('#'+id).css('background', 'url("images/linkSpriteSheet.png") -180px -90px');
                            break;
                        case '-180px':
                            $('#'+id).css('background', 'url("images/linkSpriteSheet.png") -270px -90px');
                            break;
                        default:
                           $('#'+id).css('background', 'url("images/linkSpriteSheet.png") -360px -90px');
                            break;
                    }
                    this.player.move({
                        'x': this.player.x+this.player.speed,
                        'y': this.player.y
                    })
                }, this.animationRate )
                this.isKeyDown = true;
            }
        },
        stopUp : function() {
            if(this.isKeyDown == true) {
                clearInterval(this.intervalId);
                $('#'+id).css('background', 'url("images/linkSpriteSheet.png") 0px -180px');
                this.isKeyDown = false;
            }
        },
        stopDown : function() {
            if(this.isKeyDown == true) {
                clearInterval(this.intervalId);
                $('#'+id).css('background', 'url("images/linkSpriteSheet.png") 0px -270px');
                this.isKeyDown = false;
            }
        },
        stopLeft : function() {
            if(this.isKeyDown == true) {
                clearInterval(this.intervalId);
                $('#'+id).css('background', 'url("images/linkSpriteSheet.png") 0px 0px');
                this.isKeyDown = false;
            }
        },
        stopRight : function() {
            if(this.isKeyDown == true) {
                clearInterval(this.intervalId);
                $('#'+id).css('background', 'url("images/linkSpriteSheet.png") -360px -90px');
                this.isKeyDown = false;
            }
        }
    }
}
