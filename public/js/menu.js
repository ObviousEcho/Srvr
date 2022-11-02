const menuItem = document.querySelector(".menu-item");
const itemPrice = document.querySelector(".item-price");
const addBtn = document.querySelector(".add-item");
const ul = document.querySelector(".ul");
const orderTotal = document.querySelector(".order-price");
const orderItems = document.querySelector(".order-items");
const orderSubmit = document.querySelector("#orderSubmit");

const itmArray = [];
const itmArrayId = [];
const priceArray = [];
let total = 0;

var test;

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
    const id = parseInt(target.getAttribute("data-id"));

    console.log(item);
    console.log(`$${itemPrice}`);

    itmArray.push(item);
    itmArrayId.push(id);
    priceArray.push(itemPrice);
    total += itemPrice;

    console.log(itmArrayId);
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
      console.log(data.length);
      const orderId = data.length;
      console.log(orderId);
      test = orderId;
      return test;
    });
};

const postNewOrder = async (order_id, item) => {
  const user_id = 1;

  const response = await fetch("/api/orderitems", {
    method: "POST",
    body: JSON.stringify({ order_id, item }),
    headers: { "Content-Type": "application/json" },
  });
};

const submitOrderToDB = async () => {
  const orderIndex = await currentOrderIndex();

  console.log(orderIndex);
  console.log(test);
  user_id = 1;

  const response = await fetch("/api/ordersroutes", {
    method: "POST",
    body: JSON.stringify({ user_id }),
    headers: { "Content-Type": "application/json" },
  });

  for (let i = 0; i < itmArray.length; i++) {
    await postNewOrder(test, itmArrayId[i]);
  }
  await pageReload();
};

const pageReload = () => {
  location.reload();
};

ul.addEventListener("click", addToOrder);
orderSubmit.addEventListener("click", submitOrderToDB);
