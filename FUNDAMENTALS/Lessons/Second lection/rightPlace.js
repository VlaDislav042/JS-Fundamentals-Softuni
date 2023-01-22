function rightPlace(string1, char, string2) {
    let buff="";

    for(i = 0; i < string1.length; i++){
        if(string1[i] === "_"){
            buff += char;
        } else {
            buff += string1[i];
        }
    }
    console.log(buff === string2 ? "Matched" : "Not Matched");
}
rightPlace('Str_ng', 'i', 'String');