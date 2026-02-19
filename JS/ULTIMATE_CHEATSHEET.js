// ==========================================
// JAVASCRIPT ULTIMATE CHEATSHEET
// BEST PRACTICES - MODERN ES6+
// All examples use UNIQUE variable names
// ==========================================

// QUICK SEARCH:
// Search "VARIABLES" - variable declarations
// Search "STRINGS" - string methods
// Search "ARRAYS" - array methods & advanced
// Search "OBJECTS" - object manipulation
// Search "FUNCTIONS" - all function types
// Search "LOOPS" - all loop types
// Search "CONDITIONALS" - if/else/ternary
// Search "SCOPE" - scope rules & examples
// Search "CLOSURES" - closure explained
// Search "EVENTS" - DOM events
// Search "SPREAD" - spread operator
// Search "IIFE" - self-invoking functions


// ==========================================
// SECTION 1: BASICS
// ==========================================

// ========== VARIABLES ==========
// RULE: const by default, let only when reassigning
const PI = 3.14159;             // Cannot change (use this!)
let score = 100;                // Can change
score = 150;                    // OK

// NEVER use var (old, buggy)


// ========== DATA TYPES ==========
const playerName = "Awdi";      // String
const level = 25;               // Number
const isOnline = true;          // Boolean
const emptyValue = null;        // Null (intentional empty)
let undefinedValue;             // Undefined (not assigned)

typeof(playerName);             // "string"


// ========== OPERATORS ==========
// Math
10 + 5;                         // 15
10 - 5;                         // 5
10 * 5;                         // 50
10 / 5;                         // 2
10 % 3;                         // 1 (remainder)

// Shorthand
let points = 10;
points += 5;                    // points = points + 5
points -= 2;                    // points = points - 2
points++;                       // points = points + 1
points--;                       // points = points - 1

// Comparison (ALWAYS use ===)
5 === "5";                      // false (different types)
5 !== "5";                      // true
5 > 3;                          // true
5 >= 5;                         // true


// ==========================================
// SECTION 2: STRINGS
// ==========================================

// ========== STRINGS - ESSENTIAL ==========
const sentence = "  JavaScript is Awesome  ";

// Info
sentence.length;                        // 25
sentence[0];                            // "J"
sentence.indexOf("JavaScript");         // 2 (position)

// Transform
sentence.toLowerCase();                 // "  javascript is awesome  "
sentence.toUpperCase();                 // "  JAVASCRIPT IS AWESOME  "
sentence.trim();                        // "JavaScript is Awesome"
sentence.trimStart();                   // "JavaScript is Awesome  "
sentence.trimEnd();                     // "  JavaScript is Awesome"

// Replace
sentence.replace("JavaScript", "JS");   // First match only
sentence.replaceAll("a", "A");          // All matches

// Padding
"7".padStart(3, "0");                   // "007"
"Hi".padEnd(5, ".");                    // "Hi..."

// Repeat
"*".repeat(10);                         // "**********"

// Split (string → array)
"apple,banana,orange".split(",");       // ["apple", "banana", "orange"]
"Hello World".split(" ");               // ["Hello", "World"]

// Template Literals (BEST WAY!)
const username = "Awdi";
const userScore = 1250;
const greeting = `Welcome ${username}! Your score: ${userScore}`;
// "Welcome Awdi! Your score: 1250"

// Multi-line
const poem = `
  Roses are red
  Violets are blue
  JavaScript is awesome
  And so are you
`;


// ==========================================
// SECTION 3: NUMBERS
// ==========================================

// ========== NUMBERS ==========
const price = 19.99;

price.toString();                       // "19.99"
price.toFixed(2);                       // "19.99"
price.toFixed(0);                       // "20"
isNaN("hello");                         // true
isNaN(42);                              // false

// Math methods
Math.max(10, 50, 30);                   // 50
Math.min(10, 50, 30);                   // 10
Math.round(4.7);                        // 5
Math.floor(4.7);                        // 4
Math.ceil(4.1);                         // 5
Math.random();                          // Random 0-1

// Random integer between min and max
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
randomInt(1, 10);                       // Random 1-10


// ==========================================
// SECTION 4: ARRAYS
// ==========================================

