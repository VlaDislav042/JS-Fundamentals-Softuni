function signCheck(numOne,numTwo, numThre) {
    if (numOne < 0 || numTwo < 0 || numThre < 0) {
        console.log(`Negative`);
    } else console.log("Positive");
}
signCheck(5, 12, -15);
signCheck(-6, -12, 14);