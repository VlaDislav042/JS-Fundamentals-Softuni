function occurrences(input, word) {
    let count = 0;
    for (const word1 of input.split(" ")) {
        if (word === word1) {
            count++;
        }
    }
    console.log(count);
}
occurrences('This is a word and it also is a sentence',
'is'
)