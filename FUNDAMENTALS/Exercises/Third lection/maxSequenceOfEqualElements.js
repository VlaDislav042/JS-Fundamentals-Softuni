function maxSequenceOfEqualElements(arr) {
    let longestSequance = [];
    for (let i = 0; i < arr.length; i++) {
        let currentSequance = [];
        currentSequance.push(arr[i]);
        for (let j = i + 1; j < arr.length; j++) {
            if ((arr[i]) === (arr[j])) {
                currentSequance.push(arr[j]);
            } else {
                break;
            }
        }
        if (currentSequance.length > longestSequance.length) {
            longestSequance = currentSequance;
        }
    }
    console.log(longestSequance.join(" "));
}
maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);

