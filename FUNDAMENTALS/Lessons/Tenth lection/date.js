function date(input) {
    let res = [];
    let regex = /(?<day>\d{2})([-./])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})/g;
    for (let i = 0; i < input.length; i++) {
        let text = input[i];
        let match = [...text.matchAll(regex)];
        res = res.concat(match);
    }
    for (const date of res) {
        let result = `Day: ${date.groups.day}, Month: ${date.groups.month}, Year: ${date.groups.year}`;
        console.log(result);
    }
}
date(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016']);