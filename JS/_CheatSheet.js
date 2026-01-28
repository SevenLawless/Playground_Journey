// ==========================================
// JAVASCRIPT QUICK REFERENCE CHEAT SHEET
// ==========================================

// ========== VARIABLES ==========
let x = 5;              // Can be changed
const y = 10;           // Cannot be changed (constant)
x = 20;                 // OK
// y = 30;              // ERROR


// ========== DATA TYPES ==========
let name = "Awdi";      // String
let age = 25;           // Number
let isStudent = true;   // Boolean
let nothing = null;     // Null
let notDefined;         // Undefined

typeof(name);           // "string"


// ========== OPERATORS ==========
5 + 3;                  // 8
5 - 3;                  // 2
5 * 3;                  // 15
10 / 2;                 // 5
10 % 3;                 // 1 (remainder)

x += 3;                 // x = x + 3
x -= 2;                 // x = x - 2
x++;                    // x = x + 1
x--;                    // x = x - 1

5 === "5";              // false (strict equality - USE THIS)
5 !== "5";              // true (strict inequality)
5 > 3;                  // true
5 >= 5;                 // true


// ========== STRINGS ==========
let str = "  Hello World  ";

str.length;                     // 15
str[0];                         // "H"
str.charAt(0);                  // "H"
str.indexOf("World");           // 8 (position, or -1 if not found)
str.substring(0, 5);            // "  Hel" (start to end-1)
str.toLowerCase();              // "  hello world  "
str.toUpperCase();              // "  HELLO WORLD  "
str.trim();                     // "Hello World" (remove spaces)
str.replace("World", "JS");     // "  Hello JS  " (first match only)
str.replaceAll("l", "L");       // "  HeLLo WorLd  " (all matches)
"Hi" + " " + "there";           // "Hi there" (concatenation)

// Template literals (modern way)
let msg = `My name is ${name} and I'm ${age}`;


// ========== NUMBERS ==========
let num = 10.6789;

num.toString();         // "10.6789"
num.toFixed(2);         // "10.68" (round to 2 decimals)
isNaN("hello");         // true (not a number)


// ========== USER INTERACTION ==========
console.log("Hello");                       // Print to console
alert("Hello!");                            // Popup message
let input = prompt("Your name?");           // Get user input (returns string)
let answer = confirm("Are you sure?");      // Yes/No dialog (returns true/false)


// ========== ARRAYS ==========
let colors = ["blue", "yellow", "green"];

colors[0];                      // "blue" (access)
colors[colors.length - 1];      // "green" (last element)
colors[0] = "red";              // Change element
colors.length;                  // 3

colors.push("pink");            // Add to end
colors.pop();                   // Remove from end
colors.unshift("orange");       // Add to beginning
colors.shift();                 // Remove from beginning
colors.splice(1, 1, "black");   // At index 1: remove 1, add "black"
colors.slice(0, 2);             // Copy portion (doesn't change original)

colors.toString();              // "red,black,green"
colors.join(" - ");             // "red - black - green"


// ========== OBJECTS ==========
let person = {
  name: "Awdi",
  age: 25,
  city: "Casablanca"
};

person.name;                    // "Awdi" (dot notation)
person["name"];                 // "Awdi" (bracket notation)

let prop = "city";
person[prop];                   // "Casablanca" (when property name is in variable)

person.age = 26;                // Change property
person.country = "Morocco";     // Add new property
delete person.age;              // Delete property
"name" in person;               // true (check if exists)

// Methods (functions in objects)
let car = {
  brand: "Toyota",
  start() {
    console.log("Engine started");
  }
};
car.start();                    // Call method

// Arrays of objects (common pattern)
let users = [
  { username: "awdi", age: 25 },
  { username: "john", age: 30 }
];
users[0].username;              // "awdi"

// Nested objects
let student = {
  name: "Awdi",
  grades: { math: 90, english: 85 }
};
student.grades.math;            // 90


// ========== CONDITIONALS ==========

// if
if (age >= 18) {
  console.log("Adult");
}

// if...else
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

// if...else if...else
if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else {
  console.log("C");
}

// Logical operators
if (age >= 18 && hasLicense) {      // AND (both must be true)
  console.log("Can drive");
}

if (day === "Sat" || day === "Sun") { // OR (at least one must be true)
  console.log("Weekend!");
}

if (!isRaining) {                   // NOT (reverses true/false)
  console.log("Let's go out");
}

// Ternary operator (shortcut)
let status = age >= 18 ? "Adult" : "Minor";


// ========== COMMON PATTERNS ==========

// Loop through array
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// Loop through object properties
for (let key in person) {
  console.log(key + ": " + person[key]);
}

// Object methods
Object.keys(person);        // Get all property names
Object.values(person);      // Get all values


// ========== SWITCH STATEMENTS ==========

// Use switch when checking ONE variable against MANY values
let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");  // Output: "Wednesday"
    break;
  default:
    console.log("Other day");
}

// Multiple cases with same code
let fruit = "Mango";

switch (fruit) {
  case "Orange":
  case "Mango":
  case "Papaya":
    console.log("Tropical fruit");  // Runs for all 3 cases
    break;
  default:
    console.log("Other fruit");
}

// Switch uses strict comparison (===)
// Always use break (except on last case)
// default is optional but recommended


// ========== LOOPS ==========

// For loop (when you know how many times)
for (let i = 0; i < 5; i++) {
  console.log(i);                    // 0, 1, 2, 3, 4
}

// Loop through array
let arr = ["a", "b", "c"];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);               // a, b, c
}

// For...in (loop through object properties or array indexes)
let obj = { name: "Awdi", age: 25 };
for (let key in obj) {
  console.log(key + ": " + obj[key]); // name: Awdi, age: 25
}

// For...of (loop through array values - NOT objects)
let colors = ["red", "blue"];
for (let color of colors) {
  console.log(color);                // red, blue
}

// While loop (runs while condition is true)
let n = 0;
while (n < 3) {
  console.log(n);                    // 0, 1, 2
  n++;
}

// Do...while (always runs at least once)
let h = 0;
do {
  console.log(h);                    // 0, 1, 2
  h++;
} while (h < 3);

// Break (exit loop completely)
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i);                    // 0, 1, 2, 3, 4
}

// Continue (skip current iteration)
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i);                    // 0, 1, 3, 4
}