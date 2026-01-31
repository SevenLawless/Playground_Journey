/*
//----------------------ex1----------------------

function is_Blank(str) {
    return str === "";
    
}

console.log(is_Blank("hh"));
console.log(is_Blank(""));


//----------------------ex2----------------------

function Abbrev_name(str) {
    let splitstr = str.split(" ")
    return (`${splitstr[0]} ${splitstr[1][0].toUpperCase()}.`);
}

console.log(Abbrev_name("khuna mohmad"));

//----------------------ex3----------------------


function switchh(str) {
    let newvar = '';
    for (let i=0; i<str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            newvar += str[i].toLowerCase()
        } else if (str[i] === str[i].toLowerCase()) {
            newvar += str[i].toUpperCase()
        }
        
    }
    return newvar;
}

console.log(switchh("The Quick Brown Fox"));


//----------------------ex4----------------------


function omniwhatever(ar, chosenone) {
    let shayt = false
    let omni;
    for (let i = 0; i < ar.length; i++) {
        omni = false;

        for (let y = 0; y < ar[i].length; y++) {
            if (chosenone === ar[i][y]) {omni = true;}

        }

        if (!omni) {shayt = true;}
    }
    if (shayt) {return false;}
    if (!shayt) {return true;}
}

console.log(omniwhatever([[1, 1], [1, 3], [5, 1], [6, 1]], 1))
console.log(omniwhatever([[1, 1], [1, 3], [5, 1], [6, 1]], 6))

// HOLYYY SHIT
function isOmnipresent(arr, value) {
    return arr.every(subarray => subarray.includes(value));
}

//----------------------ex5----------------------



let tables = document.body.firstElementChild.firstElementChild;

let alltds = tables.querySelectorAll("td");

for (let i = 0; i < alltds.length; i++) {
    let element = alltds[i].textContent;
    const parts = element.split(":")
    if (parts[0] === parts[1]) {
        alltds[i].style.backgroundColor = "red";
    }
}


// --------------------------------------SECOND PART---------------------------------------------
//----------------------ex1----------------------


let rando = Math.floor(Math.random() * 100) + 1;

for (let i=1; i<=rando; i++) {
    console.log(i);
}
for (let i = 0; i <= rando; i += 2) {
    console.log(i);
}


//----------------------ex2----------------------

function awdi(str) {
    let r;
    let t = "h";
    let tempo = '';
    let tempo2 = '';
    for (let i in str) {
        if (i % 2 == 0) {
            tempo += str[i].toUpperCase();
        } else {
            tempo += str[i];
        }
        
    }
    r = tempo;

    for (let i in str) {
        if (i % 2 !== 0) {
            tempo2 += str[i].toUpperCase();
        } else {
            tempo2 += str[i];
        }
        
    }
    t = tempo2;


    return [r, t];
}

console.log(awdi("stri"));


// CLEANER VERSION :
function capitalize(str) {
    let evenCaps = '';
    let oddCaps = '';
    
    for (let i = 0; i < str.length; i++) {
        if (i % 2 === 0) {
            evenCaps += str[i].toUpperCase();
            oddCaps += str[i];
        } else {
            evenCaps += str[i];
            oddCaps += str[i].toUpperCase();
        }
    }
    
    return [evenCaps, oddCaps];
}

console.log(capitalize("abcdef"));  // ["AbCdEf", "aBcDeF"]





//----------------------ex3----------------------

function reverso(str) {
    let nicestr = str.toLowerCase().split('').reverse().join('');

    if (nicestr === str.toLowerCase()) {
        console.log("Nice, whatever you just entered is palindrome.")
    } else {
        console.log("Nope")
    }   
}

reverso("Madam");



//----------------------ex4----------------------



function biggestNumberInArray(arrayNumber) {
    let biggest = 0;
    for (let i = 0; i < arrayNumber.length; i++) {
        if (arrayNumber[i] > biggest) {
            biggest = arrayNumber[i];
        }
    }
    return biggest;
}

console.log(biggestNumberInArray([]));


// GOOD AAAAAAAND SUPER CLEAN 
function biggestNumberInArray(arr) {
    // Filter out non-numbers
    let numbers = arr.filter(item => typeof item === 'number');
    
    // Handle empty array
    if (numbers.length === 0) return 0;
    
    // Start with first number, not 0
    let biggest = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > biggest) {
            biggest = numbers[i];
        }
    }
    return biggest;
}

console.log(biggestNumberInArray([-1, 0, 3, 100, 99, 2, 99]));  // 100
console.log(biggestNumberInArray(['a', 3, 4, 2]));  // 4
console.log(biggestNumberInArray([]));  // 0



// SUPER SUPER SUPER CLEAN ONE 
function biggestNumberInArray(arr) {
    let numbers = arr.filter(item => typeof item === 'number');
    return numbers.length === 0 ? 0 : Math.max(...numbers);
}



//----------------------ex5----------------------




function unik(ar) {
    let newones = [];
    for (let i in ar) {
        if (!newones.includes(ar[i])) {
            newones.push(ar[i]);
        }
    }
    
    return newones
}

console.log(unik([1,2,3,3,3,3,4,5]));


// MODERN ALTERNATIVE ?????
function unique(arr) {
    return [...new Set(arr)];  // Set automatically removes duplicates
}





//----------------------ex6----------------------


function createCalendar(year, month) {
    // Get the body
    let body = document.body;
    
    // Create table
    let table = document.createElement("table");
    
    // Create header row (weekdays)
    let thead = document.createElement("thead");
    let headerRow = document.createElement("tr");
    let weekdays = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];
    
    for (let day of weekdays) {
        let th = document.createElement("th");
        th.textContent = day;
        headerRow.appendChild(th);
    }
    thead.appendChild(headerRow);
    table.appendChild(thead);
    
    // Create body
    let tbody = document.createElement("tbody");
    
    // Get first day of month (0 = Sunday, 1 = Monday, etc.)
    let firstDay = new Date(year, month - 1, 1).getDay();
    // Convert Sunday (0) to be last day (7)
    if (firstDay === 0) firstDay = 7;
    
    // Get number of days in month
    let daysInMonth = new Date(year, month, 0).getDate();
    
    // Create calendar rows
    let currentDay = 1;
    for (let week = 0; week < 6; week++) {  // Max 6 weeks
        let row = document.createElement("tr");
        
        for (let dayOfWeek = 1; dayOfWeek <= 7; dayOfWeek++) {
            let td = document.createElement("td");
            
            // First week: add empty cells before first day
            if (week === 0 && dayOfWeek < firstDay) {
                td.textContent = "";
            }
            // Add day numbers
            else if (currentDay <= daysInMonth) {
                td.textContent = currentDay;
                currentDay++;
            }
            // After last day: empty cells
            else {
                td.textContent = "";
            }
            
            row.appendChild(td);
        }
        
        tbody.appendChild(row);
        
        // Stop if we've added all days
        if (currentDay > daysInMonth) break;
    }
    
    table.appendChild(tbody);
    body.appendChild(table);
}

// Usage:
createCalendar(2012, 9);  // September 2012


*/
/*
//----------------------special exercise----------------------

// 1. Get user input
let input = prompt("Enter words separated by commas:");

// 2. Split into array
let words = input.split(", ");

// 3. Find longest word length
let maxLength = 0;
for (let word of words) {
    if (word.length > maxLength) {
        maxLength = word.length;
    }
}

// 4. Create top border
let topBorder = "*".repeat(maxLength + 4);  // +4 for "* " and " *"
console.log(topBorder);

// 5. Print each word with padding
for (let word of words) {
    let padding = " ".repeat(maxLength - word.length);  // Add spaces to match longest word
    console.log(`* ${word}${padding} *`);
}

// 6. Create bottom border
console.log(topBorder);

// If input is: "Hello, World, in, a, frame"

// Step 1: Split → ["Hello", "World", "in", "a", "frame"]

// Step 2: Find longest word
// "Hello" = 5 letters (longest!)
// maxLength = 5

// Step 3: Top border
// "*".repeat(5 + 4) = "*********"

// Step 4: Print words
// "Hello" → "* Hello *" (no padding needed, it's longest)
// "World" → "* World *" (no padding, also 5 letters)
// "in"    → "* in    *" (add 3 spaces: "   ")
// "a"     → "* a     *" (add 4 spaces: "    ")
// "frame" → "* frame *" (no padding, also 5 letters)

// Step 5: Bottom border
// "*********"


*/