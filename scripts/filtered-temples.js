const temples = [
    {
        templeName: "Aba Nigeria Temple",
        location: "Aba, Nigeria",
        dedicated: "2005, August 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah Temple",
        location: "Manti, Utah, United States",
        dedicated: "1888, May 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah Temple",
        location: "Payson, Utah, United States",
        dedicated: "2015, June 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam Temple",
        location: "Yigo, Guam",
        dedicated: "2020, May 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C. Temple",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Peru Temple",
        location: "Lima, Peru",
        dedicated: "1986, January 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico Temple",
        location: "Mexico City, Mexico",
        dedicated: "1983, December 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    }
];

const templeContainer = document.getElementById('temples-container');

// Function to create temple cards
function createTempleCard(temple) {
    const card = document.createElement('div');
    card.classList.add('temple-card');

    const image = document.createElement('img');
    image.src = temple.imageUrl;
    image.alt = temple.templeName;
    image.loading = 'lazy';
    card.appendChild(image);

    const h2 = document.createElement('h2');
    h2.textContent = temple.templeName;
    card.appendChild(h2);

    const p = document.createElement('p');
    p.textContent = `Location: ${temple.location}`;
    card.appendChild(p);

    const p2 = document.createElement('p');
    p2.textContent = `Dedicated: ${temple.dedicated}`;
    card.appendChild(p2);

    const p3 = document.createElement('p');
    p3.textContent = `Area: ${temple.area} sq ft`;
    card.appendChild(p3);

    return card;
}

// Function to filter temples
function filterTemples(filter) {
    templeContainer.innerHTML = '';

    temples.forEach(temple => {
        if (filter === 'all') {
            templeContainer.appendChild(createTempleCard(temple));
        } else if (filter === 'old' && temple.dedicated < '1900') {
            templeContainer.appendChild(createTempleCard(temple));
        } else if (filter === 'new' && temple.dedicated > '2000') {
            templeContainer.appendChild(createTempleCard(temple));
        } else if (filter === 'large' && temple.area > 90000) {
            templeContainer.appendChild(createTempleCard(temple));
        } else if (filter === 'small' && temple.area < 10000) {
            templeContainer.appendChild(createTempleCard(temple));
        }
    });
}

// Add event listeners to navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const filter = link.getAttribute('data-filter');
        filterTemples(filter);
    });
});

// Initialize temple display
filterTemples('all');

// Update last modified date
document.getElementById('last-modified').textContent = new Date().toLocaleDateString();
