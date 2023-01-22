function print(startNum, endNum) {
    let sum=0;
    let buff="";
    for (let i = startNum; i <= endNum; i++){
        sum +=i;
        buff += i + " ";
    }
    console.log(buff);
    console.log(`Sum: ${sum}`);
}
print(5,10);