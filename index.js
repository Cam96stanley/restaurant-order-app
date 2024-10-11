import { menuArray } from "./data.js";
const mainDiv = document.getElementById("main-div");

function render() {
  menuArray
    .map(function (menuArray) {
      mainDiv.innerHTML += `
    <div class="menu-item">
        <p class="emoji">${menuArray.emoji}</p>
        <div class="item-description">
            <h2 class="menu-item-name">${menuArray.name}</h2>
            <p class="ingredients">${menuArray.ingredients.join(", ")}</p>
            <p class="price">$${menuArray.price}</p>
        </div>
        <button class="add-btn">+</button>
    </div>
    `;
    })
    .join("");
}
render();
