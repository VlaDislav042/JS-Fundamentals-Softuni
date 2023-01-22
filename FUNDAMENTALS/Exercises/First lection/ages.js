function ages(age) {
    if (age<0) {
        console.log("out of bounds");
    }
    else if (age>=0 && age<=2) {
        console.log("baby")
    }else if (age<=13) {
        console.log("child")
    }else if (age<=19) {
        console.log("teenager")
    }else if (age<=65) {
        console.log("adult");
    }else {
        console.log("elder");
    }
}
ages(1);//baby
ages(3);//child
ages(10);//child
ages(14);//teenager
ages(19);//teenager
ages(30);//adult
ages(40);//adult
ages(66);//elder
ages(-1);//out of bounds