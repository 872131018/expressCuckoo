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
