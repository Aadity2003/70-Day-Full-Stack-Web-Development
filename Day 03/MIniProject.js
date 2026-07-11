let students = [
    { name: "Aadity", marks: 85 },
    { name: "Rahul", marks: 74 },
    { name: "Priya", marks: 91 },
    { name: "Mahesh", marks: 89}
];

console.log(students)
for (const element in students) {
    console.log(students[element].name)
}
console.log(students)
for (const element in students) {
    console.log(students[element].marks)
}
let totalmark = students.reduce((sum, student)=>
sum + students.marks, 0);
let avgm = totalmark/students.length;
var pass = 0;
for (const element in students) {
    if(students[element].marks >= 45){
        pass += 1;
    }
}
console.log(pass)