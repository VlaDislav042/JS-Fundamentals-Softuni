function printNelement(arr) {
    let buff = "";
    let lastElement = Number(arr[arr.length - 1]);
    for (let i = 0; i < arr.length - 1; i += lastElement){
        buff += arr[i] + " ";
    }
    console.log(buff);
}
printNelement(['5', '20', '31', '4', '20', '2']);