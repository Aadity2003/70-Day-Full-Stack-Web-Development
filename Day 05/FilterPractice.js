let studentM = [59,68,23,45,69,85,12,26];

let pass = studentM.filter((MARKS)=>{
    return MARKS>=35
})
console.log(studentM)
console.log(pass)

let odd = studentM.filter((MARKS)=>{
    return MARKS % 2 != 0
})
console.log(odd)

let even = studentM.filter((MARKS)=>{
    return MARKS % 2 == 0
})
console.log(even)


let Pprice = [2365,36225,2652,365,2565,2655,26325,3003,7896]
let price = Pprice.filter((Price)=>{
    return Price > 3000
})
console.log(price)