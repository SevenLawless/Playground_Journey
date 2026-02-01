let button = document.getElementById('myButton');


button.addEventListener('click', function(e) {
    console.log('Event type:', e.type);         // "click" (type of event)
    console.log('Element clicked:', e.target);       // The button element (what was clicked)
    console.log('Button text:', e.target.innerHTML);
    console.log(e.target.id);    // The button's ID
    console.log(e.clientX);      // Mouse X position
    console.log(e.clientY);      // Mouse Y position
});

