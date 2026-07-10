console.log("Operator in JavaScript");

let a = 46;
let b = 5;

// Arithmetic Operators
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponentiation:", a ** b);
console.log("Increment:", a++);
console.log("After Increment:", a);
console.log("Decrement:", b--);
console.log("After Decrement:", b);

// Assignment Operators
let c = 10;
console.log("Initial value of c:", c);
c += 5;
console.log("After Addition Assignment:", c);
c -= 3;
console.log("After Subtraction Assignment:", c);
c *= 2;
console.log("After Multiplication Assignment:", c);
c /= 4;
console.log("After Division Assignment:", c);
c %= 3;
console.log("After Modulus Assignment:", c);
c **= 2;
console.log("After Exponentiation Assignment:", c);

// Comparison Operators
let x = 10;
let y = 20;
console.log("Is x equal to y?", x == y);
console.log("Is x not equal to y?", x != y);
console.log("Is x strictly equal to y?", x === y);
console.log("Is x not strictly equal to y?", x !== y);
console.log("Is x greater than y?", x > y);
console.log("Is x less than y?", x < y);
console.log("Is x greater than or equal to y?", x >= y);
console.log("Is x less than or equal to y?", x <= y);

// Logical Operators
let p = true;
let q = false;
console.log("Logical AND (p && q):", p && q);
console.log("Logical OR (p || q):", p || q);
console.log("Logical NOT (!p):", !p);

//comments
// This is a single-line comment
/*
This is a multi-line comment
*/

//conditional statements

let age = prompt("Hey what is your age?");
age = Number.parseInt(age);
if (age < 0) {
  console.log("This is an invalid age");
} else if (age < 9) {
  console.log("You are a kid and you cannot even think of driving");
} else if (age < 18 && age >= 9) {
  console.log("You are a kid and you can drive after some years");
} else {
  console.log("You can drive");
}

//switch statement

let agen = prompt("Hey what is your age?");
agen = Number.parseInt(agen);
switch (true) {
  case agen < 0:
    console.log("This is an invalid age");
    break;
  case agen < 9:
    console.log("You are a kid and you cannot even think of driving");
    break;
  case agen < 18 && agen >= 9:
    console.log("You are a kid and you can drive after some years");
    break;
  default:
    console.log("You can drive");
}

//ternary operator
const ag = prompt("Hey what is your age?");
console.log(ag < 18 ? "You cannot drive" : "You can drive");

