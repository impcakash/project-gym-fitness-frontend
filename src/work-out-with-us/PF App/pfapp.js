
// Function to open the modal and play the video
function openModal() {
  document.getElementById('videoModal').style.display = 'flex';
  const youtubeVideo = document.getElementById('youtubeVideo');
  youtubeVideo.src = "https://www.youtube.com/embed/3GId41JJTss?autoplay=1";
}

// Function to close the modal and stop the video
function closeModal() {
  document.getElementById('videoModal').style.display = 'none';
  const youtubeVideo = document.getElementById('youtubeVideo');
  youtubeVideo.src = ""; // Clear src to stop the video
  youtubeVideo.src = "https://www.youtube.com/embed/3GId41JJTss";
}
document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
    const faqItem = question.parentElement;
    const isActive = faqItem.classList.contains('active');

    // Close all other FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
      item.classList.remove('active');
    });

    // Toggle the clicked item
    if (!isActive) {
      faqItem.classList.add('active');
    }
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
