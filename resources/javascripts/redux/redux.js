// Create a store by passing in the reducer
var store = Redux.createStore(playerReducer);

store.subscribe(function() {
  console.log(store.getState())
});
