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
    getInitialState: function(){
        return {
            style: {
                background: 'url("images/linkSpriteSheet.png") 0px 0px',
                left: '100px',
                top: '100px'
            },
            id: 0,
            position: {
                x: 100,
                y: 100
            },
            speed: 12,
            animation_rate: 100,
            keydown: false
        }
    },
    render: function() {
        return (
            <img
                id='0'
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
