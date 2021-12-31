import faker from "faker";

console.log("Container de procutos");
let products = "";

for (let i = 0; i < 5; i++) {
  const name = faker.commerce.productName();
  products += `<div>${name}</div>`;
}

document.getElementById("container-products").innerHTML = products;
