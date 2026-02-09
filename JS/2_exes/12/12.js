const controlsDiv = document.getElementById('controls');
const canvasDiv = document.getElementById('canvas');

const clearButton = document.createElement('button');
clearButton.id = 'clearButton';
clearButton.textContent = 'Clear Canvas';
controlsDiv.appendChild(clearButton);

const colorPalette = document.createElement('div');
colorPalette.id = 'colorPalette';
controlsDiv.appendChild(colorPalette);

const colors = [
  '#000000',
  '#FF0000',
  '#00FF00',
  '#0000FF',
  '#FFFF00',
  '#FF00FF',
  '#00FFFF',
  '#FFA500',
  '#800080',
  '#FFC0CB',
  '#A52A2A',
  '#808080',
  '#FFD700',
  '#90EE90',
  '#87CEEB',
  '#8B0000',
  '#006400',
  '#4B0082',
  '#FF4500',
  '#2E8B57',
  '#DAA520' 
];


colors.forEach((color, index) => {
    const colorBox = document.createElement('div');
    colorBox.classList.add('color-box');
    colorBox.style.backgroundColor = color;
    colorBox.dataset.color = color; // Store color in data attribute
    
    if (index === 0) {
        colorBox.classList.add('selected');
    }
    
    colorPalette.appendChild(colorBox);
});


for (let i = 0; i < 450; i++) {
    const square = document.createElement('div');
    square.classList.add('canvas-square');
    canvasDiv.appendChild(square);
}

console.log('UI Created! Now add your drawing logic! 🎨');


let isDrawing = false;  // Track if mouse is pressed
let selectedColor = 'black';  // Track selected color

// When mouse is pressed down
canvas.addEventListener('mousedown', () => {
    isDrawing = true;
});

// When mouse is released
document.addEventListener('mouseup', () => {
    isDrawing = false;
});

// When mouse moves over a square
square.addEventListener('mouseover', () => {
    if (isDrawing) {
        square.style.backgroundColor = selectedColor;
    }
});