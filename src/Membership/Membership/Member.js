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
   
     
    //  pf black card

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
  
  
  // ..........
  function toggleDropdown(id) {
    const content = document.getElementById(`dropdown-content-${id}`);
    const icon = document.getElementById(`toggle-icon-${id}`);
    
    // Toggle the 'open' class
    content.classList.toggle("open");
    
    // Update the toggle icon
    icon.textContent = content.classList.contains("open") ? "▲" : "▼";
  }


  function toggleDrop(id) {
    const content1 = document.getElementById(`dropdown-content1-${id}`);
    const iconn = document.getElementById(`toggle-iconn-${id}`);
    if (content1.classList.contains('open')) {
      content1.classList.remove('open');
      iconn.textContent1 = '▼';
    } else {
      content1.classList.add('open');
      iconn.textContent1 = '▲';
    }
  }
  
  // pf classic
  
function toggleDrop3(id) {
  const contentt = document.getElementById(`dropdown-contentt-${id}`);
  const iconnn = document.getElementById(`toggle-iconnn-${id}`);

  // Toggle the 'open' class
  contentt.classList.toggle("open");

  // Update the toggle icon
  iconnn.textContent = contentt.classList.contains("open") ? "▲" : "▼";
}


function toggleAnswer(element) {
  const faqItem = element.parentElement;
  faqItem.classList.toggle('active');
}

// hide comarison

document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(".toggle-comparison-btn");
  const comparisonTable = document.querySelector(".comparison-table");

  toggleButton.addEventListener("click", function () {
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
document.getElementById("searchButton").addEventListener("click", function () {
  const searchQuery = document.getElementById("searchInput").value;
  if (searchQuery) {
    // window.location.href = `join.html?query=${encodeURIComponent(searchQuery)}`;
  } else {
    // alert("Please enter a search query.");
  }
});

  
  
  