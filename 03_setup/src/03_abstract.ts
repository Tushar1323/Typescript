// abstract class -

// An abstract class typically includes one or more abstract methods or property declarations. The class which extends the abstract class must define all the abstract methods. 


abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ){}
        
    // method defining in abstract class
    abstract getSepia(): void

    // method declaring in abstract class
    getReelTime(): number{
        //some complex calculation
        return 8
    }
}


class Instagram extends TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number 
        ){
            super(cameraMode, filter)
        }

        // necessary to declared the method of abstract method 
        getSepia(): void {
            console.log("Sepia");
        }
        // not necessary to declared the getReelTime method 
}

const hc = new Instagram("test", "Test", 3)
hc.getReelTime()