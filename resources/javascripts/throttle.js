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
