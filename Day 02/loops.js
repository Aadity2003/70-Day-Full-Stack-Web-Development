//for loop

for (let i = 0; i < 5; i++) {
    console.log(i);
}

//for in loop

let obj = {
    Aadi: 58,
    Rohan: 45,
    Priya: 60,
    Aniket: 70,
    Rahul: 80
}

for (let key in obj) {
    console.log("Marks of " + key + " : " + obj[key]);
}

//for of loop

let arr = [10, 20, 30, 40, 50];
for (let value of arr) {
    console.log(value);
}

//while loop

let j = 0;
while (j < 5) {
    console.log(j);
    // j++;
}