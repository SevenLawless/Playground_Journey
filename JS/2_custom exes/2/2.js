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