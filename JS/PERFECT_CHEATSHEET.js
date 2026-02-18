// ==========================================
// JAVASCRIPT PERFECT CHEATSHEET
// BEST PRACTICES ONLY - MODERN ES6+
// ==========================================


// QUICK SEARCH GUIDE:
// Search "VARIABLES" for variable declarations
// Search "STRINGS" for string methods
// Search "ARRAYS" for array methods
// Search "OBJECTS" for object manipulation
// Search "FUNCTIONS" for all function types
// Search "LOOPS" for all loop types
// Search "CONDITIONALS" for if/else/ternary
// Search "SCOPE" for scope rules
// Search "CLOSURES" for closure examples
// Search "EVENTS" for DOM events
// Search "TIMERS" for setTimeout/setInterval


// ==========================================
// SECTION 1: BASICS
// ==========================================

// ========== VARIABLES ==========
// RULE: Use const by default, let only when reassigning
const myConst = 10;         // Cannot be changed (use this!)
let myVar = 5;              // Can be changed
myVar = 20;                 // OK

// NEVER use var (old way, causes bugs)


// ========== DATA TYPES ==========
const userName = "Awdi";    // String
const userAge = 25;         // Number
const isActive = true;      // Boolean
const empty = null;         // Null (intentionally empty)
let notSet;                 // Undefined (not assigned)

typeof(userName);           // "string"


// ========== OPERATORS ==========
// Math
5 + 3;                      // 8 (addition)
5 - 3;                      // 2 (subtraction)
5 * 3;                      // 15 (multiplication)
10 / 2;                     // 5 (division)
10 % 3;                     // 1 (remainder/modulus)

// Shorthand
let count = 10;
count += 5;                 // count = count + 5
count -= 2;                 // count = count - 2
count++;                    // count = count + 1
count--;                    // count = count - 1

// Comparison (ALWAYS use === not ==)
5 === "5";                  // false (strict equality - USE THIS)
5 !== "5";                  // true (strict inequality)
5 > 3;                      // true
5 >= 5;                     // true
5 < 10;                     // true
5 <= 5;                     // true


// ==========================================
// SECTION 2: STRINGS
// ==========================================

// ========== STRINGS - ESSENTIAL ==========
const text = "  Hello World  ";

// Get info
text.length;                        // 15
text[0];                            // "H" (first character)
text.indexOf("World");              // 8 (position, -1 if not found)

// Transform
text.toLowerCase();                 // "  hello world  "
text.toUpperCase();                 // "  HELLO WORLD  "
text.trim();                        // "Hello World" (remove spaces from ends)
text.trimStart();                   // "Hello World   " (remove from start)
text.trimEnd();                     // "   Hello World" (remove from end)

// Replace
text.replace("World", "JS");        // "  Hello JS  " (first match only)
text.replaceAll("l", "L");          // "  HeLLo WorLd  " (all matches)

// Padding (add characters to reach length)
"5".padStart(3, "0");               // "005" (add zeros at start)
"Hi".padEnd(5, ".");                // "Hi..." (add dots at end)

// Repeat
"*".repeat(5);                      // "*****"

// Split (convert string to array)
"apple,banana,orange".split(",");   // ["apple", "banana", "orange"]
"Hello World".split(" ");           // ["Hello", "World"]

// Template Literals (MODERN WAY - use this!)
const name = "Awdi";
const points = 100;
const message = `${name} scored ${points} points!`;
// "Awdi scored 100 points!"

// Multi-line strings
const multiLine = `
  Line 1
  Line 2
  Line 3
`;


// ==========================================
// SECTION 3: NUMBERS
// ==========================================

// ========== NUMBERS ==========
const decimal = 10.6789;

decimal.toString();                 // "10.6789" (convert to string)
decimal.toFixed(2);                 // "10.68" (round to 2 decimals)
isNaN("hello");                     // true (not a number)
isNaN(123);                         // false (is a number)

