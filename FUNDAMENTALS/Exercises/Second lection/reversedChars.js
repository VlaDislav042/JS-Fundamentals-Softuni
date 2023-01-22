function reversedChars(param1, param2, param3) {
    param1 += '';
    param1 += param2;
    param1 += '';
    param1 += param3;
    param1 = String(param1);
    let buff = "";
    for (let i = param1.length - 1; i >= 0; i--) {
        let currentLetter = param1[i];
        buff += currentLetter + " ";
    }
    console.log(buff);
}
reversedChars('1',
'L',
'&'

);