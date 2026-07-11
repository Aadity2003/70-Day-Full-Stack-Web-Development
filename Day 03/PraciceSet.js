// @1 & @3

let arr = [12,4,57,89,86,53,25,50];
// do{
//     var a = prompt("Enter the number to enter:")
//     a = parseInt(a)
//     arr.push(a);
// }while(a != 0);
// console.log(arr);

//@3

let newarr = arr.filter((a)=>{
    return a % 10 == 0;
})
console.log(newarr)

//@4

let newarr2 = arr.map((key)=>{
    return key * key;
})
console.log(newarr2)

//@5
let array = [1,2,3,4,5];
let newa = array.reduce((first, second)=>{
    return first * second;
})
console.log(newa)