function movies(input) {
    let arr = [];
    let movie = {};
    for (let i = 0; i < input.length; i++) {
        if (input[i].includes("addMovie")) {
            let token = input[i].split(" ");
            token.shift();
            let filmName = token.join(" ")
            movie.name = filmName;
        }
    }
    console.log(movie);
}
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]
);
console.log("--------------");
movies([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
]
);