function arrayRotation(arr, rotation) {
    let buffArr = [];
    for (let i = 0; i < rotation; i++) {
        let firstElement = arr[0];
        for (let j = 1; j < arr.length; j++) {
            buffArr.push(arr[j]);
        }
        buffArr.push(firstElement);
        arr = buffArr;
        buffArr = [];
    }
    console.log(arr.join(" "));
}
arrayRotation([51, 47, 32, 61, 21], 2);