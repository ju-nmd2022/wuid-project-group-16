const removeButton1 = document.getElementById("removeButton1");
const removeButton2 = document.getElementById("removeButton2");

const chocolateFlavoured = document.getElementById("chocolateFlavoured");
const breakfastBlend = document.getElementById("breakfastBlend");

removeButton1.addEventListener("click", () => {
  console.log("test");
  breakfastBlend.style.display = "none";
});

removeButton2.addEventListener("click", function (event) {
  console.log("test");
  chocolateFlavoured.style.display = "none";
});
