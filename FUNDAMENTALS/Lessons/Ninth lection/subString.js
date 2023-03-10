function subString(text, num1, num2) {
    let endIndex = num1 + num2;
    let res = text.substring(num1, endIndex);
    console.log(res);
}
subString('SkipWord', 4, 7);