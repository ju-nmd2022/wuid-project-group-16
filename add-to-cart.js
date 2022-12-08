// based on https://www.youtube.com/watch?v=Pt8f3GwD3N8&t=42s
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
