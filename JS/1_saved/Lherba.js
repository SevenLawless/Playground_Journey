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






//-----------------------------ex4---------------------------------


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





//-----------------------------ex5---------------------------------



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



//-----------------------------ex6---------------------------------


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





// ====== Daily Planets

const planetsWithMoons = [
    { name: "Mercury", moons: 0, color: "gray" },
    { name: "Venus", moons: 0, color: "orange" },
    { name: "Earth", moons: 1, color: "blue" },
    { name: "Mars", moons: 2, color: "red" },
    { name: "Jupiter", moons: 79, color: "brown" },
    { name: "Saturn", moons: 82, color: "gold" },
    { name: "Uranus", moons: 27, color: "lightblue" },
    { name: "Neptune", moons: 14, color: "darkblue" }
];

const section = document.querySelector(".listPlanets");

for (let planet of planetsWithMoons) {

    let planetDiv = document.createElement("div");
    planetDiv.classList.add("planet");
    planetDiv.style.backgroundColor = planet.color;
    planetDiv.textContent = planet.name;
    
    for (let i = 0; i < planet.moons; i++) {
        let moonDiv = document.createElement("div");
        moonDiv.classList.add("moon");

        planetDiv.appendChild(moonDiv);
    }
    
    section.appendChild(planetDiv);
}




// ====== Daily Words in the stars

let input = prompt("Enter words separated by commas:");

let words = input.split(", ");


let maxLength = 0;
for (let word of words) {
    if (word.length > maxLength) {
        maxLength = word.length;
    }
}

let topBorder = "*".repeat(maxLength + 4);
console.log(topBorder);

for (let word of words) {
    let padding = " ".repeat(maxLength - word.length);
    console.log(`* ${word}${padding} *`);
}

console.log(topBorder);