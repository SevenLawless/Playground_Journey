// 1. Create array of books
const allBooks = [
    {
        title: "Captain Majid",
        author: "mokhrij 1",
        image: "https://m.media-amazon.com/images/M/MV5BNjczMTY2M2EtNjQ2Zi00MjFhLWJmOGItN2MyNjk3YTdiYWI3XkEyXkFqcGc@._V1_.jpg",
        alreadyRead: true
    },
    {
        title: "Adam",
        author: "Adam",
        image: "https://miro.medium.com/v2/resize:fit:1124/0*-G6zP5TW_kWDzEpP.jpg",
        alreadyRead: false
    }
];

// 2. Get the section
let section = document.querySelector(".listBooks");

// 3. Loop through books and create elements
for (let book of allBooks) {
    // Create div for each book
    let bookDiv = document.createElement("div");
    
    // Create and add book details
    let bookDetails = document.createElement("p");
    bookDetails.textContent = `${book.title} written by ${book.author}`;
    
    // If already read, make text red
    if (book.alreadyRead) {
        bookDetails.style.color = "red";
    }
    
    // Create and add image
    let bookImg = document.createElement("img");
    bookImg.src = book.image;
    bookImg.style.width = "100px";
    
    // Add everything to the div
    bookDiv.appendChild(bookImg);
    bookDiv.appendChild(bookDetails);
    
    // Add div to section
    section.appendChild(bookDiv);
}