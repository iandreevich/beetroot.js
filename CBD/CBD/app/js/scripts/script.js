// tabs

function tab() {
  let tabNav = document.querySelectorAll(".tabs-nav__item"),
    tabContent = document.querySelectorAll(".tab"),
    tabName;

  tabNav.forEach((item) => {
    item.addEventListener("click", selectTabNav);
  });

  function selectTabNav() {
    tabNav.forEach((item) => {
      item.classList.remove("is-active-tab");
    });
    this.classList.add("is-active-tab");
    tabName = this.getAttribute("data-tab-name");
    selectTabContent(tabName);
  }
  function selectTabContent() {
    tabContent.forEach((item) => {
      item.classList.contains(tabName)
        ? item.classList.add("is-active")
        : item.classList.remove("is-active");
    });
  }
}
tab();

// nav
function windowScroll() {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
      $(".nav").addClass("nav__background");
    } else {
      $(".nav").removeClass("nav__background");
    }
  });
}
windowScroll();

// slider
$(".products__slider").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,

  autoplaySpeed: 3000,
  prevArrow: $(".prev"),
  nextArrow: $(".next"),
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

$(".review__slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  prevArrow: $(".review__prev"),
  nextArrow: $(".review__next"),
});
//acardion
function acardion() {
  const acc = document.getElementsByClassName("fraq__accordion");
  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("fraq__active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
}
acardion();

// cart
const dataProduct = [
  { id: "1", name: "CBD 500 mg Orange Flavor Tincture", price: "49.99" },
  { id: "2", name: "Black ICE CBD Muscle Rub 500 mg", price: "49.99" },
  { id: "3", name: "CBD+Curcumin Coffee 750 mg", price: "79.99" },
  { id: "4", name: "CBD 400 mg Orange Flavor Tincture", price: "39.99" },
  { id: "5", name: "Black ICE CBD Muscle Rub 400 mg", price: "39.99" },
  { id: "6", name: "CBD+Curcumin Coffee 950 mg", price: "99.99" },
];

document.addEventListener("click", showCart);
document.addEventListener("click", addToCart);

const cartBtn = document.getElementById("cartBtn");
const modal = document.querySelector(".modal");
const modalExit = document.getElementsByClassName("close")[0];
const total = document.getElementById("total");
const cartTotal = document.getElementById("totalPrice");
const cartList = [];
const cart = document.getElementById("cart");
const shopBtn = document.querySelector(".slide__shop");

function addToCart(e) {
  const { target } = e;
  if (target.className !== "slide__shop") {
    return;
  }

  const item = dataProduct.find((el) => el.id === target.id);

  const repeatItem = cartList.find((el) => el.id === target.id);
  if (repeatItem) {
    return;
  }
  cartList.push(item);
  getTotal();
}
function getTotal() {
  cartList.length
    ? (total.innerText = `(${cartList.length})`)
    : (total.innerText = "");
}

function showCart(e) {
  const { target } = e;
  if (target.id !== "cartBtn") {
    return;
  }
  modal.style.display = "block";
  modalExit.onclick = function () {
    modal.style.display = "none";
  };
  renderCart(cartList);
}

function renderCart() {
  if (cartList.length === 0) {
    cart.innerText = "Cart is empty";
    totalPrice.innerHTML = "";
  } else {
    getTotalPrice() === 0
      ? null
      : (totalPrice.innerHTML = `<p class="modal__price">Total Price: ${getTotalPrice()}<p>`);

    cart.innerHTML = cartList

      .map(
        (el) =>
          `<ul>
            <li class="list"> 
              <p class="list__item-title">${el.name}</p> 
              <p class="list__item-title">${el.price}</p> 
             <button class='list__item-btn' onclick="deleteFromCart(${el.id})">X</button>      
            </li>
          </ul>`
      )
      .join("");
  }
}

function deleteFromCart(id) {
  const res = cartList.find((el) => el.id === id);
  cartList.splice(res, 1);
  if (!cartList.length) {
    getTotalPrice(0);
  }
  renderCart();
  getTotal();
}

function getTotalPrice() {
  let count = 0;
  if (cartList.length) {
    for (item of cartList) {
      count += parseFloat(item.price);
    }
  }

  return count;
}
