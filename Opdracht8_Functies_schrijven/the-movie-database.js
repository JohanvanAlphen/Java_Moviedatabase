// Hahaha, verkeerd begrepen, dacht dat de sterren de rating van een film was...


// function myMovie(title, duration, stars) {

//     let movie = title + " duurt " + duration + " minuten. Stars: " + stars;
//     console.log(movie);
// }

// myMovie("Puff the Magig Dragon", 30, "****")
// myMovie("Jackie", 120, "**");
// myMovie("Living Sneezes", 45, "***");

// Oplossing website
let myFavMovie = {
    title: 'Puff the Magic Dragon',
    duration: 30,
    stars: ['Puff', 'Jackie', 'Living Sneezes']
};

function printMovie(movie) {
    console.log(movie.title + ' lasts for ' + movie.duration + ' minutes');
    var starsString = 'Stars: ';
    for (var i = 0; i < movie.stars.length; i++) {
        starsString += movie.stars[i];
        if (i != movie.stars.length - 1) {
            starsString += ', ';
        }
    }
    console.log(starsString);
}

// Or...
function printMovie(movie) {
    console.log(movie.title + ' lasts for ' + movie.duration + ' minutes');
    console.log('It stars ' + movie.stars.join(', '));
}
printMovie(myFavMovie);