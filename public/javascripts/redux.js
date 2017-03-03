

let initialState =  {
    player: {
        id: 0,
        position: {
            x: 100,
            y: 100
        },
        speed: 12
    }
}

let reducer = function(state, action) {
    console.log(state)
    /*
    * on first call set initial state of store
    */
    if(state === undefined) {
        return initialState;
    }
    /*
    * Handle the player actions
    */
    var newState = state;
    let player = state.player;
    switch(action.type) {
        case 'GO_UP':
            player.position.y += player.speed;
            break;
        case 'GO_LEFT':
            player.position.x -= player.speed;
            break;
        case 'GO_DOWN':
            player.position.y -= player.speed;
            break;
        case 'GO_RIGHT':
            player.position.x += player.speed;
            break;
        default:
            break;
    }
    newState = Object.assign({}, state, player);
    return newState;
}

// Create a store by passing in the reducer
var store = Redux.createStore(reducer, initialState);

let PlayerDispatch = function(dispatch) {
    return {
        goUp: function(y) {
            dispatch({
                type: 'GO_UP',
                y: y,
            })
        }
    }
}

let PlayerState = function(state) {
    return {
        id: state.id,
        position: state.position
    }
}

Player = ReactRedux.connect(PlayerState)(Player)
