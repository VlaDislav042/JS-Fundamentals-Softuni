function movies(input) {
    for (let text of input) {
        let moviesObject = {};
        if (text.includes("addMovie")) {
            let movieName = text.replace("addMovie ", "");
            moviesObject.name = movieName;
            for (let second of input) {
                if (second.includes(`${movieName} directedBy`)) {
                    let director = second.replace(`${movieName} directedBy `, "");
                    moviesObject.director = director;
                }
                if (second.includes(`${movieName} onDate`)) {
                    let date = second.replace(`${movieName} onDate `, '');
                    moviesObject.date = date;
                }
            }
            if (Object.keys(moviesObject).length === 3) {
                console.log(JSON.stringify(moviesObject));
            }
        }
    }
}
film([
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
console.log("------------");
film([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
]
);