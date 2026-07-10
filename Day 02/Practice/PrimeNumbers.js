
for(let i = 2; i <= 100; i++){
    let num = 2;
    while(num < i){
        if(i % num == 0){
            // console.log(`${i} is not a prime number.`);
            break;
        }
        num++;
    }
    if(i == num){
        console.log(`${i} is a prime number.`);
    }
}