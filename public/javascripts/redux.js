var playerReducer = function(player = {}, action) {
    switch(action.type) {
        case 'ADD_PLAYER':ac
            player = player;
            break;

    }
    return player;
}

// Create a store by passing in the reducer
var store = Redux.createStore(playerReducer);

store.subscribe(function() {
  console.log(store.getState())
});
