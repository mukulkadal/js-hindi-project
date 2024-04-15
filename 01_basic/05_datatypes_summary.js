// # Primitive

// 7 Types : Srting, Number, Boolearn, Null, Undefined, Symbol, BigInt


const name = "Mukul"
const number = 100.3
const isLoggedIn = false
const outSideTemp = null
let userEmail;

const id = Symbol("123")
const anotherId = Symbol("123")
// console.log(id === anotherId);

const bigInt = 1234555633454353553n

// Reference types ( Non Primitive )-

// Array, Object, Function


// Array Example
const MyBrothes =  ["Nitin", "Sonu", "Punit" ]

// console.log(MyBrothes)

// Object Example...

const myBio ={

    name: "mukul",
    age: 20,
    height: "5:11",
}

// console.log(myBio)

// Function. Example.....

const myFunction = function(){

    console.log("Hello Mukul Kadal")
}
// myFunction()



// *********************************************************************************************************

// Stack (Primitive), Heap (Non-Primitive)

// Stack Exmaple...

let myYouTubeName = " Mukul kadal"

let newYouTubeName = myYouTubeName

newYouTubeName = "Mkadal"

// console.log(myYouTubeName);
// console.log(newYouTubeName);


let userOne = {
    email: "user@google.com",
    pass: "nkadal@2324"
}

let userTwo = userOne

userTwo.email = "mkkadal@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);








