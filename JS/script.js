/*

console.log("awdiiii"); // awdiiii

let x = 3;


let a = "Hello";
let b = "World";
let c = a+b;
console.log(c); // HelloWorld

let longString = "This is a very long string which needs " +
                 "to wrap across multiple lines because " +
                 "otherwise, my code is unreadable.";


let longString2 = "This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable.";


let lengthTxt = longString.length ;
console.log(lengthTxt); // 110


let str = "Hello Everyone, please say hello to the class";
let posUppercaseHello = str.indexOf("Hello"); // case sensitive
let posLowercaseHello = str.indexOf("hello");
console.log(posUppercaseHello) // 0
console.log(posLowercaseHello) // 27

let secondstr = "hello Everyone, please say hello to the class";
let secondStrPosHello = secondstr.indexOf("hello"); 
console.log(secondStrPosHello) // 0

let str2 = "Hello Everyone, please say hello to the class ";
str2.substring(0,4) //returns "Hell" --> the index 4 isn't included
str2.substring(2,4) //returns "ll"
str2.substring(15) //returns "please say hello to the class"


let myStr = "Hello Everyone, Please say hello to the class ";
myStr.toLowerCase() //returns "hello everyone, please say hello to the class "




// ========== replace() ==========
let message = "I love Python. Python is awesome!";
let newMessage = message.replace("Python", "JavaScript");
console.log(newMessage); // "I love JavaScript. Python is awesome!"
// Note: replace() only replaces the FIRST occurrence

// To replace ALL occurrences, use replaceAll()
let allReplaced = message.replaceAll("Python", "JavaScript");
console.log(allReplaced); // "I love JavaScript. JavaScript is awesome!"


// ========== concat() ==========
let firstName = "Awdi";
let lastName = "Developer";
let fullName = firstName.concat(" ", lastName);
console.log(fullName); // "Awdi Developer"

// You can concat multiple strings
let greeting = "Hello".concat(" ", "my", " ", "friend");
console.log(greeting); // "Hello my friend"

// Fun fact: + operator is usually preferred over concat()
let easier = firstName + " " + lastName; // Same result, cleaner


// ========== toUpperCase() ==========
let shout = "hey listen!";
console.log(shout.toUpperCase()); // "HEY LISTEN!"

let mixed = "JavaScript";
console.log(mixed.toUpperCase()); // "JAVASCRIPT"


// ========== trim() ==========
let messyInput = "   awdi@email.com   ";
console.log(messyInput.length); // 20
console.log(messyInput.trim()); // "awdi@email.com" (no spaces)
console.log(messyInput.trim().length); // 14

// Super useful for cleaning user input!
let userPassword = "  mypass123  ";
let cleanPassword = userPassword.trim();
console.log(cleanPassword); // "mypass123"


// ========== charAt() ==========
let alphabet = "ABCDEFG";
console.log(alphabet.charAt(0)); // "A"
console.log(alphabet.charAt(3)); // "D"
console.log(alphabet.charAt(10)); // "" (empty string, index doesn't exist)

let word = "JavaScript";
console.log(word.charAt(4)); // "S"

// You can also use bracket notation (modern way)
console.log(word[4]); // "S" (same result)


// ========== PRACTICAL COMBO EXAMPLE ==========
// Cleaning and formatting user input
let userInput = "  hello WORLD  ";
let formatted = userInput.trim().toLowerCase().replace("world", "JavaScript");
console.log(formatted); // "hello javascript"

// Email validation example
let email = "  AWDI@GMAIL.COM  ";
let cleanEmail = email.trim().toLowerCase();
console.log(cleanEmail); // "awdi@gmail.com"



*/


