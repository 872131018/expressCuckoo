class Cuckoo extends React.Component {
    constructor() {
        super();
        /*
        * private const properties
        */
        this.state = {
            style: {
                background: 'url("images/chickenSpriteSheet.png")'
            }
        }
    }
    /*
    * Render JSX
    */
    render() {
        return (
            <img
                id={ this.props.id }
                className='cuckoo'
                style={ this.getStyles() }
                src='/images/000.png'/>
        );
    }
    /*
    * Use CSS to set position on the screen
    */
    getStyles() {
        /*
        * Set back location on the spritesheet
        */
        let spriteX = this.props.spritePosition.x + 'px';
        let spriteY = this.props.spritePosition.y + 'px';
        /*
        * Create the styles object
        */
        let styles = {
            background: this.state.style.background +' '+ spriteX +' '+ spriteY,
            top: this.props.position.y + 'px',
            left: this.props.position.x + 'px'
        };

        return styles;
    }
}
