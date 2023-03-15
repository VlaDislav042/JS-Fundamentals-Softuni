function pascalCase(input) {
    let res = [];
    let word = "";
    word += input[0];
    for (let i = 1; i < input.length; i++) {
        let ch = input[i];
        if (ch.toLowerCase() === ch) {
            word += ch;
        } else {
            res.push(word);
            word = "";
            word += ch;
        }
    }
    res.push(word);
    console.log(res.join(", "));
}
pascalCase('SplitMeIfYouCanHaHaYouCantOrYouCan');
pascalCase('HoldTheDoor')