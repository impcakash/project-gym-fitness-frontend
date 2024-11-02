const menuToggle = document.getElementById("menu-toggle");
const hamburgerMenu = document.getElementById("hamburger-menu");
const closeBtn = document.getElementById("close-btn");

menuToggle.addEventListener("click", () => {
    hamburgerMenu.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
    hamburgerMenu.style.display = "none";
});

function search() {
    const searchContainer = document.querySelector('.search-container');
    const searchInput = document.getElementById('search-input');

    if (searchContainer.classList.contains('active')) {
        alert(`Searching for: ${searchInput.value}`);
        searchInput.value = '';
    } else {
        searchContainer.classList.add('active');
        searchInput.style.display = 'block';
        searchInput.focus();
    }
}
