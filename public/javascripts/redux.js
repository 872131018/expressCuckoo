let initialState =  {
    id: 0,
    position: {
        x: 100,
        y: 100
    },
    speed: 12
}

let reducer = function(player = initialState, action) {
    //console.log(player)
    switch(action.type) {
        case 'GO_UP':
            player.position.y -= player.speed;
            break;
        case 'GO_LEFT':
            player.position.x -= player.speed;
            break;
        case 'GO_DOWN':
            player.position.y += player.speed;
            break;
        case 'GO_RIGHT':
            player.position.x += player.speed;
            break;
        default:
            break;
    }
    /*
    * could use nested ... but this is 1 line
    */
    return JSON.parse(JSON.stringify(player));
}

// Create a store by passing in the reducer
var store = Redux.createStore(reducer);

let PlayerState = function(state) {
    return {
        id: state.id,
        position: state.position,
        speed: state.speed
    }
}

Player = ReactRedux.connect(PlayerState)(Player)
