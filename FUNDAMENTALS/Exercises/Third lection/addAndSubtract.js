function addAndSubtract(arr) {
    let newArr = [];
    let sumOriginal = 0;
    let sumNew = 0;
    for (let i = 0; i < arr.length; i++) {
        let currentNumber = arr[i];
        sumOriginal += currentNumber;
        if (currentNumber % 2 === 0) {
            currentNumber += i;
            sumNew += currentNumber;
            newArr.push(currentNumber);
        } else {
            currentNumber -= i;
            sumNew += currentNumber;
            newArr.push(currentNumber);
        }
    }
    console.log(newArr);
    console.log(sumOriginal);
    console.log(sumNew);
}
addAndSubtract([-5, 11, 3, 0, 2]);