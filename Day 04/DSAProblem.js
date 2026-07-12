let arr = [4, 8, 2, 10, 7];
let max = 0;
for (const element of arr) {
    if(element>max){
        max = element;
    }
}
let secondmax = 0;
for (const element of arr) {
    if(element<max && element>secondmax){
        secondmax = element
    }
}

console.log(secondmax)