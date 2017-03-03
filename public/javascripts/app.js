class Keyboard extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        /*
        * Get the window to listen for keyboard events
        */
        window.onkeydown = throttle((event) => {
            switch(event.keyCode) {
                case 87: //w
                    store.dispatch({ type: 'GO_UP' });
                    break;
                case 65: //a
                    store.dispatch({ type: 'GO_LEFT' });
                    break;
                case 83: //s
                    store.dispatch({ type: 'GO_DOWN' });
                    break;
                case 68: //d
                    store.dispatch({ type: 'GO_RIGHT' });
                    break;
                default: // all other keys
                    break;
            }
        });
    }

    render() {
        return (
            <div></div>
        );
    }
}

class Player extends React.Component {
    constructor() {
        super();
        /*
        * private const properties
        */
        this.state = {
            style: {
                background: 'url("images/linkSpriteSheet.png") 0px 0px'
            },
            animationRate: 100
        }
    }
    /*
    * Render JSX
    */
    render() {
        return (
            <img
                id={ this.props.id }
                className='player'
                style={ this.getStyles() }
                src='/images/000.png'/>
        );
    }
    /*
    * Use CSS to set position on the screen
    */
    getStyles() {
        let styles = Object.assign({}, this.state.style, {
            top: this.props.position.y + 'px',
            left: this.props.position.x + 'px'
        });
        return styles;
    }
}

class App extends React.Component {
    constructor() {
        super();
    }
    
    render() {
        return (
            <div>
                <Player/>
                <Keyboard/>
            </div>
        );
    }
}
