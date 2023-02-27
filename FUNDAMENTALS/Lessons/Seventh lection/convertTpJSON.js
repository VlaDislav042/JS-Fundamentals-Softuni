function convertTpJSON(firstName, lastName, hairColor) {
    let person = {
        name : firstName,
        lastName : lastName,
        hairColor : hairColor,
    }
    console.log(JSON.stringify(person));//converthing object to string 
}
convertTpJSON('George', 'Jones', 'Brown')