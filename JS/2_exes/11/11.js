const input = document.getElementById('letterInput');

// Option 1: Use 'input' event (fires after every change)
input.addEventListener('input', function() {
    input.value = input.value.replace(/[^a-zA-Z]/g, '');
});
