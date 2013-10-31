var b = require('bonescript');

setInterval(toggle, 100);

var state;
var led = 3;
function toggle() {
    if(state === b.LOW) {
        state = b.HIGH;
        if(led === 3) {
            led = 0; 
        } else {
            led++; 
        }
    } else {
        state = b.LOW;
    }
    b.digitalWrite("USR"+led, state);
    console.log("LED # "+led +" | "+state);
}


