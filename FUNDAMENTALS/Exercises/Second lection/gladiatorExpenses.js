/* 
As a gladiator, Peter has to repair his broken equipment when he loses a fight. His equipment consists of a helmet, sword, shield, and armor. You will receive Peter`s lost fights count. 
•	Every second lost game, his helmet is broken.
•	Every third lost game, his sword is broken.
•	When both his sword and helmet are broken in the same lost fight, his shield also breaks.
•	Every second time, when his shield brakes, his armor also needs to be repaired. 

*/
function gladiatorExpenses(lostFight, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let sum = 0;
    for (let i = 1; i <= lostFight; i++) {

        if (i % 2 === 0) {
            sum += helmetPrice;
        }
        if (i % 3 === 0) {
            sum += swordPrice;
        }
        if (i % 6 === 0) { // we devide by 6 cause its multiple by 2 and 3 
            sum += shieldPrice;
        }
        if (i % 12 === 0) {// we devide by 12 cause its multiple by 2 and 3 and 6
            sum += armorPrice;
        }
    }
    console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`);
}
gladiatorExpenses(7,
    2,
    3,
    4,
    5
);