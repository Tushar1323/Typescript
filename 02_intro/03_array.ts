// const superHeros = []
// Argument of type 'string' is not assignable to parameter of type 'never'.
// superHeros.push("ram") // error


// const superHeros:[] = []
// Argument of type 'string' is not assignable to parameter of type 'never'.
// superHeros.push("ram") // error


// const superHeros: string[] = [] // superHeros is array of string .
// const heroPower: number[] = [] // superHeros is array of number .
// or
const heroPower: Array<number> = [] // superHeros is array of number .
// superHeros.push("ram")
// heroPower.push(177)


type User = {
    name: string
    isActive: boolean
}
// const allUsers: User[] = []
// or
const allUsers: Array<User> = []
// allUsers.push("") // error
// allUsers.push({"Tushar",true})  // error
allUsers.push({name: "Tushar", isActive: true})


// Type is array of array -
const MLModels: number[][] = [
    [255, 255, 255],
    [1,2,3]
]


