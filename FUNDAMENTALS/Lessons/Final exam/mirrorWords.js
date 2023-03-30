function mirrorWords(arr) {
    let regex = /(?<delimeter>[@#])(?<word1>[a-zA-Z]{3,})\k<delimeter>\k<delimeter>(?<word2>[a-zA-Z]{3,})\k<delimeter>/gm;
    let count = 0;
    let results = [];
    for (const text of arr) {
        let match = text.matchAll(regex);
        for (const i of match) {
            count++;
            let leftWord = i.groups["word1"];
            let rightWord = i.groups["word2"];
            let reversedRight = reverseStirng(rightWord);
            if (leftWord === reversedRight) {
                results.push(`${leftWord} <=> ${rightWord}`);
            }
        }
    }
    if (count === 0) {
        console.log("No word pairs found!");
    } else {
        console.log(`${count} word pairs found!`);
    }
    if (results.length === 0) {
        console.log("No mirror words!");
    } else {
        console.log(`The mirror words are:\n${results.join(', ')}`);
    }

    function reverseStirng(text) {
        return text.split("").reverse().join("");
    }
}
mirrorWords(['@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r']);