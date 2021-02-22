
// add to cart
let productsCountEl = document.getElementById("products-count-count");

let addToCartButtons = document.querySelectorAll(".add_to_count");

for( let i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener("click", function() {
        productsCountEl.textContent = +productsCountEl.textContent + 1;
    })
}


// like product

let likeButtons = document.querySelectorAll(".product-image-like");
console.log(likeButtons)

for( let i = 0; i < likeButtons.length; i++) {
    likeButtons[i].addEventListener("click",function() {
       this.classList.toggle("liked")
    })
}


//   modal


let moreDetailBtns = document.querySelectorAll(".btn-more-dt");
let modal = document.querySelector(".modal")
let closeBtn = document.querySelector(".close-btn")


moreDetailBtns.forEach(btn => (
    btn.addEventListener("click",openModal)
))
moreDetailBtns.forEach(btn => (
    closeBtn.addEventListener("click", closeModal)
))
function openModal () {
    modal.classList.add("show");
    modal.classList.remove("hide")
}

function closeModal () {
    modal.classList.remove("show");
    modal.classList.add("hide");
}
modal.addEventListener("click",function(e) {
    if(e.target===modal) {
        closeModal()
    }
})


// change product quality

let decrementBtns = document.querySelectorAll(".decrement-button")[0];
let incrementBtns = document.querySelectorAll(".increment-button")[0];
let productsQuantity = document.querySelectorAll(".product-quantity input")[0];
let currentCount = +productsQuantity.value;

function toggleButtonState(count) {
    
    decrementBtns.disabled = count <= 1;
    incrementBtns.disabled = count >= 10;
}
toggleButtonState(currentCount)
incrementBtns.addEventListener("click",function() {
    let currentCount = +productsQuantity.value;
    let nextCount = currentCount + 1;
    productsQuantity.value = nextCount;

    toggleButtonState(nextCount)
})
decrementBtns.addEventListener("click",function() {
    let currentCount = +productsQuantity.value;
    let nextCount = currentCount - 1;
    productsQuantity.value = nextCount;

    toggleButtonState(nextCount)
})
