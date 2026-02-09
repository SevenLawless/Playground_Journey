function myMove() {
    const animateBox = document.getElementById('animate');
    const container = document.getElementById('container');
    
    let position = 0;
    
    // i dont understand this line
    const maxPosition = container.offsetWidth - animateBox.offsetWidth;
    

    const intervalId = setInterval(function() {
        if (position >= maxPosition) {
            clearInterval(intervalId);
        } else {
            position++;
            animateBox.style.left = position + 'px';
        }
    }, 1);
}