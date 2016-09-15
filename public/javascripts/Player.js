/*
* The class for the client side player
*/
function Player(x, y, id) {
    /*
    * Place player on screen when created
    */
    $('body').append("<img src=\"/images/000.png\" id=\""+id+"\" class=\"player\">");
    $('#'+id).css('background', 'url("images/linkSpriteSheet.png") 0px 0px');
    $('#'+id).css('left', x+'px');
    $('#'+id).css('top', y+'px');
    /*
    * Player variables
    */
    this.id = id;
    this.x = x;
    this.y = y;
    this.speed = 12;
    this.animationRate = 100;
    this.isKeyDown = false;
}
/*
* When player moves update data, screen, and send data
*/
Player.prototype.move = function(move_object) {
    this.x = move_object.x;
    this.y = move_object.y;
    $('#' + this.id).css('left', move_object.x + 'px');
    $('#' + this.id).css('top', move_object.y + 'px');
    /*
    * Send the update to the server
    */
    socket.emit('update_position', this);
}
/*
* Update other players from server data
*/
Player.prototype.update_position = function(position) {
    this.x = position.x;
    this.y = position.y;
    $('#' + this.id).css('left', position.x+'px');
    $('#' + this.id).css('top', position.y+'px');
}
/*
* Define players upward movement
*/
Player.prototype.goUp = function() {
    if(this.isKeyDown == false) {
        this.intervalId = setInterval(function() {
            /*
            * Gather required information for sprite update
            */
            var background_css = $('#'+player.id).css('background-position').split(' ');
            var current_sprite_x = parseInt(background_css[0].replace('px', ''));
            /*
            * Shift the window on the sprite sheet
            */
            current_sprite_x = current_sprite_x - 90;
            if(current_sprite_x == -360) {
                current_sprite_x = 0;
            }
            /*
            * Set the sprite sheet to the new window position
            */
            background_css[0] = current_sprite_x+'px';
            background_css[1] = '-180px';
            $('#'+player.id).css('background-position', background_css.join(' '));
            /*
            * Move the players position on the screen
            */
            player.move({
                'x': player.x,
                'y': player.y - player.speed
            });
        }, this.animationRate);
        this.isKeyDown = true;
    }
}
/*
* Define players downward movement
*/
Player.prototype.goDown = function() {
    if(this.isKeyDown == false) {
        this.intervalId = setInterval(function() {
            /*
            * Gather required information for sprite update
            */
            var background_css = $('#'+player.id).css('background-position').split(' ');
            var current_sprite_x = parseInt(background_css[0].replace('px', ''));
            /*
            * Shift the window on the sprite sheet
            */
            current_sprite_x = current_sprite_x - 90;
            if(current_sprite_x == -360) {
                current_sprite_x = 0;
            }
            /*
            * Set the sprite sheet to the new window position
            */
            background_css[0] = current_sprite_x+'px';
            background_css[1] = '-270px';
            $('#'+player.id).css('background-position', background_css.join(' '));
            /*
            * Move the players position on the screen
            */
            player.move({
                'x': player.x,
                'y': player.y + player.speed
            });
        }, this.animationRate);
        this.isKeyDown = true;
    }
}
/*
* Define player leftward movement
*/
Player.prototype.goLeft = function() {
    if(this.isKeyDown == false) {
        this.intervalId = setInterval(function() {
            /*
            * Gather required information for sprite update
            */
            var background_css = $('#'+player.id).css('background-position').split(' ');
            var current_sprite_x = parseInt(background_css[0].replace('px', ''));
            /*
            * Shift the window on the sprite sheet
            */
            current_sprite_x = current_sprite_x - 90;
            if(current_sprite_x == -360) {
                current_sprite_x = 0;
            }
            /*
            * Set the sprite sheet to the new window position
            */
            background_css[0] = current_sprite_x+'px';
            background_css[1] = '0px';
            $('#'+player.id).css('background-position', background_css.join(' '));
            /*
            * Move the players position on the screen
            */
            player.move({
                'x': player.x - player.speed,
                'y': player.y
            });
        }, this.animationRate);
        this.isKeyDown = true;
    }
}
/*
* Define player rightward movement
*/
Player.prototype.goRight = function() {
    if(this.isKeyDown == false) {
        this.intervalId = setInterval(function() {
            /*
            * Gather required information for sprite update
            */
            var background_css = $('#'+player.id).css('background-position').split(' ');
            var current_sprite_x = parseInt(background_css[0].replace('px', ''));
            /*
            * Shift the window on the sprite sheet
            */
            current_sprite_x = current_sprite_x - 90;
            if(current_sprite_x == -360) {
                current_sprite_x = 0;
            }
            /*
            * Set the sprite sheet to the new window position
            */
            background_css[0] = current_sprite_x+'px';
            background_css[1] = '-90px';
            $('#'+player.id).css('background-position', background_css.join(' '));
            /*
            * Move the players position on the screen
            */
            player.move({
                'x': player.x + player.speed,
                'y': player.y
            });
        }, this.animationRate);
        this.isKeyDown = true;
    }
}
/*
* Stop the player in the right direction
*/
Player.prototype.stopUp = function() {
    if(this.isKeyDown == true) {
        clearInterval(this.intervalId);
        $('#'+this.id).css('background-position', '0px -180px');
        this.isKeyDown = false;
    }
}
Player.prototype.stopDown = function() {
    if(this.isKeyDown == true) {
        clearInterval(this.intervalId);
        $('#'+this.id).css('background-position', '0px -270px');
        this.isKeyDown = false;
    }
}
Player.prototype.stopLeft = function() {
    if(this.isKeyDown == true) {
        clearInterval(this.intervalId);
        $('#'+this.id).css('background-position', '0px 0px');
        this.isKeyDown = false;
    }
}
Player.prototype.stopRight = function() {
    if(this.isKeyDown == true) {
        clearInterval(this.intervalId);
        $('#'+this.id).css('background-position', '-360px -90px');
        this.isKeyDown = false;
    }
}
