
function addNumbers(x, y) {
    console.log("done");
    console.log("Adding numbers:", x, "and", y);
    return Math.round(x + y);
}
let a = 1;
let b = 2;
let c = 3;

console.log(addNumbers(a, b));
console.log(addNumbers(a, c));
console.log(addNumbers(b, c));

//Arrow function

const sum = (x, y) => {
    console.log(x + y);
}

console.log(sum(a, b));