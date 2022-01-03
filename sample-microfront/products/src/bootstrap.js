import faker from "faker";

const mount = (container) => {
  console.log("Container de procutos");
  let products = "";

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }
  container.innerHTML = products;
};

if (process.env.NODE_ENV === "development") {
  const container = document.querySelector("#dev-amb-container-products");

  if (container) {
    mount(container);
  }
}

export { mount };
