function searchNumber(arr1, arr2) {
    let takeElements = arr2[0];
    let deleteElements = arr2[1];
    let searchNumber = arr2[2];
    let count = 0;
    let count1 = 0;
    let countSearchNumber = 0;
    let newArr = [];
    while (count < takeElements) {
        let el = arr1.shift();
        newArr.push(el);
        count++
    }
    while (count1 < deleteElements){
        newArr.shift();
        count1++;
    }
    for (let i = 0; i < arr1.length; i++){
        if (newArr[i] === searchNumber){
            countSearchNumber++;
        }
    }
    console.log(`Number ${searchNumber} occurs ${countSearchNumber} times.`);
}
searchNumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
    )