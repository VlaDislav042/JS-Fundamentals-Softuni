function NegativOrPositiveNum(arr) {
    let newArr = [];
    for (const elements of arr) {
        let number = Number(elements)
        if (number < 0){
            newArr.unshift(number);
        } else {
            newArr.push(number);
        }
    }
    console.log(newArr.join('\n'));
}
NegativOrPositiveNum(['7', '-2', '8', '9']);
console.log("----------------");
NegativOrPositiveNum(['3', '-2', '0', '-1']);