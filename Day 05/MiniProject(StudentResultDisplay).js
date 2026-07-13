let students = [
    { name: "Aadity", marks: 92 },
    { name: "Rahul", marks: 45 },
    { name: "Sneha", marks: 81 },
    { name: "Priya", marks: 30 }
];

let Display = students.map((Student)=>{
    return Student;
})
console.log(Display)

let pass = students.filter((a)=>{
    return a.marks>=35;
})
console.log(pass)

let total = students.reduce((a,b)=>{
    return a + b.marks;
},0)
let avg = total / students.length;
console.log(avg)