// Math methods
Math.max(1, 5, 3);                  // 5
Math.min(1, 5, 3);                  // 1
Math.round(4.7);                    // 5
Math.floor(4.7);                    // 4
Math.ceil(4.1);                     // 5
Math.random();                      // Random number 0-1


// ==========================================
// SECTION 4: ARRAYS
// ==========================================

// ========== ARRAYS - ESSENTIAL ==========
const fruits = ["apple", "banana", "orange"];

// Access
fruits[0];                          // "apple" (first element)
fruits[fruits.length - 1];          // "orange" (last element)
fruits.length;                      // 3

// Add/Remove
fruits.push("mango");               // Add to end
fruits.pop();                       // Remove from end
fruits.unshift("kiwi");             // Add to beginning
fruits.shift();                     // Remove from beginning

// Copy
const copy = [...fruits];           // Copy array (modern way)
const portion = fruits.slice(0, 2); // Copy portion (0 to 2, excluding 2)

// Check
fruits.includes("banana");          // true (check if exists)
fruits.indexOf("banana");           // 1 (get index, -1 if not found)

// Join
fruits.join(", ");                  // "apple, banana, orange"


// ========== ARRAYS - ADVANCED (MOST IMPORTANT!) ==========
const numbers = [1, 5, 10, 15, 20];

// map() - Transform each element, return NEW array
numbers.map(num => num * 2);        // [2, 10, 20, 30, 40]

// filter() - Keep elements that pass test, return NEW array
numbers.filter(num => num > 10);    // [15, 20]

// find() - Get FIRST element that passes test
numbers.find(num => num > 10);      // 15

// forEach() - Loop through (doesn't return anything)
numbers.forEach(num => console.log(num));

// reduce() - Reduce to single value
numbers.reduce((sum, num) => sum + num, 0);  // 51 (sum of all)

// some() - Check if ANY element passes test
numbers.some(num => num > 15);      // true

// every() - Check if ALL elements pass test
numbers.every(num => num > 0);      // true

// sort() - Sort array (MUTATES original!)
const sorted = [...numbers].sort((a, b) => a - b);  // [1, 5, 10, 15, 20]

// flat() - Flatten nested arrays
[1, [2, [3]]].flat(2);              // [1, 2, 3]

// Remove duplicates (COMMON PATTERN!)
const withDupes = [1, 2, 2, 3, 3, 3];
const unique = [...new Set(withDupes)];  // [1, 2, 3]


// ==========================================
// SECTION 5: OBJECTS
// ==========================================

// ========== OBJECTS - BASICS ==========
// Creating objects
const user = {
  name: "John",
  age: 30,
  city: "NYC"
};

// Accessing properties
user.name;                          // "John" (dot notation - use when possible)
user["name"];                       // "John" (bracket notation - use for variables)

// With variable
const prop = "age";
user[prop];                         // 30 (must use bracket notation!)

// Modifying
user.age = 31;                      // Change value
user.country = "USA";               // Add new property
delete user.city;                   // Remove property

// Check if property exists
"name" in user;                     // true
user.hasOwnProperty("name");        // true


// ========== OBJECTS - ADVANCED ==========

// Property shorthand (ES6)
const name = "John";
const age = 30;
const person = { name, age };       // { name: "John", age: 30 }

// Computed properties
const key = "firstName";
const obj = { [key]: "John" };      // { firstName: "John" }

// Spread operator (copy/merge)
const user1 = { name: "John" };
const user2 = { ...user1 };         // Copy
const merged = { ...user1, age: 30 };  // Merge


// ========== OBJECTS - LOOPING ==========
const person = { name: "John", age: 30, city: "NYC" };

// for...in - Loop through keys
for (let key in person) {
  console.log(key, person[key]);
}

// Object.keys() - Get array of keys
Object.keys(person);                // ["name", "age", "city"]

// Object.values() - Get array of values
Object.values(person);              // ["John", 30, "NYC"]

// Object.entries() - Get array of [key, value] pairs
Object.entries(person);             // [["name", "John"], ["age", 30], ["city", "NYC"]]

