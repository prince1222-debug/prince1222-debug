// // object can be created in singleton
// // Object.create

// // object can also be created in literals


// const mySym = Symbol("key1") 

// const Jsuser = {
//     name: "Prince",
//     "full name": "Prince Kumar",
//     [mySym]: "mykey", // symbol's key and value pairs in object are written like this
//     city: "Jandaha",
//     language: "JS",
//     email: "prince@google.com"
// }

// // console.log(Jsuser.email)
// // console.log(Jsuser["name"])
// // console.log(Jsuser["full name"]) // this is the correct way to get the particular keys and its value in objects
// // console.log(Jsuser[mySym]) // you have to use this syntax of code to print the symbol in object 

// // Jsuser.email = "prince@yahoo.com" // changing the value of key in object 
// // Object.freeze(Jsuser) // it will freeze the Jsuser and nothing will change after writing this code 
// // Jsuser.email = "prince@microsoft"
// // console.log(Jsuser.email)

// // Jsuser.greeting = function(){
// //     console.log("Hello JS user")
// // }

// Jsuser.greeting2 = function(){
//     console.log(`Hello ${this.name}, How are You?`); // using this you are choosing the same object jsuser by using this or you can refer the same object by using this in function
// }

// console.log(Jsuser.greeting2())
