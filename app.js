
// add to cart
let productsCountEl = document.getElementById("products-count-count");

let addToCartButtons = document.querySelectorAll(".add_to_count");

for( let i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener("click", function() {
        productsCountEl.textContent = +productsCountEl.textContent + 1;
    })
}

