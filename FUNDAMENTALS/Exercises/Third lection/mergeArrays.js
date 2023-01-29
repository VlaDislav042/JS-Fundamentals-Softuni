function mergeArrays(arr1, arr2) {
    let newArr = [];
    for(let  i = 0; i < arr1.length; i++){
        let valueA = arr1[i];
        let valueB = arr2[i];
        if (i % 2 === 0) {
            valueA = Number(arr1[i]);
            valueB = Number(arr2[i]);
        }
        let currentResult = valueA + valueB;
        newArr.push(currentResult);
    }
    console.log(newArr.join(" - "));
}
mergeArrays(['5', '15', '23', '56', '35'],
            ['17', '22', '87', '36', '11']);
console.log("22 - 1522 - 110 - 5636 - 46");