import restaurantImg from "./images/restaurant.jpg";

export function loadHome() {
  const content = document.getElementById("content");

  const title = document.createElement("h1");
  title.textContent = "Our Restaurant";

  const img = document.createElement("img");
  img.src = restaurantImg;
  img.alt = "Restaurant";

  const text = document.createElement("p");
  text.textContent = "The best food you will ever taste.";

  content.append(title, img, text);
}