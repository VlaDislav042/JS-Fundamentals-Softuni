function bombNumbers(arr1, arr2) {
    let specialNumber = arr2[0];
    let power = arr2[1];
    while (arr1.includes(specialNumber)){
        let bomb = arr1.indexOf(specialNumber);
        arr1.splice(bomb,power + 1);
        arr1.splice(bomb - power, power);
    }
    let sum = 0;
    for (let i = 0; i < arr1.length; i++){
        sum += arr1[i];
    }
    console.log(sum);
}
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2]
);
// console.log("------------------------");
// bombNumbers([1, 4, 4, 2, 8, 9, 1],
//     [9, 3]
//     );
// console.log("------------------------");
// bombNumbers([1, 7, 7, 1, 2, 3],
//     [7, 1]
//     );
// console.log("------------------------");
// bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
//     [2, 1]
//     );
