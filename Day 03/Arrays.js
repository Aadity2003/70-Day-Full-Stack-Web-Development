let marks_class_12 = [58, 76, 88, 92, 55, 73, "Aadi"];
console.log(marks_class_12);

console.log(marks_class_12[0]);
console.log(marks_class_12[1]);
console.log(marks_class_12[2]);
console.log(marks_class_12[3]);
console.log(marks_class_12[4]);
console.log(marks_class_12[5]);
console.log(marks_class_12[6]);
console.log(marks_class_12[7]); // This will be undefined since there is no 8th element
console.log(marks_class_12.length); // This will print the length of the array, which is 7
marks_class_12[0] = 60; // Changing the first element to 60
marks_class_12[7] = 80; // Adding a new element at index 7

console.log(marks_class_12); // This will print the updated array with the new values

for(let key in marks_class_12){
    console.log("The marks of student " + key + " are " + marks_class_12[key]);
}