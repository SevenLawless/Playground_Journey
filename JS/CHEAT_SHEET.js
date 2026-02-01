// ==========================================
// JAVASCRIPT QUICK REFERENCE CHEAT SHEET
// ==========================================

// ========== VARIABLES ==========
let myVar = 5;              // Can be changed
const myConst = 10;         // Cannot be changed (constant)
myVar = 20;                 // OK
// myConst = 30;            // ERROR

// Always use const by default, use let only when you need to reassign


// ========== DATA TYPES ==========
let userName = "Awdi";      // String
let userAge = 25;           // Number
let isActive = true;        // Boolean
let empty = null;           // Null (intentionally empty)
let notSet;                 // Undefined (not assigned)

typeof(userName);           // "string"


// ========== OPERATORS ==========
5 + 3;                      // 8 (addition)
5 - 3;                      // 2 (subtraction)
5 * 3;                      // 15 (multiplication)
10 / 2;                     // 5 (division)
10 % 3;                     // 1 (remainder/modulus)

let count = 10;
count += 5;                 // count = count + 5
count -= 2;                 // count = count - 2
count++;                    // count = count + 1
count--;                    // count = count - 1

5 === "5";                  // false (strict equality - USE THIS)
5 !== "5";                  // true (strict inequality)
5 > 3;                      // true (greater than)
5 >= 5;                     // true (greater or equal)
5 < 10;                     // true (less than)
5 <= 5;                     // true (less or equal)


// ========== STRINGS ==========
let text = "  Hello World  ";

text.length;                        // 15 (number of characters)
text[0];                            // "H" (first character)
text.charAt(0);                     // "H" (same as text[0])
text.indexOf("World");              // 8 (position, -1 if not found)
text.substring(0, 5);               // "  Hel" (from 0 to 5, excluding 5)
text.toLowerCase();                 // "  hello world  "
text.toUpperCase();                 // "  HELLO WORLD  "
text.trim();                        // "Hello World" (remove spaces from ends)
text.replace("World", "JS");        // "  Hello JS  " (first match only)
text.replaceAll("l", "L");          // "  HeLLo WorLd  " (all matches)

// Padding (adding characters to make a specific length)
"hi".padEnd(5);                     // "hi   " (adds 3 spaces at end)
"hi".padEnd(5, ".");                // "hi..." (adds dots instead of spaces)
"5".padStart(3, "0");               // "005" (adds zeros at start)

// Repeat
"*".repeat(5);                      // "*****" (repeats 5 times)
"Ha".repeat(3);                     // "HaHaHa"

"Hi" + " " + "there";               // "Hi there" (concatenation)

// Split string into array
"apple,banana,orange".split(",");   // ["apple", "banana", "orange"]
"Hello World".split(" ");           // ["Hello", "World"]
"Hi".split("");                     // ["H", "i"] (splits each character)

// Common pattern: get input and split
// let input = prompt("Enter words separated by commas:");
// let words = input.split(", ");  // "apple, banana" → ["apple", "banana"]

// Template literals (modern way - use backticks)
let fullName = "Awdi";
let points = 100;
let message = `${fullName} scored ${points} points!`;
// Output: "Awdi scored 100 points!"


// ========== NUMBERS ==========
let decimal = 10.6789;

decimal.toString();                 // "10.6789" (convert to string)
decimal.toFixed(2);                 // "10.68" (round to 2 decimals)
decimal.toFixed(0);                 // "11" (round to integer)
isNaN("hello");                     // true (not a number)
isNaN(123);                         // false (is a number)

// Math methods
Math.max(1, 5, 3);                  // 5 (maximum value)
Math.min(1, 5, 3);                  // 1 (minimum value)

// Find max in array using spread operator
let nums = [1, 5, 3, 9, 2];
Math.max(...nums);                  // 9
// The spread operator (...) unpacks the array
// Math.max(...[1, 5, 3]) becomes Math.max(1, 5, 3)


// ========== USER INTERACTION ==========
console.log("Hello");                       // Print to console
alert("Hello!");                            // Show popup message
let userInput = prompt("Your name?");       // Get input (returns string)
let confirmed = confirm("Are you sure?");   // Yes/No dialog (returns true/false)


