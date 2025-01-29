document.addEventListener("DOMContentLoaded", function() {
    fetch('pages/about.html')
        .then(response => response.text())
        .then(data => {
          document.getElementById("content").innerHTML = data;
        })
        .catch(error => console.error('Error loading content:', error));
});