// ========== ARRAYS - BASICS ==========
const colors = ["red", "green", "blue"];

// Access
colors[0];                              // "red"
colors[colors.length - 1];              // "blue" (last)
colors.length;                          // 3

// Add/Remove
colors.push("yellow");                  // Add to end
colors.pop();                           // Remove from end
colors.unshift("purple");               // Add to beginning
colors.shift();                         // Remove from beginning

// Copy
const colorsCopy = [...colors];         // Modern way (use this!)
const colorsSlice = colors.slice(0, 2); // Copy portion

// Check
colors.includes("red");                 // true
colors.indexOf("green");                // 1 (-1 if not found)

// Join
colors.join(", ");                      // "red, green, blue"


// ========== ARRAYS - ADVANCED (ESSENTIAL!) ==========
const ages = [25, 18, 30, 16, 22, 40];

// map() - Transform each element → returns NEW array
const doubledAges = ages.map(age => age * 2);
// [50, 36, 60, 32, 44, 80]

// filter() - Keep elements that pass test → returns NEW array
const adults = ages.filter(age => age >= 18);
// [25, 18, 30, 22, 40]

// find() - Get FIRST element that passes test
const firstAdult = ages.find(age => age >= 18);
// 25

// forEach() - Loop through (no return value)
ages.forEach(age => console.log(`Age: ${age}`));

// reduce() - Reduce to single value
const totalAge = ages.reduce((sum, age) => sum + age, 0);
// 0 + 25 = 25
// 25 + 18 = 43
// 43 + 30 = 73
// ... = 151

// some() - Check if ANY element passes
const hasMinors = ages.some(age => age < 18);
// true

// every() - Check if ALL elements pass
const allAdults = ages.every(age => age >= 18);
// false

// sort() - Sort array (creates copy first!)
const sortedAges = [...ages].sort((a, b) => a - b);
// [16, 18, 22, 25, 30, 40]

// flat() - Flatten nested arrays
const nested = [1, [2, [3, 4]]];
nested.flat(2);                         // [1, 2, 3, 4]

// Remove duplicates
const withDupes = [1, 2, 2, 3, 3, 3, 4];
const uniqueNums = [...new Set(withDupes)];
// [1, 2, 3, 4]


// ========== ARRAY METHODS EXPLAINED ==========

// map() - Transform array
const prices = [10, 20, 30];
const withTax = prices.map(price => price * 1.1);
// [11, 22, 33]

// filter() - Keep matching items
const products = [
  { name: "Laptop", price: 999 },
  { name: "Mouse", price: 25 },
  { name: "Keyboard", price: 75 }
];
const expensive = products.filter(product => product.price > 50);
// [{ name: "Laptop", price: 999 }, { name: "Keyboard", price: 75 }]

// reduce() - Calculate single value
const cartItems = [
  { name: "Book", price: 10, quantity: 2 },
  { name: "Pen", price: 2, quantity: 5 }
];
const cartTotal = cartItems.reduce((total, item) => {
  return total + (item.price * item.quantity);
}, 0);
// 0 + (10 * 2) = 20
// 20 + (2 * 5) = 30
// Result: 30


// ==========================================
// SECTION 5: OBJECTS
// ==========================================

// ========== OBJECTS - BASICS ==========
const student = {
  firstName: "John",
  lastName: "Doe",
  grade: 85,
  isEnrolled: true
};

// Access
student.firstName;                      // "John" (use when possible)
student["firstName"];                   // "John" (use with variables)

// With variable
const propertyName = "grade";
student[propertyName];                  // 85

// Modify
student.grade = 90;                     // Change
student.school = "Harvard";             // Add
delete student.isEnrolled;              // Remove

// Check existence
"firstName" in student;                 // true
student.hasOwnProperty("firstName");    // true


// ========== OBJECTS - MODERN (ES6) ==========

// Property shorthand
const firstName = "Jane";
const age = 25;
const person = { firstName, age };      // { firstName: "Jane", age: 25 }

// Computed properties
const fieldName = "email";
const userAccount = {
  [fieldName]: "user@email.com"         // Dynamic property name
};
// { email: "user@email.com" }

// Spread operator - COPY object
const employee = { name: "Bob", role: "Developer" };
const employeeCopy = { ...employee };   // Creates NEW object
employeeCopy.name = "Alice";
console.log(employee.name);             // "Bob" (unchanged!)

