const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Three temples added (local optimized images)
  {
    templeName: "Salt Lake Utah",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253015,
    imageUrl: "images/Salt%20Lake%20Temple.webp"
  },
  {
    templeName: "Rexburg Idaho",
    location: "Rexburg, Idaho, United States",
    dedicated: "2008, February, 10",
    area: 57504,
    imageUrl: "images/Rexburg%20Temple.webp"
  },
  {
    templeName: "Accra Ghana",
    location: "Accra, Ghana",
    dedicated: "2004, January, 11",
    area: 17500,
    imageUrl: "images/Accra%20Ghana%20Temple.webp"
  }
];

// Footer dates
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

// Hamburger menu
const menuButton = document.getElementById("menu");
const nav = document.getElementById("site-nav");
menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.textContent = isOpen ? "\u2715" : "\u2630";
  menuButton.setAttribute("aria-expanded", isOpen);
});

// Helpers
const gallery = document.getElementById("gallery");
const title = document.getElementById("album-title");
const dedicatedYear = temple => parseInt(temple.dedicated.split(",")[0], 10);

// Build one card per temple
function createTempleCards(list) {
  gallery.innerHTML = "";
  list.forEach(temple => {
    const card = document.createElement("section");
    card.classList.add("temple-card");

    const name = document.createElement("h2");
    name.textContent = temple.templeName;

    const location = document.createElement("p");
    location.innerHTML = `<span class="label">Location:</span> `;
    location.append(temple.location);

    const dedicated = document.createElement("p");
    dedicated.innerHTML = `<span class="label">Dedicated:</span> `;
    dedicated.append(temple.dedicated);

    const area = document.createElement("p");
    area.innerHTML = `<span class="label">Size:</span> `;
    area.append(`${temple.area.toLocaleString("en-US")} sq ft`);

    const img = document.createElement("img");
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("loading", "lazy");
    img.setAttribute("width", "400");
    img.setAttribute("height", "250");

    card.append(name, location, dedicated, area, img);
    gallery.appendChild(card);
  });
}

// Filters
const filters = {
  home: () => true,
  old: t => dedicatedYear(t) < 1900,
  new: t => dedicatedYear(t) > 2000,
  large: t => t.area > 90000,
  small: t => t.area < 10000
};

const links = document.querySelectorAll("nav a[data-filter]");
links.forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    const name = link.dataset.filter;
    createTempleCards(temples.filter(filters[name]));
    title.textContent = link.textContent;
    links.forEach(l => l.removeAttribute("aria-current"));
    link.setAttribute("aria-current", "page");
    nav.classList.remove("open");
    menuButton.textContent = "\u2630";
    menuButton.setAttribute("aria-expanded", "false");
  });
});

// Initial render: all temples
createTempleCards(temples);
