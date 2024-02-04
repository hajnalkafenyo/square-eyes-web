const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('id');

const baseUrl = 'https://hajnalka-fenyo-square-eyes.flywheelsites.com/wp-json/wc/store/products';
const detailsEndpoint = '/' + myParam;
const fullUrl = baseUrl + detailsEndpoint;

async function getData(url) {
  const response = await fetch(url);
  const d = await response.json();
  return {
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
  }
}

let movieData;

function handleError() {
  console.error('Error happened when we tried to load the page');
  console.error('This is the error that happened', e);
  document.getElementById('loading').style.display = 'none';
  console.error(':(', e);
  const main = document.getElementById('movie-details');
  main.innerHTML = ``;
  const section = document.getElementsByClassName('error-movie')[0];
  section.style.display = 'flex';
}

function handleSuccess() {
  document.getElementById('movie-details').style.display = 'flex';
  document.getElementById('loading').style.display = 'none';
}

function showMovieData(movieData) {
  document.getElementById('movie-title').innerHTML = movieData.title;
  document.getElementById('movie-description').innerHTML =
    movieData.description;
  var tags = [];
  tags.push(movieData.genre);
  tags = tags.concat(movieData.tags);
  tags = tags.map((x) => '<li>' + x + '</li>');
  document.getElementById('movie-tags').innerHTML = tags.join('');
  document.getElementById('movie-rating').innerHTML = movieData.rating;
  document.getElementById('movie-poster').src = movieData.image;

  if (movieData.onSale) {
    document.getElementById(
      'movie-price',
    ).innerHTML = `On sale for: <s>${movieData.price} kr</s> ${movieData.discountedPrice} kr`;
  } else {
    document.getElementById(
      'movie-price',
    ).innerHTML = `Buy for: ${movieData.price} kr`;
  }
}

async function showDetails() {
  try {
    movieData = await getData(fullUrl);
  } catch (e) {
    handleError();
    return;
  }
  showMovieData(movieData);
  handleSuccess();
}

showDetails();

const addToCartButton = document.getElementById('add-to-cart-button');
addToCartButton.addEventListener('click', () => {
  addToCart(movieData);
  updateShoppingCartCount();
});

updateShoppingCartCount();
