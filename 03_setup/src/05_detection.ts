// Narrowing in typescript -


// typeof null -> object 
// typeof [1,2,3] -> object 


function detectType(val: number | string) {
    if (typeof val === "string") {
        return val.toLowerCase()
    }
    return val + 3
}


function provideId(id: string | null) {
    if (!id) {
        console.log("Please provide ID");
        return
    }
    id.toLowerCase()
}


function printAll(strs: string | string[] | null) {
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        } else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}



// in operator of typescript -
interface User {
    name: string,
    email: string
}

interface Admin {
    name: string,
    email: string,
    isAdmin: boolean
}

function isAdminAccount(account: User | Admin) {

    // return account.isAdmin // not allow 

    if ("isAdmin" in account) {
        return account.isAdmin // allow
    }
}



// instanceof Narrowing -
// const dt = new Date() // learn
// const ay = new Array() // learn
function logValue(x: Date | string) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    } else {
        console.log(x.toUpperCase());
    }
}

// using type preddicates -
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined
}

function getFood(pet: Fish | Bird) {
    if (isFish(pet)) {
        pet // pet is Fish
        return "fish food"
    } else {
        pet // pet is bird
        return "bird Food"
    }
}



// Discriminated union -
interface Circle {
    kind: "circle", // hardly initialize the value
    radius: number
}

interface Square {
    kind: "square" // hardly initialize the value
    side: number
}

interface Rectangle {
    kind: "rectangle", // hardly initialize the value
    length: number,
    width: number
}

type Shape = ( Circle | Square | Rectangle )

function getAreas(shape: Shape){
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2
    }
    else if(shape.kind === "square"){
        return shape.side**2;
    }
    else{
        return shape.length * shape.width 
    }
}

// or

function getArea(shape: Shape){
    switch(shape.kind){
        case "circle":
            return Math.PI * shape.radius ** 2
        case "square":
            return shape.side * shape.side
        case "rectangle":
            return shape.length * shape.width
        default:
            // never type 
            const _defaultforshape: never = shape
            return _defaultforshape
    }
}