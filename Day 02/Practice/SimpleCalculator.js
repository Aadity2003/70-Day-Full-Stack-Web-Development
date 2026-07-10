let a = 10;
let b = 23;

let operation = prompt("Enter the operation you want to perform (+, -, *, /):");

switch (operation) {
    case "+":
        console.log(`Additon of ${a} + ${b} = ${a + b}`);
        break;
    case "-":
        console.log(`Subtraction of ${a} - ${b} = ${a - b}`);
        break;
    case "*":
        console.log(`Multiplication of ${a} * ${b} = ${a * b}`);
        break;
    case "/":
        console.log(`Division of ${a} / ${b} = ${a / b}`);
        break;
    default:
        console.log("Invalid operation. Please enter a valid operation (+, -, *, /).");
}