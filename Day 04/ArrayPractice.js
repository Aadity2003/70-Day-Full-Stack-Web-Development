let arr = [5,6,5,69,52,2,3]
console.log(arr)
arr.push(10)
console.log(arr)
arr.shift();
console.log(arr)
let max = 0;
let min = arr[0];
for (const element of arr) {
    if(element > max){
        max = element;
    }else if(element < min){
        min = element;
    }
}

console.log(max)
console.log(min)

console.log(arr.sort((a,b)=> a-b))