function smallestTwoNumbers(arr) {
    let sortedInAscending = arr.sort((a, b) => {
        return a - b;
    });
    let smallestNumbers = arr.slice(0,2);
    console.log(smallestNumbers.join(" "));
}
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);