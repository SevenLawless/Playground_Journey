// ==========================================
// CUSTOM DOM PRACTICE EXERCISES
// Focus: DOM Manipulation, Creating Elements, Attention to Detail
// ==========================================

// IMPORTANT RULES:
// 1. NO COPILOT! Turn it off completely.
// 2. Write ALL code yourself, even if it takes hours.
// 3. Test in the browser to see if it works.
// 4. If stuck for more than 30 minutes, take a break and come back.
// 5. DO NOT look at solutions until you've tried everything.


//----------------------EXERCISE 1: Simple DOM Selection----------------------
/*
HTML:
<div id="container">
    <h1 class="title">Welcome</h1>
    <p class="text">First paragraph</p>
    <p class="text">Second paragraph</p>
    <p class="text">Third paragraph</p>
</div>

Tasks:
1. Get the div with id "container" and store it in a variable called 'container'
2. Get the h1 element and change its text to "Hello World"
3. Get ALL paragraphs with class "text" and store them in a variable called 'paragraphs'
4. Loop through all paragraphs and change each one's text to "Updated text"
5. Change the first paragraph's color to red
6. Change the last paragraph's font size to 20px

Test: All paragraphs should say "Updated text", first one red, last one bigger.
*/

// YOUR CODE HERE:






//----------------------EXERCISE 2: Creating Elements----------------------
/*
HTML:
<ul id="shopping-list">
    <li>Milk</li>
    <li>Bread</li>
</ul>

Tasks:
1. Get the ul element with id "shopping-list"
2. Create a NEW <li> element
3. Set the text of the new <li> to "Eggs"
4. Add the new <li> to the ul (it should be the 3rd item)
5. Create ANOTHER new <li> with text "Butter"
6. Add this one to the ul too (should be 4th item)

Test: The list should now have: Milk, Bread, Eggs, Butter
*/

// YOUR CODE HERE:






//----------------------EXERCISE 3: Removing Elements----------------------
/*
HTML:
<div id="todo-container">
    <p class="todo">Buy groceries</p>
    <p class="todo">Study JavaScript</p>
    <p class="todo">Go to gym</p>
    <p class="todo">Call mom</p>
</div>

Tasks:
1. Get all elements with class "todo"
2. Remove the SECOND todo item (Study JavaScript)
3. Remove the LAST todo item (Call mom)

HINT: To remove an element, you need its parent:
      parentElement.removeChild(childElement)

Test: Only "Buy groceries" and "Go to gym" should remain
*/

// YOUR CODE HERE:






//----------------------EXERCISE 4: Working with Classes----------------------
/*
HTML:
<style>
    .highlight { background-color: yellow; }
    .bold { font-weight: bold; }
    .large { font-size: 24px; }
</style>

<div id="box">
    <p id="text1">First text</p>
    <p id="text2" class="highlight">Second text</p>
    <p id="text3">Third text</p>
</div>

Tasks:
1. Add the "highlight" class to the first paragraph
2. Add BOTH "bold" AND "large" classes to the third paragraph
3. Remove the "highlight" class from the second paragraph
4. Check if the first paragraph has the "highlight" class (should return true)
5. Toggle the "bold" class on the second paragraph (add it if not there)

Test: 
- First paragraph: yellow background
- Second paragraph: bold text
- Third paragraph: bold and large
*/

// YOUR CODE HERE:






//----------------------EXERCISE 5: Changing Styles----------------------
/*
HTML:
<div id="card">
    <h2 id="card-title">Product Name</h2>
    <p id="card-price">$99.99</p>
    <button id="buy-btn">Buy Now</button>
</div>

Tasks:
1. Change the card's background color to "lightgray"
2. Add padding of "20px" to the card
3. Change the title's color to "darkblue"
4. Change the title's font size to "24px"
5. Change the button's background color to "green"
6. Change the button's color (text color) to "white"
7. Add a border to the button: "2px solid black"

REMEMBER: Use camelCase for CSS properties!
(background-color → backgroundColor)

Test: Card should be styled nicely with colored button
*/

// YOUR CODE HERE:






//----------------------EXERCISE 6: Attributes----------------------
/*
HTML:
<div id="profile">
    <img id="avatar" src="old-image.jpg" alt="Profile">
    <a id="website" href="https://old-site.com">Visit Website</a>
</div>

Tasks:
1. Get the img element
2. Change its "src" attribute to "new-image.jpg"
3. Change its "alt" attribute to "New Profile Picture"
4. Get the link (a) element
5. Change its "href" attribute to "https://new-site.com"
6. Add a "target" attribute with value "_blank" (opens in new tab)
7. Check if the link has a "title" attribute (should return false)

Test: Image src should be "new-image.jpg", link should open new tab
*/

// YOUR CODE HERE:






//----------------------EXERCISE 7: Forms and Inputs----------------------
/*
HTML:
<form id="login-form">
    <input type="text" id="username" name="username" value="">
    <input type="password" id="password" name="password" value="">
    <input type="checkbox" id="remember" name="remember">
    <button type="submit">Login</button>
</form>

Tasks:
1. Get the form element using document.forms
2. Get the username input using form.elements
3. Set the username input's value to "testuser"
4. Get the password input
5. Set the password input's value to "secret123"
6. Get the checkbox
7. Set the checkbox to checked (checked = true)
8. Get the username value and console.log it (should show "testuser")

Test: Form should be pre-filled with testuser, secret123, and checkbox checked
*/

// YOUR CODE HERE:






