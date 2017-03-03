class Keyboard extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        /*
        * Get the window to listen for keyboard events
        */
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
    }

    render() {
        return (
            <div></div>
        );
    }
}
