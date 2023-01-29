function magicSum(arr, num) {
    for (let i = 0; i < arr.length; i++){
        let firstNumber = arr[i];
        for (let j = i + 1; j < arr.length; j++){
            let secondNumber = arr[j];
            if (firstNumber + secondNumber === num) {
                console.log(`${firstNumber} ${secondNumber}`);
            }
        }
    }
}
magicSum([14, 20, 60, 13, 7, 19, 8],
    27
    );