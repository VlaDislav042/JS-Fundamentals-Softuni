function spiceMustFlow(startingYield ) {
    let days = 0;
    let left = 0;

    while (startingYield >= 100) {
        let workers = startingYield - 26;
        left+=workers;
        startingYield -= 10;
        days++;
        if (startingYield <= 99) {
            left -= 26;
        }
    }
    
    console.log(days);
    console.log(left);
}
spiceMustFlow(450);