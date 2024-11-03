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
  
  
  
  
  
  
  