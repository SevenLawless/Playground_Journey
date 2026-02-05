const h1 = document.querySelector('h1');
console.log(h1);


const article = document.querySelector('article');
const paragraphs = article.querySelectorAll('p');
const lastParagraph = paragraphs[paragraphs.length - 1];
lastParagraph.remove();

const h2 = document.querySelector('h2');
h2.addEventListener('click', function() {
    h2.style.backgroundColor = 'red';
});


const h3 = document.querySelector('h3');
h3.addEventListener('click', function() {
    h3.style.display = 'none';
});


const boldBtn = document.getElementById('Btn');
boldBtn.addEventListener('click', function() {
    const allParagraphs = document.querySelectorAll('p');
    allParagraphs.forEach(function(paragraph) {
        paragraph.style.fontWeight = 'bold';
    });
});

h1.addEventListener('mouseover', function() {
    const randomSize = Math.floor(Math.random() * 101);
    h1.style.fontSize = randomSize + 'px';
});


const secondParagraph = paragraphs[1];
secondParagraph.classList.add('fade-paragraph');

