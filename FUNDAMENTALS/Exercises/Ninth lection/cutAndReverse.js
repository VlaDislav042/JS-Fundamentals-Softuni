function cutAndReverse(input) {
    let res = [];
    let word = "";
    let lengthHalf = input.length / 2;
    let arr = input.split("");
    for (let i = 0; i < lengthHalf; i++) {
        let ch = arr.pop();
        word += ch;
    }
    res.push(word);
    word = "";
    for (let i = 0; i < lengthHalf; i++) {
        let ch = arr.pop();
        word += ch;
    }
    res.push(word);
    for (let i = res.length; i > 0; i--) {
        console.log(res[i - 1]);
    }
}
cutAndReverse(`tluciffiDsIsihTgnizamAoSsIsihT`);