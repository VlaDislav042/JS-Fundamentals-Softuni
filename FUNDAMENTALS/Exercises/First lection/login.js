function login(input) {
    let userName = String(input[0]);
    let attempt = 1;

    for (let i = 1; i < input.length; i++) {
        let currentWord = input[i];
        let letter = currentWord.split('');// we split the word into single letters and they are into an array
        let reverseLetter = letter.reverse();// we reverse the letters from last to first
        let reverseWord = reverseLetter.join('');// and we create the new word from the reverse letters
        
        if (attempt >= 4) {
            console.log(`User ${userName} blocked!`);
            break;
            
        } else {
            if (reverseWord === userName) {
                console.log(`User ${userName} logged in.`);
            } else {
                console.log(`Incorrect password. Try again.`);
            }
        }
        attempt++;
    }
}
login(['sunny','rainy','cloudy','sunny','not sunny']);