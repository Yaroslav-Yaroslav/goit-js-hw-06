const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");
const itemsArr = [];

ingredients.forEach((element) => {
  const item = document.createElement("li");
  item.textContent = element;
  item.classList.add("item");
  itemsArr.push(item);
});

list.append(...itemsArr);
