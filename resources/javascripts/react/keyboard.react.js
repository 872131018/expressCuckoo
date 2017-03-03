var Keyboard = React.createClass({
    componentDidMount: function() {
        window.onkeydown = function(event) {
            switch(event.keyCode) {
                case 87: //w
                    store.dispatch({
                        type: 'GO_UP'
                    });
                    break;
                case 65: //a
                    store.dispatch({
                        type: 'GO_LEFT'
                    });
                    break;
                case 83: //s
                    store.dispatch({
                        type: 'GO_DOWN'
                    });
                    break;
                case 68: //d
                    store.dispatch({
                        type: 'GO_RIGHT'
                    });
                    break;
                default: // all other keys
                    //console.log(pressedKey);
                    break;
            }
        }
    },
    render: function() {
        return (
            <div></div>
        );
    }
});
