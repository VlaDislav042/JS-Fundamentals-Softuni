function primeNumber(num) {
    let isPrime = true;

    if (num === 1) {
        console.log(`Neither prime nor composite`);
    } else if (num > 1) {
        for(let i = 2; i < num; i++){
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
    }
    if (isPrime) {
        console.log(true);
    }else{
        console.log(false);
    }
}
primeNumber(4);