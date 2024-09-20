// Get the navbar element
const navbar = document.getElementById('navbar');

// Add a scroll event listener to change the background of the navbar
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
