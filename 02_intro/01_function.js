"use strict";
// // function addTwo(num: any): any -
// function addTwo(num){
//     num.toUpperCase()
//     return num+2
// }
// addTwo(77)
Object.defineProperty(exports, "__esModule", { value: true });
// function addTwo(num: number){
//     return num + 2
// }
// addTwo(77) 
// function getUpper(val: string){
//    return val.toUpperCase()
// }
// getUpper("Tushar")
// function getValue(myVal: number){
//     if (myVal > 5) {
//         return true
//     }
//     return "200 OK"
// }
// getValue(77)
// const heros = ["thor", "spiderman", "ironman",177]
// // const heros = [1, 2, 3]
// heros.map((hero):void=> {
// //    return `hero is ${hero}`
//    console.log(`hero is ${hero}`);
// })
function consoleError(errmsg) {
    console.log(errmsg);
}
consoleError("Bigerror");
// The never type represents the type of values that never occur. For instance, never is the return type for a function expression or an arrow function expression that always throws an exception or one that never returns. Variables also acquire the type never when narrowed by any type guards that can never be true.
// Function returning never must not have a reachable end point
function error(message) {
    throw new Error(message);
}
// Inferred return type is never
function fail() {
    return error("Something failed");
}
try {
    fail();
}
catch (error) {
    console.log(error);
}
