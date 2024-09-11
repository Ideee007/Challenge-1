// const bought = ' i bought'
// // var car = "benz"
// let date = 2023

// console.log(bought, car, date)

// object
// const techzone = {
//     name: "Abdulhazim",
//     technologies: "javascript",
//     address: "Abeokuta"
// }

// console.log(techzone.name);

// // arrays
// const techstack = ["javascript", "python", "java"];

// console.log(techstack[1]);

// // functions
// function greet(a, b) {
//     const add = a + b;
//     return add
// }

// console.log(greet(3, 4));

// // object
// const car = {
//     name: "lexus",
//     year: 2022,
//     good: true,
// }

// console.log(car.name);

// const first = 78;
// const second = "Abdulhazim";
// const third = false;
// const fourth = []
// const fifth = undefined

// // object
// const patient1 = {
//     name: "Adeleke Adigun",
//     age: 34,
//     city: "ibadan",
// }

// const json = JSON.stringify(patient1)
// console.log(json);

// const json1 = JSON.parse(json);
// console.log(json1);
// console.log(patient1.name, patient1.age, patient1.city)

// // array
// const fruits = ["apple", "orange", "banana"]

// console.log(fruits[0], fruits[1], fruits[2])

// function

// var A = 24;
// var B = 20;

// const addition = A + B;
// console.log(addition);

// const subtraction = A - B;
// console.log(subtraction)

// const multiplication = A * B;
// console.log(multiplication);

// const division = A / B;
// console.log(division);

// const remainder = A % B;
// console.log(remainder)

// const increment = A++;
// console.log(increment);

// const decrement = B--;
// console.log(decrement);

// var c = 10
// var d = 15

// console.log(c === d);
// console.log(c == d);
// console.log(c != d);
// console.log(c !== d);
// console.log(c > d);
// console.log(c < d);
// console.log(c >= d);
// console.log(c <= d);

// c *= 3
// d /= 2
// console.log(c);
// console.log(d)

// Template literals

// const name = "Abdulhazim";
// const stack = "backend"

// console.log("my name is " + name + " and my stack is " + stack + " "); //Old way

// console.log(`my name is ${name} and my stack is ${stack}`); // new way

// Array methods

// const bunnies = ['Lucy', 'Tom', 'Molly'];
// // const pop = bunnies.pop();
// const push = bunnies.push('Ideee')
// console.log(bunnies);

// ternary operator
// const age = 23;
// age >= 18 ? console.log("He is an adult") : console.log("He is not an adult");

// switch statement

// const day = "thursday";
// switch (day) {
//     case 'monday':
//         console.log("Always busy");
//         break
//     case 'tuesday':
//         console.log("A little bit free");
//         break
//     case 'wednesday':
//         console.log("Slightly busy");
//     case 'thursday':
//     case 'friday':
//         console.log("always freee")
// }

// if & else statement

// const age = 4;
// if (age >= 18) {
//     console.log("he is an adult");
// } else if (age <= 5) {
//     console.log("He is a baby")
// } else {
//     console.log("He is a minor");
// }

// function greet(a, b) {
//     const add = a + b;
//     return add
// }

// Arrow function
// const greet = (a, b) => {
//     const add = a + b;
//     return add;
// }

// console.log(greet(5, 3));

// throw statement
// const sumBunnies = (blackBunnies, whiteBunnies) => {
//     if (typeof blackBunnies !== 'number' || typeof whiteBunnies !== 'number') {
//         throw new Error('blackBunnies and whiteBunnies must be numbers');
//     }
//     var totalBunnies = blackBunnies + whiteBunnies;
//     return totalBunnies;
// }

// console.log(sumBunnies(true, false));

// try catch statement

// const sumBunnies = (blackBunnies, whiteBunnies) => {
//     if (typeof blackBunnies !== 'number' || typeof whiteBunnies !== 'number') {
//         throw new Error('blackBunnies and whiteBunnies must be numbers');
//     }
//     var totalBunnies = blackBunnies + whiteBunnies;
//     return totalBunnies;
// }

// try {
//     console.log(sumBunnies(20, 30));
// } catch (error) {
//     console.log(error);
// }

// console.log(_dirname);

// function sayMyName() {
//     console.log('My name is Abdulhazim');
// }

// setInterval(sayMyName, 4000)

// 

var fs = require('fs');

var readMe = fs.readFileSync('input.txt', 'utf8');
console.log(readMe);

fs.writeFileSync('output.txt', readMe);