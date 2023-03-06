function addressBook(input) {
    let info = {};
    for (const personInfo of input) {
        let [name, address] = personInfo.split(":");
        info[name] = address;
    }
    let sorted = Object.keys(info).sort((a, b) => a.localeCompare(b))
    for (const key of sorted) {
        console.log(key + " -> " + info[key]);
    }
}
addressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
);