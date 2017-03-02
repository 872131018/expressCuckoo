var Keyboard = React.createClass({
    componentDidMount: function() {
        window.onkeydown = function(event) {
            switch(event.keyCode) {
                case 87: //w
                    this.goUp();
                    break;
                case 65: //a
                    this.goLeft();
                    break;
                case 83: //s
                    this.goDown();
                    break;
                case 68: //d
                    this.goRight();
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

var Player = React.createClass({
    getInitialState: function() {
        return {
            id: 0,
            position: {
                x: 100,
                y: 100
            },
            style: {
                background: 'url("images/linkSpriteSheet.png") 0px 0px',
            },
            speed: 12,
            animation_rate: 100,
            keydown: false
        }
    },
    componentDidMount: function() {
        // Dispatch our first action to express an intent to change the state
        store.dispatch({
          type: 'ADD_PLAYER',
          player: {
              name: 'Link',
              state: this.state
          }
        });
    },
    render: function() {
        return (
            <img
                id={ this.state.id }
                className='player'
                style={ this.state.style }
                src='/images/000.png'/>
        );
    }
});

var App = React.createClass({
    getInitialState: function(){
        return {

        }
    },
    render: function() {
        return (
            <div>
                <Player/>
                <Keyboard/>
            </div>
        );
    }
});

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);
