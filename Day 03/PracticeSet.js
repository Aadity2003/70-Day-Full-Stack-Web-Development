let marks = {
    "John": 85,
    "Alice": 92,
    "Bob": 78,
    "Eve": 90
}

for (let i = 0; i < Object.keys(marks).length; i++) {
    console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]]);
}

for (let key in marks) {
    console.log("The marks of " + key + " are " + marks[key]);
}