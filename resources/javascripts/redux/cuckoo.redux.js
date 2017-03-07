/*
* Set cuckoo initial state
*/
let cuckooInitialState =  function() {
    return {
        id: 'chicken1',
        position: {
            x: 300,
            y: 300
        },
        spritePosition: {
            x: 0,
            y: 0
        },
        speed: 8
    }
}
/*
* Set mutable cuckoo properties
*/
let cuckooMutableState = function(state) {
    let cuckoo = state.cuckoo;
    return {
        id: cuckoo.id,
        position: cuckoo.position,
        spritePosition: cuckoo.spritePosition,
        speed: cuckoo.speed
    }
}
/*
* Cuckoo reducer defines cuckoo actions
*/
function cuckooReducer(cuckoo = cuckooInitialState(), action) {
    switch(action.type) {
        case 'GO_UP':
            cuckoo.position.y -= cuckoo.speed;
            cuckoo.spritePosition.x -= 43;
            cuckoo.spritePosition.y = -129;
            break;
        case 'GO_LEFT':
            cuckoo.position.x -= cuckoo.speed;
            cuckoo.spritePosition.x -= 43;
            cuckoo.spritePosition.y = -43;
            break;
        case 'GO_DOWN':
            cuckoo.position.y += cuckoo.speed;
            cuckoo.spritePosition.x -= 43;
            cuckoo.spritePosition.y = 0;
            break;
        case 'GO_RIGHT':
            cuckoo.position.x += cuckoo.speed;
            cuckoo.spritePosition.x -= 43;
            cuckoo.spritePosition.y = -86;
            break;
        case 'STOP_UP':
            cuckoo.spritePosition.x = 0;
            cuckoo.spritePosition.y = -129;
            break;
        case 'STOP_LEFT':
            cuckoo.spritePosition.x = -43;
            cuckoo.spritePosition.y = -43;
            break;
        case 'STOP_DOWN':
            cuckoo.spritePosition.x = 0;
            cuckoo.spritePosition.y = 0;
            break;
        case 'STOP_RIGHT':
            cuckoo.spritePosition.x = -43;
            cuckoo.spritePosition.y = -86;
            break;
        default:
            break;
    }
    /*
    * Update animation when not stopping
    */
    if(cuckoo.spritePosition.x < -43) {
        cuckoo.spritePosition.x = 0;
    }
    /*
    * could use nested ... but this is 1 line
    */
    return JSON.parse(JSON.stringify(cuckoo));
}
