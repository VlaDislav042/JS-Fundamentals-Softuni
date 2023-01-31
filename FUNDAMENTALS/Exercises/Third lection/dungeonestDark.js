function dungeonestDark(arr) {
    let health = 100;
    let coins = 0;
    let roomCount = 0;
    let isOver = false;
    let rooms = arr[0].split("|");
    for (let room of rooms) {
        let commands = room.split(" ");
        let command = commands[0];
        let value = Number(commands[1]);
        roomCount++;
        switch (command) {
            case "potion":
                if (health + value > 100) {
                    value = value - (value + health - 100);
                }
                health += value;
                console.log(`You healed for ${value} hp.`);
                console.log(`Current health: ${health} hp.`);
                break;
            case "chest":
                coins += value;
                console.log(`You found ${value} coins.`);
                break;
            default:
                health -= value;
                if (health > 0) {
                    console.log(`You slayed ${command}.`);
                } else {
                    console.log(`You died! Killed by ${command}.` );
                    console.log(`Best room: ${roomCount}`);
                    isOver = true;
                    break;
                }
                break;
        }
        if (isOver) {
            break;
        }
        
    }   
    if (!isOver) {
        console.log("You've made it!");
        console.log(`Coins: ${coins}`); 
        console.log(`Health: ${health}`);            
    }
}
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);