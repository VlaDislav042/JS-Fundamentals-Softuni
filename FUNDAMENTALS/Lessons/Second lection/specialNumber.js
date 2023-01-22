function specialNumber(n) {
    let sum = 0;
    for(let i = 1; i <=n; i++){

        let lastDigit = i % 10;// we devide module by 10 to get the last digit of the cirrent num (i)
        let firstDigit = parseInt(i / 10);// with simple devide by 10 we get the first digit and we use parseInt() because when there is one digit in a number its its must print 0
        sum = lastDigit + firstDigit;
         
        if(sum === 5 || sum === 7 || sum === 11){
            console.log(`${i} -> True`);
        }else {
            console.log(`${i} -> False`);
        }

    }
}
specialNumber(15);