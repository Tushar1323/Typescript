// interface in typescript -

// // type in js -
// type uss ={
//     id:number
//     email:string
//     userId:number
//     googleId?:string
// }


interface uss {
    readonly dbId: number
    email: string,
    userId: number,
    googleId?: string

    // First way to declared a method inside the interface -
    // startTrail: () => string // return type of startTrail function is string 
    // or 
    startTrail(): string // return type of startTrail function is string 

    getCoupon(couponname: string): number // parameter type is string and return type of getCoupon function is number 

}


// const hitesh: uss = {
//     dbId: 22, email: "h@h.com", userId: 2211,
//     startTrail: () => {
//         return "trail started"
//     },
//     // getCoupon:(name: 123) => { // error 
//     // getCoupon:(name: "hitesh10") => { // allow
//     getCoupon:(couponname: "hitesh10") => {
//         return 10
//     }
// }




// Reopening of the interface in typescript -
interface uss {
    githubToken: string
}


// const hitesh: uss = {
//     dbId: 22, email: "h@h.com", userId: 2211,
//     startTrail: () => {
//         return "trail started"
//     },
//     // getCoupon:(name: 123) => { // error 
//     // getCoupon:(name: "hitesh10") => { // allow
//     getCoupon:(couponname: "hitesh10") => {
//         return 10
//     },
//     githubToken : "Tushar1323" // adding any where 
// }


// Inheritances in interface -

interface Admin extends uss {
    role: "admin" | "ta" | "learner"
}

const hitesh: Admin = {
    dbId: 22, email: "h@h.com", userId: 2211,
    startTrail: () => {
        return "trail started"
    },
    // getCoupon:(name: 123) => { // error 
    // getCoupon:(name: "hitesh10") => { // allow
    getCoupon:(couponname: "hitesh10") => {
        return 10
    },
    githubToken : "Tushar1323" , // adding any where 
    role:"learner"
}



// Difference b/w type and interface -
// [ https://www.geeksforgeeks.org/what-is-the-difference-between-interface-and-type-in-typescript/ ]