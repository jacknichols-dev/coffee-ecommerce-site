//HTML file includes
$(document).ready(function () {
  $("#header").load("header.html");
  $("#footer").load("footer.html");
});

//product carousel
$(function () {
  $(".multiple-items").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    centerMode: true,
    centerPadding: "0",
    speed: 1000,
    responsive: [
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

//*************************** CART LOGIC ***************************//

/* --------------- variables ---------------- */
//bag icon number
const bagNumber = document.querySelector(".bag-number");
//clear cart
const ClearCartBtn = document.querySelector(".remove-all-btn");
//clear item
const removeItemBtn = document.querySelector(".cart__item--remove img");
//cart total
const cartTotal = document.querySelector(".cart-total");
//cart item
const cartItemDOM = document.querySelector(".cart__item");
//cart items
const cartContent = document.querySelector(".cart__items");
//add product btn
const addProductBtn = document.querySelector(".addToCart");
//cart
let cart = [];

/* --------------- Classes ---------------- */
//getting the products
class Products {}
//display products
class UI {}
//local storage
class Storage {}
/* --------------- Event listeners ---------------- */
document.addEventListener("DOMContentLoaded", () => {
  const ui = new UI();
  const products = new Products();
});

/* --------------- variables ---------------- */
/* --------------- variables ---------------- */
