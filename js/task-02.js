const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ulIngredients = document.querySelector("#ingredients");

const ingredientLi = (el) => {
  const ingredientItem = document.createElement("li");
  ingredientItem.textContent = el;
  ingredientItem.classList.add("item");
  return ingredientItem;
};
const list = ingredients.map((ingredient) => ingredientLi(ingredient));

ulIngredients.append(...list);
console.log(list);
