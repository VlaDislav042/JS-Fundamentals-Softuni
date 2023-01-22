function pyramidOfKing(base, increment) {
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let lapisStepCounter = 0;
    let maxStepCounter = 0;

    for (let i = base; i >= 1 ; i-=2){
        maxStepCounter++;
    }

    for (let i = base; i >= 1 ; i-=2){
        lapisStepCounter++;

        let currentStone = (i - 2) * (i - 2);
        let currentMarble = (4 * i) - 4;
        let currentLapis = (4 * i) - 4;
        let currentGold = i * i;

        if(lapisStepCounter === maxStepCounter){
            gold += currentGold;
            break;
        }
        if (lapisStepCounter % 5 === 0) {
            stone += currentStone;
            lapis += currentLapis;
        }else{
            stone += currentStone;
            marble += currentMarble;
        }
    }
    console.log(`Stone required: ${Math.ceil(stone * increment)}`);
    console.log(`Marble required: ${Math.ceil(marble * increment)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis * increment)}`);
    console.log(`Gold required: ${Math.ceil(gold * increment)}`);
    console.log(`Final pyramid height: ${Math.floor(lapisStepCounter * increment)}`);
}
pyramidOfKing(11, 0.75);