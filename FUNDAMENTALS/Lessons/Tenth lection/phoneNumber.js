function phoneNumber(input) {
    let regex = /\+359(?<delimiter>[ -])2\k<delimiter>\d{3}\k<delimiter>\d{4}\b/g;
    let res = [];
    for (let i = 0; i < input.length; i++) {
        let text = input[i];
        let match = text.match(regex);
        res = res.concat(match);
    }
    console.log(res.join(", "));
}
phoneNumber(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222']);