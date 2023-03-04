function phoneBook(input) {
    let res = {};
    for (const line of input) {
        let [name, phone] = line.split(" ");
        res [name] = phone;
    }
    for (const key in res) {
        console.log(`${key} -> ${res[key]}`);
    }
}
phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
)