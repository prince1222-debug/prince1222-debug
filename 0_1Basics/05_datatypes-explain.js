// Primitive datatypes 

// 7 types : Strings, Number, Booleans, mull, undefined, Symbol, BigInt.

// const value = 100
// const scoreValue = 100.5

// const isloogedIn = true
// const temperature = null
// 
// let useremail;

// let id = Symbol("123")
// let anotherId = Symbol("123")
// console.log(id === anotherId);
// console.log(id, anotherId)

// const bigNumber = 48568972349273947n // after number use n and it will converted into bigInt


// Reference Datatypes or Non Primitive 

// Arrays, Objects, Functions


// const heroes = ["shaktiman", "Hanuman", "Krrish"]

// let myObj = {
//     name:"prince",
//     age:23,
//     city:"Jandaha"
// }

// const myFunction = function(){
//     console.log("Hello World")
// }


/////  Memories and it Types /////

// Stack and Heap Memory 
// Stack memory used in Primitive Datatypes.
// Heap memory are used in Non Primitive Datatypes.

// Stack memories exmample given below:

// let num1 = 12
// let num2 = num1
// num2 = 42
// console.log(num1); // here num1 will not be changes as this is an example of stack memories
// console.log(num2); 

// // Heap memories example is given below

// let userOne = {
//     email:"prince@google.com",
//     city:"Patna"
// }
// let userTwo = userOne

// userTwo.email = "user@google.com"

// console.log(userOne.email)
// console.log(userTwo.email)