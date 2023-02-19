function friendList(input) {
    let friends1 = input.shift();
    let friends = friends1.split(", ")
    let command = input.shift();
    let blacklistedCount = 0;
    let lostCount = 0;
    while (command !== "Report") {
        let tokens = command.split(" ");
        let action = tokens.shift();
        switch (action) {
            case "Blacklist":
                let name = tokens.shift();
                if (friends.includes(name)) {
                    console.log(`${name} was blacklisted.`);
                    let indexOfName = friends.indexOf(name);
                    friends.splice(indexOfName, 1, "Blacklisted");
                    blacklistedCount++;
                } else {
                    console.log(`${name} was not found.`);
                }
                break;
            case "Error":
                let index = Number(tokens.shift());
                let some = friends[index];
                if (index >= 0 && index < friends.length && some !== "Blacklisted" && some !== "Lost") {
                    console.log(`${friends[index]} was lost due to an error.`);
                    friends.splice(index, 1, "Lost");
                    lostCount++;
                }
                break;
            case "Change":
                let index1 = Number(tokens.shift());
                let newName = tokens.shift();
                if (index1 >= 0 && index1 < friends.length) {
                    console.log(`${friends[index1]} changed his username to ${newName}.`);
                    friends.splice(index1, 1, newName);
                }
                break;
        }
        command = input.shift();
    }
    console.log(`Blacklisted names: ${blacklistedCount} `);
    console.log(`Lost names: ${lostCount}`);
    console.log(friends.join(" "));
}
friendList((["Mike, John, Eddie",
    "Blacklist Mike",
    "Error 0",
    "Report"])
);
console.log("------------------");
friendList((["Mike, John, Eddie, William",
    "Error 3",
    "Error 3",
    "Change 0 Mike123",
    "Report"])
);
console.log("------------------");
friendList((["Mike, John, Eddie, William",
    "Blacklist Maya",
    "Error 1",
    "Change 4 George",
    "Report"])
);