// ========== DATES ==========
// Create dates
let now = new Date();                               // Current date and time
let specificDate = new Date(2024, 0, 15);          // January 15, 2024 (month is 0-indexed!)
let fromString = new Date("2024-01-15");           // From string

// Get date parts
now.getFullYear();                                  // 2024 (4-digit year)
now.getMonth();                                     // 0-11 (0=January, 11=December)
now.getDate();                                      // 1-31 (day of month)
now.getDay();                                       // 0-6 (0=Sunday, 6=Saturday)

// Important: getDay() returns 0 for Sunday!
// To make Monday = 1, use: if (day === 0) day = 7;

// Get number of days in a month
let daysInMonth = new Date(2024, 2, 0).getDate();  // Last day of Feb 2024 → 29
// Trick: Day 0 of next month = last day of current month

// Example: Check what day of week a date falls on
let date = new Date(2024, 8, 1);                   // September 1, 2024
let dayOfWeek = date.getDay();                      // 0=Sunday, 1=Monday, etc.


// ========== ARRAYS ==========
let fruits = ["apple", "banana", "orange"];

// Access elements
fruits[0];                          // "apple" (first element, index 0)
fruits[2];                          // "orange" (third element)
fruits[fruits.length - 1];          // "orange" (last element)
fruits.length;                      // 3 (number of items)

// Modify elements
fruits[0] = "grape";                // Change first element

// Add/Remove from END
fruits.push("mango");               // Add to end
fruits.pop();                       // Remove from end (returns removed item)

// Add/Remove from BEGINNING
fruits.unshift("kiwi");             // Add to beginning
fruits.shift();                     // Remove from beginning (returns removed item)

// Add/Remove from MIDDLE
fruits.splice(1, 1, "cherry");      // At index 1: remove 1 item, add "cherry"
fruits.splice(2, 0, "peach");       // At index 2: remove 0, add "peach"

// Copy portion (doesn't change original)
fruits.slice(0, 2);                 // Copy from index 0 to 2 (excluding 2)
fruits.slice(1);                    // Copy from index 1 to end

// Convert to string
fruits.toString();                  // "apple,banana,orange"
fruits.join(" - ");                 // "apple - banana - orange"
fruits.join("");                    // "applebananaorange"

// Filter array (creates new array with items that pass a test)
let numbers = [1, 5, 10, 15, 20];
let bigNumbers = numbers.filter(num => num > 10);   // [15, 20]

// Filter mixed array to get only numbers
let mixedArr = [1, "hello", 3, null, 5];
let onlyNumbers = mixedArr.filter(item => typeof item === 'number');  // [1, 3, 5]

// Remove duplicates using Set (very common pattern!)
let withDuplicates = [1, 2, 3, 3, 3, 4, 5];
let unique = [...new Set(withDuplicates)];          // [1, 2, 3, 4, 5]
// How it works:
// - new Set(arr) creates a Set (removes duplicates automatically)
// - [...Set] spreads it back into an array


// ========== OBJECTS ==========
let profile = {
  username: "Awdi",
  level: 25,
  location: "Casablanca"
};

// Access properties
profile.username;                   // "Awdi" (dot notation)
profile["username"];                // "Awdi" (bracket notation)

// When property name is in a variable
let propName = "location";
profile[propName];                  // "Casablanca"

// Modify properties
profile.level = 26;                 // Change existing property
profile.country = "Morocco";        // Add new property
delete profile.level;               // Delete property

// Check if property exists
"username" in profile;              // true

// Methods (functions inside objects)
let vehicle = {
  model: "Toyota",
  start() {
    console.log("Engine started");
  }
};
vehicle.start();                    // Call method

// Arrays of objects (very common!)
let players = [
  { username: "player1", score: 100 },
  { username: "player2", score: 85 }
];
players[0].username;                // "player1"

// Nested objects
let gameData = {
  player: "Awdi",
  stats: { health: 100, mana: 50 }
};
gameData.stats.health;              // 100


// ========== CONDITIONALS ==========

