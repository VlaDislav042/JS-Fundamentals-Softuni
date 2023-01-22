function centuriesToMinutes(centurie) {
    let years = centurie * 100;
    let days = Math.trunc(years * 365.2422);//.toFixed(0)
    let hours = days * 24;
    let min = hours * 60;
    console.log(`${centurie} centuries = ${years} years = ${days} days = ${hours} hours = ${min} minutes`);
}
centuriesToMinutes(5);