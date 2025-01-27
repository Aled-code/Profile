// Function to open or close the side nav and move the content
function toggleSidebar() {
  var sidebar = document.getElementById('sidebar');
  var content = document.getElementById('content');
  sidebar.classList.toggle('minimized');
  content.classList.toggle('minimized');
}
  