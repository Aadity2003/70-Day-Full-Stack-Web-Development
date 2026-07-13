let arr = [25,36,59,12,36];

let arr1 = arr.map((value)=>{
    return value + value;
})
console.log(arr1)

let names = ["Aditya", "Rahul"]

let upNames = names.map((value)=>{
    return value.toUpperCase();
})
console.log(upNames)

let sq = arr.map((value)=>{
    return value * value;
})
console.log(sq)