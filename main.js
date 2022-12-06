const hBtn = document.querySelector(".hamburger-btn");
const slide = document.querySelector(".slide-menu");

let menuOpen = false;

hBtn.addEventListener("click", () => {
  if (!menuOpen) {
    hBtn.classList.add("open");
    menuOpen = true;
    slide.classList.add("open-slide");
  } else {
    hBtn.classList.remove("open");
    menuOpen = false;
    slide.classList.remove("open-slide");
  }
});
