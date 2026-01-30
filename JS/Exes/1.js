let tables = document.body.firstElementChild.firstElementChild;

let alltds = tables.querySelectorAll("td");

for (let i = 0; i < alltds.length; i++) {
    let element = alltds[i].textContent;
    const parts = element.split(":")
    if (parts[0] === parts[1]) {
        alltds[i].style.backgroundColor = "red";
    }
}




//let table = document.body.firstElementChild;

//let firsttr = tables.firstElementChild.firstElementChild;