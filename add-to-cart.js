let count = 0;

const cartCounter = document.getElementById("cartCounter");
document
  .getElementById("addToCartAnimation")
  .addEventListener("click", (event) => {
    const cl = cartCounter.classList;
    const c = "animated-counter";
    count++;

    cartCounter.innerText = count;
    cl.remove(c, cl.contains(c));
    setTimeout(() => cartCounter.classList.add("animated-counter"), 1);
  });
