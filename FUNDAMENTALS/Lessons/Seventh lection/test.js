let person = {
    firstName: "Vladi",
    lastName: "Georgiev",
    age: 18,
    town: "Stara Zagora",
    sleep : () => console.log("zzzzzzzzzzzz"),
    study : (hours) => console.log(`Styding for ${hours} hours`),
    work : working,
}
function working(hours) {
    console.log(`Working for ${hours} hours`);
}


person.car = "Opel"

console.log(person["firstName"]);
console.log("----------");
console.log(person.firstName);
console.log("----------");
//we use [] to get a propertie from the object only if we can't use "person.firstName" or if the propertie is something that's changing 

delete person.firstName

console.log(person.car);
console.log("----------");
console.log(person);
console.log("----------");

person.sleep();
person.study(1);
person.work(4);


console.log(Object.keys(person));//getting all the keys
//firstName: "Vladi",
// "firstName" - that's the key 
// "Vladi" - that's the value
console.log(Object.values(person));//getting all the values
console.table(Object.entries(person));//getting every key and its value and pushing it in its own arr

let number = 10;
let numberString = JSON.stringify(number);
console.log(number);
console.log(numberString);