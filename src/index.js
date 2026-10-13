import "./style.css";
import { loadHome } from "./home.js";
import { loadMenu } from "./menu.js";
import { loadContact } from "./contact.js";

const content = document.getElementById("content");

function switchTab(loader) {
  content.textContent = "";
  loader();
}

document.getElementById("home").addEventListener("click", () => switchTab(loadHome));
document.getElementById("menu").addEventListener("click", () => switchTab(loadMenu));
document.getElementById("contact").addEventListener("click", () => switchTab(loadContact));

loadHome();