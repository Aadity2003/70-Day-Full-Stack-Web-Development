let num = prompt("Enter a number to check Divisibility");

if(num % 5 == 0 && num % 11 == 0){
    console.log(`${num} is divisible by 5 and 11`)
}else if(num % 5 == 0){
    console.log(`${num} is divisible by 5 only.`)
}else if(num % 11 == 0){
    console.log(`${num} is divisible by 11 only.`)
}else {
    console.log(`${num} is not divisible by either 11 or 5.`)
}
