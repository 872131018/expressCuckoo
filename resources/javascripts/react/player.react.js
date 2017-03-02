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