// if
if (userAge >= 18) {
  console.log("Adult");
}

// if...else
if (userAge >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

// if...else if...else
let testScore = 85;
if (testScore >= 90) {
  console.log("A");
} else if (testScore >= 80) {
  console.log("B");
} else {
  console.log("C");
}

// Logical operators
let driverAge = 20;
let hasPermit = true;
if (driverAge >= 18 && hasPermit) {          // AND (both must be true)
  console.log("Can drive");
}

if (driverAge < 18 || !hasPermit) {          // OR (at least one true)
  console.log("Cannot drive");
}

if (!isActive) {                             // NOT (reverses true/false)
  console.log("Inactive user");
}

// Ternary operator (shortcut)
let accountStatus = userAge >= 18 ? "Adult account" : "Minor account";

// Ternary with default values (common pattern)
let filtered = arr.filter(item => typeof item === 'number');
let maxNum = filtered.length === 0 ? 0 : Math.max(...filtered);
// If array is empty, return 0, otherwise return max value


// ========== SPREAD OPERATOR (...) ==========
// The spread operator (...) unpacks/expands arrays or objects

// With Arrays:
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

// Combine arrays
let combined = [...arr1, ...arr2];              // [1, 2, 3, 4, 5, 6]

// Copy array (creates a new array)
let copy = [...arr1];                           // [1, 2, 3]

// Add items while copying
let expanded = [0, ...arr1, 4];                 // [0, 1, 2, 3, 4]

// Use with functions
Math.max(...[1, 5, 3]);                         // Same as Math.max(1, 5, 3) → 5
console.log(...arr1);                           // Same as console.log(1, 2, 3)

// With Objects:
let user = { name: "Awdi", age: 25 };

// Copy object
let userCopy = { ...user };                     // { name: "Awdi", age: 25 }

// Combine objects
let location = { city: "Casablanca", country: "Morocco" };
let fullProfile = { ...user, ...location };     // { name: "Awdi", age: 25, city: "Casablanca", country: "Morocco" }

// Override properties
let updated = { ...user, age: 26 };             // { name: "Awdi", age: 26 }


// ========== SWITCH STATEMENTS ==========
// Use when checking ONE variable against MANY values

let weekDay = 3;
switch (weekDay) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Other day");
}

// Multiple cases with same code
let selectedFruit = "Mango";
switch (selectedFruit) {
  case "Orange":
  case "Mango":
  case "Papaya":
    console.log("Tropical fruit");
    break;
  default:
    console.log("Other fruit");
}

// Remember: switch uses strict comparison (===)
// Always use break (except last case)


// ========== LOOPS ==========

// for loop (when you know how many times to loop)
for (let index = 0; index < 5; index++) {
  console.log(index);                       // 0, 1, 2, 3, 4
}

// Loop through array with for
let items = ["a", "b", "c"];
for (let idx = 0; idx < items.length; idx++) {
  console.log(items[idx]);                  // a, b, c
}

// for...in (object properties or array indexes)
let studentData = { name: "John", grade: 90 };
for (let property in studentData) {
  console.log(property + ": " + studentData[property]);
}

// for...of (array values - NOT for objects)
let gameItems = ["sword", "shield", "potion"];
for (let item of gameItems) {
  console.log(item);                        // sword, shield, potion
}

// while loop (when you don't know how many times)
let attempts = 0;
while (attempts < 3) {
  console.log(attempts);                    // 0, 1, 2
  attempts++;
}

// do...while (always runs at least once)
let counter = 0;
do {
  console.log(counter);                     // 0, 1, 2
  counter++;
} while (counter < 3);

// break (exit loop completely)
for (let num = 0; num < 10; num++) {
  if (num === 5) break;
  console.log(num);                         // 0, 1, 2, 3, 4
}

// continue (skip current iteration)
for (let num = 0; num < 5; num++) {
  if (num === 2) continue;
  console.log(num);                         // 0, 1, 3, 4
}


// ========== FUNCTIONS ==========

// Function declaration (classic way)
function greet(name) {
  return "Hello " + name;
}
greet("Awdi");                      // "Hello Awdi"

