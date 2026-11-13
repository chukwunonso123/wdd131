// Footer dates
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

// Hamburger menu
const menuButton = document.getElementById("menu");
const nav = document.getElementById("site-nav");
menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.textContent = isOpen ? "\u2715" : "\u2630"; // X or hamburger
  menuButton.setAttribute("aria-expanded", isOpen);
});

// Filter links (Old, New, Large, Small)
const figures = document.querySelectorAll("figure");
const title = document.getElementById("album-title");
const filters = {
  old: f => Number(f.dataset.year) < 1900,
  new: f => Number(f.dataset.year) > 2000,
  large: f => Number(f.dataset.area) >= 90000,
  small: f => Number(f.dataset.area) < 20000
};
document.querySelectorAll("nav a[data-filter]").forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    const name = link.dataset.filter;
    figures.forEach(f => { f.hidden = !filters[name](f); });
    title.textContent = link.textContent;
    nav.classList.remove("open");
    menuButton.textContent = "\u2630";
    menuButton.setAttribute("aria-expanded", "false");
  });
});
