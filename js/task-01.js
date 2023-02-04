// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
const categories = document.querySelectorAll(".item");
console.log("Number of categories:", categories.length);
categories.forEach((item) => {
  console.log("");
  console.log("Category:", item.firstElementChild.textContent);
  console.log("Elements:", item.lastElementChild.children.length);
});