// Function expression (stored in variable)
const greetUser = function(name) {
  return "Hello " + name;
}
greetUser("Awdi");                  // "Hello Awdi"

// Arrow function (modern ES6 way)
const greetPerson = (name) => {
  return "Hello " + name;
}
greetPerson("Awdi");                // "Hello Awdi"

// Arrow function with implicit return (shorter)
const greetSomeone = (name) => "Hello " + name;
greetSomeone("Awdi");               // "Hello Awdi"

// Single parameter (no parentheses needed)
const double = num => num * 2;
double(5);                          // 10

// No parameters (need empty parentheses)
const sayHi = () => "Hello!";
sayHi();                            // "Hello!"

// Multiple parameters
const add = (a, b) => a + b;
add(5, 3);                          // 8


// === ADVANCED FUNCTION PATTERNS ===

// Pattern 1: Nested Ternary (compact decision making)
const calculator = (num1, num2, op) =>
  op === "+" ? num1 + num2 :
  op === "-" ? num1 - num2 :
  op === "*" ? num1 * num2 :
  op === "/" ? num1 / num2 :
  "Invalid operator";

calculator(10, 5, "+");             // 15
calculator(10, 5, "%");             // "Invalid operator"

// Pattern 2: Object Lookup (elegant & scalable)
const calc = (num1, num2, op) => {
  const operations = {
    "+": num1 + num2,
    "-": num1 - num2,
    "*": num1 * num2,
    "/": num1 / num2
  };
  return operations[op] !== undefined ? operations[op] : "Invalid operator";
}

calc(10, 5, "+");                   // 15
calc(10, 5, "%");                   // "Invalid operator"


// ========== DEBUGGING ==========

// console.log() - Print values to see what's happening
let total = 100;
console.log("Total:", total);               // Total: 100

// Open DevTools: F12 (Windows/Linux), Cmd+Opt+I (Mac)
// Go to "Sources" tab to set breakpoints

// Breakpoint - Click on line number in Sources panel to pause code

// debugger statement - Force pause when DevTools is open
function calculatePrice(price, tax) {
  debugger;  // Code pauses here
  let result = price + tax;
  return result;
}

// Useful debugging checks
console.log(typeof(myVar));                 // Check variable type
console.log(myArray.length);                // Check array length
console.log(myObject);                      // See entire object


// ========== COMMON PATTERNS ==========

// Check if variable exists
if (myVar) {
  console.log("Variable exists");
}

// Default value
let displayName = userName || "Guest";

// Loop through object
Object.keys(profile);                       // ["username", "location", "country"]
Object.values(profile);                     // ["Awdi", "Casablanca", "Morocco"]

for (let key in profile) {
  console.log(key + ": " + profile[key]);
}

// Type checking
typeof(myVar) === "string"                  // Check if string
typeof(myVar) === "number"                  // Check if number
Array.isArray(myVar)                        // Check if array


// ========== DOM (DOCUMENT OBJECT MODEL) ==========

// === SELECTING ELEMENTS ===

// Get ONE element by ID
document.getElementById("myId");                    // Returns single element or null

// Get MULTIPLE elements by class (returns array-like HTMLCollection)
document.getElementsByClassName("myClass");         // Must use [index] to access
document.getElementsByClassName("myClass")[0];      // First element with that class

// Get MULTIPLE elements by tag (returns array-like HTMLCollection)
document.getElementsByTagName("div");               // All <div> elements
document.getElementsByTagName("p")[0];              // First <p> element

// Get FIRST match using CSS selector
document.querySelector(".myClass");                 // First element with class
document.querySelector("#myId");                    // Element with ID
document.querySelector("div > p");                  // First <p> inside <div>

// Get ALL matches using CSS selector (returns NodeList)
document.querySelectorAll(".myClass");              // All elements with class
document.querySelectorAll("p");                     // All <p> elements


// === NAVIGATING THE DOM ===

// Given: <div id="parent"><h1>Title</h1><p id="para">Text</p><span>End</span></div>

let para = document.getElementById("para");

