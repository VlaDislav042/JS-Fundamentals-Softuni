function modernTimes(input) {
    for (const word of input.split(" ")) {
        if (word.includes("#") && word.length > 1) {
            let letters = word.split("");
            letters.shift();
            letters.join("");
            let result = /\d/.test(letters);
            if (!result) {
                console.log(letters.join(""));
            }
        }
    }
}
modernTimes('The symbol # is known #variously in English-speaking #regions as the #number sign');