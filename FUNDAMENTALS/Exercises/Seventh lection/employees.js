function employees(input) {
    let obj = {};
    for (const name of input) {
        obj[name] = name.length;
    }
    for (const key of Object.keys(obj)) {
        console.log(`Name: ${key} -- Personal Number: ${obj[key]}` );
    }
    
} 
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
);
console.log("-------------");
employees([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
]
);