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

            // * * Best Selling 
const bookContainer = document.getElementById("bestContainer");
const cardWidth = 218; 
const cards = Array.from(bookContainer.getElementsByClassName("best-card"));
const autoScrollDelay = 3000; 
const pauseAfterLastCard = 3000; 

let currentIndex = 0;
let isAutoScrolling = false;
let autoScrollInterval;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function scrollCards(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = cards.length - 1;
    } else if (currentIndex >= cards.length) {
        currentIndex = 0;
    }

    const offset = currentIndex * cardWidth;
    bookContainer.scrollTo({ left: offset, behavior: "smooth" });
}

function startAutoScroll() {
    if (!isAutoScrolling) {
        isAutoScrolling = true;
        autoScrollInterval = setInterval(() => {
            scrollCards(1); 
        }, autoScrollDelay);
    }
}

function stopAutoScroll() {
    isAutoScrolling = false;
    clearInterval(autoScrollInterval); 
}

function updateAutoScroll() {
    if (isAutoScrolling) {
        stopAutoScroll();
        startAutoScroll();
    }
}

function pauseAfterLast() {
    if (isAutoScrolling) {
        stopAutoScroll();
        setTimeout(startAutoScroll, pauseAfterLastCard); 
    }
}

// otomatik scroll
window.addEventListener("load", () => {
    shuffleArray(cards); 
    startAutoScroll();
    pauseAfterLast(); 
});


bookContainer.addEventListener("mousedown", stopAutoScroll);

// "Prev" click
const prevButton = document.querySelector(".best-left i");
prevButton.addEventListener("click", () => {
    scrollCards(-1);
    updateAutoScroll();
    pauseAfterLast(); 
});

// "Next" click
const nextButton = document.querySelector(".best-right i");
nextButton.addEventListener("click", () => {
    scrollCards(1);
    updateAutoScroll();
    pauseAfterLast(); 
});

        // * *Featured This Week

const prevSlideButton = document.getElementById('prevSlide');
const nextSlideButton = document.getElementById('nextSlide');
const slides = document.querySelectorAll('.week-slide');
let currentSlide = 0;
let isAnimating = false;

nextSlideButton.addEventListener('click', () => {
    if (!isAnimating) {
        isAnimating = true;
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlidePosition();
    }
});

prevSlideButton.addEventListener('click', () => {
    if (!isAnimating) {
        isAnimating = true;
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSlidePosition();
    }
});

function updateSlidePosition() {
    slides.forEach((slide, index) => {
        let offset = (index - currentSlide) * 100;
        if (offset > 100) {
            offset -= 100 * slides.length;
        } else if (offset < -100) {
            offset += 100 * slides.length;
        }
        
        slide.style.transform = `translateX(${offset}%)`;
        slide.style.pointerEvents = "none";
        slide.style.opacity = 0;
    });

    setTimeout(() => {
        slides[currentSlide].style.transform = `translateX(0)`;
        slides[currentSlide].style.pointerEvents = "auto";
        slides[currentSlide].style.opacity = 1;

        setTimeout(() => {
            isAnimating = false;
        }, 500);
    }, 100);
}

updateSlidePosition();

const autoAdvanceInterval = 4000;
const autoAdvance = () => {
    if (!isAnimating) {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlidePosition();
    }
};

let autoAdvanceTimer = setInterval(autoAdvance, autoAdvanceInterval);

slides.forEach((slide) => {
    slide.addEventListener('mouseenter', () => {
        clearInterval(autoAdvanceTimer);
    });

    slide.addEventListener('mouseleave', () => {
        autoAdvanceTimer = setInterval(autoAdvance, autoAdvanceInterval);
    });
});
