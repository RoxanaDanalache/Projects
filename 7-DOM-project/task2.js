console.log(document);

const categories = document.querySelectorAll("#categories .item");
console.log("Number of categories:", categories.length);
const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatoes",
    "Herbs",
    "Condiments",
];

const ingredientsList = document.getElementById("ingredients");
ingredients.forEach(ingredient => {
    const listItem = document.createElement("li");
    listItem.textContent = ingredient;
    listItem.classList.add("item");
    ingredientsList.appendChild(listItem);
});