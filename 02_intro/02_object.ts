// Creating object in typescript -
// const User = {
//     name: "hitesh",
//     email: "hitesh@lco.dev",
//     isAvtive: true
// }


// function createUser({name: string, isPaid: boolean}){
// }

// object -
// let newUser = {name: "hitesh", isPaid: false , isLogin:177}
// createUser(newUser)

// function createCourse():{}{
//     return {}
// }


// function createCourse():{name: string, price: number}{
//     return {name: "reactjs", price: 399}
// }



// Type in typescript -
// type User = {
//     name: string;
//     email: string;
//     isActive: boolean
// }

// function createUser(user: User): User{
//     return {name: "", email: "", isActive: true}
// }

// const userValue = createUser({name: "", email: "", isActive: true})


// type point ={
//     x:number;
//     y:number;
// }
// function pointCor(pt : point){
//     console.log(`The coordinate of x is ${pt.x}`);
//     console.log(`The coordinate of y is ${pt.y}`);
// }
// pointCor({x:177,y:181});


// Readonly keyword in typescript -
type User = {
    readonly _id: string  // we can't change the value _id further
    name: string
    email: string
    isActive: boolean
    credcardDetails?: number // if pass credcardDetails ok otherwise also okay
}

let myUser: User = {
    _id: "1245",
    name: "h",
    email: "h@h.com",
    isActive: false
}
myUser.email = "Tusaha@google.com";
// myUser._id = "Tsk1323"; // error 



// Adding different type at onces -
type cardNumber = {
    cardnumber: string
};

type cardDate = {
    cardDate: string
};

type cardDetails = cardNumber & cardDate & {
    cvv: number
};

let crd :cardDetails ={
    cardnumber :"1323" ,
    cardDate :"22082003" ,
    cvv : 424142
} 
console.log(crd.cvv); // 424142





export {}