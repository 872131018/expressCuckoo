class Keyboard extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        /*
        * Get the window to listen for keydown
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
        /*
        * Get the window to listen for keyup events
        */
        window.onkeyup = throttle((event) => {
            switch(event.keyCode) {
                case 87: //w
                    store.dispatch({ type: 'STOP_UP' });
                    break;
                case 65: //a
                    store.dispatch({ type: 'STOP_LEFT' });
                    break;
                case 83: //s
                    store.dispatch({ type: 'STOP_DOWN' });
                    break;
                case 68: //d
                    store.dispatch({ type: 'STOP_RIGHT' });
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
                background: 'url("images/linkSpriteSheet.png")'
            }
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
                src='/images/0.png'/>
        );
    }
    /*
    * Use CSS to set position on the screen
    */
    getStyles() {
        /*
        * Set back location on the spritesheet
        */
        let spriteX = this.props.spritePosition.x + 'px';
        let spriteY = this.props.spritePosition.y + 'px';
        /*
        * Create the styles object
        */
        let styles = {
            backgroundImage: this.state.style.background,
            backgroundPosition: spriteX + ' ' + spriteY,
            top: this.props.position.y + 'px',
            left: this.props.position.x + 'px'
        };

        return styles;
    }
}

class Cuckoo extends React.Component {
    constructor() {
        super();
        /*
        * private const properties
        */
        this.state = {
            style: {
                background: 'url("images/chickenSpriteSheet.png")'
            }
        }
    }
    /*
    * Render JSX
    */
    render() {
        return (
            <img
                id={ this.props.id }
                className='cuckoo'
                style={ this.getStyles() }
                src='/images/0.png'/>
        );
    }
    /*
    * Use CSS to set position on the screen
    */
    getStyles() {
        /*
        * Set back location on the spritesheet
        */
        let spriteX = this.props.spritePosition.x + 'px';
        let spriteY = this.props.spritePosition.y + 'px';
        /*
        * Create the styles object
        */
        let styles = {
            backgroundImage: this.state.style.background,
            backgroundPosition: spriteX + ' ' + spriteY,
            top: this.props.position.y + 'px',
            left: this.props.position.x + 'px'
        };

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
                <Cuckoo/>
                <Keyboard/>
            </div>
        );
    }
}
