function maxNumber(arr1) {
    let buff = [];
    isBiggest = false;
    let lastElement = arr1[arr1.length - 1];
    for (let i = 0; i < arr1.length; i++) {
        let firstNumber = arr1[i];
        if (firstNumber === lastElement) {
            isBiggest = true;
        }
        for (let j = i + 1; j < arr1.length; j++) {
            let secondNumber = arr1[j];
            if (firstNumber > secondNumber) {
                isBiggest = true;
            } else {
                isBiggest = false;
                break;
            }
        }
        if (isBiggest === true) {
            buff.push(firstNumber);
        }
    }
    console.log(buff.join(" "));
}
maxNumber([1, 4, 3, 2]);