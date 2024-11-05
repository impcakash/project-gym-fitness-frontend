
// Get the button and the dropdown menu
const dropdownToggle = document.querySelector('.dropdown-toggle');
const dropdownMenu = document.querySelector('.dropdown-menu');

// Toggle dropdown visibility on button click
dropdownToggle.addEventListener('click', (event) => {
  event.stopPropagation(); 
  const isVisible = dropdownMenu.style.display === 'block';
  dropdownMenu.style.display = isVisible ? 'none' : 'block';
});

// Close the dropdown when clicking outside of it
window.addEventListener('click', () => {
  dropdownMenu.style.display = 'none';
});

//................images dropdown -1....................

function toggleDropdown(index) {
  const content = document.getElementById(`dropdown-content-${index}`);
  const icon = document.getElementById(`toggle-icon-${index}`);

  const isHidden = window.getComputedStyle(content).display === "none";
  if (isHidden) {
    content.style.display = "block";
    icon.textContent = "▲";
  } else {
    content.style.display = "none";
    icon.textContent = "▼";
  }
}


function toggleDropdown(id) {
  const content = document.getElementById(`dropdown-content-${id}`);
  const icon = document.getElementById(`toggle-icon-${id}`);
  
  // Toggle the 'open' class
  content.classList.toggle("open");
  
  // Update the toggle icon
  icon.textContent = content.classList.contains("open") ? "▲" : "▼";
}
// ................  compare


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
     


function toggleAnswer(element) {
    const faqItem = element.parentElement;
    faqItem.classList.toggle('active');
  }
  
// hide comarison

  document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.querySelector(".toggle-comparison-btn"); 
    const comparisonTable = document.querySelector(".comparison-table"); 

    toggleButton.addEventListener("click", function() {
        if (comparisonTable.style.display === "none") {
            comparisonTable.style.display = "block";
            toggleButton.textContent = "Hide Comparison Chart";
        } else {
            comparisonTable.style.display = "none";
            toggleButton.textContent = "Show Comparison Chart";
        }
    });
});

// find a club
document.getElementById("searchButton").addEventListener("click", function() {
    const searchQuery = document.getElementById("searchInput").value;
    if (searchQuery) {
        window.location.href = `join.html?query=${encodeURIComponent(searchQuery)}`;
    } else {
        alert("Please enter a search query.");
    }
});
