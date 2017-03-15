window.keyPressed = false;
window.delay = 120;
function throttle(fn) {
    return function() {
        switch(event.type) {
            case 'keydown':
                if(window.keyPressed == false) {
                    window.keyPressed = true;
                    setTimeout(function () { window.keyPressed = false; }, delay);
                    fn(event);
                }
                break;
            case 'keyup':
                window.keyPressed = false;
                fn(event);
                break;
        }
    }
};

function socket() {
    /*
    * Define the socket to the node server
    */
    window.socket = io('http://localhost:3000');
    /*
    * When you join register with the server
    */
    socket.on('connected', (data) => {
        console.log(data)
    });
}
