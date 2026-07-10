let num = Math.floor(Math.random() * 100);

do{
    let guess = prompt("Guess the number between 0 and 100:");
    if(guess == num){
        console.log("Congratulations! You guessed the correct number.");
        break;
    }else if(guess < num){
        console.log("Too low! Try again.");
    }else if (guess > num){
        console.log("Too high! Try again.");
    }
}while(true);