// Swapping two numbers without using a third variable
var a = 10;
var b = 20;
console.log("Before swapping: a =", a, "b =", b);
a = a + b;
b = a - b;
a = a - b;
console.log("After swapping: a =", a, "b =", b);

// Convert String Into Number

var str = "123";
console.log(Number(str));

// Convert Number Into String

var num = 456;
console.log(String(num));

//Area of Rectangle

var l = 5;
var b = 6;

var area = l * b;
console.log(area);

// Simple intereset Calculator

let principal = 1000;
let rate = 5;
let time = 2;

let SimpleInterst = principal * rate * time;
console.log(SimpleInterst);

// Average of five numbers

let n = 4;
let m = 10;
let c = 22;
let d = 1;
let e = 43;

let avg = (n + m + c + d + e) / 5;
console.log(avg);

// BMI Calculator

let weight = 70; // In Kilograms
let height = 1.5; // In meters

let BMI = weight / (height * height);

console.log(BMI.toFixed(2));
