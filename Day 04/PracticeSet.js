console.log("har\"".length)

const sentence = 'The quick brown fox jumps over the lazy dog.';
const word = 'fox';
console.log(sentence.includes(word))
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`)

console.log(sentence.toLowerCase())

let str2 = "Please give me Rs 1000"
let amount =Number.parseInt(str2.slice("Please give me Rs ".length)) 
console.log(amount)
console.log(typeof amount)
amount 


let f = "Deepika Padukon";
console.log(f)
console.log(f.split("  "));