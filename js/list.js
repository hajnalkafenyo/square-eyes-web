const baseUrl = "https://api.noroff.dev/api/v1/"
const allMoviesEndpoint = "square-eyes"

function movieCard(movie) {
    return `
    <a href="details-new.html?id=${movie.id}">

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

async function getData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

async function showMovies(movieCount) {
    let movieList
    try {
        movieList = await getData(baseUrl + allMoviesEndpoint)
    } catch (e) {
        console.error(":(", e);
        const main = document.getElementById("main-content");
        main.innerHTML = ``;
        const section = document.getElementsByClassName("error-movie")[0];
        section.style.display = "flex";

        return
    }
    if (!movieCount || (movieList.length <= movieCount)) {
        movieCount = movieList.length;
    }

    const container = document.getElementById("movie-list-container")
    for (let i = 0; i < movieCount; i++) {
        const movie = movieList[i]
        const cardHtml = movieCard(movie)
        container.innerHTML += `<li>${cardHtml}</li>`
        console.log(i, movie, cardHtml)
    }
}




// After the page is loaded:
// 1. Download (fetch) the list of all movies
// 2. For all the elements we generate a movie card (json --> html)
// 3. We put all these cards (html) to the webpage