// Spread operator - MERGE objects
const basicInfo = { name: "Sarah", age: 28 };
const contactInfo = { email: "sarah@email.com", phone: "123-456-7890" };
const fullProfile = { ...basicInfo, ...contactInfo };
// { name: "Sarah", age: 28, email: "sarah@email.com", phone: "123-456-7890" }

// Spread operator - OVERRIDE properties
const originalUser = { name: "Tom", age: 30, city: "NYC" };
const updatedUser = { ...originalUser, age: 31 };  // age overridden
// { name: "Tom", age: 31, city: "NYC" }


// ========== OBJECTS - LOOPING ==========
const car = { make: "Tesla", model: "Model 3", year: 2024 };

// for...in - Loop through keys
for (let key in car) {
  console.log(`${key}: ${car[key]}`);
}

// Object.keys() - Get array of keys
Object.keys(car);                       // ["make", "model", "year"]

// Object.values() - Get array of values
Object.values(car);                     // ["Tesla", "Model 3", 2024]

// Object.entries() - Get array of [key, value]
Object.entries(car);                    // [["make", "Tesla"], ["model", "Model 3"], ["year", 2024]]

// Best way to loop through entries
Object.entries(car).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});


// ==========================================
// SECTION 6: FUNCTIONS
// ==========================================

// ========== FUNCTIONS - MODERN (Arrow Functions) ==========
// RULE: Use arrow functions by default

// Multiple parameters
const multiply = (x, y) => x * y;       // Implicit return

// Single parameter (no parentheses needed)
const triple = num => num * 3;

// No parameters (parentheses required)
const sayHello = () => "Hello!";

// Multiple statements (need braces + return)
const calculateDiscount = (price, percent) => {
  const discount = price * (percent / 100);
  const finalPrice = price - discount;
  return finalPrice;
};

// Returning object (wrap in parentheses!)
const createUser = (username, email) => ({ username, email });
// Returns: { username: "...", email: "..." }


// ========== FUNCTIONS - When to Use Regular ==========
// Use regular functions for:
// 1. Object methods (need 'this')
// 2. Event handlers (need 'this')

const character = {
  name: "Mario",
  greet: function() {
    console.log(`It's me, ${this.name}!`);  // 'this' works
  }
};


// ========== FUNCTIONS - Default Parameters ==========
const welcome = (name = "Guest", time = "day") => {
  return `Good ${time}, ${name}!`;
};

welcome("John", "morning");             // "Good morning, John!"
welcome("Sarah");                       // "Good day, Sarah!"
welcome();                              // "Good day, Guest!"


// ========== FUNCTIONS - Rest Parameters ==========
const sumAll = (...numbers) => {
  return numbers.reduce((total, num) => total + num, 0);
};

sumAll(1, 2, 3);                        // 6
sumAll(5, 10, 15, 20, 25);              // 75


// ========== IIFE (Self-Invoking Functions) ==========
// IIFE = Immediately Invoked Function Expression
// Runs AS SOON AS it's defined

// Basic IIFE
(function() {
  console.log("I run immediately!");
})();

// With parameters
(function(playerName, score) {
  console.log(`${playerName} scored ${score} points!`);
})("Awdi", 1000);

// Arrow IIFE
(() => {
  console.log("Arrow IIFE!");
})();

// Why use IIFE?
// 1. Run code immediately without naming function
// 2. Create private scope
// 3. Initialize things once

// Example: Initialize app
(function() {
  const appName = "My App";
  const version = "1.0.0";
  console.log(`${appName} v${version} starting...`);
  // appName and version are private (can't access outside)
})();


// ==========================================
// SECTION 7: CONDITIONALS
// ==========================================

// ========== CONDITIONALS ==========
const playerAge = 20;

// if/else
if (playerAge >= 18) {
  console.log("Adult account");
} else {
  console.log("Minor account");
}

// if/else if/else
const playerLevel = 15;
if (playerLevel < 10) {
  console.log("Beginner");
} else if (playerLevel < 20) {
  console.log("Intermediate");
} else {
  console.log("Expert");
}

// Logical operators
const hasPermission = true;
const isVerified = true;

