/*
* Set player initial state
*/
let playerInitialState =  function() {
    return {
        id: 0,
        position: {
            x: 100,
            y: 100
        },
        spritePosition: {
            x: '0',
            y: '0'
        },
        speed: 12
    }
}
/*
* Set mutable player properties
*/
let playerMutableState = function(state) {
    return {
        id: state.id,
        position: state.position,
        spritePosition: state.spritePosition,
        speed: state.speed
    }
}
/*
* Player reducer defines player actions
*/
let playerReducer = function(player = playerInitialState(), action) {
    //console.log(player)
    switch(action.type) {
        case 'GO_UP':
            player.position.y -= player.speed;
            player.spritePosition.y = -180;
            break;
        case 'GO_LEFT':
            player.position.x -= player.speed;
            player.spritePosition.y = 0;
            break;
        case 'GO_DOWN':
            player.position.y += player.speed;
            player.spritePosition.y = -270;
            break;
        case 'GO_RIGHT':
            player.position.x += player.speed;
            player.spritePosition.y = -90;
            break;
        case 'STOP_UP':
            player.spritePosition.y = -180;
            break;
        case 'STOP_LEFT':
            player.spritePosition.y = 0;
            break;
        case 'STOP_DOWN':
            player.spritePosition.y = -270;
            break;
        case 'STOP_RIGHT':
            player.spritePosition.y = -90;
            break;
        default:
            break;
    }
    /*
    * Update animation when not stopping
    */
    if(action.type == 'STOP_UP' ||
        action.type == 'STOP_LEFT' ||
        action.type == 'STOP_DOWN' ||
        action.type == 'STOP_RIGHT') {
            player.spritePosition.x = 0;
    } else {
        player.spritePosition.x -= 90;
        if(player.spritePosition.x < -360) {
            player.spritePosition.x = 0;
        }
    }
    /*
    * could use nested ... but this is 1 line
    */
    return JSON.parse(JSON.stringify(player));
}
/*
* Create a store and pass the reducer
*/
var store = Redux.createStore(playerReducer);
/*
* Connect smart component to dumb component with react-redux
*/
Player = ReactRedux.connect(playerMutableState)(Player)
