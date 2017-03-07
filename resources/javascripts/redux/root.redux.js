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
