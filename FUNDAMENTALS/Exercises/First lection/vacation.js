function vacations(people, group, day) {
    let price = 0;
    switch (day) {
        case "Friday":
            if (group === "Students") {
                if (people >= 30) {
                    price = people * 8.45;
                    price *= 0.85;
                } else {
                    price = people * 8.45;
                }
            } else if (group === "Business") {
                if (people >= 100) {
                    price = people * 10.90;
                    price -= 109;
                } else {
                    price = people * 10.90;
                }
            } else if (group === "Regular") {
                if (people >= 10 && people <= 20) {
                    price = people * 15;
                    price *= 0.95;
                } else {
                    price = people * 15;
                }
            }
            break;
        case "Saturday":
            if (group === "Students") {
                if (people >= 30) {
                    price = people * 9.80;
                    price *= 0.85;
                } else {
                    price = people * 9.80;
                }
            } else if (group === "Business") {
                if (people >= 100) {
                    price = people * 15.60;
                    price -= 109;
                } else {
                    price = people * 15.60;
                }
            } else if (group === "Regular") {
                if (people >= 10 && people <= 20) {
                    price = people * 20;
                    price *= 0.95;
                } else {
                    price = people * 20;
                }
            }
            break;
        case "Sunday":
            if (group === "Students") {
                if (people >= 30) {
                    price = people * 10.46;
                    price *= 0.85;
                } else {
                    price = people * 10.46;
                }
            } else if (group === "Business") {
                if (people >= 100) {
                    price = people * 16;
                    price -= 109;
                } else {
                    price = people * 16;
                }
            } else if (group === "Regular") {
                if (people >= 10 && people <= 20) {
                    price = people * 22.50;
                    price *= 0.95;
                } else {
                    price = people * 22.50;
                }
            }
            break;

        default:
            break;
    }
    console.log(`Total price: ${price.toFixed(2)}`);
}
vacations(40,
    "Regular",
    "Saturday"
);    