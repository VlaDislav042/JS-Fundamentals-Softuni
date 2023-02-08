function loadingBar(num) {
    if (num === 0) {
        console.log(`0% [..........]`);
        console.log(`Still loading...`);
    } else {
        let arr = [".",".",".",".",".",".",".",".",".",".",];
        let startLoading = "[";
        let buff = "";
        buff += startLoading;

        for (let i = num; i > 0; i -= 10){
            arr.pop()
            buff += "%";
        }
        let final = buff  += arr.join("") + ']';
        if (!final.includes(".")) {
           console.log("100% Complete!");
           console.log(final); 
        } else {
            console.log(`${num}% ${final}`);
            console.log(`Still loading...`);
        }
    }
}
loadingBar(50);