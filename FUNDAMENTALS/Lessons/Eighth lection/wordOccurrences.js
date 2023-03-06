function wordOccurrences(input) {
    let words = new Map();
    for (let i = 0; i < input.length; i++) {
        let word = input[i];
        let count = 0;
        for (const sameWord of input) {
            if (word === sameWord){
                count ++;
            }
        }
        words.set(word, count);
    }
    let sorted = Array.from(words.entries()).sort((a, b) => b[1] - a[1]);
    for (const [word, count] of sorted) {
        console.log(word + " -> " + count + " times");
    }
}
wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);