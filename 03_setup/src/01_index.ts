console.log("🙏 Jai shri ram 🙏");

// class User {
//     email: string
//     name: string
//     constructor(email: string, name: string){
//         this.email = email; // you have to first declared the email and name above , otherwise TS give an error

//         this.name = name 
//     }
// }

// // const tsk = new User(email: "tsk@g.com", name: "Tushar") // error
// const tsk = new User("tsk@g.com", "Tushar") // allow





// class User {
//     email: string
//     name: string
//     // city: string  // error , need to initialize inside a constructor

//     city: string = "Jaipur" // allow ,not neccessary to initialize inside a constructor

//     // readonly city: string = "Jaipur" // read only

//     constructor(email: string, name: string){
//         this.email = email;
//         this.name = name
//     }
// }
// const tsk = new User("tsk@g.com", "Tushar") // allow
// tsk.city="varanasi" // allow 





// Public , Private and Protected in Typescript -
// This things are not in javascript ( private is but it is used as #name )
// class User {
//     // email: string 
//     // or 
//     public email: string // by default varaible are public

//     private name: string // only access to class itself

//     // city: string  // error , need to initialize inside a constructor

//     city: string = "Jaipur" // allow ,not neccessary to initialize inside a constructor

//     // readonly city: string = "Jaipur" // read only

//     constructor(email: string, name: string){
//         this.email = email;
//         this.name = name
//     }
// }
// const tsk = new User("tsk@g.com", "Tushar") // allow
// // console.log(tsk.name); // not accessiable 




// Another way to use public , private -
// class User {
//     constructor(
//         public email: string, 
//         public name: string
//         ){
//     }
// }
// const tsk = new User("tsk@g.com", "Tushar Keshari") // allow
// console.log(tsk.email); // accessiable 
// console.log(tsk.name); // accessiable 



// Getter and Setter in Typescript -
class User {
    protected _courseCount = 1
    readonly city: string = "Jaipur"
    constructor(
        public email: string,
        public name: string,
    ) {
    }

    get getAppleEmail(): string {
        return `apple${this.email}`
    }

    get courseCount(): number {
        return this._courseCount
    }

    // A 'set' accessor cannot have a return type annotation.
    // set courseCount(courseNum):void {
    // }

    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1")
        }
        this._courseCount = courseNum
    }

    // private method -
    private deleteToken() {
        console.log("Token deleted");
    }
}

class SubUser extends User {
    isFamily: boolean = true
    changeCourseCount() {
        this._courseCount = 4
    }
}

const hitesh = new User("h@h.com", "hitesh")
hitesh.name // accessable 
// hitesh._courseCount // not accessable 