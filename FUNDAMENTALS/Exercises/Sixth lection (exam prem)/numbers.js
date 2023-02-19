function numbers(input) {
    let arr = input.split(" ").map(Number);
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    let avg = sum / arr.length;
    let result = [];
    for(let el of arr){
        if(el > avg){
            result.push(el);
        }
    }
    result.sort((a,b) => b - a);
    let buff = "";
    for(let i = 0; i < 5; i++){
        if(result[i]){
            buff += result[i] + " ";
        }
    }
    if(buff.length === 0 ){
        console.log("No");
    } else {
        console.log(buff);
    }
}
numbers('10 20 30 40 50');
console.log("-----------");
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');
console.log("-----------");
numbers('1');
console.log("-----------");
numbers('-1 -2 -3 -4 -5 -6');