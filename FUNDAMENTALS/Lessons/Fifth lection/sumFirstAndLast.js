function sumFirstAndLast(arr) {
    let lastElement = Number(arr.pop());
    let firstElement = Number(arr.shift());
    return lastElement + firstElement;
}
console.log(sumFirstAndLast(['20', '30', '40']));