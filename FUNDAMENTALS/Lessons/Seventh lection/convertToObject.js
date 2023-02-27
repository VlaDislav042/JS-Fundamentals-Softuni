function convertToObject(input) {
    let personInfo = JSON.parse(input);//convert it from string to object

    for (const key of Object.keys(personInfo)) {
        console.log(key + ": " + personInfo[key]);
    } 
}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');