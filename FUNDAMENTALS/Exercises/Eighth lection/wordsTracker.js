function wordsTracker(input) {
    let res = {};
    let findWord = input.shift().split(" ");
    for (const word of findWord) {
        res[word] = 0;
    }
    for (const word of input) {
        if (res.hasOwnProperty(word)) {
            res[word] += 1;
        }
    }
    let sortArr = Object.entries(res).sort((a, b) => b[1] - a[1]);
    for (let [key, value] of sortArr) {
        console.log(`${key} - ${value}`);
    }
}
wordsTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count',
    'the', 'occurrences', 'of', 'the', 'words', 'this', 'and',
    'sentence', 'because', 'this', 'is', 'your', 'task']);