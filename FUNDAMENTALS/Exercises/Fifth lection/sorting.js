function sorting(arr) {
    //console.log(arr.sort((a, b) => a - b));//ascending sorting
    //console.log(arr.sort((a, b) => b - a));//deascending sorting
    arr.sort((a, b) => a - b);
 
    let sorted = [];
    while (arr.length !== 0) {
      sorted.push(arr.pop());
      sorted.push(arr.shift());
    }
   
    console.log(sorted.join(' '));
   
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
console.log("---------------------");
sorting([34, 2, 32, 45,640,  6, 32, 7, 19, 47]);

