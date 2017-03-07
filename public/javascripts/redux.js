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
            x: 0,
            y: 0
        },
        speed: 12
    }
}
/*
* Set mutable player properties
*/
let playerMutableState = function(state) {
    let player = state.player;
    return {
        id: player.id,
        position: player.position,
        spritePosition: player.spritePosition,
        speed: player.speed
    }
}
/*
* Player reducer defines player actions
*/
function playerReducer(player = playerInitialState(), action) {
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
    if(window.keyPressed == false) {
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
* Set cuckoo initial state
*/
let cuckooInitialState =  function() {
    return {
        id: 'chicken1',
        position: {
            x: 300,
            y: 300
        },
        spritePosition: {
            x: 0,
            y: 0
        },
        speed: 8
    }
}
/*
* Set mutable cuckoo properties
*/
let cuckooMutableState = function(state) {
    let cuckoo = state.cuckoo;
    return {
        id: cuckoo.id,
        position: cuckoo.position,
        spritePosition: cuckoo.spritePosition,
        speed: cuckoo.speed
    }
}
/*
* Cuckoo reducer defines cuckoo actions
*/
function cuckooReducer(cuckoo = cuckooInitialState(), action) {
    switch(action.type) {
        case 'GO_UP':
            cuckoo.position.y -= cuckoo.speed;
            cuckoo.spritePosition.x -= 43;
            cuckoo.spritePosition.y = -129;
            break;
        case 'GO_LEFT':
            cuckoo.position.x -= cuckoo.speed;
            cuckoo.spritePosition.x -= 43;
            cuckoo.spritePosition.y = -43;
            break;
        case 'GO_DOWN':
            cuckoo.position.y += cuckoo.speed;
            cuckoo.spritePosition.x -= 43;
            cuckoo.spritePosition.y = 0;
            break;
        case 'GO_RIGHT':
            cuckoo.position.x += cuckoo.speed;
            cuckoo.spritePosition.x -= 43;
            cuckoo.spritePosition.y = -86;
            break;
        case 'STOP_UP':
            cuckoo.spritePosition.x = 0;
            cuckoo.spritePosition.y = -129;
            break;
        case 'STOP_LEFT':
            cuckoo.spritePosition.x = -43;
            cuckoo.spritePosition.y = -43;
            break;
        case 'STOP_DOWN':
            cuckoo.spritePosition.x = 0;
            cuckoo.spritePosition.y = 0;
            break;
        case 'STOP_RIGHT':
            cuckoo.spritePosition.x = -43;
            cuckoo.spritePosition.y = -86;
            break;
        default:
            break;
    }
    /*
    * Update animation when not stopping
    */
    if(cuckoo.spritePosition.x < -43) {
        cuckoo.spritePosition.x = 0;
    }
    /*
    * could use nested ... but this is 1 line
    */
    return JSON.parse(JSON.stringify(cuckoo));
}

let rootReducer = Redux.combineReducers({
    player: playerReducer,
    cuckoo: cuckooReducer
});
/*
* Create a store and pass the reducer
*/
var store = Redux.createStore(rootReducer);
/*
* Connect smart component to dumb component with react-redux
*/
Player = ReactRedux.connect(playerMutableState)(Player)
Cuckoo = ReactRedux.connect(cuckooMutableState)(Cuckoo)
