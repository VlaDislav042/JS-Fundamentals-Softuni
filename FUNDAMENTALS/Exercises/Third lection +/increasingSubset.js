function increasingSubset(arr) {
    let currentNumber = 0;
    let previousNumber = 0;
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
        currentNumber = arr[i];
        previousNumber = arr[i - 1];
        if (i === 0) {
            newArr.push(currentNumber);
        }
        if (currentNumber > previousNumber) {
            newArr.push(currentNumber);
        }
        for (let i = 0; i < newArr.length; i++){
            if (newArr[i] > newArr[i + 1]) {
                newArr.pop()
            }
        }
    }
    console.log(newArr.join(" "));
}
increasingSubset([ 1, 2, 3, 4]);