function sliceArr(arr) {
    let count = arr.shift();
    let startPart = arr.slice(0, count);
    let endPart = arr.slice(arr.length - count);
    console.log(startPart.join(" "));
    console.log(endPart.join(" "));
}
sliceArr([2,
    7, 8, 9]
);
console.log("-----------");
sliceArr([3,
    6, 7, 8, 9]
);