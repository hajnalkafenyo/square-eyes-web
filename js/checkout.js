

const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('id');


const baseUrl = "https://api.noroff.dev/api/v1/"
const detailsEndpoint = "square-eyes/" + myParam
const fullUrl = baseUrl + detailsEndpoint


async function getData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}


async function showDetails() {
    let movieData;
    try {
        movieData = await getData(fullUrl);
    } catch (e) {
        console.error("Error happened when we tried to load the page")
        console.error("This is the error that happened", e)
        document.getElementById("loading").style.display = "none";
        console.error(e);
        const main = document.getElementById("movie-details");
        main.innerHTML = ``;
        const section = document.getElementsByClassName("error-movie")[0];
        section.style.display = "flex";
        return
    }

    document.getElementById("movie-title").innerHTML = movieData.title
    document.getElementById("movie-description").innerHTML = movieData.description

    var tags = []
    tags.push(movieData.genre)
    tags = tags.concat(movieData.tags)
    tags = tags.map((x) => "<li>" + x + "</li>")

    document.getElementById("movie-tags").innerHTML = tags.join("")
    document.getElementById("movie-rating").innerHTML = movieData.rating

    if (movieData.onSale) {
        document.getElementById("movie-price").innerHTML = `On sale price: <s>${movieData.price} kr</s> ${movieData.discountedPrice} kr`;
    } else {
        document.getElementById("movie-price").innerHTML = `Price: ${movieData.price} kr`;
    }

    document.getElementById("movie-poster").src = movieData.image;
    document.getElementById("movie-details").style.display = "flex";
    document.getElementById("checkout-form").style.display = "block";
    document.getElementById("loading").style.display = "none";

}

showDetails();