if (playerAge >= 18 && hasPermission) {   // AND (both true)
  console.log("Access granted");
}

if (playerAge < 18 || !isVerified) {      // OR (at least one true)
  console.log("Restricted access");
}

// Ternary operator (short if/else)
const accountType = playerAge >= 18 ? "Adult" : "Minor";

// Nullish coalescing (use default if null/undefined)
const displayName = null;
const finalName = displayName ?? "Anonymous";  // "Anonymous"


// ==========================================
// SECTION 8: LOOPS
// ==========================================

// ========== LOOPS - MODERN ==========

const items = ["sword", "shield", "potion"];

// for...of - Loop through ARRAY values (BEST for arrays)
for (let item of items) {
  console.log(item);                    // sword, shield, potion
}

// for - Traditional (use when you need index)
for (let i = 0; i < items.length; i++) {
  console.log(i, items[i]);
}

// forEach() - Array method
items.forEach(item => console.log(item));

// Map over array (when you need new array)
const itemsUpper = items.map(item => item.toUpperCase());

// for...in - Loop through OBJECT keys
const inventory = { gold: 100, gems: 50, keys: 3 };
for (let itemName in inventory) {
  console.log(`${itemName}: ${inventory[itemName]}`);
}

// while - Loop while condition true
let countdown = 5;
while (countdown > 0) {
  console.log(countdown);
  countdown--;
}

// break - Exit loop
for (let i = 0; i < 10; i++) {
  if (i === 5) break;                   // Stop at 5
  console.log(i);                       // 0, 1, 2, 3, 4
}

// continue - Skip iteration
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;                // Skip 2
  console.log(i);                       // 0, 1, 3, 4
}


// ==========================================
// SECTION 9: SCOPE
// ==========================================

// ========== SCOPE EXPLAINED ==========

// Global scope - accessible everywhere
const globalScore = 1000;

// Function scope
function gameFunction() {
  const localScore = 500;
  console.log(globalScore);             // ✅ Can access global
  console.log(localScore);              // ✅ Can access local
}

console.log(globalScore);               // ✅ Can access global
// console.log(localScore);             // ❌ Error! Can't access local

// Block scope (let/const inside {})
if (true) {
  const blockVariable = "I'm in a block";
  console.log(blockVariable);           // ✅ Works inside
}
// console.log(blockVariable);          // ❌ Error! Block scoped

// Shadowing - inner variable "shadows" outer
const health = 100;                     // Global
function heal() {
  const health = 150;                   // Local (shadows global)
  console.log(health);                  // 150 (uses local)
}
heal();
console.log(health);                    // 100 (global unchanged)


// ========== SCOPE - RULES ==========
// 1. Inner scopes can access outer variables
// 2. Outer scopes CANNOT access inner variables
// 3. Variables with same name: inner shadows outer

function outer() {
  const outerVar = "Outer";
  
  function inner() {
    const innerVar = "Inner";
    console.log(outerVar);              // ✅ Can access outer
    console.log(innerVar);              // ✅ Can access own
  }
  
  inner();
  console.log(outerVar);                // ✅ Can access own
  // console.log(innerVar);             // ❌ Can't access inner
}


// ==========================================
// SECTION 10: CLOSURES
// ==========================================

// ========== CLOSURES EXPLAINED ==========
// Closure = Inner function "remembers" outer's variables
// EVEN AFTER outer function finishes!

// Basic closure
function makeCounter() {
  let count = 0;                        // This gets "captured"
  
  return function() {
    count++;
    return count;
  };
}

const counter = makeCounter();          // makeCounter() FINISHES here
counter();                              // 1 (but count still alive!)
counter();                              // 2
counter();                              // 3

// WHY? The returned function "closed over" count!


// ========== CLOSURES - Real Examples ==========

// Example 1: Private variables (encapsulation)
function createWallet(initialMoney) {
  let balance = initialMoney;           // Private!
  
  return {
    deposit: (amount) => {
      balance += amount;
      return balance;
    },
    withdraw: (amount) => {
      if (amount > balance) return "Insufficient funds";
      balance -= amount;
      return balance;
    },
    checkBalance: () => balance
  };
}

