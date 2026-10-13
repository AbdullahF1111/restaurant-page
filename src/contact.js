export function loadContact() {
  const content = document.getElementById("content");

  const contact = document.createElement("div");
  contact.classList.add("contact");

  const title = document.createElement("h1");
  title.textContent = "Contact Us";

  const info = [
    ["Address", "123 Main Street, Amsterdam"],
    ["Phone", "+31 6 1234 5678"],
    ["Email", "info@ourrestaurant.com"],
    ["Hours", "Mon-Sun: 12:00 - 23:00"],
  ];

  contact.appendChild(title);

  info.forEach(([label, value]) => {
    const p = document.createElement("p");
    const strong = document.createElement("strong");
    strong.textContent = label + ": ";
    p.append(strong, value);
    contact.appendChild(p);
  });

  content.appendChild(contact);
}