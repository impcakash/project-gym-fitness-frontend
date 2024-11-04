

function openVideo() {
    const videoModal = document.getElementById("videoModal");
    const youtubeVideo = document.getElementById("youtubeVideo");

    youtubeVideo.src = "https://www.youtube.com/embed/gDWxswQ-h_o?autoplay=1";
    videoModal.style.display = "flex";
}

function closeVideo() {
    const videoModal = document.getElementById("videoModal");
    const youtubeVideo = document.getElementById("youtubeVideo");

    youtubeVideo.src = "";
    videoModal.style.display = "none";
}
function smoothScroll(target) {

    if (typeof target !== 'string') {
        console.error('Target must be a valid CSS selector string');
        return;
    }

    try {

        const element = document.querySelector(target);
        if (!element) {
            console.error(`Target element "${target}" not found`);
            return;
        }

        const navbar = document.querySelector('.navbar');
        const navbarHeight = navbar ? navbar.offsetHeight : 0;


        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - navbarHeight - 20;

        window.scrollTo({
            top: Math.max(0, offsetPosition),
            behavior: 'smooth'
        });


        const tabs = document.querySelectorAll('.tab');
        tabs.forEach(tab => {
            tab.classList.remove('active');

            tab.removeAttribute('aria-current');
        });


        const activeTab = document.querySelector(`a[href="${target}"]`);
        if (activeTab) {
            activeTab.classList.add('active');

            activeTab.setAttribute('aria-current', 'page');
        }

    } catch (error) {
        console.error('Error in smoothScroll:', error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');

    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            const target = tab.getAttribute('href');
            if (target) {
                smoothScroll(target);
            }
        });
    });
});

function smoothScroll(target) {
    try {
        const element = document.querySelector(target);
        if (!element) return;


        const navbar = document.querySelector('.navbar');
        const navbarHeight = navbar ? navbar.offsetHeight : 0;

        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - navbarHeight - 20;

        window.scrollTo({
            top: Math.max(0, offsetPosition),
            behavior: 'smooth'
        });


        const tabs = document.querySelectorAll('.tab');
        tabs.forEach(tab => {
            tab.classList.remove('active');

            tab.removeAttribute('aria-current');
        });

        const activeTab = document.querySelector(`a[href="${target}"]`);
        if (activeTab) {
            activeTab.classList.add('active');

            activeTab.setAttribute('aria-current', 'page');
        }
    } catch (error) {
        console.error('Error in smoothScroll:', error);
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');

    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            const target = tab.getAttribute('href');
            if (target) {
                smoothScroll(target);
            }
        });
    });
});

function toggleContent(element, imageSrc = null) {
    const categoryContent = element.nextElementSibling;
    const isActive = categoryContent.style.display === 'block';

    categoryContent.style.display = isActive ? 'none' : 'block';
    element.classList.toggle('active', !isActive);


    const svgIcon = element.querySelector('svg');
    if (svgIcon) {
        svgIcon.style.transform = isActive ? 'rotate(0deg)' : 'rotate(180deg)';
    }
    if (imageSrc) {
        const equipmentImage = document.getElementById('equipment-image');
        if (!isActive && equipmentImage) {
            equipmentImage.src = imageSrc;
        }
    }
}
function showMore(element) {
    const additionalContent = element.nextElementSibling;
    const isVisible = additionalContent.style.display === 'block';
    additionalContent.style.display = isVisible ? 'none' : 'block';
    element.style.display = isVisible ? 'block' : 'none';
}
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
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
