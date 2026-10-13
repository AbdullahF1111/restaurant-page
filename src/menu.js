import dish1 from "./images/dish1.jpg";
import dish2 from "./images/dish2.jpg";
import dish3 from "./images/dish3.jpg";

const dishes = [
  { name: "Grilled Salmon", desc: "Fresh salmon with lemon butter.", price: "$18", img: dish1 },
  { name: "Beef Burger", desc: "Juicy beef, cheddar, and house sauce.", price: "$14", img: dish2 },
  { name: "Margherita Pizza", desc: "Tomato, mozzarella, and basil.", price: "$12", img: dish3 },
];

export function loadMenu() {
  const content = document.getElementById("content");

  const menu = document.createElement("div");
  menu.classList.add("menu");

  const title = document.createElement("h1");
  title.textContent = "Our Menu";

  const grid = document.createElement("div");
  grid.classList.add("menu-grid");

  dishes.forEach((dish) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = dish.img;
    img.alt = dish.name;

    const name = document.createElement("h3");
    name.textContent = dish.name;

    const desc = document.createElement("p");
    desc.textContent = dish.desc;

    const price = document.createElement("span");
    price.classList.add("price");
    price.textContent = dish.price;

    card.append(img, name, desc, price);
    grid.appendChild(card);
  });

  menu.append(title, grid);
  content.appendChild(menu);
}