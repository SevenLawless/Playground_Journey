// 1. Retrieve the div and console.log it
let container = document.getElementById("container");
console.log(container);

// 2. Change "Pete" to "Richard"
let lists = document.querySelectorAll(".list");
lists[0].children[1].textContent = "Richard";  // Pete is 2nd li in first ul

// 3. Delete the second <li> of the second <ul>
lists[1].children[1].remove();  // Remove Sarah

// 4. Change first <li> of each <ul> to your name
for (let i = 0; i < lists.length; i++) {
    lists[i].firstElementChild.textContent = "Zakaria";
}

// 5. Add class "student_list" to both <ul>'s
for (let i = 0; i < lists.length; i++) {
    lists[i].classList.add("student_list");
}

// 6. Add "university" and "attendance" to first <ul>
lists[0].classList.add("university", "attendance");

// 7. Add light blue background and padding to div
container.style.backgroundColor = "lightblue";  // backgroundColor, not color!
container.style.padding = "20px";  // Needs quotes!

// 8. Hide the <li> with "Dan"
lists[1].children[1].style.display = "none";  // Dan is now 2nd li (we removed Sarah)

// 9. Add border to <li> with "Richard"
lists[0].children[1].style.border = "2px solid black";

// 10. Change font size of body
document.body.style.fontSize = "20px";

// BONUS: Alert users if background is light blue
if (container.style.backgroundColor === "lightblue") {
    let firstUser = lists[0].firstElementChild.textContent;
    let secondUser = lists[1].firstElementChild.textContent;
    alert(`Hello ${firstUser} and ${secondUser}`);
}