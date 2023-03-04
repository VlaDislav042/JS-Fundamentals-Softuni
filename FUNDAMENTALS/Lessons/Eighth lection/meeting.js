function meeting(input) {
    let res = {};
    for (const line of input) {
        let [day, name] = line.split(" ");
        if (res.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            res[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }
    for (const key in res) {
        console.log(`${key} -> ${res[key]}`);
    }
}
meeting(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
);