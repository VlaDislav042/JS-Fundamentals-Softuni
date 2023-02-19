function computerOrder(input) {
    let sum = 0;
    let command = input.shift();
    while (command !== "special") {
        if (command === "regular") {
            break;
        }
        let price = Number(command);
        if (price < 0) {
            console.log("Invalid price!");
            command = input.shift();
            continue;
        }
        sum += price;
        command = input.shift();
    }
    if (sum === 0) {
        return "Invalid order!";
    } else {
        let taxes = sum * 0.20;
        let totalPrice = sum * 1.2;
        if (command === "special") {
            totalPrice *= 0.90;
        }
        return `Congratulations you've just bought a new computer!
        Price without taxes: ${sum.toFixed(2)}$
        Taxes: ${taxes.toFixed(2)}$
        -----------
        Total price: ${totalPrice.toFixed(2)}$`

    }
}
console.log(computerOrder(([
    '1023',
    '15',
    '-20',
    '-5.50',
    '450',
    '20',
    '17.66',
    '19.30', 'regular'
]))
);
console.log("------------------");
console.log(computerOrder(([
    'regular'
]))
);