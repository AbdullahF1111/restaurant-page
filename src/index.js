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


// After Every Editting

// git checkout gh-pages && git merge main --no-edit
// npx webpack
// git add dist -f && git commit -m "Deployment commit"
// git subtree push --prefix dist origin gh-pages
// git checkout main

// And If Rejected 
// git push origin `git subtree split --prefix dist gh-pages`:gh-pages --force