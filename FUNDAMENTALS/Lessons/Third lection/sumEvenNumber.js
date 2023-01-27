function sumEvenNumber(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        currentNum = Number(arr[i]);
        if (currentNum % 2 == 0) {
            sum += currentNum;
        }
    }
    console.log(sum);
}
sumEvenNumber(['3','5','7','9']);