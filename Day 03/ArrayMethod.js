// The toString() method converts an array to a string and returns the result.
let num = [1, 2, 3, 4, 5];

let b = num.toString();
console.log(b); // This will print the array as a string: "1,2,3,4,5"
console.log(typeof b); // This will print "string" since b is now a string representation of the array

// The join() method joins all elements of an array into a string and returns this string.

let c = num.join(" - ");
console.log(c); // This will print the array elements joined by " - ": "1 - 2 - 3 - 4 - 5"
console.log(typeof c); // This will print "string" since c is now a string representation of the array with custom separator

// The pop() method removes the last element from an array and returns that element. This method changes the length of the array.
let r = num.pop();
console.log(num, r); // This will print the updated array after removing the last element and the removed element itself

// The push() method adds one or more elements to the end of an array and returns the new length of the array.
let s = num.push(6, 7);
console.log(num, s); // This will print the updated array after adding new elements and the new length of the array

// The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
let t = num.shift();
console.log(num, t); // This will print the updated array after removing the first element and the removed element itself

// The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
let u = num.unshift(1, 2);
console.log(num, u); // This will print the updated array after adding new elements at the beginning and the new length of the array