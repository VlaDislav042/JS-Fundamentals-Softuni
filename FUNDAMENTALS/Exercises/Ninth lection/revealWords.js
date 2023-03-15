function revealWords(words, text) {  
    for (const wordInText of text.split(" ")) {
        for (const wordReplace of words.split(", ")) {
            let wordReplaceLength = wordReplace.length;
            let wordInTextLength = wordInText.length;
            if (wordInText.includes("*") && wordInTextLength === wordReplaceLength) {
                text = text.replace(wordInText,wordReplace);
            }
        }
    }
    console.log(text);
}
revealWords('great',
'softuni is ***** place for learning new programming languages'
)
revealWords('great, learning',
'softuni is ***** place for ******** new programming languages'
);