function experienceGaining(input) {
    let neededExperience = input.shift();
    let battles = input[0];
    let neededBattles = 0;
    let rank = 0;
    for (let i = 1; i <= battles; i++) {
        current = input[i];
        rank += current;
        if (i % 3 === 0) {
            current = current * 0.15;
            rank += current;
        }
        if (i % 5 === 0) {
            current = current * 0.10;
            rank -= current;
        }
        if (i % 15 === 0) {
            current = current * 0.05;
            rank += current;
        }
        neededBattles++;
        if (rank >= neededExperience) {
            console.log(`Player successfully collected his needed experience for ${neededBattles} battles.`);
            break;
        }
    }
     if (neededExperience > rank) {
        console.log(`Player was not able to collect the needed experience, ${(neededExperience - rank).toFixed(2)} more needed.`);
    }

}
experienceGaining(([500,
    5,
    50,
    100,
    200,
    100,
    30])
);
console.log("----------");
experienceGaining(([500,
    5,
    50,
    100,
    200,
    100,
    20])
);
console.log("----------");
experienceGaining(([400,
    5,
    50,
    100,
    200,
    100,
    20])
);