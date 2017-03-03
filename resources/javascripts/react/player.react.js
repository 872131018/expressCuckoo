class Player extends React.Component {
    constructor() {
        super();
        /*
        * private const properties
        */
        this.state = {
            style: {
                background: 'url("images/linkSpriteSheet.png") 0px 0px'
            },
            animationRate: 100
        }
    }
    /*
    * Render JSX
    */
    render() {
        return (
            <img
                id={ this.props.id }
                className='player'
                style={ this.getStyles() }
                src='/images/000.png'/>
        );
    }
    /*
    * Use CSS to set position on the screen
    */
    getStyles() {
        let styles = Object.assign({}, this.state.style, {
            top: this.props.position.y + 'px',
            left: this.props.position.x + 'px'
        });
        return styles;
    }
}
