function sum(number) {
    let result = 0;
    let count = 0;
    for (let i = 1; i <= 100; i++) {
        if (count != number) {

            if (i % 2 === 0) {
            } else {
                result += i;
                count++;
                console.log(i);
            }
        }
    }

    console.log(`Sum: ${result}`);

}
sum(3);