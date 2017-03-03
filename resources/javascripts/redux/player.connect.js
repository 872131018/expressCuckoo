let PlayerState = function(state) {
    return {
        id: state.id,
        position: state.position
    }
}

Player = ReactRedux.connect(PlayerState)(Player)
