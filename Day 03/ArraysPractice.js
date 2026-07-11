//1
let arr = [2, 3, 4, 5, 6, 98, 7, 5, 6, 2, 1, 5, 9, 8, 7];

// for (let value in arr) {
//   console.log(arr[value]);
// }
//or
for (let value of arr) {
  console.log(value);
}

//2
// let max = 0;
// let maxvalue = arr.reduce((a, b) => {
//   if (b > a) {
//     max = b;
//   }
//   return max;
// });
// console.log(maxvalue);
//OR

let max = 0;
let maxvalue = arr.reduce((a, b) => {
  return b > a ? b : a; 
});
console.log(maxvalue);

//3
let min = 0;
let minvalue = arr.reduce((a, b) => {
  return b < a ? b : a; 
});
console.log(minvalue);

//4
let sum = arr.reduce((a, b)=>{
    return a + b;
})
console.log(sum)

//5
let avg = arr.reduce((a, b)=>{
    return a + b/arr.length;
})
console.log(avg)

//6
let reverse = arr.reverse()
console.log(reverse)

//7
let Even = 0;
let Odd = 0;
for(const value of arr){
    if(value % 2 == 0){
        Even += 1;
    }else{
        Odd +=1;
    }
}
console.log(`${Even} Numbers are even and ${Odd} Numbers are odd`)

//8
let arr2 = [10,52,98,6,8,3,54,];
let find = 6;

for (const element in arr2) {
    if(arr2[element] == find){
        console.log(`${find} found at position ${element} of this Array`)
    }
}

//
let arr3 = [45,69,78,36,45,12,78,69];
for(let a = 0; a < arr3.length; a++){
    for(let b = a+1; b < arr3.length;b++){
        if(arr3[a] == arr3[b]){
            arr3.splice(b, 1)
        }
    }
}
console.log(arr3)