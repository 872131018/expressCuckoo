function objectManager() {
    return {
        update: function(event, action_object) {
            switch(event.type) {
                case 'move':
                    player[action_object['action']]()
                    break;
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
