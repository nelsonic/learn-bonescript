learn-bonescript
================

Using Bonescript (JavaScript) to interact with BeagleBone Black SOC.
- - -

BoneScript is a **Node.js Library** that 
allows us to interface with **BeagleBone Black** micro computer.

If you don't know what a BeagleBone is, read:

- http://beagleboard.org/
- http://beagleboard.org/Products/BeagleBone%20Black

This is *my* BeagleBone:

![Nelsons BeagleBone Black](https://pbs.twimg.com/media/BX0vGbJIMAAjG8N.jpg:medium "Nelson's BeagleBone Black Unboxing")


At the time of writing, the BoneScript homepage is pretty bare: http://beagleboard.org/project/bonescript (snapshot: http://i.imgur.com/GIPblim.png) 
thankfully the GitHub page has enough detail to get started: 
https://github.com/jadonk/bonescript

Once you have completed the driver installation 
(Mac & Win only, Linux users already have everything you need),
see: http://beagleboard.org/Getting%20Started

You should be able to access your BeagleBone at: http://192.168.7.2

The basic tutorial that comes on the BeagleBone is straight forward enough:
http://192.168.7.2/Support/bone101/

The simple LED script included was boring so I made it cycle through 
all the LEDs on the board. Load the Cloud9 IDE: http://192.168.7.2:3000/
and create a new file called **flash.js**:


```javascript
var b = require('bonescript'),
    led = 3, state; // globals (forgivable in a nano-script!)

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

setInterval(toggle, 100);
```

![Flashing Lights Script](https://raw.github.com/nelsonic/learn-bonescript/master/images/bonescript-basic-flashing-leds.png "Flashing Lights hello.js")

Then click "**Run**" in the IDE and see watch the LEDs on your BBB:

Here's a video of mine: http://www.youtube.com/watch?v=1u3gNDfvSDQ

>> More exciting projects to follow! (need to get back to work...)


#### Notes:

- Intro Video (key features): http://www.youtube.com/watch?v=xZVKC8o3XA4
- Getting Started: http://beagleboard.org/Getting%20Started
- GitHub: https://github.com/jadonk/bonescript

#### Investigate Further:

- Open Beacon (RFID): http://www.openbeacon.org/ + http://www.openpcd.org/OpenBeacon_USB
- RFID Cape: http://elinux.org/BeagleBone_Black_RFID_Adaptor_Cape
- LCD: http://uk.rs-online.com/web/p/processor-microcontroller-development-kits/7753802/
- Launchpad: http://processors.wiki.ti.com/index.php/MSP430_LaunchPad
- TRF7970A Transceiver (NFC/RFID): http://www.digikey.com/product-highlights/us/en/texas-instruments-trf7970a-transceiver-ic/160