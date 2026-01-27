// JavaScript Cheat Sheet

// ########### Variables ##########

let x = 5;           // Can be changed later
const y = 10;        // CANNOT be changed (constant)
var z = 15;          // Old way (don't use, use 'let' instead)

x = 20;              // ✅ Works
y = 30;              // ❌ Error! const can't be reassigned

// ########### Data Types ##########

let name = "Awdi";           // String (text)
let age = 25;                // Number
let isStudent = true;        // Boolean (true/false)
let nothing = null;          // Null (intentionally empty)
let notDefined;              // Undefined (not assigned yet)

typeof(name);                // "string"
typeof(age);                 // "number"
typeof(isStudent);           // "boolean"

// ########### String Methods ##########

let str = "  Hello World  ";

// Properties
str.length;                  // 15

// Access characters
str[0];                      // "H"
str.charAt(0);               // "H"

// Search
str.indexOf("World");        // 8 (position of "World")
str.indexOf("Bye");          // -1 (not found)

// Extract parts
str.substring(0, 5);         // "  Hel" (start to end-1)
str.substring(2);            // "llo World  " (from index 2 to end)
str.slice(0, 5);             // "  Hel" (same as substring)

// Change case
str.toLowerCase();           // "  hello world  "
str.toUpperCase();           // "  HELLO WORLD  "

// Remove spaces
str.trim();                  // "Hello World" (removes leading/trailing spaces)

// Replace
str.replace("World", "JS");  // "  Hello JS  " (only first match)
str.replaceAll("l", "L");    // "  HeLLo WorLd  " (all matches)

// Combine
str.concat(" !!");           // "  Hello World   !!"
"Hi" + " " + "there";        // "Hi there" (+ is easier)


// ########### Number Methods ##########

let num = 10.6789;

num.toString();              // "10.6789" (convert to string)
num.toFixed(0);              // "11" (round to 0 decimals)
num.toFixed(2);              // "10.68" (round to 2 decimals)

isNaN("hello");              // true (not a number)
isNaN(123);                  // false (is a number)


// ########### Operators ##########

// Arithmetic
5 + 3;                       // 8 (addition)
5 - 3;                       // 2 (subtraction)
5 * 3;                       // 15 (multiplication)
10 / 2;                      // 5 (division)
10 % 3;                      // 1 (remainder/modulus)

// Assignment
let x = 5;
x = x + 3;                   // x is now 8
x += 3;                      // Same as x = x + 3
x -= 2;                      // Same as x = x - 2
x *= 2;                      // Same as x = x * 2
x /= 2;                      // Same as x = x / 2

// Increment/Decrement
x++;                         // Same as x = x + 1 (or x += 1)
x--;                         // Same as x = x - 1 (or x -= 1)

// Comparison (returns true/false)
5 == "5";                    // true (equal value, loose)
5 === "5";                   // false (equal value AND type, strict - use this!)
5 != 3;                      // true (not equal)
5 !== "5";                   // true (not equal value or type)
5 > 3;                       // true
5 < 3;                       // false
5 >= 5;                      // true
5 <= 3;                      // false


// ########### USER INTERACTION ##########


// Output to console
console.log("Hello");        // Prints to browser console

// Alert box
alert("Hello!");             // Shows popup message

// Get user input
let name = prompt("Your name?", "Default");  // Returns string

// Confirm (Yes/No)
let answer = confirm("Are you sure?");       // Returns true/false


// ########### Arrays ##########

let colors = ["blue", "yellow", "green"];

// Access elements
colors[0];                   // "blue" (first element)
colors[2];                   // "green" (third element)
colors[colors.length - 1];   // "green" (last element)

// Change elements
colors[0] = "red";           // ["red", "yellow", "green"]

// Properties
colors.length;               // 3 (number of items)

// Add/Remove at END
colors.push("pink");         // Add to end → ["red", "yellow", "green", "pink"]
colors.pop();                // Remove from end → ["red", "yellow", "green"]

// Add/Remove at BEGINNING
colors.unshift("orange");    // Add to beginning → ["orange", "red", "yellow", "green"]
colors.shift();              // Remove from beginning → ["red", "yellow", "green"]

// Add/Remove ANYWHERE
colors.splice(1, 1, "black"); // At index 1, remove 1, add "black"
                             // → ["red", "black", "green"]

