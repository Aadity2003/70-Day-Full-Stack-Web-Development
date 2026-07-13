//map function

let arr = [45, 23, 21];

let a = arr.map((value, index, array)=>{
    console.log(value, index, array)
    return value + index
})
console.log(arr)
console.log(a)

//filter

let arr2 = [45, 23, 21, 0, 3, 5]
let newarr = arr2.filter((a)=>{
    return a<10;
})
console.log(arr2)
console.log(newarr)

//reduce method

let arr3 = [2,3,5,7,4,6,8,74];
// let arr4 = arr3.reduce((h1,h2)=>{
//     return h1 + h2;
// })

//OR

const reduce_func = (h1, h2) =>{
    return h1 + h2;
}
let newarr2 = arr3.reduce(reduce_func)
console.log(newarr2)