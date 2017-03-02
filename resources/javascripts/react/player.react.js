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
