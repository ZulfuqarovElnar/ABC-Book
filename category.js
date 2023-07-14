// Nav-Menu Hamburger 
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu ul');
const navPageEl = document.querySelector('.nav-pages');
const pages = document.querySelector('.nav-pages a');


navToggle.addEventListener('click', () =>{
    navMenu.classList.toggle('show-links');
});

pages.addEventListener('click', () =>{
    navPageEl.classList.toggle('show-page');
});


 // * Header-Navbar Scroll
window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.header');
    if (window.scrollY >= 500) {
        navbar.classList.add('fixed');
    } else {
        navbar.classList.remove('fixed');
    }
});