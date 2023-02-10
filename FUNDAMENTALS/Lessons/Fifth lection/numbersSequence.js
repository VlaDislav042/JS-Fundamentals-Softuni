function numbersSequence(length, k) {
    let sequence = [1];
    
    for (let i = 1; i < length; i++){
        let lastElements = sequence.slice(Math.max(sequence.length - k, 0));
        let sum = 0;
        for (const el of lastElements) {
           sum += el; 
        }
        sequence.push(sum);
    }
    console.log(sequence.join(" "));
}
numbersSequence(6,3)