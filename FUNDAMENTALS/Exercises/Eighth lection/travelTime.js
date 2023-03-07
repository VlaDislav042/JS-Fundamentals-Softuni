function travelTime(input) {
    let travelData = {};
    for (const line of input) {
        let [country, town, cost] = line.split(" > ");
        if (!travelData.hasOwnProperty(country)) {
            travelData[country] = {};
        }
        if (!travelData[country].hasOwnProperty(town) ||
            travelData[country].hasOwnProperty(town) &&
            travelData[country][town] > Number(cost)) {
            travelData[country][town] = Number(cost);
        } else {
            travelData[country][town] = Number(cost);
        }
    }
    let res = [];
    let sortedCountries = Object.keys(travelData).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
    for (let country of sortedCountries) {
        let sortedTowns =  Object.keys(travelData[country]).sort((a, b) => travelData[country][a] - travelData[country][b]);
        res.push(country + ' ->');
        for (let town of sortedTowns) {
            res.push(town + ' -> ' + travelData[country][town]);
        }
        console.log(res.join(' '));
        res = [];
    }
}
travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"]);