const myWallet = createWallet(100);
myWallet.deposit(50);                   // 150
myWallet.withdraw(30);                  // 120
myWallet.checkBalance();                // 120
// myWallet.balance;                    // undefined (private!)


// Example 2: Creating specialized functions
function multiplyBy(factor) {
  return (number) => number * factor;
}

const double = multiplyBy(2);
const triple = multiplyBy(3);

double(5);                              // 10
triple(5);                              // 15


// Example 3: Counter generator
function createUniqueId() {
  let id = 0;
  
  return () => {
    id++;
    return `ID-${id}`;
  };
}

const generateId = createUniqueId();
generateId();                           // "ID-1"
generateId();                           // "ID-2"
generateId();                           // "ID-3"


// ==========================================
// SECTION 11: CURRYING
// ==========================================

// ========== CURRYING EXPLAINED ==========
// Currying = Break function with multiple params
// into series of functions with ONE param each

// Normal function
const addNumbers = (a, b, c) => a + b + c;
addNumbers(1, 2, 3);                    // 6

// Curried function
const addCurried = a => b => c => a + b + c;
addCurried(1)(2)(3);                    // 6

// Why useful? Create specialized functions!
const add10 = addCurried(10);           // Function that adds 10 + ? + ?
const add10and20 = add10(20);           // Function that adds 10 + 20 + ?
add10and20(30);                         // 60


// ========== CURRYING - Real Examples ==========

// Example 1: Discount calculator
const applyDiscount = percent => price => {
  return price - (price * percent / 100);
};

const tenPercentOff = applyDiscount(10);
const twentyPercentOff = applyDiscount(20);

tenPercentOff(100);                     // 90
twentyPercentOff(100);                  // 80


// Example 2: Greeting generator
const greetPerson = greeting => name => `${greeting}, ${name}!`;

const sayHi = greetPerson("Hi");
const sayHello = greetPerson("Hello");

sayHi("John");                          // "Hi, John!"
sayHello("Sarah");                      // "Hello, Sarah!"


// Example 3: Logger
const logMessage = level => prefix => message => {
  console.log(`[${level}] [${prefix}] ${message}`);
};

const errorLog = logMessage("ERROR");
const errorAuth = errorLog("AUTH");

errorAuth("Login failed");              // [ERROR] [AUTH] Login failed
errorAuth("Invalid token");             // [ERROR] [AUTH] Invalid token


// ==========================================
// SECTION 12: DOM MANIPULATION
// ==========================================

// ========== DOM - SELECTING ==========
// querySelector/querySelectorAll - BEST (CSS selectors)
document.querySelector("#userId");              // By ID
document.querySelector(".className");           // First by class
document.querySelectorAll(".className");        // All by class
document.querySelector("div > p");              // CSS selector

// getElementById - Also good (faster for IDs)
document.getElementById("userId");


// ========== DOM - CONTENT ==========
const element = document.querySelector("#myElement");

element.textContent = "New text";               // Safe, plain text
element.innerHTML = "<strong>Bold</strong>";    // HTML (careful!)


// ========== DOM - STYLES ==========
element.style.color = "red";
element.style.backgroundColor = "blue";         // camelCase!
element.style.fontSize = "20px";


// ========== DOM - CLASSES ==========
element.classList.add("active");                // Add class
element.classList.remove("active");             // Remove
element.classList.toggle("highlight");          // Toggle on/off
element.classList.contains("active");           // Check (true/false)


// ========== DOM - CREATING ==========
const newDiv = document.createElement("div");
newDiv.textContent = "Hello World";
document.body.appendChild(newDiv);


// ========== DOM - FORMS ==========
const form = document.forms[0];
const usernameInput = form.elements.username;
usernameInput.value;                            // Get value
usernameInput.value = "newValue";               // Set value


// ==========================================
// SECTION 13: EVENT HANDLING
// ==========================================

// ========== EVENTS ==========
const btn = document.querySelector("button");

// Basic event
btn.addEventListener("click", () => {
  console.log("Clicked!");
});

// Event with parameter
btn.addEventListener("click", (event) => {
  console.log(event.type);                      // "click"
  console.log(event.target);                    // The button
});