/*
---------------------------------- EX -----------------------------
let addressNumber = 123
let addressStreet = 'Street 1'
let country = 'USA'

let globalAddress = ' I live in ' + addressNumber + ' ' + addressStreet + ', in ' + country


console.log(globalAddress) // I live in 123 Street 1, in USA


console.log(5+3) 
// It will display "8"


let op = "me";
isNaN(op);   //returns true because op is Not a Number

let op2 = 10;
op2.toString();     //returns "10"

let op3 = 10.6789
op3.toFixed(0);           // returns 11
op3.toFixed(2);           // returns 10.68.

myYear = 2003;
futureYear = 2030;

calc = "I will be "+ ( futureYear - myYear ) +" in " + futureYear;
console.log(calc); // I will be 27 in 2030


----------- ALERT, PROMPT, CONFIRM -----------------------------

alert("Hello");


let age = prompt('How old are you?', 20);
alert(`You are ${age} years old!`); // You are 20 years old!


let isBoss = confirm("Are you the boss?");
alert(isBoss); // true if OK is pressed , false if Cancel is pressed





// ========== ARRAYS ==========


let colors = ["blue", "yellow", "green"];
let numbers = [1, 2, 3, 4, 5];
let mixed = ["awdi", 25, true]; // You CAN mix types, but usually don't

console.log(typeof(colors)); // "object" (yeah, arrays are objects in JS)

let colors = ["blue", "yellow", "green"];
//            [  0  ,    1    ,    2   ]

console.log(colors[0]); // "blue"
console.log(colors[2]); // "green"
console.log(colors[5]); // undefined (doesn't exist)

// Last element
let lastColor = colors[colors.length - 1];
console.log(lastColor); // "green"


let matrix = [
    [1, 2, 5],
    [7, 6, 10, 11, 12],
    [3]
];

// To get the number 11:
console.log(matrix[1][3]); // 11
// [1] = second array → [7, 6, 10, 11, 12]
// [3] = fourth element in that array → 11



let colorss = ["blue", "yellow", "green"];
colorss[0] = "pink"; // Change first element
console.log(colorss); // ["pink", "yellow", "green"]

let colors2 = ["blue", "yellow", "green"];
console.log(colors2.length); // 3

// Useful for loops!
for (let i = 0; i < colors2.length; i++) {
    console.log(colors2[i]);
}


let colors = ["blue", "yellow"];
colors.push("green");
console.log(colors); // ["blue", "yellow", "green"]

// You can add multiple items at once
colors.push("pink", "orange");
console.log(colors); // ["blue", "yellow", "green", "pink", "orange"]


let colors = ["blue", "yellow", "green"];
let removed = colors.pop(); // Returns the removed item
console.log(removed); // "green"
console.log(colors); // ["blue", "yellow"]

let colors = ["yellow", "green"];
colors.unshift("blue");
console.log(colors); // ["blue", "yellow", "green"]

let colors = ["blue", "yellow", "green"];
let removed = colors.shift();
console.log(removed); // "blue"
console.log(colors); // ["yellow", "green"]

-------------------------------------------------------------------
Memory trick:

push/pop = work at the END (right side)
unshift/shift = work at the BEGINNING (left side)
-------------------------------------------------------------------


let colors = ["blue", "yellow", "green"];

// splice(startIndex, howManyToDelete, ...itemsToAdd)
let deleted = colors.splice(1, 1, "pink", "orange");

console.log(deleted); // ["yellow"] (what got removed)
console.log(colors); // ["blue", "pink", "orange", "green"]

--------------
let fruits = ["apple", "banana", "orange", "grape"];

// Remove 2 items starting at index 1
fruits.splice(1, 2);
console.log(fruits); // ["apple", "grape"]

// Add items at index 2 without removing anything
fruits.splice(2, 0, "mango", "kiwi");
console.log(fruits); // ["apple", "grape", "mango", "kiwi"]

--------------
let colors = ["blue", "yellow", "green", "pink"];

// slice(start, end) - end is NOT included
let favorite = colors.slice(2); // From index 2 to end
console.log(favorite); // ["green", "pink"]
console.log(colors); // Still ["blue", "yellow", "green", "pink"]

let middle = colors.slice(1, 3); // From index 1 up to (not including) 3
console.log(middle); // ["yellow", "green"]
--------------
let copy = colors.slice(); // No arguments = copy everything
--------------

let colors = ["blue", "yellow", "green"];
let str = colors.toString();
console.log(str); // "blue,yellow,green"
console.log(typeof(str)); // "string"

--------------
let colors = ["blue", "yellow", "green"];

console.log(colors.join()); // "blue,yellow,green" (default comma)
console.log(colors.join(" - ")); // "blue - yellow - green"
console.log(colors.join("")); // "blueyellowgreen"
console.log(colors.join(" | ")); // "blue | yellow | green"

example :
let words = ["Hello", "my", "friend"];
let sentence = words.join(" ");
console.log(sentence); // "Hello my friend"
--------------




// 1. Create array of pets
let pets = ["dog", "cat", "rabbit"];
// 2. Display dog
console.log(pets[0]); // dog
// 3. Add horse and remove rabbit
pets.push("horse");
pets.splice(2, 1);
console.log(pets); // ["dog", "cat", "horse"]
// 4. Display array length
console.log(pets.length); // 3






*/




//1. Create an object that has properties "username" and "password". Fill those values in with strings.
let login = {
    username: "3aziz",
    password: "3aziz123"
}


//2. Create an array which contains the object you have made above and name the array "database".
let database = [login];
//3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".

let newsfeed = [
    {username: "user1", timeline: "timeline1"},
    {username: "user2", timeline: "timeline2"},
    {username: "user3", timeline: "timeline3"}
];



