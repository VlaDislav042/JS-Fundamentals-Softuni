function factorialDiff(numOne, numTwo) {
    factorialNumOne = factorial(numOne);
    factorialNumTwo = factorial(numTwo);
    console.log((factorialNumOne / factorialNumTwo).toFixed(2));
    

    function factorial(num) {
        let final = 1;
        for (let i = num; i > 0; i--){
           final *= i;
        }
        return final;
    }
}
factorialDiff(6,2)