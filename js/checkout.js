const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('id');

const baseUrl = 'https://api.noroff.dev/api/v1/';
const detailsEndpoint = 'square-eyes/' + myParam;
const fullUrl = baseUrl + detailsEndpoint;

async function getData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function showDetails() {
  updateShoppingCartCount();

  document.getElementById('checkout-form').style.display = 'block';
  document.getElementById('loading').style.display = 'none';
}

showDetails();
