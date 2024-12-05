// const instaUser = new Object() // this is literal object

// object in singleton

// const instaUser = {} 

// instaUser.id = "123abc"
// instaUser.name = "prince"
// instaUser.isloogedIn = true

// console.log(instaUser)

// const regularUser = {  // You can make object in object like this.
//     email: "some@gmal.com",
//     fullname : {
//         userfullname: {
//             firstname: "prince",
//             lastname: "jha"
//         }
//     }
// }

// console.log(regularUser.fullname.userfullname) // you can access the object inside the object 
// console.log(regularUser.fullname.userfullname.firstname)

// You can combine object like you can combine arrays

// const Object1 = {1: "A", 2:"B", 3: "C"}
// const Object2 = {3: "A", 2:"B", 3:"C"}

// const obj3 = Object.assign({}, Object1, Object2) // you can combine object like this which is great here all values are going inside {}
// const obj4 = Object.assign(Object1, Object2) // you can also combine object like this but this is not great and here all values are going in Object1

// const obj3 = {...Object1, ...Object2}; // You can also combine object like this which is spread method 


// const user = [ // here you can use object inside the arrays like this 
//     {
//         userName: "prince084",
//         email: "prince@gmail.com",
//         id: "123abc"
//     }
// ]

// console.log(user[0].id) // You can access object inside the array like this 


// console.log(instaUser)

// // console.log(Object.keys(instaUser)[0]) // using object.keys you can get the keys of the object you define and this is very important and very interesting
// // console.log(Object.values(instaUser)[0]) // using object.values you can get the values of the object you define
// console.log(Object.entries(instaUser)) // using enteries key values pairs are converted into array means array in array
// console.log(instaUser.hasOwnProperty('name')); // using hasOwnProperty method you can able to know that this particular property is in the object of not


// // De-structuring in Object

// const course = {
//     courseName: "Js",
//     coursePrice: 1000,
//     courseTeacher: "Prince"
// }

// // course.courseTeacher // You can use like this to access the element of the object

// const {courseTeacher: Teacher} = course // But this is the better way to do it
// console.log(courseTeacher)
// console.log(Teacher) // You can name the courseTeacher like above and return it easily

// API  CONCEPTS and Json


// Below this is a Json which is not functioning well now but later we will understand this brifely
// { 
//     name: "Prince",
//     language: "JS",
//     city: "Jandaha"
// }