// Loop through entries
Object.entries(person).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});


// ==========================================
// SECTION 6: FUNCTIONS
// ==========================================

// ========== FUNCTIONS - MODERN WAY (Arrow Functions) ==========
// RULE: Use arrow functions by default (they're modern and clean)

// Multiple parameters
const add = (a, b) => a + b;        // Implicit return (one line)

// Single parameter (parentheses optional)
const double = x => x * 2;

// No parameters (parentheses required)
const greet = () => "Hello!";

// Multiple statements (need braces + return)
const calculate = (a, b) => {
  const sum = a + b;
  const product = a * b;
  return { sum, product };
};

// Returning object (wrap in parentheses!)
const makePerson = (name, age) => ({ name, age });


// ========== FUNCTIONS - When to Use Regular Functions ==========
// Use regular functions ONLY for:
// 1. Object methods (when you need 'this')
// 2. Event handlers (when you need 'this')

const obj = {
  name: "John",
  greet: function() {
    console.log(`Hi, I'm ${this.name}`);  // 'this' works here
  }
};


// ========== FUNCTIONS - Default Parameters ==========
const greet = (name = "Guest") => `Hello, ${name}!`;

greet("John");                      // "Hello, John!"
greet();                            // "Hello, Guest!"


// ========== FUNCTIONS - Rest Parameters ==========
const sum = (...numbers) => {
  return numbers.reduce((total, num) => total + num, 0);
};

sum(1, 2, 3);                       // 6
sum(5, 10, 15, 20);                 // 50


// ==========================================
// SECTION 7: CONDITIONALS
// ==========================================

// ========== CONDITIONALS ==========
const age = 20;

// if/else
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

// if/else if/else
if (age < 13) {
  console.log("Child");
} else if (age < 18) {
  console.log("Teen");
} else {
  console.log("Adult");
}

// Logical operators
const hasLicense = true;
if (age >= 18 && hasLicense) {      // AND (both must be true)
  console.log("Can drive");
}

if (age < 18 || !hasLicense) {      // OR (at least one true)
  console.log("Cannot drive");
}

// Ternary operator (short if/else)
const status = age >= 18 ? "Adult" : "Minor";

// Nullish coalescing (use default if null/undefined)
const name = null;
const displayName = name ?? "Guest";  // "Guest"


// ==========================================
// SECTION 8: LOOPS
// ==========================================

// ========== LOOPS - MODERN WAY ==========
// RULE: Use for...of for arrays, for...in for objects

const fruits = ["apple", "banana", "orange"];

// for...of - Loop through ARRAY values (BEST for arrays)
for (let fruit of fruits) {
  console.log(fruit);               // apple, banana, orange
}

// for - Traditional (use when you need index)
for (let i = 0; i < fruits.length; i++) {
  console.log(i, fruits[i]);
}

// forEach() - Array method (good for side effects)
fruits.forEach(fruit => console.log(fruit));

// for...in - Loop through OBJECT keys (BEST for objects)
const person = { name: "John", age: 30 };
for (let key in person) {
  console.log(key, person[key]);    // name John, age 30
}

// while - Loop while condition is true
let count = 0;
while (count < 3) {
  console.log(count);
  count++;
}

// break - Exit loop
for (let i = 0; i < 10; i++) {
  if (i === 5) break;               // Stop at 5
  console.log(i);                   // 0, 1, 2, 3, 4
}

// continue - Skip to next iteration
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;            // Skip 2
  console.log(i);                   // 0, 1, 3, 4
}


// ==========================================
// SECTION 9: SCOPE
// ==========================================

// ========== SCOPE ==========

// Global scope - accessible everywhere
const globalVar = "I'm global";

// Function scope - only inside function
function myFunction() {
  const localVar = "I'm local";
  console.log(globalVar);           // ✅ Can access global
  console.log(localVar);            // ✅ Can access local
}

console.log(globalVar);             // ✅ Can access global
// console.log(localVar);           // ❌ Error! Can't access local

