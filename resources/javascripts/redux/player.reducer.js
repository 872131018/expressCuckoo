var playerReducer = function(state, action) {
  if (state === undefined) {
    state = [];
  }
  if (action.type === 'ADD_USER') {
    state.push(action.user);
  }
  return state;
}

// Create a store by passing in the reducer
var store = Redux.createStore(userReducer);

// Dispatch our first action to express an intent to change the state
store.dispatch({
  type: 'ADD_USER',
  user: {name: 'Dan'}
});
