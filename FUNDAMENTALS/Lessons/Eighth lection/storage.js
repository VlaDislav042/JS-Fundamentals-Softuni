function storage(input) {
    let store = new Map();
    for (const el of input) {
        let token = el.split(" ");
        let item = token[0];
        let quantity = Number(token[1]);
        if (store.has(item)){
            let currentQuantity = store.get(item);
            store.set(item, currentQuantity + quantity)
        } else {
            store.set(item, quantity);
        } 
    }
    for (const [key, value] of store) {
        console.log(key + " -> " + value);
    }
}
storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']
);