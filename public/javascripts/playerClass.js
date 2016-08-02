function playerClass(x, y, id) {
    /*
    * Place player on screen when created
    */
    $('body').append("<img src=\"/images/000.png\" id=\"player\" class=\"player\">")
    $('#player').css('background', 'url("images/linkSpriteSheet.png") 0px 0px');
    return {
        /*
        * Player state
        */
        speed : 12,
        animationRate : 100,
        positionX : x,
        positionY : y,
        /*
        * Need to track ID for other players
        */
        id: id,
        /*
        * Used for stopping key repeat events
        */
        isKeyDown : false,
        /*
        * Player functions
        */
        updatePosition : function(positionObject) {
            this.positionX = positionObject['x']
            this.positionY = positionObject['y']
            $('#player').css('left', this.positionX+'px')
            $('#player').css('top', this.positionY+'px')
            /*
            * Send the update down the pipe
            */
            socket.emit('position_update', this)
        },
        goUp : function() {
            if(this.isKeyDown == false) {
                this.intervalId = setInterval(function() {
                    var backgroundArray= $('#player').css('background').split(' ')
                    var currentFrameX = backgroundArray[7]
                    var currentFrameY = backgroundArray[8]
                    switch(currentFrameX) {
                        case '0px':
                            $('#player').css('background', 'url("images/linkSpriteSheet.png") -90px -180px')
                            break;
                        case '-90px':
                            $('#player').css('background', 'url("images/linkSpriteSheet.png") -180px -180px')
                            break;
                        case '-180px':
                            $('#player').css('background', 'url("images/linkSpriteSheet.png") -270px -180px')
                            break;
                        case '-270px':
                            $('#player').css('background', 'url("images/linkSpriteSheet.png") -360px -180px')
                            break;
                        default:
                           $('#player').css('background', 'url("images/linkSpriteSheet.png") 0px -180px')
                            break;
                    }
                    this.player.updatePosition({
                        'x': this.player.positionX,
                        'y': this.player.positionY-this.player.speed
                    })
                }, this.animationRate)
                this.isKeyDown = true
            }
        },
        goDown : function() {
            if(this.isKeyDown == false) {
                this.intervalId = setInterval(function() {
                    var backgroundArray= $('#player').css('background').split(' ');
                    var currentFrameX = backgroundArray[7];
                    var currentFrameY = backgroundArray[8];
                    switch(currentFrameX) {
                        case '0px':
                            $('#player').css('background', 'url("images/linkSpriteSheet.png") -90px -270px');
                            break;
                        case '-90px':
                            $('#player').css('background', 'url("images/linkSpriteSheet.png") -180px -270px');
                            break;
                        case '-180px':
                            $('#player').css('background', 'url("images/linkSpriteSheet.png") -270px -270px');
                            break;
                        case '-270px':
                            $('#player').css('background', 'url("images/linkSpriteSheet.png") -360px -270px');
                            break;
                        default:
                           $('#player').css('background', 'url("images/linkSpriteSheet.png") 0px -270px');
                            break;
                    }
                    this.player.updatePosition({
                        'x': this.player.positionX,
                        'y': this.player.positionY+this.player.speed
                    })
                }, this.animationRate)
            this.isKeyDown = true;
            }
        },
        goLeft : function goLeft() {
            if(this.isKeyDown == false) {
                this.intervalId = setInterval(function() {
                    var backgroundArray= $('#player').css('background').split(' ');
                    var currentFrameX = backgroundArray[7];
                    var currentFrameY = backgroundArray[8];
                    switch(currentFrameX)
                    {
                        case '0px':
                            $('#player').css('background', 'url("images/linkSpriteSheet.png") -90px 0px');
                            break;
                        case '-90px':
                            $('#player').css('background', 'url("images/linkSpriteSheet.png") -180px 0px');
                            break;
                        case '-180px':
                            $('#player').css('background', 'url("images/linkSpriteSheet.png") -270px 0px');
                            break;
                        case '-270px':
                            $('#player').css('background', 'url("images/linkSpriteSheet.png") -360px 0px');
                            break;
                        default:
                           $('#player').css('background', 'url("images/linkSpriteSheet.png") 0px 0px');
                            break;
                    }
                    this.player.updatePosition({
                        'x': this.player.positionX-this.player.speed,
                        'y': this.player.positionY
                    })
                }, this.animationRate)
                this.isKeyDown = true
            }
        },
        goRight : function() {
            if(this.isKeyDown == false) {
                this.intervalId = setInterval(function() {
                    var backgroundArray= $('#player').css('background').split(' ');
                    var currentFrameX = backgroundArray[7];
                    var currentFrameY = backgroundArray[8];
                    switch(currentFrameX)
                    {
                        case '-360px':
                            $('#player').css('background', 'url("images/linkSpriteSheet.png") 0px -90px');
                            break;
                        case '0px':
                            $('#player').css('background', 'url("images/linkSpriteSheet.png") -90px -90px');
                            break;
                        case '-90px':
                            $('#player').css('background', 'url("images/linkSpriteSheet.png") -180px -90px');
                            break;
                        case '-180px':
                            $('#player').css('background', 'url("images/linkSpriteSheet.png") -270px -90px');
                            break;
                        default:
                           $('#player').css('background', 'url("images/linkSpriteSheet.png") -360px -90px');
                            break;
                    }
                    this.player.updatePosition({
                        'x': this.player.positionX+this.player.speed,
                        'y': this.player.positionY
                    })
                }, this.animationRate )
                this.isKeyDown = true;
            }
        },
        stopUp : function() {
            if(this.isKeyDown == true) {
                clearInterval(this.intervalId);
                $('#player').css('background', 'url("images/linkSpriteSheet.png") 0px -180px');
                this.isKeyDown = false;
            }
        },
        stopDown : function() {
            if(this.isKeyDown == true) {
                clearInterval(this.intervalId);
                $('#player').css('background', 'url("images/linkSpriteSheet.png") 0px -270px');
                this.isKeyDown = false;
            }
        },
        stopLeft : function() {
            if(this.isKeyDown == true) {
                clearInterval(this.intervalId);
                $('#player').css('background', 'url("images/linkSpriteSheet.png") 0px 0px');
                this.isKeyDown = false;
            }
        },
        stopRight : function() {
            if(this.isKeyDown == true) {
                clearInterval(this.intervalId);
                $('#player').css('background', 'url("images/linkSpriteSheet.png") -360px -90px');
                this.isKeyDown = false;
            }
        }
    }
}