para.parentNode;                    // <div id="parent"> (go UP to parent)
para.parentNode.children;           // [h1, p, span] (all children of parent)
para.parentNode.firstElementChild;  // <h1> (first child of parent)
para.parentNode.lastElementChild;   // <span> (last child of parent)
para.previousElementSibling;        // <h1> (element before this one)
para.nextElementSibling;            // <span> (element after this one)


// === CHANGING CONTENT ===

element.textContent = "New text";                   // Plain text only (safest)
element.innerHTML = "<strong>Bold</strong>";        // HTML content (be careful with user input)

// Example:
let heading = document.getElementById("title");
heading.textContent = "Hello World";                // Changes text
heading.innerHTML = "<em>Hello</em> World";         // Changes to italicized HTML


// === CHANGING STYLES ===

// Inline styles (use camelCase for CSS properties)
element.style.color = "red";
element.style.backgroundColor = "blue";             // CSS: background-color → JS: backgroundColor
element.style.fontSize = "20px";                    // CSS: font-size → JS: fontSize

// Example:
let box = document.querySelector(".box");
box.style.width = "200px";
box.style.height = "200px";
box.style.border = "2px solid black";


// === WORKING WITH CLASSES ===

// className - replaces ALL classes
element.className = "newClass";                     // Overwrites existing classes

// classList - add/remove individual classes (BETTER!)
element.classList.add("highlight");                 // Add single class
element.classList.add("bold", "large");             // Add multiple classes
element.classList.remove("highlight");              // Remove class
element.classList.toggle("active");                 // Add if not there, remove if there
element.classList.contains("active");               // Check if has class (true/false)
element.classList.replace("old", "new");            // Replace one class with another

// Example:
let button = document.querySelector("button");
button.classList.add("btn-primary");                // Add class
button.classList.toggle("disabled");                // Toggle on/off


// === CREATING & ADDING ELEMENTS ===

// Create new element
const newDiv = document.createElement("div");       // Create <div>
const newP = document.createElement("p");           // Create <p>

// Add content
newDiv.textContent = "Hello";                       // Add text
newP.innerHTML = "<strong>Bold</strong>";           // Add HTML

// Add to page
parentElement.appendChild(newDiv);                  // Add as LAST child
parentElement.insertBefore(newDiv, referenceNode);  // Add BEFORE reference element

// Remove element
parentElement.removeChild(childElement);            // Remove specific child

// Example - Add new item to list:
let ul = document.querySelector("ul");
let newLi = document.createElement("li");
newLi.textContent = "New Item";
ul.appendChild(newLi);

// Pattern: Create multiple elements in a loop
// Example - Create planet divs with moon divs inside
let planets = [
  { name: "Earth", moons: 1, color: "blue" },
  { name: "Mars", moons: 2, color: "red" }
];

let container = document.querySelector(".container");

for (let planet of planets) {
  // Create planet div
  let planetDiv = document.createElement("div");
  planetDiv.textContent = planet.name;
  planetDiv.style.backgroundColor = planet.color;
  
  // Create moon divs inside planet
  for (let i = 0; i < planet.moons; i++) {
    let moonDiv = document.createElement("div");
    moonDiv.classList.add("moon");
    planetDiv.appendChild(moonDiv);          // Add moon to planet
  }
  
  container.appendChild(planetDiv);          // Add planet to container
}


// === ATTRIBUTES ===

element.getAttribute("href");                       // Get attribute value
element.setAttribute("href", "https://google.com"); // Set/change attribute
element.removeAttribute("href");                    // Remove attribute completely
element.hasAttribute("href");                       // Check if has attribute (true/false)

// Example:
let link = document.querySelector("a");
console.log(link.getAttribute("href"));             // Get current href
link.setAttribute("target", "_blank");              // Open in new tab
link.setAttribute("class", "external-link");        // Add class via attribute


// === FORMS ===

// Accessing forms
document.forms[0];                                  // First form on page
document.forms[1];                                  // Second form on page
document.forms.myForm;                              // Form with name="myForm"
document.forms["loginForm"];                        // Form with name="loginForm"
document.forms.length;                              // Number of forms on page

// Example HTML:
// <form name="signupForm">
//   <input name="username" value="">
//   <input name="email" value="">
// </form>

