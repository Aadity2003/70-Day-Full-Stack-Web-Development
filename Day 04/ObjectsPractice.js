let Student = {
    Name: "Aditya",
    Age: 23,
    Course: "B.Tech CSE"
}
console.log(Student)
Student.Age = 25
console.log(Student)
Student.Address = "Nagpur"
console.log(Student)

for (const key in Student) {
    console.log(Student[key])    
}
