function objectManager() {
    return {
        update: function(dataObject) {
            switch(dataObject['object']) {
                case 'player':
                player[dataObject['action']]()
                    // break;
                case 'chicken':
                    switch(dataObject['action']) {
                        case 'randomMove':
                            chicken.randomMove()
                            break;
                    }
                    break;
                default:
                    console.log('game object not implemented');
                    break;
            }
        }
    }
}
