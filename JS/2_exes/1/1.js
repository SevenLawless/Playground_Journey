// 1. Get h1 and console.log it
const h1 = document.querySelector('h1');
console.log(h1);


// 2. Remove last paragraph
const article = document.querySelector('article');
const paragraphs = article.querySelectorAll('p');
const lastParagraph = paragraphs[paragraphs.length - 1];
lastParagraph.remove();


// 3. h2 turns red on click
const h2 = document.querySelector('h2');
h2.addEventListener('click', function() {
    h2.style.backgroundColor = 'red';
});


// 4. h3 hides on click
const h3 = document.querySelector('h3');
h3.addEventListener('click', function() {
    h3.style.display = 'none';
});


// 5. Create button and make paragraphs bold
const boldBtn = document.createElement('button');
boldBtn.textContent = 'Make paragraphs bold';
document.body.appendChild(boldBtn);  // Add button to page

boldBtn.addEventListener('click', function() {
    const allParagraphs = document.querySelectorAll('p');
    allParagraphs.forEach(function(paragraph) {
        paragraph.style.fontWeight = 'bold';
    });
});


// 6. BONUS: h1 random font size on hover
h1.addEventListener('mouseover', function() {
    const randomSize = Math.floor(Math.random() * 101);
    h1.style.fontSize = randomSize + 'px';
});


// 7. BONUS: 2nd paragraph fades out on hover
const secondParagraph = paragraphs[1];
secondParagraph.style.transition = 'opacity 1s';

secondParagraph.addEventListener('mouseover', function() {
    secondParagraph.style.opacity = '0';
});

secondParagraph.addEventListener('mouseout', function() {
    secondParagraph.style.opacity = '1';
});