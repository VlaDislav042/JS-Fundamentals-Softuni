function houseParty(arr) {
    let myList = [];
    for (const el of arr) {
        let command = el.split(" is ");
        let name = command[0];
        let status = command[1];
        if (command[1] === "going!") {
            if (myList.indexOf(name) === -1) {
                myList.push(name);
            } else {
                console.log(`${name} is already in the list!`);
            }
        } else {
            if (myList.indexOf(name) === -1){
                console.log(`${name} is not in the list!`);
            } else {
                myList.splice(myList.indexOf(name), 1);
            }
        }
    }
    console.log(myList.join("\n"));
}
houseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']
);
console.log("----------------");
houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']
)