//----------------------EXERCISE 8: Select Dropdown----------------------
/*
HTML:
<select id="country">
    <option value="usa">United States</option>
    <option value="uk">United Kingdom</option>
    <option value="france">France</option>
    <option value="germany">Germany</option>
</select>

Tasks:
1. Get the select element
2. Set the selected value to "france" (use dropdown.value)
3. Console.log the selected value (should show "france")
4. Console.log the selectedIndex (should show 2)
5. Create a NEW option element
6. Set its value to "spain" and text to "Spain"
7. Add this new option to the dropdown

Test: France should be selected, and Spain should appear in the list
*/

// YOUR CODE HERE:






//----------------------EXERCISE 9: Navigation (Parent, Children, Siblings)----------------------
/*
HTML:
<div id="container">
    <h1 id="title">Header</h1>
    <p id="para1">First paragraph</p>
    <p id="para2">Second paragraph</p>
    <p id="para3">Third paragraph</p>
</div>

Starting from the SECOND paragraph (#para2):

Tasks:
1. Get the second paragraph element
2. Get its parent element and console.log the parent's id (should show "container")
3. Get its previous sibling and change its text to "I am first!"
4. Get its next sibling and change its text to "I am third!"
5. Get the parent's first child and change its text to "I am the header!"

Test: 
- para1 should say "I am first!"
- para3 should say "I am third!"
- h1 should say "I am the header!"
*/

// YOUR CODE HERE:






//----------------------EXERCISE 10: Building a Card from Scratch----------------------
/*
HTML:
<div id="cards-container"></div>

Tasks:
Create this structure using ONLY JavaScript:

<div id="cards-container">
    <div class="card">
        <h3>Card Title</h3>
        <p>Card description goes here.</p>
        <button>Learn More</button>
    </div>
</div>

Steps:
1. Get the cards-container div
2. Create a new div element for the card
3. Add class "card" to it
4. Create an h3 element with text "Card Title"
5. Create a p element with text "Card description goes here."
6. Create a button element with text "Learn More"
7. Append h3, p, and button to the card div
8. Append the card div to the cards-container

BONUS: Create 3 different cards with different titles and descriptions

Test: You should see a card with title, description, and button
*/

// YOUR CODE HERE:






//----------------------EXERCISE 11: Todo List App (Mini Project)----------------------
/*
HTML:
<div id="todo-app">
    <h1>My Todo List</h1>
    <input type="text" id="todo-input" placeholder="Enter a task">
    <button id="add-btn">Add Task</button>
    <ul id="todo-list"></ul>
</div>

Tasks:
Create a simple todo app that:

1. When you click "Add Task" button:
   - Get the value from the input
   - Create a new <li> element
   - Set the <li>'s text to the input value
   - Add the <li> to the <ul>
   - Clear the input field

HINT: You'll need addEventListener("click", function)

BONUS: Add a delete button to each todo item

Test: Type a task, click Add, it should appear in the list
*/

// YOUR CODE HERE:






//----------------------EXERCISE 12: Image Gallery----------------------
/*
HTML:
<div id="gallery"></div>

Tasks:
Create an image gallery with 4 images.

Data:
const images = [
    { src: "image1.jpg", alt: "Nature" },
    { src: "image2.jpg", alt: "City" },
    { src: "image3.jpg", alt: "Food" },
    { src: "image4.jpg", alt: "People" }
];

Steps:
1. Get the gallery div
2. Loop through the images array
3. For each image object:
   - Create an img element
   - Set its src to the image's src
   - Set its alt to the image's alt
   - Set its width to "200px" using style
   - Add it to the gallery div

Test: 4 images should appear in the gallery
*/

// YOUR CODE HERE:






//----------------------EXERCISE 13: Form Validation----------------------
/*
HTML:
<form id="signup-form">
    <input type="text" id="name" placeholder="Name">
    <input type="email" id="email" placeholder="Email">
    <input type="password" id="password" placeholder="Password">
    <button type="submit">Sign Up</button>
    <p id="error-message" style="color: red;"></p>
</form>

Tasks:
Validate the form when submitted:

1. Prevent the default form submission (event.preventDefault())
2. Get all input values
3. Check if name is empty - if yes, show error "Name is required"
4. Check if email is empty - if yes, show error "Email is required"
5. Check if password is less than 6 characters - if yes, show error "Password too short"
6. If all valid, show "Form submitted successfully!"

HINT: Use addEventListener("submit", function(event))
Display errors in the error-message paragraph

Test: Try submitting with empty fields, should show errors
*/

// YOUR CODE HERE:






//----------------------FINAL BOSS EXERCISE: Dynamic Table----------------------
/*
HTML:
<div id="app">
    <h2>Student Grades</h2>
    <table id="grades-table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Grade</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody id="table-body">
        </tbody>
    </table>
</div>

Data:
const students = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 92 },
    { name: "Charlie", grade: 58 },
    { name: "Diana", grade: 73 },
    { name: "Eve", grade: 45 }
];

Tasks:
Create a table that shows:
1. Student name
2. Their grade
3. Status: "Pass" if grade >= 60, "Fail" if grade < 60

For each student:
1. Create a <tr> (table row)
2. Create 3 <td> (table data cells)
3. Fill them with: name, grade, and status
4. If status is "Fail", make the entire row's background red
5. If status is "Pass" and grade >= 90, make background green
6. Otherwise, make background white
7. Append the row to the table body

Test: Table should show all students with colored rows based on grades
*/

// YOUR CODE HERE:






//===========================================
// CONGRATULATIONS! 🎉
// If you completed all these, you're a DOM master!
// Send this file back for review.
//===========================================