// Block scope - only inside { }
if (true) {
  const blockVar = "I'm in block";
  console.log(blockVar);            // ✅ Works inside block
}
// console.log(blockVar);           // ❌ Error! Can't access outside block

// RULE: Inner scopes can access outer, but NOT vice versa
function outer() {
  const x = 10;
  
  function inner() {
    console.log(x);                 // ✅ Can access x from outer
  }
  
  inner();
  // Can't access inner's variables here
}


// ==========================================
// SECTION 10: CLOSURES (ADVANCED!)
// ==========================================

// ========== CLOSURES ==========
// Closure = Inner function "remembers" outer function's variables
// even AFTER outer function has finished executing

// Basic example
function outer() {
  let count = 0;                    // This variable gets "captured"
  
  return function inner() {
    count++;
    return count;
  };
}

const counter = outer();            // outer() finishes and exits
counter();                          // 1 (but count is still alive!)
counter();                          // 2
counter();                          // 3

// WHY? inner "closed over" count - it has a reference to it!


// Practical Example: Private variables
function createBankAccount(initialBalance) {
  let balance = initialBalance;     // Private variable
  
  return {
    deposit: amount => {
      balance += amount;
      return balance;
    },
    withdraw: amount => {
      if (amount > balance) return "Insufficient funds";
      balance -= amount;
      return balance;
    },
    getBalance: () => balance
  };
}

const myAccount = createBankAccount(100);
myAccount.deposit(50);              // 150
myAccount.withdraw(30);             // 120
myAccount.getBalance();             // 120
// myAccount.balance;               // ❌ undefined (can't access directly!)


// Practical Example: Counter generator
function makeCounter() {
  let count = 0;
  
  return () => {
    count++;
    return count;
  };
}

const counter1 = makeCounter();
const counter2 = makeCounter();     // Separate closure!

counter1();                         // 1
counter1();                         // 2
counter2();                         // 1 (separate count!)


// ==========================================
// SECTION 11: CURRYING (ADVANCED!)
// ==========================================

// ========== CURRYING ==========
// Currying = Breaking function with multiple params into series of functions

// Normal function
const add = (a, b) => a + b;
add(3, 4);                          // 7

// Curried function
const addCurried = a => b => a + b;
addCurried(3)(4);                   // 7

// Why useful? Create specialized functions!
const add5 = addCurried(5);         // Function that adds 5
add5(10);                           // 15
add5(20);                           // 25

// Practical example: Discount calculator
const discount = percent => price => price - (price * percent / 100);

const tenPercentOff = discount(10);
const twentyPercentOff = discount(20);

tenPercentOff(100);                 // 90
twentyPercentOff(100);              // 80

// Multiple levels
const multiply = a => b => c => a * b * c;
multiply(2)(3)(4);                  // 24


// ==========================================
// SECTION 12: DOM MANIPULATION
// ==========================================

// ========== DOM - SELECTING ELEMENTS ==========
// querySelector/querySelectorAll - BEST WAY (use CSS selectors)
document.querySelector("#myId");              // Get by ID
document.querySelector(".myClass");           // Get first by class
document.querySelectorAll(".myClass");        // Get all by class
document.querySelector("div > p");            // Get with CSS selector

// getElementById - Also good (slightly faster for IDs)
document.getElementById("myId");


// ========== DOM - CHANGING CONTENT ==========
const element = document.querySelector("#myId");

element.textContent = "New text";             // Change text (safe)
element.innerHTML = "<strong>Bold</strong>";  // Change HTML (careful!)


// ========== DOM - CHANGING STYLES ==========
element.style.color = "red";
element.style.backgroundColor = "blue";       // CSS: background-color → JS: backgroundColor
element.style.fontSize = "20px";


// ========== DOM - WORKING WITH CLASSES ==========
element.classList.add("highlight");           // Add class
element.classList.remove("highlight");        // Remove class
element.classList.toggle("active");           // Toggle on/off
element.classList.contains("active");         // Check if has class (true/false)


