const form = document.querySelector('form');
console.log(form);

const fnameInput = document.getElementById('fname');
const lnameInput = document.getElementById('lname');
console.log(fnameInput);
console.log(lnameInput);

const firstnameByName = document.querySelector('input[name="firstname"]');
const lastnameByName = document.querySelector('input[name="lastname"]');
console.log(firstnameByName);
console.log(lastnameByName);

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const fnameValue = fnameInput.value;
    const lnameValue = lnameInput.value;
    
    if (fnameValue !== '' && lnameValue !== '') {
        const ul = document.querySelector('.usersAnswer');
        
        const li1 = document.createElement('li');
        li1.textContent = fnameValue;
        
        const li2 = document.createElement('li');
        li2.textContent = lnameValue;
        
        ul.appendChild(li1);
        ul.appendChild(li2);

        fnameInput.value = '';
        lnameInput.value = '';
    }else{
        console.log("empty");
    }
});