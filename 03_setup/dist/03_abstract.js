"use strict";
// abstract class -
// An abstract class typically includes one or more abstract methods or property declarations. The class which extends the abstract class must define all the abstract methods. 
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    // method declaring in abstract class
    getReelTime() {
        //some complex calculation
        return 8;
    }
}
class Instagram extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    // necessary to declared the method of abstract method 
    getSepia() {
        console.log("Sepia");
    }
}
const hc = new Instagram("test", "Test", 3);
hc.getReelTime();
