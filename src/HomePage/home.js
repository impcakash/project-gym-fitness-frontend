function toggleMenu() {
    const nav = document.querySelector("nav");
    nav.classList.toggle("active");
}


// slider
let currentSlide = 0;

function updateSlidePosition() {
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const slideWidth = sliderWrapper.children[0].clientWidth;
    sliderWrapper.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

function nextSlide() {
    const slides = document.querySelectorAll('.slide');
    if (currentSlide < slides.length - 1) {
        currentSlide++;
    } else {
        currentSlide = 0; // Loop back to the first slide
    }
    updateSlidePosition();
}

function prevSlide() {
    const slides = document.querySelectorAll('.slide');
    if (currentSlide > 0) {
        currentSlide--;
    } else {
        currentSlide = slides.length - 1; // Loop to the last slide
    }
    updateSlidePosition();
}

// Adjust the slide position on window resize
window.addEventListener('resize', updateSlidePosition);

