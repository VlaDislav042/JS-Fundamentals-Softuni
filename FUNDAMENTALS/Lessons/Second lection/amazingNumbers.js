function amazingNumbers(num) {
    num = String(num);
    let sum = 0;
    let currentNum=0;
    for (let i = 0; i < num.length; i++) {
        sum += Number(num[i]);
    }
    sum = String(sum);
    let result = sum.toString().includes('9');
    console.log(result ? `${num} Amazing? True` : `${num} Amazing? False`);
   // for (let i = 0; i < sum.length; i++) {
     //    currentNum = Number(sum[i]);
     //    if (currentNum === 9) {
     //        console.log(`${num} Amazing? True`);
     //        break;
      //   } else {
       //      console.log(`${num} Amazing? False`);
      //       break;
      //   }
   //  }
}
amazingNumbers(999);