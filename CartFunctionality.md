# Cart functionality

## getCartItems()
Olvassa ki az osszes elemet a cartbol

## addToCart(movie)
Egy filmet hozzáad a kosárhoz
- movie: Movie objektum, amit a kosárhoz kell adni

## removeMovieFromCart(movieId)
Eltávolít egy filmet a kosárból
- MovieId: UUID of the movie

## getTotalPrice()
Visszaadja a kosárban lévö filmek árát.
A visszadott adat formátuma:
```json
{
    "totalPrice": 5000.99,
    "totalDiscountPrice": 4500.65
}
```

## getAmountOfMoviesInCart
Visszaadja hogy hány film van a kosárban
