function triangleOfNumbers(n) {
    for (let row = 1; row <= n; row++) {
        let buff = "";
        for (let cols = 1; cols <= row; cols++) {
            buff += row + " ";
        }
        console.log(buff);
    }
}

triangleOfNumbers(3);
console.log("||||||||");
triangleOfNumbers(31);