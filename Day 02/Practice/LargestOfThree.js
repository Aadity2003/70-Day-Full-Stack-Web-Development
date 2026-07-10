let a = prompt("Enter the first number:");
let b = prompt("Enter the second number:");
let c = prompt("Enter the third number:");

if (a > b && a > c) {
    console.log(`${a} is the largest number.`);
}else if (b > a && b > c){
    console.log(`${b} is the largest number.`);
}else{
    console.log(`${c} is the largest number.`);
}