//Templet Literal 

let student = {
    namee: "Aditya",
    age: 23,
    class: 10,
}

const details = `We have a great student as ${student.namee} with ${student.age} in ${student.class}.`;

console.log(details)

console.log(`Welcome! I am here to assist you with 
    any questions or tasks you might have. Whether 
    you need information, writing help, or 
    recommendations, I've got you covered.`)


// Destructing 

let arr = ["Aditya", "Rahul", "Ganesh"]
let [a,b,c] = arr

console.log(a,c)

let students = {
    name: "Aditya",
    age: 23
}
let {name, age}=students
console.log(age)

// let num = [1,3]
// let [an,bn] = [bn, an]
// console.log(num)

let arr1 = [45,36,98,56,45,78]
let arr2 = [35,26,56,98]

console.log(...arr1,...arr2)

let arr4 = [1,2,3,4,5,6,7,8,9]

let sum = function arrfunc(...numbers){
    return numbers.reduce((sum, num)=> sum + num, 0);
}

console.log(sum)
let maximum = function(...numbers) {
    return Math.max(...numbers);
};

console.log(maximum(1, 5, 3, 9, 2)); // Outputs: 9

function hello(name = "Guest"){
    console.log(`Hello ${name}`)
}
hello()

function discount(ac,dis = 5){
    console.log((ac/100)*dis);
}
discount(100)