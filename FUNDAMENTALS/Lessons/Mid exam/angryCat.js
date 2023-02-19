function angryCat(arr, entry, type) {
    let rightArr = arr.splice(entry + 1);
    let entryPointItem = arr.pop();
    let leftArr = arr;
    let sumLeft = 0;
    let sumRight = 0;
    if (type === "cheap"){
        for (let i = 0; i < rightArr.length; i++){
            if (rightArr[i] < entryPointItem){
                sumRight += rightArr[i];
            }
        }
        for (let i = 0; i < leftArr.length; i++){
            if (leftArr[i] < entryPointItem){
                sumLeft += leftArr[i];
            }
        }
    }
    else if (type === "expensive"){
        for (let i = 0; i < rightArr.length; i++){
            if (rightArr[i] >= entryPointItem){
                sumRight += rightArr[i];
            }
        }
        for (let i = 0; i < leftArr.length; i++){
            if (leftArr[i] >= entryPointItem){
                sumLeft += leftArr[i];
            }
        }
    }
    if (sumLeft >= sumRight){
        console.log(`Left - ${sumLeft}`);
    } else {
        console.log(`Right - ${sumRight}`);
    }

}
angryCat([1, 5, 1], 1, "cheap");
console.log("-------------");
angryCat([5, 10, 12, 5, 4, 20], 3, "cheap");
console.log("------------");
angryCat([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3], 7, "expensive");