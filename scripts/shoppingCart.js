function Item(name, price, quantity) {
  this.name = name;
  this.price = price;
  this.quantity = quantity;
}

let data = [];

function addProduct() {
  const name = document.getElementById("product-name").value;
  const price = document.getElementById("product-price").value;
  const quantity = document.getElementById("product-quantity").value;

  data.push(new Item(name, price, quantity));

  displayLastElement();
}

let cart = document.getElementById("products-table");

function displayLastElement() {
  const item = data[data.length - 1];

  let tr = document.createElement("tr");
  let name = document.createElement("td");
  let price = document.createElement("td");
  let quantity = document.createElement("td");

  name.innerText = item.name;
  price.innerText = item.price;
  quantity.innerText = item.quantity;

  tr.appendChild(name);
  tr.appendChild(price);
  tr.appendChild(quantity);

  cart.appendChild(tr);
}

let btn = document.getElementById("calculate-btn");
btn.addEventListener("click", (event) => {
  let total_price = document.getElementById("total-price");
  let total = 0;

  data.forEach((item) => {
    total += item.price * item.quantity;
  });
  total_price.innerText = total;
});
