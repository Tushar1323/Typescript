"use strict";
// Narrowing in typescript -
// typeof null -> object 
// typeof [1,2,3] -> object 
function detectType(val) {
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    return val + 3;
}
function provideId(id) {
    if (!id) {
        console.log("Please provide ID");
        return;
    }
    id.toLowerCase();
}
function printAll(strs) {
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}
function isAdminAccount(account) {
    // return account.isAdmin // not allow 
    if ("isAdmin" in account) {
        return account.isAdmin; // allow
    }
}
// instanceof Narrowing -
// const dt = new Date() // learn
// const ay = new Array() // learn
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet; // pet is Fish
        return "fish food";
    }
    else {
        pet; // pet is bird
        return "bird Food";
    }
}
function getAreas(shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    else if (shape.kind === "square") {
        return shape.side ** 2;
    }
    else {
        return shape.length * shape.width;
    }
}
// or
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side * shape.side;
        case "rectangle":
            return shape.length * shape.width;
        default:
            // never type 
            const _defaultforshape = shape;
            return _defaultforshape;
    }
}
