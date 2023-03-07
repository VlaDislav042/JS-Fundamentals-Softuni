function oddOccurrences(input) {
    let obj = {};
    let res = [];
    let lowerCase = input.toLowerCase();
    for (const item of lowerCase.split(" ")) {
        let count = 0;
        for (const item2 of lowerCase.split(" ")) {
            if (item === item2) {
                count ++;
            }
        }
        obj[item] = count;
    }
    for (const item in obj) {
        if (obj[item] % 2 === 0) {

        } else {
            res.push(item)
        }
    }
    console.log(res.join(" "));
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');