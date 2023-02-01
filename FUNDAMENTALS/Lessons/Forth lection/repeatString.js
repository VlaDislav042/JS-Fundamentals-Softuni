function repeatString(param, num) {
    let buff = "";
    for (let i = 0; i < num; i++){
        buff += param;
    }
    console.log(buff);
}
repeatString("abc", 3);
repeatString("String", 2);