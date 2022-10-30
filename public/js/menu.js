const menuItem = document.querySelector(".menu-item");
const itemPrice = document.querySelector(".item-price");
const addBtn = document.querySelector(".add-item");
const ul = document.querySelector(".ul");

const itmArray = [];
let total = 0;

const addToCart = (array, total) => {
const orderItems = document.querySelector(".order-items");
const orderTotal = document.querySelector(".order-price");

  array.forEach(item => {
    const ordItm = document.createElement("h4");
    ordItm.textContent = item;
    orderItems.appendChild(ordItm);
  })

  const ordPrice = document.createElement("h4");
  ordPrice.textContent = total;
  orderTotal.appendChild(ordPrice);
};

const addToOrder = (event) => {
  const target = event.target;
  if (target.tagName === "BUTTON") {
    const item = target.getAttribute("data-item");
    const itemPrice = parseInt(target.getAttribute("data-price"));

    console.log(item);
    console.log(`$${itemPrice}`);

    itmArray.push(item);
    total += itemPrice;

    console.log(itmArray);
    console.log(`$${total}`);

    addToCart(itmArray, total);
  }
};

ul.addEventListener("click", addToOrder);
