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
     