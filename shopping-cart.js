const removeButton1 = document.getElementById("removeButton1");
const removeButton2 = document.getElementById("removeButton2");

const chocolateFlavoured = document.getElementById("chocolateFlavoured");
const breakfastBlend = document.getElementById("breakfastBlend");

const hBtn = document.querySelector(".hamburger-btn");
const slide = document.querySelector(".pslide-menu");
let menuOpen = false;

removeButton1.addEventListener("click", () => {
  console.log("test");
  breakfastBlend.style.display = "none";
});

removeButton2.addEventListener("click", function (event) {
  console.log("test");
  chocolateFlavoured.style.display = "none";
});

hBtn.addEventListener("click", () => {
  if (!menuOpen) {
    hBtn.classList.add("open");
    menuOpen = true;
    slide.classList.add("popen-slide");
    console.log("hi");
  } else {
    hBtn.classList.remove("open");
    menuOpen = false;
    slide.classList.remove("popen-slide");
  }
});
