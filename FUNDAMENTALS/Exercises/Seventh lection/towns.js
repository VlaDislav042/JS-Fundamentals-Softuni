function towns(input) {
    let townInfo = {};
    for (let i = 0; i < input.length; i++) {
        let token = input[i].split(" | ")
        let town = token.shift();
        let latitude = Number(token.shift()).toFixed(2);
        let longitude = Number(token.shift()).toFixed(2);
        townInfo.town = town;
        townInfo.latitude = latitude;
        townInfo.longitude = longitude;
        console.log(townInfo);
    }
}
towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
);
console.log("------------");
towns(['Plovdiv | 136.45 | 812.575']);