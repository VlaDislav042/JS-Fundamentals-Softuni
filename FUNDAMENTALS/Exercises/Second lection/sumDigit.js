function sumDigit(num) {
    num = String(num);
    let sum = 0;
    for(let i = 0; i < num.length; i++){
        let currentNumber = Number(num[i]);
        sum +=currentNumber;
    }
    console.log(sum);
}
sumDigit(245678);