function arrayManipulation(arr) {
    let arrOfNumbers = (arr[0].split(",")[0].split(" ")).map(Number);// we get the array of the numbers

    for (let i = 1; i < arr.length; i++) {
        let [command, firstNum, secondNum] = arr[i].split(" ");

        firstNum = Number(firstNum);
        secondNum = Number(secondNum);

        switch (command) {
            case "Add":
                add(firstNum);
                break;
            case "Remove":
                remove(firstNum);
                break;
            case "RemoveAt":
                removeAt(firstNum, secondNum);
                break;
            case "Insert":
                insert(firstNum, secondNum);
                break;
        }
    }

    function add(el) {
        arrOfNumbers.push(el);
    }
    function remove(num) {
        arrOfNumbers = arrOfNumbers.filter(el => el !== num);
    }
    function removeAt(index) {
        arrOfNumbers.splice(index, 1);
    }
    function insert(num, index) {
        arrOfNumbers.splice(index, 0, num);
    }


    console.log(arrOfNumbers.join(" "));
}

arrayManipulation(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']
);
console.log("-------------");
arrayManipulation(['6 12 2 65 6 42',
    'Add 8',
    'Remove 12',
    'RemoveAt 3',
    'Insert 6 2']
);