let form = document.forms.signupForm;               // Get form by name
let formAlt = document.forms[0];                    // OR get first form


// Accessing form elements
form.elements.username;                             // Get input by name
form.elements[0];                                   // Get first input
form.elements.length;                               // Number of inputs in form

// Example:
let emailInput = form.elements.email;
let firstInput = form.elements[0];


// Getting/Setting input values
input.value;                                        // Get current value
input.value = "new value";                          // Set new value

// Example:
let usernameInput = form.elements.username;
console.log(usernameInput.value);                   // Get value
usernameInput.value = "JohnDoe";                    // Set value


// Checkboxes & Radio Buttons
input.checked;                                      // Get if checked (true/false)
input.checked = true;                               // Check it
input.checked = false;                              // Uncheck it

// Example - Radio buttons:
// <input type="radio" name="age" value="young">
// <input type="radio" name="age" value="old">

let ageForm = document.forms[0];
let radios = ageForm.elements.age;                  // Get all radio buttons with name="age"

for (let radio of radios) {
  if (radio.checked) {
    console.log("Selected: " + radio.value);        // Get selected value
  }
}

radios[0].checked = true;                           // Select first radio button


// === SELECT / DROPDOWN ===

// HTML Example:
// <select id="fruits">
//   <option value="apple">Apple</option>
//   <option value="banana">Banana</option>
//   <option value="orange">Orange</option>
// </select>

let dropdown = document.getElementById("fruits");

// Get selected value
dropdown.value;                                     // "banana" (selected option's value)
dropdown.selectedIndex;                             // 1 (index of selected option, starts at 0)

// Set selected option (3 ways - all do the same thing)
dropdown.value = "banana";                          // Method 1: Set by value
dropdown.selectedIndex = 1;                         // Method 2: Set by index (0=first, 1=second, etc)
dropdown.options[1].selected = true;                // Method 3: Set option.selected

// Get all options
dropdown.options;                                   // HTMLCollection of all <option> elements
dropdown.options.length;                            // Number of options

// Loop through options
for (let i = 0; i < dropdown.options.length; i++) {
  console.log(dropdown.options[i].value);           // apple, banana, orange
}

// Add new option (Method 1)
let newOption = document.createElement("option");
newOption.value = "mango";
newOption.textContent = "Mango";
dropdown.appendChild(newOption);

// Add new option (Method 2 - shortcut)
let option = new Option("Mango", "mango");          // new Option(text, value)
dropdown.add(option);                               // Add to dropdown

// Remove option
dropdown.remove(1);                                 // Remove option at index 1


// Multiple Select (select with "multiple" attribute)
// <select id="colors" multiple>
//   <option value="red">Red</option>
//   <option value="blue">Blue</option>
// </select>

let multiSelect = document.getElementById("colors");

// Get all selected values
let selected = Array.from(multiSelect.options)
  .filter(option => option.selected)
  .map(option => option.value);
console.log(selected);                              // ["red", "blue"] (if both selected)


// === COMMON DOM PATTERNS ===

// Pattern 1: Cache selectors (better performance)
// BAD - searches DOM multiple times:
document.getElementById("menu").style.color = "red";
document.getElementById("menu").style.fontSize = "20px";

// GOOD - searches DOM once:
let menu = document.getElementById("menu");
menu.style.color = "red";
menu.style.fontSize = "20px";


// Pattern 2: Loop through elements
let listItems = document.querySelectorAll(".item");
listItems.forEach(item => {
  console.log(item.textContent);
});

// OR with for loop
for (let i = 0; i < listItems.length; i++) {
  console.log(listItems[i].textContent);
}


// Pattern 3: Check if element exists before using
let element = document.getElementById("myId");
if (element) {
  element.style.color = "red";
} else {
  console.log("Element not found");
}


// === EVENT LISTENERS ===

element.addEventListener("click", () => {
  console.log("Clicked!");
});

element.addEventListener("submit", (event) => {
  event.preventDefault();                           // Prevent form submission
  console.log("Form submitted!");
});

// Common events: click, submit, change, input, keydown, keyup, mouseover, mouseout, focus, blur