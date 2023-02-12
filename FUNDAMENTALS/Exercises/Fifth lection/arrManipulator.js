function arrManipulator(arr, commands) {
    for (let i = 0; i < commands.length; i++) {
        let arrOfCommand = commands[i].split(" ");
        let command = arrOfCommand[0];
        switch (command) {
            case "add":
                let index = arrOfCommand[1];
                let el = arrOfCommand[2];
                arr.splice(index, 0, Number(el));
                break;
            case "addMany":
                let remove = arrOfCommand.shift();
                let arrOfNumbers = arrOfCommand.map(Number);
                let index1 = arrOfNumbers[0];
                for (let i = 1; i < arrOfNumbers.length; i++){
                    let el = arrOfNumbers[i];
                    arr.splice(index1, 0, Number(el));
                    index1++;
                }
                break;
            case "contains":
                let number = Number(arrOfCommand[1]);
                if (arr.indexOf(number) !== -1){
                    console.log(0);
                } else if (arr.indexOf(number) === -1) {
                    console.log(-1);
                }
                break;
            case "remove":
                let removeIndex = Number(arrOfCommand[1]);
                arr.splice(removeIndex, 1);
                break;
            case "shift":
                let numberOFShifts = Number(arrOfCommand[1]);
                for (let i = 0; i < numberOFShifts; i++){
                     let el= arr.shift();
                    arr.push(el);
                }
                break;
            case "sumPairs":
                for (let i = 0; i < arr.length; i ++){
                    let firstNum = Number(arr.splice(i, 1));
                    let secondNum = Number(arr.splice(i , 1));
                    let sum = firstNum + secondNum;
                    arr.unshift(sum)
                    sum = 0;
                }
                arr.reverse();
                break;
            case "print":
                console.log(`[ ${arr.join(", ")} ]`);
                break;
        }
        if (command === "print"){
            break;
        }
    }
}
// arrManipulator([1, 2, 4, 5, 6, 7],
//     ['add 1 8', 'contains 1', 'contains 3', 'print']
// );
console.log("---------------");
arrManipulator([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']
);
