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
            style: {
                background: 'url("images/linkSpriteSheet.png") 0px 0px',
            },
            speed: 12,
            animationRate: 100
        }
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
    render: function() {
        return (
            <div>
                <Player/>
                <Keyboard/>
            </div>
        );
    }
});
