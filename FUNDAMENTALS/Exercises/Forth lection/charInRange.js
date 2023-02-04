function charInOrder(charA, charB) {
    let numFromCharA= charA.charCodeAt(0);
    let numFromCharB= charB.charCodeAt(0);
    
    let startIndex = smallestOfTwoNums(numFromCharA,numFromCharB);
    let endIndex = largestOfTwoNums(numFromCharA,numFromCharB);
    let buff = "";
    for (let i = startIndex + 1; i < endIndex; i++){
       buff += convertNumToChar(i) + " ";
    }
    console.log(buff); 

    function smallestOfTwoNums(a,b) {
        return Math.min(a,b);
    }
    function largestOfTwoNums(a,b) {
        return Math.max(a,b);
    }
    function convertNumToChar(num) {
        return String.fromCharCode(num);
    }
}