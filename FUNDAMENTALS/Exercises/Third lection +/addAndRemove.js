function addAndRemove(arr) {
    let isEmpty = 0;
    let isNotEmpty = 0;
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "add") {
            newArr.push(i + 1);
            isNotEmpty++;
        } else {
            newArr.pop();
            isEmpty++;
        }
    }
    if (isNotEmpty === 0) {
        console.log("Empty");
    }else{
        console.log(newArr.join(" "));
    }
    
}
addAndRemove(['add', 'add', 'remove', 'add', 'add'])