// Copy a piece (doesn't change original)
colors.slice(0, 2);          // ["red", "black"] (from 0 to 2, not including 2)
colors.slice(1);             // ["black", "green"] (from 1 to end)

// Convert to string
colors.toString();           // "red,black,green"
colors.join(" - ");          // "red - black - green"
colors.join("");             // "redblackgreen"


// ########### Template Literals ##########


let name = "Awdi";
let age = 25;

// Old way
let msg = "My name is " + name + " and I'm " + age;

// Modern way (use backticks `)
let msg2 = `My name is ${name} and I'm ${age}`;
console.log(msg2);  // "My name is Awdi and I'm 25"

// Math inside templates
let year = 2030;
console.log(`I will be ${year - 2003} years old in ${year}`);





// ========================================
// CREATING OBJECTS
// ========================================

let emptyObj = {};

let person = {
  name: "Awdi",
  age: 25,
  city: "Casablanca",
  isStudent: true
};


// ========================================
// ACCESSING PROPERTIES (2 ways)
// ========================================

// Dot notation (most common)
person.name              // "Awdi"
person.age               // 25

// Bracket notation (when needed)
person["name"]           // "Awdi"
person["age"]            // 25

// When property name has spaces:
let user = { "full name": "Awdi Dev" };
user["full name"]        // "Awdi Dev"

// When property name is in a variable:
let prop = "city";
person[prop]             // "Casablanca"


// ========================================
// ADDING / CHANGING PROPERTIES
// ========================================

person.age = 26;                    // Change existing
person.country = "Morocco";         // Add new
person["hobby"] = "Coding";         // Add with brackets


// ========================================
// DELETING PROPERTIES
// ========================================

delete person.age;                  // Remove property
delete person["city"];              // Remove with brackets


// ========================================
// CHECKING IF PROPERTY EXISTS
// ========================================

"name" in person         // true (property exists)
"age" in person          // false (we deleted it)


// ========================================
// METHODS (functions in objects)
// ========================================

let car = {
  brand: "Toyota",
  
  // Method - old way:
  start: function() {
    console.log("Engine started");
  },
  
  // Method - modern way (shorter):
  stop() {
    console.log("Engine stopped");
  },
  
  // Using "this" to access object's own properties:
  showBrand() {
    console.log("Brand: " + this.brand);
  }
};

car.start();      // "Engine started"
car.stop();       // "Engine stopped"
car.showBrand();  // "Brand: Toyota"


// ========================================
// ARRAYS OF OBJECTS (Very Common!)
// ========================================

let users = [
  { name: "Awdi", age: 25 },
  { name: "John", age: 30 },
  { name: "Sarah", age: 22 }
];

// Access first user:
users[0]              // { name: "Awdi", age: 25 }
users[0].name         // "Awdi"

// Access second user's age:
users[1].age          // 30

// Loop through all users:
for (let i = 0; i < users.length; i++) {
  console.log(users[i].name);
}


// ========================================
// NESTED OBJECTS (objects inside objects)
// ========================================

let student = {
  name: "Awdi",
  grades: {
    math: 90,
    english: 85,
    science: 88
  }
};

student.grades.math          // 90
student.grades["english"]    // 85


// ========================================
// COMMON PATTERNS
// ========================================

// 1. Loop through object properties:
let obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
  console.log(key + ": " + obj[key]);
}
// Output: a: 1, b: 2, c: 3


// 2. Get all property names:
Object.keys(person)          // ["name", "city", "country", "hobby"]

// 3. Get all values:
Object.values(person)        // ["Awdi", "Casablanca", "Morocco", "Coding"]

// 4. Copy an object:
let copy = { ...person };    // Modern way (spread operator)


// ========================================
// REAL-WORLD EXAMPLES
// ========================================

// Example 1: User database
let database = [
  { username: "awdi", password: "pass123", email: "awdi@email.com" },
  { username: "john", password: "pass456", email: "john@email.com" }
];

// Example 2: Product inventory
let products = [
  { id: 1, name: "Laptop", price: 999, inStock: true },
  { id: 2, name: "Mouse", price: 25, inStock: false },
  { id: 3, name: "Keyboard", price: 75, inStock: true }
];

// Example 3: Social media posts
let posts = [
  { username: "awdi", text: "Learning JS!", likes: 10 },
  { username: "sarah", text: "Building an app", likes: 25 }
];