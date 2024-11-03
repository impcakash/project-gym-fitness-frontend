document.addEventListener('DOMContentLoaded', function () {

    const faqItems = document.querySelectorAll('.faq-item');
    const showMoreBtn = document.getElementById('show-more-btn');

    faqItems.forEach(item => {

        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {

            const answer = item.querySelector('.faq-answer');
            const toggle = question.querySelector('.faq-toggle');
            answer.classList.toggle('open');
            toggle.textContent = answer.classList.contains('open') ? '-' : '+';

        });
    });

    let showMore = true;

    showMoreBtn.addEventListener('click', () => {

        const hiddenFaqItems = document.querySelectorAll('.faq-item:nth-child(n+6)');
        showMore = !showMore;

        hiddenFaqItems.forEach(item => {
            item.style.display = showMore ? 'block' : 'none';
        });

        showMoreBtn.textContent = showMore ? 'Show Less' : 'Show More';
    });

});


// JavaScript to toggle the hamburger menu
const menuToggle = document.getElementById("menu-toggle");
const hamburgerMenu = document.getElementById("hamburger-menu");
const closeBtn = document.getElementById("close-btn");

menuToggle.addEventListener("click", () => {
    hamburgerMenu.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
    hamburgerMenu.style.display = "none";
});


// JavaScript to toggle the hamburger menu -2
const menuToggle2 = document.getElementById("menu-toggle");
const hamburgerMenu2 = document.getElementById("hamburger-menu");
const closeBtn2 = document.getElementById("close-btn");

menuToggle2.addEventListener("click", () => {
    hamburgerMenu2.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
    hamburgerMenu2.style.display = "none";
});
