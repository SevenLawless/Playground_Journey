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

"Hi" + " " + "there";               // "Hi there" (concatenation)

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


// ========== USER INTERACTION ==========
console.log("Hello");                       // Print to console
alert("Hello!");                            // Show popup message
let userInput = prompt("Your name?");       // Get input (returns string)
let confirmed = confirm("Are you sure?");   // Yes/No dialog (returns true/false)


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
