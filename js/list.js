const baseUrl = "https://api.noroff.dev/api/v1/"
const allMoviesEndpoint = "square-eyes"

let movieList;
const container = document.getElementById("movie-list-container")

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

const hideLoading = () => {
    const loading = document.getElementsByClassName("loading")[0];
    loading.style.display = "none";
};

async function showMovies(movieCount) {
    try {
        movieList = await getData(baseUrl + allMoviesEndpoint)
    } catch (e) {
        console.error(":(", e);
        const main = document.getElementById("main-content");
        main.innerHTML = ``;
        const section = document.getElementsByClassName("error-movie")[0];
        section.style.display = "flex";
        hideLoading();
        return
    } finally {
        hideLoading();
    }

    if (!movieCount || (movieList.length <= movieCount)) {
        movieCount = movieList.length;
    }

    for (let i = 0; i < movieCount; i++) {
        const movie = movieList[i]
        const cardHtml = movieCard(movie)
        container.innerHTML += `<li>${cardHtml}</li>`
    }
}

function onSearchFieldChange(e) {
    const inputValue = e.target.value.toLowerCase()
    container.innerHTML = ""
    for (let i = 0; i < movieList.length; i++) {
        const movie = movieList[i]
        if (movie.title.toLowerCase().includes(inputValue)) {
            const cardHtml = movieCard(movie)
            container.innerHTML += `<li>${cardHtml}</li>`
        }
    }
}

const searchField = document.getElementById('movie-search-text')
if (searchField) {
    searchField.addEventListener("input", onSearchFieldChange)
}