function schoolGrades(input) {
    let schoolRegister = new Map();
    for (const el of input) {
        let token = el.split(" ");
        let name = token.shift();
        let gradeS = token;
        if (schoolRegister.has(name)) {
            let currentGrades = schoolRegister.get(name);
            for (const i of currentGrades) {
                gradeS.push(i)
            }
            schoolRegister.set(name, gradeS);
        } else {
            schoolRegister.set(name, gradeS);
        }
    }
    let sorted = Array.from(schoolRegister.entries()).sort((a, b) => a[0].localeCompare(b[0]));
    for (const [student, grades] of sorted) {
        let sum = 0;
        let count = 0;
        for (const grade of grades) {
            sum += Number(grade);
            count ++;
        }
        console.log(student + ": " + (sum/count).toFixed(2));
    }
}
schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']
)