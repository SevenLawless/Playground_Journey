/*
//----------------------ex1----------------------

function is_Blank(str) {
    if (str === "") {
        console.log("String is blank");
    }else {
       console.log("String is stringing"); 
    }
    
}

is_Blank("hh");


//----------------------ex2----------------------

function Abbrev_name(str) {
    let splitstr = str.split(" ")
    console.log(`${splitstr[0]} ${splitstr[1][0].toUpperCase()}.`)
}

Abbrev_name("khuna mohmad");

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
    console.log(newvar)
}

switchh("The Quick Brown Fox");

*/
//----------------------ex4----------------------


function omniwhatever(ar, chosenone) {
    let shayt = false
    for (let i = 0; i < ar.length; i++) {
        let omni = false;

        for (let y = 0; y < ar[i].length; y++) {
            if (chosenone === ar[i][y]) {omni = true;}

        }

        if (!omni) {shayt = true;}
    }
    if (shayt) {}
}

omniwhatever([[1, 1], [1, 3], [5, 1], [6, 1]], 1);

/*
//----------------------ex5----------------------

let container = document.getElementById("container");
console.log(container);
let lists = document.querySelectorAll(".list");
lists[0].children[1].textContent = "Richard";
lists[1].children[1].remove();

for (let i = 0; i < lists.length; i++) {
    lists[i].firstElementChild.textContent = "Zakaria";
}

for (let i = 0; i < lists.length; i++) {
    lists[i].classList.add("student_list");
}

lists[0].classList.add("university", "attendance");
container.style.backgroundColor = "lightblue";
container.style.padding = "20px";
lists[1].children[1].style.display = "none";
lists[0].children[1].style.border = "2px solid black";
document.body.style.fontSize = "20px";

if (container.style.backgroundColor === "lightblue") {
    let firstUser = lists[0].firstElementChild.textContent;
    let secondUser = lists[1].firstElementChild.textContent;
    alert(`Hello ${firstUser} and ${secondUser}`);
}



//----------------------ex6----------------------

let navbar = document.getElementById("navBar");
navbar.setAttribute("id", "socialNetworkNavigation");

let ul = navbar.querySelector("ul");
let newLi = document.createElement("li");
newLi.textContent = "Logout";
ul.appendChild(newLi);

let firstLi = ul.firstElementChild;
let lastLi = ul.lastElementChild;
console.log("First link: " + firstLi.textContent);
console.log("Last link: " + lastLi.textContent);


//----------------------ex7----------------------
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

let section = document.querySelector(".listBooks");

for (let book of allBooks) {
    let bookDiv = document.createElement("div");
    let bookDetails = document.createElement("p");
    bookDetails.textContent = `${book.title} written by ${book.author}`;
    
    if (book.alreadyRead) {
        bookDetails.style.color = "red";
    }

    let bookImg = document.createElement("img");
    bookImg.src = book.image;
    bookImg.style.width = "100px";
    

    bookDiv.appendChild(bookImg);
    bookDiv.appendChild(bookDetails);

    section.appendChild(bookDiv);
}


*/