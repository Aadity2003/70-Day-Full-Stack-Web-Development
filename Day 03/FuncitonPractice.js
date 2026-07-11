//1

function hello(){
    console.log("Hello!");
}

hello()

//2
const sum = ((x,y)=>{
    console.log(x + y);
})

sum(10,12)

//3
const sq = ((num)=>{
    console.log(num*num);
})
sq(9)

//4
const isevenorodd = ((num)=>{
    if(num % 2 == 0){
        console.log(`${num} is a even Number.`)
    }else{
        console.log(`${num} is a odd Number.`)
    }
})

isevenorodd(91)

//5
const largest = ((a, b, c)=>{
    if(a > b && a > c){
        console.log(`${a} is the greatest Number.`)
    }else if(b > a && b > c){
        console.log(`${b} is the greatest Number.`)
    }else{
        console.log(`${c} is the greatest Number`)
    }
})
largest(5,8,6)

//6
const BMI = ((w, h)=>{
    console.log(`BMI of the person having weight ${w} and height ${h} is ` + w / (h * h));
})

BMI(54,2)