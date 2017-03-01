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
