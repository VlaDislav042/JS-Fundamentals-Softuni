function store(arr1, arr2) {
    let myStore = {};
    for (let i = 0; i < arr1.length; i += 2) {
        let name = arr1[i];
        let quantity = arr1[i + 1];
        myStore[name] = Number(quantity);
    }

    for (let i = 0; i < arr2.length; i += 2) {
        let name = arr2[i];
        let quantity = Number(arr2[i + 1]);
        if (myStore.hasOwnProperty(name)) {
            myStore[name] += quantity;
        } else {
            myStore[name] = quantity;
        }
    }
    for (const key of Object.keys(myStore)) {
        console.log(key + " -> " + myStore[key]);
    }
}
store(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
);
console.log("-------------");
store(['Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'],
    ['Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30']
);