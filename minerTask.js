function minerTask(input) {
    let mine = new Map();
    for(let i = 0; i < input.length; i += 2) {
        let resource = input[i];
        let quantity = Number(input[i + 1]);
        if (mine.has(resource)) {
            let oldQuantity = mine.get(resource);
            let newQuantity = quantity + oldQuantity;
            mine.set(resource, newQuantity);
        } else {
            mine.set(resource, quantity);
        }
    }
    for (const [key, value] of mine) {
        console.log(key + " -> " + value);
    }
}
minerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ]
    );