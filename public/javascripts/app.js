var Player = React.createClass({
    render: function() {
        return (
            <img src='/images/000.png' id='0' class='player'/>
        );
    }
});

ReactDOM.render(
    <Player></Player>,
    document.getElementById('app')
);
