function reverseArray(n, arr) {
    let buff = [];
    for (let i = 0; i< n; i++) {
        buff.push(arr[i]);
    }
    let newBuff = "";
    for (let i = buff.length - 1; i >= 0; i--) {
        newBuff += (buff[i]) + " ";
        
    }
    console.log(newBuff);
}
reverseArray(4, [-1, 20, 99, 5]);