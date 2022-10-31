const menuItem = document.querySelector(".menu-item");
const itemPrice = document.querySelector(".item-price");
const addBtn = document.querySelector(".add-item");
const ul = document.querySelector(".ul");
const orderTotal = document.querySelector(".order-price");
const orderItems = document.querySelector(".order-items");
const orderSubmit = document.querySelector("#orderSubmit");

const itmArray = [];
const priceArray = [];
let total = 0;

const addToCart = (array, prcArr, total) => {
  for (let i = 0; i < array.length; i++) {
    const ordItm = document.createElement("h4");
    ordItm.textContent = `${array[i]} $${prcArr[i]}`;
    orderItems.appendChild(ordItm);
  }

  const ordPrice = document.createElement("h4");
  ordPrice.textContent = `$${total}`;
  orderTotal.appendChild(ordPrice);
};

const deleteOrderText = () => {
  while (orderTotal.hasChildNodes()) {
    orderTotal.removeChild(orderTotal.firstChild);
  }
  while (orderItems.hasChildNodes()) {
    orderItems.removeChild(orderItems.firstChild);
  }
};

const addToOrder = (event) => {
  const target = event.target;
  if (target.tagName === "BUTTON") {
    const item = target.getAttribute("data-item");
    const itemPrice = parseInt(target.getAttribute("data-price"));

    console.log(item);
    console.log(`$${itemPrice}`);

    itmArray.push(item);
    priceArray.push(itemPrice);
    total += itemPrice;

    console.log(itmArray);
    console.log(`$${total}`);

    deleteOrderText();
    addToCart(itmArray, priceArray, total);
  }
};

const currentOrderIndex = async () => {
  await fetch("/api/ordersroutes", {
    method: "GET",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // console.log(data.length);
      // console.log(data[data.length - 1].id);
      const orderId = data[data.length - 1].id;
      return orderId;
    });
};

const postNewOrder = async () => {
  
};

const submitOrderToDB = async () => {
  const orderIndex = await currentOrderIndex();
  postNewOrder();
};

ul.addEventListener("click", addToOrder);
orderSubmit.addEventListener("click", submitOrderToDB);
