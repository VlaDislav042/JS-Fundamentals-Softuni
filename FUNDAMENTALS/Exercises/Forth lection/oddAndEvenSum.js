function oddAndEvenSum(num) {
    let sumEven = 0;
    let sumOdd = 0;
    let stringNumber = numberToString(num);
    for (let i = 0; i < stringNumber.length; i++) {
        let currentNum = Number(stringNumber[i]);
        if (evenOrOddNum(currentNum) === true) {
            sumEven += currentNum;
        } else if (evenOrOddNum(currentNum) === false) {
            sumOdd += currentNum;
        }
    }
    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);


    function numberToString(num) { 
        return String(num);
    }
    function evenOrOddNum(num) {
        if (num % 2 === 0) {
            return true;
        } else {
            return false;
        }
    }
}
oddAndEvenSum(3495892137259234);