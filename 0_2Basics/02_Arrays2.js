// const heroes = ["ironman","spidermna","captain america"]
// const heroes2 = ["Superman","Batman","Flash"]

// heroes.push(heroes2) // it will make the arrays in arrays means it will give the array heroes and add the heroes2 inside heroes arrays means array in array
// console.log(heroes[3][2]) // It will print the value of flash
// console.log(heroes)

// const allHero = heroes.concat(heroes2) // it will merge the arrays properly and doest array in array
// console.log(allHero);

// const all_new_heros = [...heroes, ...heroes2] // this method is known as spread method which is like concat but it is used widely and give the same result as concat
// console.log(all_new_heros)

// const anotherarray = [1,2,4,[3,4,5],3,[4,9,6,[3,2,1]]]
// const new_another_array = anotherarray.flat(Infinity) // it will give you the result in 1 array from above situation of arrays in arrays
// console.log(new_another_array)

// console.log(Array.isArray("prince")) // it will help you to know that is "prince" is an array
// console.log(Array.from("prince")) // it will convert string "prince" to array 
// console.log(Array.from({name:"prinec"})) // interesting value it will give empty array as js didn't understand what to convert array

// const score1 = 100
// const score2 = 200
// const score3 = 300

// console.log(Array.of(score1, score2, score3)) // of help to convert a set of element to arrays like this above
 