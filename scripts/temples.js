const hamburgerBtn = document.getElementById('hamburger-btn');
const navMenu = document.querySelector('nav ul');
hamburgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});
const currentYear = new Date().getFullYear();
const lastModifiedDate = document.lastModified;
const footer = document.querySelector('footer');
footer.innerHTML = `
    <p>&copy; ${currentYear} Onyewuchi Chukwunonso AKA cyphernexu</p>
    <p>Last modified: ${lastModifiedDate}</p>
`;
window.addEventListener('resize', () => {
    if (navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
    }
});