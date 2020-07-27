//nav logic
const navItem = document.querySelectorAll(".mobnav__item--toggle");
const navLength = navItem.length;

for (let i = 0; i < navLength; i++) {
  navItem[i].addEventListener("click", () => {
    navItem[i].classList.toggle("active");
  });
}

//product carousel
$(function () {
  $(".multiple-items").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
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

//*************************** CART & PRODUCT LOGIC ***************************//

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
//product items
const productsDOM = document.querySelector(".products-container");
//add product btn
const addProductBtn = document.querySelector(".addToCart");
//cart
let cart = [];

/* --------------- Classes ---------------- */
//getting the products
class Products {
  async getProducts() {
    try {
      let result = await fetch("products.json");
      let data = await result.json();
      let products = data.items;
      products = products.map((item) => {
        const { title, price } = item.fields;
        const { id } = item.sys;
        const img = item.fields.image.fields.file.url;
        return { title, price, id, img };
      });
      return products;
    } catch (error) {
      console.log(error);
    }
  }
}
//display products
class UI {
  displayProducts(products) {
    let result = "";
    products.forEach((product) => {
      result += `
      <!--product-->
      <section class="product">
        <container class="product__images">
          <img
            src=${product.img}
            alt="product image"
            class="product__images--main"
          />
        </container>
        <container class="product__info">
          <h2 class="product__info--title section-title">${product.title}</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
            aliquam, omnis, consequatur enim voluptas optio corrupti excepturi
            quos, doloribus obcaecati tempore quam!
          </p>
          <h2 class="product__info--price section-title">£ ${product.price}</h2>
          <button class="addToCart btn-main" data-id=${product.id}>Add to cart</button>
        </container>
      </section>
      <!--product end-->
      `;
    });
    productsDOM.innerHTML = result;
  }
  getBagBtns() {
    const bagBtns = [...document.querySelectorAll(".addToCart")];
    bagBtns.forEach((btn) => {
      let btnId = btn.dataset.id;
      let inBag = cart.find((item) => item.id === id);
      if (inBag) {
        btn.target.innerHTML = "<span>item added &#10003;</span>";
        btn.disabled = true;
        btn.style.background = "rgb(43, 153, 24)";
      } else {
        btn.addEventListener("click", (e) => {
          e.target.innerHTML = "<span>item added &#10003;</span>";
          e.target.disabled = true;
          e.target.style.background = "rgb(43, 153, 24)";
        });
      }
    });
  }
}
//local storage
class Storage {
  static saveProducts(products) {
    localStorage.setItem("products", JSON.stringify(products));
  }
}

/* --------------- Event listeners ---------------- */
document.addEventListener("DOMContentLoaded", () => {
  const ui = new UI();
  const products = new Products();

  // get all products
  products
    .getProducts()
    .then((products) => {
      ui.displayProducts(products);
      Storage.saveProducts(products);
    })
    .then(() => {
      ui.getBagBtns();
    });
});
