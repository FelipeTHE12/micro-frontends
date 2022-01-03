import faker from "faker";

const mount = (container) => {
  console.log("Cart app");
  const cartText = `<div> ${faker.random.number()} </div>`;
  container.innerHTML = cartText;
};

if (process.env.NODE_ENV === "development") {
  const container = document.querySelector("#dev-amb-container-cart");

  if (container) {
    mount(container);
  }
}

export { mount };
