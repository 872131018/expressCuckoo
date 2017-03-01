var Player = React.createClass({
    getInitialState: function(){
        return {
            style: {
                background: 'url("images/linkSpriteSheet.png") 0px 0px',
                left: '100px',
                top: '100px'
            }
        }
    },
    render: function() {
        return (
            <img
                id='0'
                class='player'
                style={ this.state.style }
                src='/images/000.png'/>
        );
    }
});
