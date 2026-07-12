let student = {
    name : "Aditya",
    age: 23,
    course: "B.Tech CSE",
    isAdmin: true
}
console.log(student.isAdmin)

student.age = 26
console.log(student)

student.location = "Nagpur"
student['Hobby'] = 'football'
console.log(student)

delete student.age
console.log(student)