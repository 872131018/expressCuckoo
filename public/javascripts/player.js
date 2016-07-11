function player(passedX, passedY) {
  /*
  * Player state
  */
  this.speed = 12;
  this.animationRate = 100;
  this.positionX = passedX;
  this.positionY = passedY;
  /*
  * Used for stopping key repeat events
  */
  this.isKeyDown = false;
  /*
  * Player functions
  */
  this.updatePosition = updatePosition;
  this.goUp = goUp;
  this.goDown = goDown;
  this.goLeft = goLeft;
  this.goRight = goRight;
  this.stopUp = stopUp;
  this.stopDown = stopDown;
  this.stopLeft = stopLeft;
  this.stopRight = stopRight;
  //fine tune the player collision box
  /*
  * Place player on screen when created
  */
  $('#player').css('background', 'url("images/linkSpriteSheet.png") 0px 0px');

}
function stopLeft()
{
    if(player.isKeyDown == true)
    {
        clearInterval(player.intervalId);
        $('#player').css('background', 'url("../assets/linkSpriteSheet.png") 0px 0px');
        player.isKeyDown = false;
    }
};
function stopRight()
{
    if(player.isKeyDown == true)
    {
        clearInterval(player.intervalId);
        $('#player').css('background', 'url("../assets/linkSpriteSheet.png") -360px -90px');
        player.isKeyDown = false;
    }
};
function stopUp()
{
    if(player.isKeyDown == true)
    {
        clearInterval(player.intervalId);
        $('#player').css('background', 'url("../assets/linkSpriteSheet.png") 0px -180px');
        player.isKeyDown = false;
    }
};
function stopDown()
{
    if(player.isKeyDown == true)
    {
        clearInterval(player.intervalId);
        $('#player').css('background', 'url("../assets/linkSpriteSheet.png") 0px -270px');
        player.isKeyDown = false;
    }
};
function goLeft()
{
    if(player.isKeyDown == false)
    {
        player.intervalId = setInterval(
            function()
            {
                var backgroundArray= $('#player').css('background').split(' ');
                var currentFrameX = backgroundArray[7];
                var currentFrameY = backgroundArray[8];
                switch(currentFrameX)
                {
                    case '0px':
                        $('#player').css('background', 'url("../assets/linkSpriteSheet.png") -90px 0px');
                        break;
                    case '-90px':
                        $('#player').css('background', 'url("../assets/linkSpriteSheet.png") -180px 0px');
                        break;
                    case '-180px':
                        $('#player').css('background', 'url("../assets/linkSpriteSheet.png") -270px 0px');
                        break;
                    case '-270px':
                        $('#player').css('background', 'url("../assets/linkSpriteSheet.png") -360px 0px');
                        break;
                    default:
                       $('#player').css('background', 'url("../assets/linkSpriteSheet.png") 0px 0px');
                        break;
                }
                player.updatePosition({'x': player.positionX-player.speed, 'y': player.positionY});
            },
            player.animationRate
        );
    player.isKeyDown = true;
    }
};
function goRight()
{
    if(player.isKeyDown == false)
    {
        player.intervalId = setInterval(
            function()
            {
                var backgroundArray= $('#player').css('background').split(' ');
                var currentFrameX = backgroundArray[7];
                var currentFrameY = backgroundArray[8];
                switch(currentFrameX)
                {
                    case '-360px':
                        $('#player').css('background', 'url("../assets/linkSpriteSheet.png") 0px -90px');
                        break;
                    case '0px':
                        $('#player').css('background', 'url("../assets/linkSpriteSheet.png") -90px -90px');
                        break;
                    case '-90px':
                        $('#player').css('background', 'url("../assets/linkSpriteSheet.png") -180px -90px');
                        break;
                    case '-180px':
                        $('#player').css('background', 'url("../assets/linkSpriteSheet.png") -270px -90px');
                        break;
                    default:
                       $('#player').css('background', 'url("../assets/linkSpriteSheet.png") -360px -90px');
                        break;
                }
                player.updatePosition({'x': player.positionX+player.speed, 'y': player.positionY});
            },
            player.animationRate
        );
    player.isKeyDown = true;
    }
};
function goUp()
{
    if(player.isKeyDown == false)
    {
        player.intervalId = setInterval(
            function()
            {
                var backgroundArray= $('#player').css('background').split(' ');
                var currentFrameX = backgroundArray[7];
                var currentFrameY = backgroundArray[8];
                switch(currentFrameX)
                {
                    case '0px':
                        $('#player').css('background', 'url("../assets/linkSpriteSheet.png") -90px -180px');
                        break;
                    case '-90px':
                        $('#player').css('background', 'url("../assets/linkSpriteSheet.png") -180px -180px');
                        break;
                    case '-180px':
                        $('#player').css('background', 'url("../assets/linkSpriteSheet.png") -270px -180px');
                        break;
                    case '-270px':
                        $('#player').css('background', 'url("../assets/linkSpriteSheet.png") -360px -180px');
                        break;
                    default:
                       $('#player').css('background', 'url("../assets/linkSpriteSheet.png") 0px -180px');
                        break;
                }
                player.updatePosition({'x': player.positionX, 'y': player.positionY-player.speed});
            },
            player.animationRate
        );
    player.isKeyDown = true;
    }
};
function goDown()
{
    if(player.isKeyDown == false)
    {
        player.intervalId = setInterval(
            function()
            {
                var backgroundArray= $('#player').css('background').split(' ');
                var currentFrameX = backgroundArray[7];
                var currentFrameY = backgroundArray[8];
                switch(currentFrameX)
                {
                    case '0px':
                        $('#player').css('background', 'url("../assets/linkSpriteSheet.png") -90px -270px');
                        break;
                    case '-90px':
                        $('#player').css('background', 'url("../assets/linkSpriteSheet.png") -180px -270px');
                        break;
                    case '-180px':
                        $('#player').css('background', 'url("../assets/linkSpriteSheet.png") -270px -270px');
                        break;
                    case '-270px':
                        $('#player').css('background', 'url("../assets/linkSpriteSheet.png") -360px -270px');
                        break;
                    default:
                       $('#player').css('background', 'url("../assets/linkSpriteSheet.png") 0px -270px');
                        break;
                }
                player.updatePosition({'x': player.positionX, 'y': player.positionY+player.speed});
            },
            player.animationRate
        );
    player.isKeyDown = true;
    }
};
function updatePosition(positionObject)
{
    player.positionX = positionObject['x'];
    player.positionY = positionObject['y'];
    $('#player').css('left', player.positionX+'px');
    $('#player').css('top', player.positionY+'px');
};
