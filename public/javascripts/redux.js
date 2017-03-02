let initialize = {
    player: {
        id: 0,
        position: {
            x: 100,
            y: 100
        }
    }
}

let reducer = function(state, action) {
    console.log(state)
    if(state === undefined) {
        return initialize;
    }
    var newState = state;
    switch(action.type) {
        case 'GO_UP':
            newState = Object.assign({}, state, {y: state.y});
            break;
        default:
            break;
    }
    console.log(newState)
    return newState;
}

// Create a store by passing in the reducer
var store = Redux.createStore(reducer, initialize);

let PlayerState = function(state) {
    return {
        id: state.id,
        position: state.position
    }
}

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

console.log(Player)
Player = ReactRedux.connect(PlayerState)(Player)
