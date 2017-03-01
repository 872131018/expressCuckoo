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
