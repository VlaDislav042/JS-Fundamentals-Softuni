function oddNumber(arr) {
    let oddPositions = arr.filter((x, i) => i % 2 !== 0).map(x => x * 2).reverse().join(" ");
    console.log(oddPositions);
}
oddNumber([3, 0, 10, 4, 7, 3]);