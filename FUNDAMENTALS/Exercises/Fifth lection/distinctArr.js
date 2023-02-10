function distinctArr(arr) {
    let uniqArr = [];
    for (const el of arr) {
        if (uniqArr.indexOf(el) === -1){// when .indexOf() does not find the same element as we have, the method return -1, thats how the method works
            uniqArr.push(el);
        }
    }
    console.log(uniqArr.join(" "));
}
distinctArr([1, 2, 3, 4]);
console.log('-------------');
distinctArr([7, 8, 9, 7, 2, 3, 4, 1, 2]);