// Common events
element.addEventListener("click", handler);     // Click
element.addEventListener("mouseover", handler); // Mouse enters
element.addEventListener("mouseout", handler);  // Mouse leaves
inputElement.addEventListener("input", handler);     // Value changes (real-time)
inputElement.addEventListener("change", handler);    // Value changes + loses focus
formElement.addEventListener("submit", handler);     // Form submitted

// Prevent default
formElement.addEventListener("submit", (e) => {
  e.preventDefault();                           // Stop form submit
  console.log("Form submitted!");
});

// Stop bubbling
btn.addEventListener("click", (e) => {
  e.stopPropagation();                          // Stop event from bubbling
});


// ==========================================
// SECTION 14: FORM VALIDATION
// ==========================================

// ========== VALIDATION ==========
const signupForm = document.querySelector("form");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const username = signupForm.elements.username.value;
  const email = signupForm.elements.email.value;
  const password = signupForm.elements.password.value;
  
  const errors = [];
  
  if (username.length < 3) {
    errors.push("Username must be at least 3 characters");
  }
  
  if (!email.includes("@")) {
    errors.push("Email must contain @");
  }
  
  if (password.length < 8) {
    errors.push("Password must be at least 8 characters");
  }
  
  if (errors.length > 0) {
    alert(errors.join("\n"));
  } else {
    console.log("Form valid!");
  }
});


// ==========================================
// SECTION 15: TIMERS
// ==========================================

// ========== TIMERS ==========

// setTimeout - Run ONCE after delay
setTimeout(() => {
  console.log("Runs after 3 seconds");
}, 3000);

// Cancel timeout
const timer = setTimeout(() => {
  console.log("This won't run");
}, 5000);
clearTimeout(timer);

// setInterval - Run REPEATEDLY
const interval = setInterval(() => {
  console.log("Runs every 2 seconds");
}, 2000);

// Stop interval
clearInterval(interval);

// Example: Countdown
let timeRemaining = 10;
const countdownTimer = setInterval(() => {
  console.log(timeRemaining);
  timeRemaining--;
  
  if (timeRemaining < 0) {
    clearInterval(countdownTimer);
    console.log("Done!");
  }
}, 1000);


// ==========================================
// SECTION 16: DATES
// ==========================================

// ========== DATES ==========
const currentDate = new Date();
const specificDate = new Date(2024, 0, 15);     // Jan 15, 2024 (month 0-indexed!)

currentDate.getFullYear();                      // 2024
currentDate.getMonth();                         // 0-11 (0=Jan)
currentDate.getDate();                          // 1-31
currentDate.getDay();                           // 0-6 (0=Sun)


// ==========================================
// SECTION 17: PASS BY VALUE vs REFERENCE
// ==========================================

// ========== PRIMITIVES (Pass by Value) ==========
let num1 = 10;
let num2 = num1;                        // COPY of value
num2 = 20;

console.log(num1);                      // 10 (unchanged)
console.log(num2);                      // 20


// ========== OBJECTS/ARRAYS (Pass by Reference) ==========
const person1 = { name: "Alice" };
const person2 = person1;                // REFERENCE (same object!)
person2.name = "Bob";

console.log(person1.name);              // "Bob" (changed!)
console.log(person2.name);              // "Bob"


// ========== HOW TO COPY ==========

// Copy array
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray]; // Creates NEW array
copiedArray.push(4);
console.log(originalArray);             // [1, 2, 3] (unchanged!)

// Copy object (shallow)
const originalObject = { name: "Tom", age: 30 };
const copiedObject = { ...originalObject };
copiedObject.name = "Jerry";
console.log(originalObject.name);       // "Tom" (unchanged!)

// Deep copy (nested objects)
const deepOriginal = { user: { name: "Sam", stats: { score: 100 } } };
const deepCopy = JSON.parse(JSON.stringify(deepOriginal));
deepCopy.user.stats.score = 200;
console.log(deepOriginal.user.stats.score);  // 100 (unchanged!)


// ==========================================
// REAL-WORLD EXAMPLE - Combining Concepts
// ==========================================

