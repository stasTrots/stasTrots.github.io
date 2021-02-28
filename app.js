
// add to cart
let productsCountEl = document.getElementById("products-count-count");

let addToCartButtons = document.querySelectorAll(".add_to_count");

for(let i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener("click", function() {
        productsCountEl.textContent = +productsCountEl.textContent + +productsQuantity[i].value;
        productsQuantity[i].value = 1;
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

let decrementBtns = document.querySelectorAll(".decrement-button");
let incrementBtns = document.querySelectorAll(".increment-button");
let productsQuantity = document.querySelectorAll(".product-quantity input");


function Counter(incrementBtn,decrementBtn,inputField) {
    this.domRefs = {
        incrementBtn,
        decrementBtn,
        inputField,
    }

    this.toggleButtonState = function() {
        const count = this.domRefs.inputField.value;
        this.domRefs.decrementBtn.disabled = count <= 1;
        this.domRefs.incrementBtn.disabled = count >= 10;
    }
    this.toggleButtonState();

    this.increment = function () {
        let currentCount = +this.domRefs.inputField.value;
        let nextCount = currentCount + 1;
        this.domRefs.inputField.value = nextCount;
        
        this.toggleButtonState()
    }
    this.decrement = function () {
        let currentCount = +this.domRefs.inputField.value;
        let nextCount = currentCount - 1;
        this.domRefs.inputField.value = nextCount;
        
        this.toggleButtonState()
    }
    this.domRefs.incrementBtn.addEventListener("click",this.increment.bind(this));
    this.domRefs.decrementBtn.addEventListener("click",this.decrement.bind(this))
}




const counters = [];

productsQuantity.forEach((item,i) => (
    counters[i] = new Counter(incrementBtns[i],decrementBtns[i],item)
))




// slider


$('.slider-block').slick({
    autoplay: true,
    autoplaySpeed: 2000,
});
