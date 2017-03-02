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
