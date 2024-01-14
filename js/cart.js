function addToCart(movie) {
    // Current content of the cart
    const items = getCartItems();
    // Add movie to the list
    for (const item of items) {
        if (movie.id === item.id) {
            return
        }
    };
    items.push(movie)
    // Set the new list to the cart
    window.localStorage.setItem("cart", JSON.stringify(items));
}

function getCartItems() {
    const items = window.localStorage.getItem("cart")
    if (!items) {
        return [];
    }
    return JSON.parse(items);
}

/*
  True : Benne lesz az uj listaban    
  False: Nem lesz benne (kivesszük)   
*/
function removeFromCart(id) {
    const items = getCartItems();
    const newItems = items.filter((v) => { return id != v.id });
    window.localStorage.setItem("cart", JSON.stringify(newItems));
}

function getAmountOfItemsInCart() {
    const items = getCartItems();
    return items.length;
}

function getTotalPrice() {

    const items = getCartItems();
    let totalOriginalPrice = 0;
    let totalDiscountedPrice = 0;
    for (const movie of items) {
        totalOriginalPrice += movie.price;
        totalDiscountedPrice += movie.discountedPrice;
    }

    return {
        totalOriginalPrice,
        totalDiscountedPrice,
    }
}

function updateShoppingCartCount() {
    document.getElementById('shopping-cart-count').innerHTML = getAmountOfItemsInCart()
    const amount = getAmountOfItemsInCart()
    if (amount === 0) {
        document.getElementById('shopping-cart-count').innerHTML = ""
        document.getElementById("checkout-form").style.display = "none";
        document.getElementById("loading").style.display = "none";
        document.getElementById("empty-form").style.display = "block";
    }


    const movieListContainer = document.getElementById('movie-cart-list')
    if (movieListContainer) {
        const moviesInCart = getCartItems()
        movieListContainer.innerHTML = moviesInCart.map(m => movieToHTML(m)).join("");
        [...document.getElementsByClassName('remove-from-cart-button')].forEach(v => v.addEventListener('click', (ev) => {
            removeFromCart(ev.target.getAttribute('data-movie-id'))
            updateShoppingCartCount()
        }))
    }

    const cartPriceContainer = document.getElementById('cart-price')
    if (cartPriceContainer) {
        const price = getTotalPrice()
        if (price.totalOriginalPrice === price.totalDiscountedPrice) {
            cartPriceContainer.innerHTML = `Total Price: ${price.totalOriginalPrice} kr`
        } else {
            cartPriceContainer.innerHTML = `On sale price: <s>${price.totalOriginalPrice} kr</s> ${price.totalDiscountedPrice} kr`
        }
    }
}

function movieToHTML(movie) {
    const tags = [movie.genre, ...movie.tags].map((x) => "<li>" + x + "</li>").join("")
    return `
        <section id="movie-details" class="content-box-dark short-movie-details">
            <div class="short-movie-details__poster">
                <img src="${movie.image}" id="movie-poster" alt="Movie Poster" />
            </div>
            <div class="short-movie-details__text">
                <h3 id="movie-title">${movie.title}</h3>
                <p id="movie-description">${movie.description}</p>
                <ul id="movie-tags" class="genre hide-on-mobile">
                    ${tags}
                </ul>
                <ul class="rated hide-on-mobile">
                    <li class="rated__element"><img src="images/IMDB_Logo_2016 1.png" alt="IMDB logo" />
                        <span id="movie-rating">${movie.rating}</span>/10
                    </li>
                </ul>
                <h4 id="movie-price">${movie.onSale
            ? `On sale price: <s>${movie.price} kr</s> ${movie.discountedPrice} kr`
            : `Price: ${movie.price} kr`}
            </h4>
            <button type="button" data-movie-id="${movie.id}" class="remove-from-cart-button button">Delete</button>
            </div>
            
        </section>
`;
}