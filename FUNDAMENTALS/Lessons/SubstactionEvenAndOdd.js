function SubstactionEvenAndOdd(arr) {
    let sumEven = 0;
    let sumOdd = 0;
    for(let i = 0; i < arr.length; i++){
        currentNum = Number(arr[i]);
        if (currentNum % 2 == 0) {
            sumEven += currentNum;
        }else{
            sumOdd += currentNum;
        }
    }

    console.log(sumEven-sumOdd);
}
SubstactionEvenAndOdd([1,2,3,4,5,6]);