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
