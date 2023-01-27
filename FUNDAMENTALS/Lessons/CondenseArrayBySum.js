function CondenseArrayBySum(arr) {
    let condensed = [];
    if (arr.length === 0) {
        console.log(`${arr.toString()} is already condensed to number`);
    }
    while (arr.length > 1) {
        for (let i = 0; i < arr.length - 1; i++){
            condensed[i] = arr[i] + arr[i+1];
        }
        arr = condensed;
        condensed = [];
    }
    console.log(arr.toString());
}
CondenseArrayBySum([1]);