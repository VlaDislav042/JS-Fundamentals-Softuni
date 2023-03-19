function matchFullName(input) {
    let regex = /\b[A-Z][a-z]+[ ][A-Z][a-z]+\b/g;
    let res = [];
    let test = null;
    for (const line of input.split(", ")) {
        if ((test = regex.exec(line)) !== null) {
            res.push(test[0]);
        }
    }
    console.log(res.join(" "));
}
matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov");