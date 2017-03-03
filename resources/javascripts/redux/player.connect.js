let PlayerState = function(state) {
    return {
        id: state.id,
        position: state.position,
        speed: state.speed
    }
}

Player = ReactRedux.connect(PlayerState)(Player)
