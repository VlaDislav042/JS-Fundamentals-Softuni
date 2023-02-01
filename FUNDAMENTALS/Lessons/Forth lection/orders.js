function orders(item, quantity) {
    let coffee = 1.50;
    let water = 1.00;
    let coke = 1.40;
    let snacks = 2.0;
    let result = 0;
    switch (item) {
        case "coffee":
            result = coffee * quantity;
            break;
        case "water":
            result = water * quantity;
            break;
        case "coke":
            result = coke * quantity;
            break;
        case "snacks":
            result = snacks * quantity;
            break;
    }
    return result.toFixed(2);//if we use return. its returning the result of our function, but its not printing it, cause we didnt say it has to
}
console.log(orders("water", 5));//here we are saying the computer to log the result into the console
console.log(orders("coffee", 2));//if we dont say log, the function is still working, but we cant see the result 