function createCalendar(year, month) {

    // STEP 1: Create the empty table element
    const table = document.createElement('table');
    // Current state: Only an empty <table> exists in memory (nothing on screen yet)

    // STEP 2: Create header row with weekday names (Monday first)
    const headerRow = document.createElement('tr');
    const weekdays = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];

    for (let day of weekdays) {
        const th = document.createElement('th');
        th.textContent = day;
        headerRow.appendChild(th);
    }
    table.appendChild(headerRow);
    // Current state: Table now has 1 row (<tr>) containing 7 <th> elements: MO TU WE TH FR SA SU
    // Still not visible on the page

    // STEP 3: Calculate needed calendar information
    const internalMonth = month - 1;                           // 0-based month (0=January)
    const firstDayOfMonth = new Date(year, internalMonth, 1);
    const firstWeekday = firstDayOfMonth.getDay();             // 0=Sun, 1=Mon, ..., 6=Sat

    // How many empty cells before the 1st day
    const blankCells = (firstWeekday === 0) ? 6 : firstWeekday - 1;

    // How many days are in this month
    const daysInMonth = new Date(year, internalMonth + 1, 0).getDate();
    // Current state: We calculated:
    // - blankCells (e.g. 5 for Sep 2012)
    // - daysInMonth (e.g. 30 for Sep 2012)
    // No new HTML elements created yet

    // STEP 4: Start the first week row
    let currentRow = document.createElement('tr');
    let cellCount = 0;
    // Current state: A new empty <tr> is ready to receive days

    // STEP 5: Add the blank cells before the 1st of the month
    for (let i = 0; i < blankCells; i++) {
        const td = document.createElement('td');
        currentRow.appendChild(td);
        cellCount++;
    }
    // Current state: First row now has X empty <td> elements (e.g. 5 blanks for Sep 2012)

    // STEP 6: Add all the day numbers
    for (let day = 1; day <= daysInMonth; day++) {
        const td = document.createElement('td');
        td.textContent = day;
        currentRow.appendChild(td);
        cellCount++;

        // When a week is complete (7 cells), add it to the table
        if (cellCount === 7) {
            table.appendChild(currentRow);
            if (day < daysInMonth) {
                currentRow = document.createElement('tr');
                cellCount = 0;
            }
        }
    }
    // Current state: Most weeks have been added as <tr> rows with 7 <td> each
    // Last week may have fewer than 7 days

    // STEP 7: Add the last incomplete row (if needed)
    if (cellCount > 0) {
        table.appendChild(currentRow);
    }
    // Current state: All rows (weeks) are now inside the <table>

    // STEP 8: Finally add the completed table to the webpage
    document.body.appendChild(table);
    // Current state: The full calendar table is now visible on the page!
}

// Test call
createCalendar(2012, 9);