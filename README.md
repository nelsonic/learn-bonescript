learn-bonescript
================

Using Bonescript (JavaScript) to interact with BeagleBone Black SOC.

BoneScript is a Node.js Module/Library written in JavaScript that allows us to
interface with **BeagleBone Black**

At the time of writing, the BoneScript homepage is pretty bare: http://beagleboard.org/project/bonescript (snapshot: http://i.imgur.com/GIPblim.png)

But the basic tutorial that comes on the BeagleBone is straight forward enough.

![Nelsons BeagleBone Black](https://pbs.twimg.com/media/BX0vGbJIMAAjG8N.jpg:medium "Nelson's BeagleBone Black Unboxing")

Once I had completed the driver installation
(see: 

I loaded the 101 page: http://192.168.7.2/Support/bone101/ to try the basic project.
The simple LED script included was boring so I made it cycle through all the LEDs on the board:

```javascript
var b = require('bonescript');
console.log('Beagle says hi!');

setInterval(toggle, 500);

var state;
var led = 0;
function toggle() {
    if(state === b.LOW) {
        state = b.HIGH;
    } else {
        state = b.LOW;
        if(led === 3) { 
            led = 0; 
        } else {
            led++; 
        }
    }
    b.digitalWrite("USR"+led, state);
}
```

![Flashing Lights Script](https://raw.github.com/nelsonic/learn-bonescript/master/images/bonescript-basic-flashing-leds.png "Flashing Lights hello.js")

This is what it does: http://www.youtube.com/watch?v=1u3gNDfvSDQ

Pretty basic flashing LEDs.