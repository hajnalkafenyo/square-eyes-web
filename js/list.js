const baseUrl = "https://api.noroff.dev/api/v1/"
const allMoviesEndpoint = "square-eyes"

const movieList =
    [
        {
            "id": "04fd79ad-2612-4dab-b2ee-1320c4e5ccd1",
            "title": "The Mandalorian",
            "description": "The travels of a lone bounty hunter in the outer reaches of the galaxy, far from the authority of the New Republic.",
            "genre": "Action",
            "rating": "8.8",
            "released": "2019",
            "price": 124.99,
            "discountedPrice": 124.99,
            "onSale": false,
            "image": "https://static.cloud.noroff.dev/public/square-eyes/10-mandalorian.jpg",
            "tags": [
                "gamehub",
                "game"
            ],
            "favorite": true
        },
        {
            "id": "352ba432-5b5d-4ccc-9aba-f2704c500cf3",
            "title": "Hobbs & Shaw",
            "description": "Lawman Luke Hobbs (Dwayne 'The Rock' Johnson) and outcast Deckard Shaw (Jason Statham) form an unlikely alliance when a cyber-genetically enhanced villain threatens the future of humanity.",
            "genre": "Action",
            "rating": "6.5",
            "released": "2019",
            "price": 129.99,
            "discountedPrice": 119.99,
            "onSale": true,
            "image": "https://static.cloud.noroff.dev/public/square-eyes/0-hobbs-and-shaw.jpg",
            "tags": [
                "gamehub",
                "game"
            ],
            "favorite": true
        },
        {
            "id": "4696b9e6-ec6e-4672-a08d-3e3212a215c8",
            "title": "Godzilla: King of the Monsters",
            "description": "The crypto-zoological agency Monarch faces off against a battery of god-sized monsters, including the mighty Godzilla, who collides with Mothra, Rodan, and his ultimate nemesis, the three-headed King Ghidorah.",
            "genre": "Action",
            "rating": "9",
            "released": "2019",
            "price": 109.99,
            "discountedPrice": 109.99,
            "onSale": false,
            "image": "https://static.cloud.noroff.dev/public/square-eyes/1-godzilla-king-of-monsters.jpg",
            "tags": [
                "gamehub",
                "game"
            ],
            "favorite": true
        },
        {
            "id": "581f13b2-3ca4-494e-be7c-bb51fbc320f4",
            "title": "Sweetheart",
            "description": "Jenn has washed ashore a small tropical island and it doesn't take her long to realize she's completely alone. She must spend her days not only surviving the elements, but must also fend off the malevolent force that comes out each night.",
            "genre": "Horror",
            "rating": "5.8",
            "released": "2019",
            "price": 139.99,
            "discountedPrice": 139.99,
            "onSale": false,
            "image": "https://static.cloud.noroff.dev/public/square-eyes/4-sweetheart.jpg",
            "tags": [
                "gamehub",
                "game"
            ],
            "favorite": true
        },
        {
            "id": "6c8fbbac-b0b7-42d9-a01b-cce95c99bdee",
            "title": "The Lion King",
            "description": "After the murder of his father, a young lion prince flees his kingdom only to learn the true meaning of responsibility and bravery.",
            "genre": "Kids",
            "rating": "7.1",
            "released": "2019",
            "price": 149.99,
            "discountedPrice": 149.99,
            "onSale": false,
            "image": "https://static.cloud.noroff.dev/public/square-eyes/8-lion-king.jpg",
            "tags": [
                "gamehub",
                "game"
            ],
            "favorite": true
        },
        {
            "id": "972df6d3-b4e8-44c1-9dec-cadd3b35102e",
            "title": "The Batman",
            "description": "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
            "genre": "Action",
            "rating": "7",
            "released": "2022",
            "price": 154.99,
            "discountedPrice": 129.99,
            "onSale": true,
            "image": "https://static.cloud.noroff.dev/public/square-eyes/6-batman.jpg",
            "tags": [
                "gamehub",
                "game"
            ],
            "favorite": true
        },
        {
            "id": "a7e81b82-d2e5-4288-b700-889186a7da0e",
            "title": "Once upon a time in Hollywood",
            "description": "A faded television actor and his stunt double strive to achieve fame and success in the final years of Hollywood's Golden Age in 1969 Los Angeles.",
            "genre": "Comedy",
            "rating": "7.3",
            "released": "2019",
            "price": 179.99,
            "discountedPrice": 164.99,
            "onSale": true,
            "image": "https://static.cloud.noroff.dev/public/square-eyes/2-once-upon-a-time-hollywood.jpg",
            "tags": [
                "gamehub",
                "game"
            ],
            "favorite": true
        },
        {
            "id": "a969a4b4-a4d0-4dd5-99e5-86ae0a8eee43",
            "title": "The Addams Family",
            "description": "The eccentrically macabre family moves to a bland suburb where Wednesday Adams' friendship with the daughter of a hostile and conformist local reality show host exacerbates conflict between the families.",
            "genre": "Kids",
            "rating": "5.8",
            "released": "2019",
            "price": 114.99,
            "discountedPrice": 99.99,
            "onSale": true,
            "image": "https://static.cloud.noroff.dev/public/square-eyes/5-addams-family.jpg",
            "tags": [
                "gamehub",
                "game"
            ],
            "favorite": true
        },
        {
            "id": "ad063e58-bc89-46bf-ac45-16760bc883c7",
            "title": "Scream",
            "description": "5 years after a streak of brutal murders shocked the quiet town of Woodsboro, Calif., a new killer dons the Ghostface mask and begins targeting a group of teenagers to resurrect secrets from the town's deadly past.",
            "genre": "Drama",
            "rating": "6.3",
            "released": "2019",
            "price": 129.99,
            "discountedPrice": 129.99,
            "onSale": false,
            "image": "https://static.cloud.noroff.dev/public/square-eyes/3-scream.jpg",
            "tags": [
                "gamehub",
                "game"
            ],
            "favorite": true
        },
        {
            "id": "b9e4edb1-e798-45e3-9c46-f7cd75b9326f",
            "title": "Avengers: Endgame",
            "description": "After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to undo Thanos' actions and restore order to the universe.",
            "genre": "Action",
            "rating": "8.4",
            "released": "2019",
            "price": 179.99,
            "discountedPrice": 124.99,
            "onSale": true,
            "image": "https://static.cloud.noroff.dev/public/square-eyes/9-avengers-endgame.jpg",
            "tags": [
                "gamehub",
                "game"
            ],
            "favorite": true
        },
        {
            "id": "d5c5c3e0-07da-406a-b3db-8336c40c5ae7",
            "title": "Joker",
            "description": "In Gotham City, mentally-troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.",
            "genre": "Drama",
            "rating": "8.5",
            "released": "2019",
            "price": 139.99,
            "discountedPrice": 129.99,
            "onSale": true,
            "image": "https://static.cloud.noroff.dev/public/square-eyes/7-joker.jpg",
            "tags": [
                "gamehub",
                "game"
            ],
            "favorite": true
        },
        {
            "id": "f40421d4-0977-4a78-8e47-bacd7a188381",
            "title": "The Irishman",
            "description": "An aging hitman recalls his time with the mob and the intersecting events with his friend, Jimmy Hoffa, through the 1950-70s.",
            "genre": "Drama",
            "rating": "7.9",
            "released": "2019",
            "price": 189.99,
            "discountedPrice": 144.99,
            "onSale": true,
            "image": "https://static.cloud.noroff.dev/public/square-eyes/11-irishman.jpg",
            "tags": [
                "gamehub",
                "game"
            ],
            "favorite": true
        }
    ]

function movieCard(movie) {
    return `
    <a href="details4.html">
                        <div class="movie-poster">
                            <img src="${movie.image}" alt="The movie poster of ${movie.title}" />
                            <div class="movie-poster__description">
                                <h4>${movie.title}</h4>
                                <p>${movie.description}</p>
                            </div>
                        </div>
                    </a>
   `
}

let movieCount = 5;
if (movieList.length <= movieCount) {
    movieCount = movieList.length;
}

const container = document.getElementById("movie-list-container")
for (let i = 0; i < movieCount; i++) {
    const movie = movieList[i]
    const cardHtml = movieCard(movie)
    container.innerHTML += `<li>${cardHtml}</li>`
    console.log(i, movie, cardHtml)

}


// After the page is loaded:
// 1. Download (fetch) the list of all movies
// 2. For all the elements we generate a movie card (json --> html)
// 3. We put all these cards (html) to the webpage