let shoppingList = [];

const root = document.getElementById('root');


const form = document.createElement('form');

const input = document.createElement('input');
input.type = 'text';
input.id = 'itemInput';
input.placeholder = 'Enter item...';

const addButton = document.createElement('button');
addButton.textContent = 'AddItem';
addButton.type = 'button';

form.appendChild(input);
form.appendChild(addButton);


const clearButton = document.createElement('button');
clearButton.textContent = 'ClearAll';
clearButton.type = 'button';

const listDisplay = document.createElement('ul');
listDisplay.id = 'listDisplay';

root.appendChild(form);
root.appendChild(clearButton);
root.appendChild(listDisplay);

function addItem() {
    const itemValue = input.value.trim();
    
    if (itemValue !== '') {
        shoppingList.push(itemValue);
        
        const li = document.createElement('li');
        li.textContent = itemValue;
        listDisplay.appendChild(li);
        
        input.value = '';
        console.log(shoppingList);
    }
}

function clearAll() {
    shoppingList = [];
    listDisplay.innerHTML = '';
    console.log('List cleared:', shoppingList);
}

addButton.addEventListener('click', addItem);
clearButton.addEventListener('click', clearAll);

// // Bonus: Allow pressing Enter to add item
// input.addEventListener('keypress', function(event) {
//     if (event.key === 'Enter') {
//         event.preventDefault(); // Prevent form submission
//         addItem();
//     }
// });