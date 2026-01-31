/*


console.log(date.getDay()); // Gives the day in the week
console.log(lastDay.getDate()); // Gives the day in the month
console.log(lastDay.getFullYear()); // Gvies the Year


*/



function createCalendar(year, month) {
    // Create table
    let table = document.createElement("table");
    
    // === HEADER (Weekday names) ===
    let thead = document.createElement("thead");
    let headerRow = document.createElement("tr");
    let weekdays = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];
    
    for (let day of weekdays) {
        let th = document.createElement("th");
        th.textContent = day;
        // th.style.padding = "5px";
        headerRow.appendChild(th);
    }
    thead.appendChild(headerRow);
    table.appendChild(thead);
    
    // === CALCULATE LAYOUT ===
    let firstDay = new Date(year, month - 1, 1).getDay();
    if (firstDay === 0) firstDay = 7;  // Convert Sunday to 7
    
    let daysInMonth = new Date(year, month, 0).getDate();
    
    // === BODY (Calendar days) ===
    let tbody = document.createElement("tbody");
    let currentDay = 1;
    
    for (let week = 0; week < 6; week++) {
        let row = document.createElement("tr");
        
        for (let dayOfWeek = 1; dayOfWeek <= 7; dayOfWeek++) {
            let cell = document.createElement("td");
            cell.style.padding = "5px";
            cell.style.textAlign = "center";
            
            // Empty cell before month starts
            if (week === 0 && dayOfWeek < firstDay) {
                cell.textContent = "";
            }
            // Add day number
            else if (currentDay <= daysInMonth) {
                cell.textContent = currentDay;
                currentDay++;
            }
            // Empty cell after month ends
            else {
                cell.textContent = "";
            }
            
            row.appendChild(cell);
        }
        
        tbody.appendChild(row);
        if (currentDay > daysInMonth) break;
    }
    
    table.appendChild(tbody);
    document.body.appendChild(table);
}

// Create September 2012 calendar

createCalendar(2012, 9);