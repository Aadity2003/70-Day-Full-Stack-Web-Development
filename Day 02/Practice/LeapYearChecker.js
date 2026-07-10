let Year = Number(prompt("Enter the Year of which you want to know the leap or not"));

if(Year % 4 == 0){
    console.log(`${Year} is a leap year.`)
}
else{
    consol.log(`${Year} is not a leap year.`)
}