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

            // * Filter Price Bar
window.onload = function(){
    slideOne();
    slideTwo();
}

let sliderOne = document.getElementById("slider-1");
let sliderTwo = document.getElementById("slider-2");
let displayValOne = document.getElementById("range1");
let displayValTwo = document.getElementById("range2");
let minGap = 0;
let sliderTrack = document.querySelector(".slider-track");
let sliderMaxValue = document.getElementById("slider-1").max;

function slideOne(){
    if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
        sliderOne.value = parseInt(sliderTwo.value) - minGap;
    }
    displayValOne.textContent = sliderOne.value;
    fillColor();
}
function slideTwo(){
    if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
        sliderTwo.value = parseInt(sliderOne.value) + minGap;
    }
    displayValTwo.textContent = sliderTwo.value;
    fillColor();
}
function fillColor(){
    percent1 = (sliderOne.value / sliderMaxValue) * 100;
    percent2 = (sliderTwo.value / sliderMaxValue) * 100;
    sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #d63384 ${percent1}% , #d63384 ${percent2}%, #dadae5 ${percent2}%)`;
}

