// Below is the defination and syntax of funcxtions

// function saymyName () {
//     console.log("P");
//     console.log("R");
//     console.log("I");
//     console.log("N");
//     console.log("C");
//     console.log("E");
// }

// saymyName()

// function addtwoNumbers (number1, number2){ // here number 1 and number 2 are parameter 
//     console.log(number1 + number2);
// }

// Below is the use of return in functions
// function addtwoNumbers (number1, number2){ 
    // let result = number1 + number2
    // // return result
    // return number1 + number2 // this is also a way to perform the same task as above

    // console.log("prince") // here the function which is after the return in a function is not going to execut
// }

// const result = addtwoNumbers(10, 20) // here 10 and 20 are arguments
// console.log("Result is: ",result)

// function userloggedinMessage (username = "prince"){ // here usernam = prince is a default value of username and it never be undefined and if you give some value in arguments then the value which is given in argument is executed
//     if (username === undefined){
//         console.log("Please enter a username")
//         return
//     }
//     return `${username} Just Logged In`
// }

// console.log(userloggedinMessage()) 
// console.log(userloggedinMessage("ram"))


// Below is the usage of shopping cart order management system 

// function calculateCartPrice(val1,val2,...num){ // here val1 and val2 is the value goes to 200 and 300 and rest goes to num 
//     console.log(val1)
//     return num
// }
// console.log(calculateCartPrice(200,300,455,443));

// Below is the example of function with object

// const user = {
//     username: "prince",
//     price: 999
// }

// function handleObject (anyobject){
//     console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
// }
// // handleObject(user) 
// handleObject({ // this is another way to pass the object as same as above
//     username: "ram",
//     price: 1090
// })

// Below is the example of function in arrays

// const myArray = [200,400,800]
// function priceofCart (anyArray){
//     return anyArray[1]
// }
// console.log(priceofCart(myArray))



// const myArray = [200,400,800]
// function priceofCart (anyArray){
//     console.log(`prices of the array are ${myArray}`)
// }
// priceofCart(myArray)

