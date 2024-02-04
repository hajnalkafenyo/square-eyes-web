const baseUrl = 'https://hajnalka-fenyo-square-eyes.flywheelsites.com/wp-json/wc/store/products';

let movieList = [];
let filteredList = [...movieList];
const container = document.getElementById('movie-list-container');

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
   `;
}

/**
 * this function puts the movies in the parameter to the html document
 * @param {Movie} movies The data of this movie will be displayed
 */
function renderMovieList(movies) {
  container.innerHTML = '';
  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];

    const cardHtml = movieCard(movie);
    container.innerHTML += `<li>${cardHtml}</li>`;
  }
}

async function getData(url) {
  const response = await fetch(url, { "no-cors": true });
  const data = await response.json();
  return data.map((d) => ({
    id: d.id,
    description: d.description,
    image: d.images[0].src,
    title: d.name,
    alt: d.images[0].alt,
    discountedPrice: d.prices.sale_price/100,
    favorite: false,
    genre: d.categories[0].name,
    onSale: d.on_sale,
    price: d.prices.regular_price/100,
    rating: d.attributes.find((e) => e.taxonomy=="pa_rating").terms[0].name,
    released: d.attributes.find((e) => e.taxonomy=="pa_released").terms[0].name,
    tags: d.tags,

  }))
}

const hideLoading = () => {
  const loading = document.getElementsByClassName('loading')[0];
  loading.style.display = 'none';
};

/**
 * Loading data from the backend, and show the list
 * @param {number} movieCount Maximum number of the movies on the page
 * @returns 
 */
async function showMovies(movieCount) {
  try {
    movieList = await getData(baseUrl);
    filteredList = [...movieList];
  } catch (e) {
    console.error(':(', e);
    const main = document.getElementById('main-content');
    main.innerHTML = ``;
    const section = document.getElementsByClassName('error-movie')[0];
    section.style.display = 'flex';
    hideLoading();
    return;
  } finally {
    hideLoading();
  }

  if (!movieCount || movieList.length <= movieCount) {
    movieCount = movieList.length;
  }

  renderMovieList(movieList.slice(0, movieCount));
}

function onSearchFieldChange(e) {
  const inputValue = e.target.value.toLowerCase();
  filteredList = movieList.filter((movie) =>
    movie.title.toLowerCase().includes(inputValue),
  );
  renderMovieList(filteredList);
}

const searchField = document.getElementById('movie-search-text');
if (searchField) {
  searchField.addEventListener('input', onSearchFieldChange);
}

function onOrderFieldChange(e) {
  const selectedOrder = e.target.value;

  filteredList.sort((a, b) => {
    switch (selectedOrder) {
      case 'name':
        return a.title === b.title ? 0 : a.title > b.title ? 1 : -1;
      case 'score':
        return parseFloat(b.rating) - parseFloat(a.rating);
      case 'price':
        return a.discountedPrice - b.discountedPrice;
      case 'released':
        return parseInt(a.released) - parseInt(b.released);
    }
  });
  renderMovieList(filteredList);
}

const orderField = document.getElementById('movie-order-select');
if (orderField) {
  orderField.addEventListener('change', onOrderFieldChange);
}

function onCategoryFilterChange(e) {
  const categoryFilter = e.target.value;
  console.log(categoryFilter);
  filteredList = movieList.filter((movie) => movie.genre == categoryFilter);
  renderMovieList(filteredList);
}

const categoryField = document.getElementById('movie-category-select');
if (categoryField) {
  categoryField.addEventListener('change', onCategoryFilterChange);
}
