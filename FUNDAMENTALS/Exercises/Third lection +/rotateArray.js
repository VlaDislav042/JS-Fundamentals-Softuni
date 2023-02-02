function rotateArray(arr) {
    let newArr = [];
    let rotations = Number(arr[arr.length - 1]);
    for (let i = 0; i < arr.length - 1; i++) {
        newArr.push(arr[i]);
    }
    for (let i = 0; i < rotations; i++){
        let lastElement = newArr[newArr.length - 1];
        newArr.unshift(lastElement);
        newArr.pop(lastElement);
        
    }    
    console.log(newArr.join(" "));
}
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15'])