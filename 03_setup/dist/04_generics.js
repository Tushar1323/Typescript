"use strict";
// Generics in typescript -
// A major part of software engineering is building components that not only have well-defined and consistent APIs, but are also reusable. Components that are capable of working on the data of today as well as the data of tomorrow will give you the most flexible capabilities for building up large software systems.
// In languages like C# and Java, one of the main tools in the toolbox for creating reusable components is generics, that is, being able to create a component that can work over a variety of types rather than a single one. This allows users to consume these components and use their own types.
// const score: number[] = []
// or
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
// function identityOne(val: boolean | number): boolean | number
identityOne(177);
function identityTwo(val) {
    return val;
}
// function identityTwo(val: any): any
identityTwo("Tushar");
function identityThree(val) {
    return val;
}
// function identityThree<boolean>(val: falbooleanse): boolean
identityThree(false);
function identityFour(val) {
    return val;
}
// function identityFour<number>(val: number): number
identityFour(177);
// putting , is for generic look , not a tag look
// function getSearchProducts<T,>(products: T[]): T {
function getSearchProducts(products) {
    // do some database operations
    const myIndex = 3;
    return products[myIndex];
}
// Arrow function -
const getMoreSearchProducts = (products) => {
    //do some database operations
    const myIndex = 4;
    return products[myIndex];
};
// Two generic value -
// function anotherFun<T, U>(valOne:T, valTwo:U):object {
//     return{
//         valOne ,
//         valTwo
//     }
// }
// anotherFun("Tushar",false) // no error 
// anotherFun("Tushar",177) // no error 
function anotherFun(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
anotherFun("Tushar", 1.11); // no error 
anotherFun("Tushar", 177); // no error 
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
const obj = {
    connection: "successful",
    username: "Tushar",
    password: "1323"
};
anotherFunction(3, obj); // allow
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
