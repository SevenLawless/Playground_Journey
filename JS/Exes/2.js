// 1. Change id from "navBar" to "socialNetworkNavigation"
let navbar = document.getElementById("navBar");
navbar.setAttribute("id", "socialNetworkNavigation");

// 2. Create new <li> with "Logout"
let ul = navbar.querySelector("ul");
let newLi = document.createElement("li");
let newText = document.createTextNode("Logout");
newLi.appendChild(newText);
ul.appendChild(newLi);

// 3. Display text of first and last <li>
let firstLi = ul.firstElementChild;
let lastLi = ul.lastElementChild;
console.log("First link: " + firstLi.textContent);   // "Profile"
console.log("Last link: " + lastLi.textContent);     // "Logout"