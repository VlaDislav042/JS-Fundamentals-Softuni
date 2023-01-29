function equalSums(arr) {
    if (arr.length === 1) {
        console.log(0);
        return;
    }
    let isNo = true;
    for (let i = 0; i < arr.length; i++) {
        let leftSum = 0;
        let rightSum = 0;
        let currentNumber = arr[i];
        for (let j = i + 1; j < arr.length; j++) {//this for is for numbers on the right
            rightSum += arr[j];
        }
        for (let k = i - 1; k < i; k--) {//this for is for numbers on the left
            if (k < 0) {
                break;
            } else {
                leftSum += arr[k]
            }
        }
        if (rightSum === leftSum) {
            console.log(i);
            isNo = false;
        }

    }
    if (isNo) {
        console.log("no");
    }
}

equalSums([1, 2, 3, 3]);

