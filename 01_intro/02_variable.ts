let myname: string = "Tushar";
myname = "Keshari";
console.log(myname.toUpperCase())
// myname =177; // error
console.log(myname);


// In TypeScript, there are several places where type inference is used to provide type information when there is no explicit type annotation. 
let mynum = 177; // correct also
// mynum = "Tushar"; // error
console.log(mynum);


// Any -
// The any type in TypeScript is a workaround for cases when you don't know what type a value might be. It allows you to assign a variable or function parameter to be of literally any type.
let hero;
function getHero() {
    return false //no error
    return "thor" // no error
}
hero = getHero() // hero is any type


let heros:string;
function getHeros() {
    // return false // error
    return "thor" // no error
}
heros = getHeros() 






// Temporary method to remove error -
export { }