function myMove() {
    const animateBox = document.getElementById('animate'); // Get the red box
    const container = document.getElementById('container'); // Get the yellow container
    
    let position = 0; // Starting position (left side)
    
    // Container width minus box width = maximum position
    const maxPosition = container.offsetWidth - animateBox.offsetWidth; // 400 - 50 = 350px
    
    // Set interval to move box every 1 millisecond
    const intervalId = setInterval(function() {
        if (position >= maxPosition) {
            // Reached the end, stop moving
            clearInterval(intervalId);
        } else {
            // Move box 1px to the right
            position++;
            animateBox.style.left = position + 'px'; // Update left position
        }
    }, 1); // Run every 1 millisecond
}