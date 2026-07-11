let num = [1, 2, 3, 4, 5];

for (let i = 0; i < num.length; i++) {
    console.log(num[i]); // This will print each element of the array: 1, 2, 3, 4, 5
}

num.forEach((element) => {
    console.log(element*element); // This will print each element of the array using forEach: 1, 2, 3, 4, 5
});

//array.from() method is used to create a new, shallow-copied Array instance from an array-like or iterable object. It can also take a second argument, which is a map function that will be called on every element of the array.
let str = 'Hello';
let arr = Array.from(str);
console.log(arr); // This will print the array created from the string: ['H', 'e', 'l', 'l', 'o']

//for of loop 

for (let i of num){
    console.log(i);
}

//for in loop

for (let i in num){
    console.log(i);
}