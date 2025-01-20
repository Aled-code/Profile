// Function to open or close the side nav and move the content
function toggleNav() {
    var sidenav = document.getElementById("sidenav");
    var mainContent = document.getElementById("main-content");
  
    if (sidenav.style.left === "0px") {
      sidenav.style.left = "-100%"; // Close the side nav
      mainContent.style.marginLeft = "0"; // Move content back
    } else {
      sidenav.style.left = "0"; // Open the side nav
      mainContent.style.marginLeft = "180px"; // Move content to the right
    }
  }
  