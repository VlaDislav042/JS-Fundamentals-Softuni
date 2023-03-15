function stringSubstring(word, text) {
    let found = false;
    for (const el of text.split(" ")) {
        if (word === el.toLowerCase()) {
            console.log(word);
            found = true;
            break;
        }
    }
    if(!found) {
        console.log(`${word} not found!`);
    }
}
stringSubstring('javascript',
'JavaScript is the best programming language');