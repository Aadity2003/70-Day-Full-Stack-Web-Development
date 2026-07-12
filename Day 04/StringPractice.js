let str = "Hello this is Aditya Bandhanwar"
let vowels = "bcdfghjklmnpqrstvwxyz"
const rev = str.split("").reverse().join("")
console.log(rev)

let yes = 0;
for (const element of str) {
    for (const element1 of vowels) {
        if(element == element1){
            yes += 1;
        }
    }
}

console.log(`In the sentence "${str}" there are total ${yes} vowels`)

let NO = 0;
for (const element of str) {
    for (const element1 of vowels) {
        if(element.toLocaleLowerCase() == element1){
            NO += 1;
        }
    }
}

console.log(`In the sentence "${str}" there are total ${NO} consonants`)

let str1 = "yutuy";
let strrev = str1.split("").reverse().join("");
if(str1 == strrev){
    console.log(`${str1} is a palindrome`)
}else{
    console.log(`${str1} is not a palindrome`)

}

console.log(str1.length)
console.log(str1.replace('y','a'))