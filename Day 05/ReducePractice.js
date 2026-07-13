let arr = [25, 36, 25, 68, 78, 96, 54, 896, 3221, 89];

let sum = arr.reduce((a, b) => {
  return a + b;
});
console.log(sum)


let max = arr.reduce((a,b)=>{
    return b > a? b:a;
})
console.log(max)

let min = arr.reduce((a,b)=>{
    return b < a? b:a;
})
console.log(min)

let sal = [23658,236553,2165842,255456,265523]
let total = sal.reduce((a,b)=>{
    return a + b;
})
console.log(total)