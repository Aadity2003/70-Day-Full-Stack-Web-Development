let Markes = Number(prompt("Enter your marks:"));
if (Markes >= 90 && Markes <= 100){
    console.log("Your Grade is A+");
} else if (Markes >= 80 && Markes < 90){
    console.log("Your Grade is A");
} else if (Markes >= 70 && Markes < 80){
    console.log("Your Grade is C");
} else {
    console.log("Your Grade is D");
}