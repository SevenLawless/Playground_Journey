const myForm = document.getElementById('MyForm');

myForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const radiusInput = document.getElementById('radius');
    const radius = parseFloat(radiusInput.value);
    
    const volume = (4/3) * Math.PI * Math.pow(radius, 3);
    
    const volumeInput = document.getElementById('volume');
    volumeInput.value = volume.toFixed(2);
});