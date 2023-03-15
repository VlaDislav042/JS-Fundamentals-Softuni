function replaceRepeating(input) {
    let res = [];
    for (let i = 0; i < input.length; i++) {
        let ch = input[i];
        let ch1 = input[i + 1];
        if (ch !== ch1) {
            res.push(ch);
        }
    }
    console.log(res.join(""));
}
replaceRepeating('aaaaabbbbbcdddeeeedssaa');
replaceRepeating('qqqwerqwecccwd');