// ========== DOM - CREATING ELEMENTS ==========
const newDiv = document.createElement("div");
newDiv.textContent = "Hello";
document.body.appendChild(newDiv);            // Add to page


// ========== DOM - FORMS ==========
const form = document.forms[0];               // Get first form
const input = form.elements.username;         // Get input by name
input.value;                                  // Get value
input.value = "new value";                    // Set value


// ==========================================
// SECTION 13: EVENT HANDLING
// ==========================================

// ========== EVENTS ==========
// addEventListener - ALWAYS use this
const button = document.querySelector("button");

// Basic event
button.addEventListener("click", () => {
  console.log("Clicked!");
});

// Event with parameter
button.addEventListener("click", (e) => {
  console.log(e.type);                        // "click"
  console.log(e.target);                      // The button element
});

// Common events
element.addEventListener("click", handler);   // Click
element.addEventListener("mouseover", handler);  // Mouse enters
element.addEventListener("mouseout", handler);   // Mouse leaves
input.addEventListener("input", handler);     // Value changes (real-time)
input.addEventListener("change", handler);    // Value changes + loses focus
form.addEventListener("submit", handler);     // Form submitted

// Prevent default behavior
form.addEventListener("submit", (e) => {
  e.preventDefault();                         // Stop form from submitting
  console.log("Form submitted!");
});

// Stop event bubbling
button.addEventListener("click", (e) => {
  e.stopPropagation();                        // Stop event from bubbling up
});


// ==========================================
// SECTION 14: FORM VALIDATION
// ==========================================

// ========== VALIDATION ==========
// HTML5 built-in validation
// <input type="text" required minlength="3">
// <input type="number" min="18" max="99">
// <input type="email" required>

// JavaScript validation
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const username = form.elements.username.value;
  const email = form.elements.email.value;
  
  // Check validity
  if (username.length < 3) {
    alert("Username must be at least 3 characters");
    return;
  }
  
  if (!email.includes("@")) {
    alert("Email must contain @");
    return;
  }
  
  // Valid - submit form
  console.log("Form is valid!");
});


// ==========================================
// SECTION 15: TIMERS
// ==========================================

// ========== TIMERS ==========

// setTimeout - Run ONCE after delay
setTimeout(() => {
  console.log("Runs after 2 seconds");
}, 2000);  // 2000ms = 2 seconds

// Cancel timeout
const timerId = setTimeout(() => {
  console.log("This might not run");
}, 5000);
clearTimeout(timerId);                        // Cancel it

// setInterval - Run REPEATEDLY
const intervalId = setInterval(() => {
  console.log("Runs every 2 seconds");
}, 2000);

// Stop interval
clearInterval(intervalId);

// Example: Countdown
let timeLeft = 10;
const countdown = setInterval(() => {
  console.log(timeLeft);
  timeLeft--;
  
  if (timeLeft < 0) {
    clearInterval(countdown);
    console.log("Time's up!");
  }
}, 1000);


// ==========================================
// SECTION 16: DATES
// ==========================================

// ========== DATES ==========
const now = new Date();                       // Current date/time
const specific = new Date(2024, 0, 15);       // Jan 15, 2024 (month is 0-indexed!)

now.getFullYear();                            // 2024
now.getMonth();                               // 0-11 (0=Jan, 11=Dec)
now.getDate();                                // 1-31 (day of month)
now.getDay();                                 // 0-6 (0=Sun, 6=Sat)


// ==========================================
// SECTION 17: PASS BY VALUE VS REFERENCE
// ==========================================

// ========== PASS BY VALUE (Primitives) ==========
let x = 5;
let y = x;  // y gets COPY of value
y = 10;

console.log(x);  // 5 (unchanged)
console.log(y);  // 10


// ========== PASS BY REFERENCE (Objects/Arrays) ==========
let obj1 = { name: "John" };
let obj2 = obj1;  // obj2 gets REFERENCE (same object!)
obj2.name = "Sarah";

