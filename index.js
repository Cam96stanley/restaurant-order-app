import { menuArray } from "./data.js";
const mainDiv = document.getElementById("main-div");

function render() {
  menuArray
    .map(function (menuArray) {
      mainDiv.innerHTML += `
    <p class="emoji">${menuArray.emoji}</p>
    <h2 class="menu-item-name">${menuArray.name}</h2>
    <p class="ingredients">${menuArray.ingredients}</p>
    <p class="price">${menuArray.price}</p>`;
    })
    .join("");
}
render();
