function palindrome(arr) {
    for (let i = 0; i < arr.length; i++) {
        let currentNum = String(arr[i]);
        let buff = "";
        for (let j = currentNum.length - 1; j >= 0; j--){
            buff += currentNum[j];
        }
        console.log(buff === currentNum);
    }
}
palindrome([123, 323, 421, 121]); 