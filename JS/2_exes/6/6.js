setTimeout(function() {
    alert('Hello World');
}, 2000);

setTimeout(function() {
    const container = document.getElementById('container');
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'Hello World';
    container.appendChild(newParagraph);
}, 2000);


const container = document.getElementById('container');
const clearButton = document.getElementById('clear');

const intervalId = setInterval(function() {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'Hello World';
    container.appendChild(newParagraph);
    
    const paragraphCount = container.querySelectorAll('p').length;
    
    if (paragraphCount >= 5) {
        clearInterval(intervalId);
        console.log('Interval cleared - reached 5 paragraphs');
    }
}, 2000);


clearButton.addEventListener('click', function() {
    clearInterval(intervalId);
    console.log('Interval cleared by button click');
});