console.log(obj1.name);  // "Sarah" (changed!)
console.log(obj2.name);  // "Sarah"


// ========== HOW TO COPY OBJECTS/ARRAYS ==========
// Shallow copy (one level)
const originalObj = { name: "John", age: 30 };
const copyObj = { ...originalObj };           // Copy object

const originalArr = [1, 2, 3];
const copyArr = [...originalArr];             // Copy array

// Deep copy (nested objects)
const original = { user: { name: "John" } };
const deepCopy = JSON.parse(JSON.stringify(original));


// ==========================================
// COMBINING CONCEPTS - REAL EXAMPLE
// ==========================================

// ========== TODO LIST WITH CLOSURES ==========
function createTodoList() {
  let todos = [];  // Private array (closure!)
  
  return {
    add: (todo) => {
      todos.push(todo);
      console.log(`Added: "${todo}"`);
    },
    
    remove: (index) => {
      const removed = todos.splice(index, 1);
      console.log(`Removed: "${removed}"`);
    },
    
    list: () => {
      console.log("Todo List:");
      todos.forEach((todo, i) => {
        console.log(`${i + 1}. ${todo}`);
      });
    },
    
    count: () => todos.length
  };
}

// Usage
const myTodos = createTodoList();
myTodos.add("Buy milk");
myTodos.add("Learn JavaScript");
myTodos.list();
// Todo List:
// 1. Buy milk
// 2. Learn JavaScript

myTodos.remove(0);
myTodos.list();
// Todo List:
// 1. Learn JavaScript


// ==========================================
// END OF MAIN CHEATSHEET
// ALTERNATIVE METHODS BELOW
// ==========================================


// ==========================================
// ALTERNATIVE METHODS (Secondary)
// ==========================================

// ========== ARRAYS - Alternative Methods ==========
// These work but modern methods above are better

// Add/Remove at specific position
const arr = [1, 2, 3, 4, 5];
arr.splice(2, 1, 99);                         // At index 2: remove 1, add 99

// concat (join arrays) - spread is better
const arr1 = [1, 2];
const arr2 = [3, 4];
const joined = arr1.concat(arr2);             // [1, 2, 3, 4]
const joined2 = [...arr1, ...arr2];           // Same (better)


// ========== STRINGS - Alternative Methods ==========
// substring vs slice (slice is more consistent)
const text = "Hello World";
text.substring(0, 5);                         // "Hello"
text.slice(0, 5);                             // "Hello" (same, but slice is better)


// ========== OBJECTS - Alternative Methods ==========
// Object.assign (spread is cleaner)
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const merged = Object.assign({}, obj1, obj2); // { a: 1, b: 2 }
const merged2 = { ...obj1, ...obj2 };         // Same (better)


// ========== FUNCTIONS - Traditional Way ==========
// Function declaration (use arrow functions instead)
function add(a, b) {
  return a + b;
}

// Function expression
const add = function(a, b) {
  return a + b;
};


// ==========================================
// QUICK COMMON PATTERNS
// ==========================================

// Format numbers with padding
const formatNumbers = (numbers) => {
  return numbers.map(num => num.toString().padStart(4, "0"));
};
formatNumbers([1, 42, 999]);  // ["0001", "0042", "0999"]

// Remove duplicates
const unique = [...new Set([1, 2, 2, 3, 3])];  // [1, 2, 3]

// Get max/min from array
const numbers = [1, 5, 3, 9, 2];
Math.max(...numbers);                         // 9
Math.min(...numbers);                         // 1

// Filter falsy values
const arr = [0, 1, false, 2, "", 3];
arr.filter(Boolean);                          // [1, 2, 3]

// Check if array is empty
arr.length === 0;                             // true/false

// Check if object is empty
Object.keys(obj).length === 0;                // true/false

// Swap variables
let a = 1, b = 2;
[a, b] = [b, a];                              // a=2, b=1

// Default object values
const user = { name: "John" };
const fullUser = { age: 0, city: "", ...user };  // Merge with defaults
