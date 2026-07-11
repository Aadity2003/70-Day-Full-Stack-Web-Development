let num = [1, 2, 3, 4, 5];
console.log(num.length); // This will print the original array: [1, 2, 3, 4, 5]
//delete method removes an element from an array at a specified index and returns true if the operation was successful, otherwise it returns false. It does not change the length of the array.
let del = delete num[2];
console.log(num, del); // This will print the updated array after deleting the element at index 2 and the result of the delete operation
console.log(num.length); // This will print the length of the array after the delete operation, which remains unchanged

//concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let mergedArray = arr1.concat(arr2);
console.log(mergedArray); // This will print the merged array: [1, 2, 3, 4, 5, 6]

//sort() method is used to sort the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
let unsortedArray = [3, 10, 456, 1, 52, 9, 28, 6, 5, 3, 5];
unsortedArray.sort();
console.log(unsortedArray); // This will print the sorted array: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]  

let compare = (a, b) => {
    return a - b;
}
unsortedArray.sort(compare);
console.log(unsortedArray); // This will print the sorted array in ascending order: [1, 3, 5, 6, 9, 10, 28, 52, 456]

//reverse() method is used to reverse the order of the elements in an array in place. The first array element becomes the last, and the last array element becomes the first.
unsortedArray.reverse();
console.log(unsortedArray); // This will print the reversed array: [456, 52, 28, 10, 9, 6, 5, 5, 3, 3, 1]

//splice and slice methods are used to manipulate arrays in JavaScript. The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

let num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let splicedArray = num1.splice(2, 3, 11, 12);
console.log(num1, splicedArray); // This will print the updated array after splicing and the removed elements

let slicedArray = num1.slice(2, 5);
console.log(num1, slicedArray); // This will print the original array and the sliced portion of the array