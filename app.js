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

        // * Sliders Automatically Added
const sliders = document.querySelectorAll('.slider');

const circleButtons = document.querySelectorAll('.slider-circle-btn li button');

let autoSlideInterval;

function activateNextSlide() {
    let currentSlideIndex = 0;
    for (let i = 0; i < sliders.length; i++) {
        if (sliders[i].classList.contains('active')) {
        currentSlideIndex = i;
        break;
        }
    }

    const nextSlideIndex = (currentSlideIndex + 1) % sliders.length;

    sliders[currentSlideIndex].classList.remove('active');
    sliders[nextSlideIndex].classList.add('active');

    circleButtons[currentSlideIndex].classList.remove('active');
    circleButtons[nextSlideIndex].classList.add('active');
}

function startAutoSlide() {
    autoSlideInterval = setInterval(activateNextSlide, 9000);
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

circleButtons.forEach((button, index) => {
button.addEventListener('click', () => {
    stopAutoSlide();

    sliders.forEach((slider) => {
        slider.classList.remove('active');
    });
    circleButtons.forEach((btn) => {
        btn.classList.remove('active');
    });

    sliders[index].classList.add('active');
    button.classList.add('active');

    startAutoSlide();
    });
});

startAutoSlide();

    // * Header-Navbar Scroll
    window.addEventListener('scroll', function() {
        var navbar = document.querySelector('.header');
        var fixedIcon = document.querySelector('.fixed-icon');
        if (window.scrollY >= 500) {
            navbar.classList.add('fixed');
            fixedIcon.classList.add('active-fixed');
        } else {
            navbar.classList.remove('fixed');
            fixedIcon.classList.remove('active-fixed');
        }
    });
    
            // * Scroll-Btn-Top
document.addEventListener("DOMContentLoaded", function() {
    const scrollButton = document.getElementById("scrollBtn");

    scrollButton.addEventListener("click", scrollToTop);
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
