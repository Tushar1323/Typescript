// Tuples in typescript -

// const user: (string | number)[] = [1, "hc"] // allow
// const user: (string | number)[] = ["hc",1] // allow


let uer: [string, number, boolean]
// uer = ["hc", false, 123] // error 
uer = ["hc", 131, true]


let rgb: [number, number, number] = [255, 123, 112]


type User = [number, string]
const newUser: User = [112, "example@google.com"]

newUser[1] = "hc.com" // allow
newUser.push("Tushar")  // allow
newUser.push(123)  // allow
// newUser.push(true)  // not allow






export {}