// ========== SHOPPING CART WITH CLOSURES ==========
function createShoppingCart() {
  let items = [];                       // Private array
  
  return {
    addItem: (product, quantity) => {
      items.push({ product, quantity, id: Date.now() });
      console.log(`Added: ${product} x${quantity}`);
    },
    
    removeItem: (itemId) => {
      const index = items.findIndex(item => item.id === itemId);
      if (index !== -1) {
        const removed = items.splice(index, 1)[0];
        console.log(`Removed: ${removed.product}`);
      }
    },
    
    getTotal: () => {
      return items.reduce((sum, item) => sum + item.quantity, 0);
    },
    
    listItems: () => {
      if (items.length === 0) {
        console.log("Cart is empty");
        return;
      }
      
      console.log("Shopping Cart:");
      items.forEach(item => {
        console.log(`- ${item.product} x${item.quantity}`);
      });
    },
    
    clearCart: () => {
      items = [];
      console.log("Cart cleared");
    }
  };
}

// Usage
const cart = createShoppingCart();
cart.addItem("Laptop", 1);
cart.addItem("Mouse", 2);
cart.addItem("Keyboard", 1);
cart.listItems();
// Shopping Cart:
// - Laptop x1
// - Mouse x2
// - Keyboard x1

console.log(`Total items: ${cart.getTotal()}`);  // 4

cart.clearCart();


// ==========================================
// COMMON PATTERNS & SNIPPETS
// ==========================================

// Format numbers with padding
const formatNumber = (num, digits) => num.toString().padStart(digits, "0");
formatNumber(7, 3);                     // "007"

// Remove duplicates from array
const removeDuplicates = arr => [...new Set(arr)];
removeDuplicates([1, 2, 2, 3, 3]);      // [1, 2, 3]

// Get max/min from array
const numbersArray = [5, 2, 9, 1, 7];
Math.max(...numbersArray);              // 9
Math.min(...numbersArray);              // 1

// Filter falsy values
const mixedArray = [0, 1, false, 2, "", 3, null];
mixedArray.filter(Boolean);             // [1, 2, 3]

// Check if array empty
const checkArray = [];
checkArray.length === 0;                // true

// Check if object empty
const checkObject = {};
Object.keys(checkObject).length === 0;  // true

// Swap variables
let var1 = 10, var2 = 20;
[var1, var2] = [var2, var1];            // var1=20, var2=10

// Default object properties
const userDefaults = { role: "user", active: true };
const newUser = { name: "Kim", ...userDefaults };
// { name: "Kim", role: "user", active: true }

// Capitalize first letter
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
capitalize("hello");                    // "Hello"

// Generate random ID
const generateId = () => Math.random().toString(36).substr(2, 9);
generateId();                           // "k3j5l2m9p"

// Delay execution
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
// Usage: await delay(2000); // Wait 2 seconds


// ==========================================
// SORTING EXPLAINED
// ==========================================

// ========== ARRAY SORT ==========
const unsorted = [5, 2, 10, 1, 9];

// WRONG - sorts as strings!
unsorted.sort();                        // [1, 10, 2, 5, 9] ❌

// RIGHT - use comparison function
const ascending = [...unsorted].sort((a, b) => a - b);
// [1, 2, 5, 9, 10] ✅

const descending = [...unsorted].sort((a, b) => b - a);
// [10, 9, 5, 2, 1]

// How (a, b) => a - b works:
// If a - b is negative → a comes before b
// If a - b is positive → b comes before a
// If a - b is zero → same order

// Why [...unsorted].sort()?
// sort() MUTATES original array
// [...unsorted] creates a copy first


// ==========================================
// REDUCE EXPLAINED
// ==========================================

// ========== REDUCE ==========
// Reduce = Take array, "reduce" to single value

const values = [1, 2, 3, 4, 5];

// Sum all values
const total = values.reduce((accumulator, current) => {
  return accumulator + current;
}, 0);  // 0 is starting value
// 0 + 1 = 1
// 1 + 2 = 3
// 3 + 3 = 6
// 6 + 4 = 10
// 10 + 5 = 15
// Result: 15

// Find max
const maximum = values.reduce((max, current) => {
  return current > max ? current : max;
}, 0);
// Result: 5

// Count occurrences
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
const fruitCount = fruits.reduce((count, fruit) => {
  count[fruit] = (count[fruit] || 0) + 1;
  return count;
}, {});
// { apple: 3, banana: 2, orange: 1 }


// ==========================================
// END OF CHEATSHEET
// ==========================================
