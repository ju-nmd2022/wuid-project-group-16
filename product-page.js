const hBtn = document.querySelector(".hamburger-btn");
const slide = document.querySelector(".pslide-menu");
const html = document.querySelector("html");
let menuOpen = false;

hBtn.addEventListener("click", () => {
  if (!menuOpen) {
    hBtn.classList.add("open");
    menuOpen = true;
    slide.classList.add("popen-slide");
    html.classList.add("html-noscroll");
    console.log("hi");
  } else {
    hBtn.classList.remove("open");
    menuOpen = false;
    slide.classList.remove("popen-slide");
    html.classList.remove("html-noscroll");
  }
});
