const listOfMoviesForHomeScreen: string[] = [
  
];

export const movies = [
  "The Shawshank Redemption",
  "The Godfather",
  "The Dark Knight",
  "Pulp Fiction",
  "Fight Club",
  "Forrest Gump",
  "The Matrix",
  "Goodfellas",
  "Star Wars",
  "Schindler's List",
  "Inception",
  "The Silence of the Lambs",
  "Saving Private Ryan",
  "The Lord of the Rings",
  "The Green Mile",
  "The Avengers",
  "Gladiator",
  "The Departed",
  "Jurassic Park",
  "The Prestige",
  "The Lion King",
  "Braveheart",
  "Titanic",
  "Avatar",
  "Back to the Future",
  "Die Hard",
  "The Terminator",
  "Rocky",
  "Jaws",
  "Alien",
  "Top Gun",
  "Toy Story",
  "The Big Lebowski",
  "The Shining",
  "Blade Runner",
  "Mad Max: Fury Road",
  "E.T. the Extra-Terrestrial",
  "Inglourious Basterds",
  "The Sixth Sense",
  "The Breakfast Club",
  "Ghostbusters",
  "The Princess Bride",
  "Raiders of the Lost Ark",
  "A Clockwork Orange",
  "Casablanca",
  "Apocalypse Now",
  "The Godfather Part II",
  "The Usual Suspects",
  "Fargo",
  "The Truman Show",
  "No Country for Old Men",
  "The Social Network",
  "Django Unchained",
  "Kill Bill",
  "La La Land",
  "American Beauty",
  "The Revenant",
  "Drive",
  "The Grand Budapest Hotel",
  "Whiplash",
  "Gone Girl",
  "The Wolf of Wall Street",
  "Interstellar",
  "Gravity",
  "Birdman",
  "Black Swan",
  "The Shape of Water",
  "Moonlight",
  "Get Out",
  "Her",
  "12 Years a Slave",
  "Spotlight",
  "Manchester by the Sea",
  "The Florida Project",
  "Lady Bird",
  "Arrival",
  "The Martian",
  "Ex Machina",
  "Blade Runner 2049",
  "Mad Max: Fury Road",
  "Baby Driver",
  "Logan",
  "Deadpool",
  "Wonder Woman",
  "Black Panther",
  "Spider-Man: Into the Spider-Verse",
  "Avengers: Endgame",
  "Joker",
  "Parasite",
  "1917",
  "Once Upon a Time in Hollywood",
  "The Irishman",
  "Knives Out",
  "Ford v Ferrari",
  "Jojo Rabbit",
];

(function (movies: string[], listOfMoviesForHomeScreen: string[], n: number) {
  function getRandomIndex(max: number): number {
    return Math.floor(Math.random() * max);
  }

  for (let i = 0; i < n; i++) {
    let unique = false;
    while (!unique) {
      const randomIndex = getRandomIndex(movies.length);
      const selectedMovie = movies[randomIndex];
      if (!listOfMoviesForHomeScreen.includes(selectedMovie)) {
        listOfMoviesForHomeScreen.push(selectedMovie);
        unique = true;
      }
    }
  }
})(movies, listOfMoviesForHomeScreen, 30); // Change 10 to the desired number of movies to add

console.log(listOfMoviesForHomeScreen);

export default listOfMoviesForHomeScreen;
