function furniture(input) {
    let regex = />>(?<name>[A-Z][A-Za-z]+)<<(?<price>[0-9.]+)!(?<quantity>\d+)/;
    let totalMoney = 0;
    console.log("Bought furniture:");
    for (const line of input) {
        if (line === "Purchase"){
            break;
        }
        if (regex.test(line)) {
            let furniture = regex.exec(line);
            let price = Number(furniture.groups.price) * Number(furniture.groups.quantity);
            console.log(furniture.groups.name);
            totalMoney += price;
        }
    }
    console.log(`Total money spend: ${totalMoney.toFixed(2)}`);
}
furniture(['>>Sofa<<312.23!3',
'>>TV<<300!5',
'>Invalid<<!5',
'Purchase']
);