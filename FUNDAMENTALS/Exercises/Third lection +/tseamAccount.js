function tseamAccount(arr) {
    let account = arr[0].split(" ");// with .split we get the first element of the array and now we have as an different array
    for (let i = 1; i < arr.length; i++) {
        let currentGame = arr[i].split(" ");
        switch (currentGame[0]) {
            case 'Install':
                if (account.includes(currentGame[1])){

                }else{
                    account.push(currentGame[1])
                }
                
                break;
            case 'Uninstall':
                for (let i = 0; i < account.length; i++) {
                    if (currentGame[1] === account[i]) {
                        account.splice(i, i);
                        break;
                    }
                }
                break;
            case 'Update':
                for (let i = 0; i < account.length; i++) {
                    if (currentGame[1] === account[i]) {
                        account.splice(i, i);
                        account.push(currentGame[1]);
                        break;
                    }
                }
                break;
            case 'Expansion':
                let expansion = currentGame[1].split("-");
                for (let i = 0; i < account.length; i++) {
                    if (expansion[0] === account[i]) {
                        account.splice(i + 1, 0, expansion.join(":"));
                        break;
                    }
                }
                break;
            default:
                console.log(account.join(" "));
                break;
        }
    }
}
tseamAccount(['CS WoW Diablo',
'Uninstall XCOM',
'Update PeshoGame',
'Update WoW',
'Expansion Civ-V',
'Play!']

);