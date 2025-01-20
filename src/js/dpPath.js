document.addEventListener("DOMContentLoaded", function() {
    const path = document.getElementById("myPath2");  
    const arrowUp = document.getElementById('arrowUp');
    const arrowDown = document.getElementById('arrowDown');
    const imageElement  = document.getElementById('myImage');
    const images = [
        "pictures/whiteProf.png",
        "pictures/animatedProf.png",
        "pictures/gradProf.png",
        "pictures/glassProf.png"
    ];


// Midpath Animation
    let ctr = 0;
    let R1x = 1;
    let R2x = 198;  
    function updatePath() {
        if (ctr <= 59.5) {
        R1x += 0.1;
        R2x -= 0.1;
        } else if (ctr <= 119) {
        R1x -= 0.1;
        R2x += 0.1;
        }
        // Reset the counter and positions after 200 iterations
        if (ctr == 119) {
        R1x = 1;
        R2x = 198;
        ctr = 0;
    }
    const pathData = `M ${R1x} 129 L 99 154 L ${R2x} 129 L 99 104 Z`; // Update the path with the new coordinates
    path.setAttribute("d", pathData);
    ctr++;  // Increment the counter
    requestAnimationFrame(updatePath); // Request the next animation frame (smooth and browser optimized)
    }
    requestAnimationFrame(updatePath); // Start the animation
   

//Change Image Function
    let currentIndex = 0;   
    function changeImage(direction) {
        if (direction === 'up') {
            currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        } else if (direction === 'down') {
            currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        }
    imageElement.classList.add('hidden');
    // Update the href of the image to rotate the image
    setTimeout(function () {
        imageElement.setAttribute('href', images[currentIndex]); // Change the image source
        imageElement.classList.remove('hidden');// Fade the image in again
    }, 1000);
    }
    arrowUp.addEventListener('click', function() {
        changeImage('up');
    });
    arrowDown.addEventListener('click', function() {
        changeImage('down');
    });

    
});